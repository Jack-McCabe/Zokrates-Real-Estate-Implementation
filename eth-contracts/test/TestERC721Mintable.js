
/*
var ERC721MintableComplete = artifacts.require('DecentralizedHousingLedger');

contract('DecentralizedHousingLedger', accounts => {
 
    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];
    const account_five = accounts[4];
    const account_six = accounts[5];



    describe('match erc721 spec', function () {
        
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("Name", "Symbol",{from: account_one});

            await this.contract.mint(account_two, 77, {from: account_two});
          await this.contract.mint(account_three, 3, {from: account_three});
          await this.contract.mint(account_four, 0, {from: account_four});
          await this.contract.mint(account_five, 1, {from: account_five});
          await this.contract.mint(account_five, 6, {from: account_five});
        })  


        it('should return total supply', async function () { 
        
            
            let x = await this.contract.totalSupply.call();
      
        assert(x, 5 ,"Total Supply should be  5 tokens");
        })

        it('should get token balance', async function () { 
            
            let accountFiveBalence = await this.contract.balanceOf.call(account_five);

            assert(accountFiveBalence, 2, "Account 5 should have a balence of 2");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI3 = await this.contract.tokenURI.call(3);
            assert(tokenURI3, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3", 
            "Token URI not as it shoudl be");
        })

        it('should transfer token from one owner to another', async function () { 
            
            
            await this.contract.transferFrom(account_five, account_two, 1, {from: account_five});

           
            let ownerOf =   await this.contract.ownerOf.call(1);

            assert(ownerOf, account_two, "Account 2 is not  the owner");

     
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("Pool Houses", "PLHUSE", {from: account_one});
            await this.contract.mint(account_three, 323, {from: account_three});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let shouldBeFalse;
            try{
                await this.contract.mint(account_four, 23, {from: account_three});
                shouldBeFalse = true;
            }catch{
                shouldBeFalse =false;
            }
            assert(shouldBeFalse, false, "Didn't fail when the address is not the contract owner");
        })

        it('should return contract owner', async function () { 
            
            let contractOwner = await this.contract.getOwner.call();

            assert(contractOwner, "0x44F79250E116f6627f29269a2f66bc13c67E093A", "That is not the contract owner");

        })

    });
})

*/