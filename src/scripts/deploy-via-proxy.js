const { ethers } = require("hardhat");

async function main() {
  const NFTBorrow = await ethers.getContractFactory("NFTBorrow");
  const NFTBorrowProxy = await ethers.getContractFactory("NFTBorrowProxy");
  const NFT_CONTRACT_ADDRESS = "0x2B3978Db259273b75A9Df4d67828ff577Bfb9203"; // Replace with the NFT contract address
  const ETH_CONTRACT_ADDRESS = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"; // Eth contract address on Goerli
  const ERC1155_CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"; // Replace with the ERC1155 contract address

  // Deploy NFTBorrow implementation
  const [admin] = await ethers.getSigners();
  const nftBorrow = await NFTBorrow.deploy(NFT_CONTRACT_ADDRESS, ERC1155_CONTRACT_ADDRESS, ETH_CONTRACT_ADDRESS, admin.address);
  await nftBorrow.deployed();
  console.log("NFTBorrow deployed to:", nftBorrow.address);

  // Check if the deployer account has the ADMIN_ROLE
  const hasAdminRole = await nftBorrow.hasRole(nftBorrow.ADMIN_ROLE(), admin.address);
  console.log("Has ADMIN_ROLE:", hasAdminRole);
  if (!hasAdminRole) {
    throw new Error("Deployer account does not have ADMIN_ROLE");
  }

  // Deploy NFTBorrowProxy using the implementation and admin account
  const nftBorrowProxy = await NFTBorrowProxy.deploy(
    nftBorrow.address,
    admin.address,
    "0x"
  );

  console.log("NFTBorrowProxy deployed to:", nftBorrowProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
