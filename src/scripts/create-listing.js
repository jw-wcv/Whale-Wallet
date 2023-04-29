const fs = require("fs");
const { ethers } = require("hardhat");

async function isApprovedForERC721(contract, tokenId, proxyAddress) {
  const approvedAddress = await contract.getApproved(tokenId);
  return approvedAddress === proxyAddress;
}

async function approveERC721(
  contract,
  tokenId,
  proxyAddress,
  userWalletConnected
) {
  const approveTx = await contract
    .connect(userWalletConnected)
    .approve(proxyAddress, tokenId);
  await approveTx.wait();
}

async function isApprovedForERC1155(contract, owner, proxyAddress) {
  const isApproved = await contract.isApprovedForAll(owner, proxyAddress);
  return isApproved;
}

async function setApprovalForAllERC1155(
  contract,
  proxyAddress,
  userWalletConnected
) {
  const setApprovalForAllTx = await contract
    .connect(userWalletConnected)
    .setApprovalForAll(proxyAddress, true);
  await setApprovalForAllTx.wait();
}

async function main() {
  try {
    // Read the mnemonics from the secrets.json file
    const secrets = JSON.parse(fs.readFileSync("secrets.json"));

    // Replace with the NFTBorrowProxy contract address
    const NFT_BORROW_PROXY_ADDRESS =
      "0xcEFDf9B0F1CAFc170EEEAABa78cE8ef3a467A865";

    // NFT info
    const nftInfo = {
      token_address: "0x2B3978Db259273b75A9Df4d67828ff577Bfb9203",
      token_id: "1",
      amount: "1",
      contract_type: "ERC721",
    };

    // Create a wallet instance using the mnemonic2
    const userWallet = ethers.Wallet.fromMnemonic(secrets.mnemonic2);

    // Connect the wallet to a provider (e.g., local or Infura)
    const infuraProvider = new ethers.providers.InfuraProvider(
      "goerli",
      secrets.projectId
    );
    const provider = infuraProvider;

    const userWalletConnected = userWallet.connect(provider);

    // Connect to the deployed NFTBorrowProxy contract
    const nftBorrowProxy = await ethers.getContractAt(
      "NFTBorrow",
      NFT_BORROW_PROXY_ADDRESS,
      userWalletConnected
    );

    // Connect to the NFT contract
    const nftContract = await ethers.getContractAt(
      nftInfo.contract_type,
      nftInfo.token_address,
      userWalletConnected
    );

    // Check if the NFT is approved for transfer
    let isApproved = false;
    if (nftInfo.contract_type === "ERC721") {
      await approveERC721(
        nftContract,
        nftInfo.token_id,
        NFT_BORROW_PROXY_ADDRESS,
        userWalletConnected
      );
      isApproved = await isApprovedForERC721(
        nftContract,
        nftInfo.token_id,
        NFT_BORROW_PROXY_ADDRESS
      );
    } else if (nftInfo.contract_type === "ERC1155") {
      await setApprovalForAllERC1155(
        nftContract,
        NFT_BORROW_PROXY_ADDRESS,
        userWalletConnected
      );
      isApproved = await isApprovedForERC1155(
        nftContract,
        userWallet.address,
        NFT_BORROW_PROXY_ADDRESS
      );
    }

    if (!isApproved) {
      throw new Error(
        "NFT not approved for transfer. Please approve the NFTBorrowProxy contract to transfer the NFT on behalf of the token owner."
      );
    }
    // Set the parameters for the createListing function
    const tokenId = nftInfo.token_id;
    const tokenContract = nftInfo.token_address;
    const price = ethers.utils.parseEther(".01");
    const startDate = Math.floor(Date.now() / 1000);
    const endDate = startDate + 7 * 24 * 60 * 60;
    const nftType = 0; //0 = ERC721, 1 = ERC1155

    // Set a manual gas limit for rn
    const gasLimit = ethers.BigNumber.from("20000000");
     // Estimate gas for the createListing function
    //const estimatedGas = await nftBorrowProxy.estimateGas.createListing(tokenId, price, startDate, endDate, nftType);
    //console.log(`Estimated gas for createListing: ${estimatedGas}`);

    console.log(
      "all params: t " +
        tokenId +
        "p " +
        price +
        "s " +
        startDate +
        "e " +
        endDate +
        "n " +
        nftType +
        "g " +
        gasLimit
    );

    // Call the createListing function with the manual gas limit
    try {
      /*const createListingTx = await nftBorrowProxy.callStatic.createListing(
        tokenId,
        price,
        startDate,
        endDate,
        nftType,
        {
          gasLimit: gasLimit,
        }
      );
      console.log(
        "Static call succeeded, proceeding with actual transaction..."
      );*/
      const actualTx = await nftBorrowProxy.createListing(
        tokenContract,
        tokenId,
        price,
        startDate,
        endDate,
        nftType,
        {
          gasLimit: gasLimit,
        }
      );
      await actualTx.wait();
      console.log(`Listing created for token ID: ${tokenId}`);
    } catch (error) {
      console.error("Static call failed with error:", error.message);
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });