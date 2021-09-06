pragma solidity >=0.4.21 <0.6.0;

import "./verifier.sol";
import "./ERC721Mintable.sol";

//eth-contracts/contracts/ERC721Mintable.sol

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>


contract SquareVerifier is Verifier{

}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is DecentralizedHousingLedger, Verifier{

    

// TODO define a solutions struct that can hold an index & an address
struct Solutions{
    uint256 index;
    address addresses;
}

// TODO define an array of the above struct
Solutions[] solutionsArray;

// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => Solutions) mappedSolutions; 

mapping(uint256 => address) exists;
// TODO Create an event to emit when a solution is added

event solutionAdded(uint256, address);

// TODO Create a function to add the solutions to the array and emit the event

    function addSolutions(uint256 tokenIndex, uint[2] memory proofa, uint[2][2] memory proofb, 
        uint[2] memory proofc, uint[2] memory input, address solutionAddress) public {

          


       bytes32 key = keccak256(abi.encodePacked(proofa, proofb, proofc, input));
       require(mappedSolutions[key].index == 0, "Solution already exisits");

       bool validProof =  verifyTx(proofa, proofb, proofc, input);
       require(validProof, "Proof not valid");

        Solutions memory  tempSolution = Solutions({index:tokenIndex, addresses: solutionAddress});
        mappedSolutions[key]= tempSolution;
        solutionsArray.push(tempSolution);
        exists[tokenIndex] = solutionAddress;
        emit solutionAdded(tokenIndex, solutionAddress);
    }



// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

function mintNFT(address to, uint256 tokenURI) public {

    require(exists[tokenURI]==msg.sender, "Solution has not been added by this sender");

    super.mint(to, tokenURI);

}
  



    constructor(string memory name, string memory symbol )
     DecentralizedHousingLedger(name, symbol) public{  }

}























