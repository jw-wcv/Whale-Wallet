const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", hre.ethers.utils.formatEther(balance));

  const NFT_CONTRACT_ADDRESS = "0x1eAC9F4917B16DCF95F6e97EAa835bCFDBc1c440"; // Replace with the NFT contract address
  const ETH_CONTRACT_ADDRESS = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"; // Eth contract address on Goerli

  const NFTBorrow = await hre.ethers.getContractFactory("NFTBorrow");
  const nftBorrow = await NFTBorrow.deploy(NFT_CONTRACT_ADDRESS, ETH_CONTRACT_ADDRESS);
  await nftBorrow.deployed();
  console.log("NFTBorrow deployed to:", nftBorrow.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
