/*
// migrating the appropriate contracts

//var SquareVerifier = artifacts.require("./SquareVerifier.sol");
//var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var ERC721MintableComplete = artifacts.require("ERC721Mintable.sol");
//const ERC721MintableComplete = artifacts.require("DecentralizedHousingLedger");

module.exports = function(deployer) {
  //deployer.deploy(SquareVerifier);
  deployer.deploy(ERC721MintableComplete);
  //deployer.deploy(SolnSquareVerifier);
};

*/
//Base code reposted
// migrating the appropriate contracts
//var SquareVerifier = artifacts.require("./SquareVerifier.sol");

/*
Where I left off, go through ERC721 Mintable again and see if anything is not implemented. Then try to deploy
possibly import in as needed. any contract with functionnot implemented is abstract. 
doesn't owrk udacity support, they want us to test ERC721 Mintable before moving on 
*/
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var SquareVerifier = artifacts.require("SquareVerifier");
var ERC721MintableComplete = artifacts.require("DecentralizedHousingLedger");
module.exports = function(deployer) {
//  deployer.deploy(SquareVerifier);
////deployer.deploy(ERC721MintableComplete, "nem", "sols");
 deployer.deploy(SolnSquareVerifier,  "nem", "sols");
 deployer.deploy(SquareVerifier);
};