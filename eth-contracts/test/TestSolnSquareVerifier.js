


// Test if a new solution can be added for contract - SolnSquareVerifier


// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

var proofs = require('../../zokrates/code/square/proof.json'); 
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

contract('SolnSquareVerifier', accounts => {
    
    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];
    const account_five = accounts[4];
    const account_six = accounts[5];



    describe('Add new solution to the contract',  function () {

        it('Adding a solution to the contract', async function (){
     this.contract = await SolnSquareVerifier.new("Name", "Symbol",{from: account_one});

     let eventEmit =   await this.contract.addSolutions(23, proofs.proof.a, proofs.proof.b, proofs.proof.c, [9,1], account_five);

        console.log(eventEmit.logs[0].event);
    
        console.log(eventEmit); 
            assert("Solution Added", eventEmit.logs[0].event, "Solution was not added" );
        })




        it('Test ERC721 token can be minted for a new contract', async function() {
                 this.contract = await SolnSquareVerifier.new("Name", "Symbol",{from: account_one});
                 let eventEmit =   await this.contract.addSolutions(23, proofs.proof.a, proofs.proof.b, proofs.proof.c, [9,1], account_five);

                 this.contract.mint(account_five, 2323, {from: account_five});



                 let x = await this.contract.totalSupply.call();
                   
      
                  assert(x, 1 ,"Total Supply should be  1 tokens");



        })
      }); 
    
    });
   