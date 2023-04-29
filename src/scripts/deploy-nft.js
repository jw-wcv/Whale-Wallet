const hre = require("hardhat");

const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying NFT collection with the account:", deployer.address);

  const NFTCollection = await ethers.getContractFactory("NFTCollection");
  const nftCollection = await NFTCollection.deploy("My NFT Collection", "MYNFT");

  // Estimate the gas needed for the deployment
  const gasLimit = await nftCollection.estimateGas.mint(deployer.address);
  console.log(`Gas limit estimated to be ${gasLimit.toString()}`);

  // Deploy the contract with the estimated gas limit
  const nftContract = await nftCollection.deployed({ gasLimit });

  await nftCollection.deployed();
  console.log("NFT Collection deployed to:", nftCollection.address);

  const [owner] = await ethers.getSigners();

  // Mint a new NFT and transfer it to the owner
  const tokenId = 2;
  await nftCollection.connect(deployer).mint(owner.address);

  console.log(`Minted NFT with token ID ${tokenId} and transferred it to ${owner.address}`);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
