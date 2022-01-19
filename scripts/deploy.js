
const hre = require("hardhat");

async function main() {

  const SimpleToken = await hre.ethers.getContractFactory("SimpleToken");
  const simpletoken = await SimpleToken.deploy("Dablu Prasad","DP");

  await simpletoken.deployed();

  console.log("Greeter deployed to:", simpletoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
