//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

interface IERC20{
    function balanceOf(address account) external view returns (uint);
}

contract UtilityContract{
    struct TokenBalances{
        address token;
        uint balance;
    }
    
    function getBalances(address owner, address[] memory tokenAddressArray) external view returns(TokenBalances[] memory){
        
        TokenBalances[] memory balanceResult = new TokenBalances[](tokenAddressArray.length);

        for(uint i =0; i<tokenAddressArray.length; i++) {
        uint balance = IERC20(tokenAddressArray[i]).balanceOf(owner);
        balanceResult[i] = TokenBalances(tokenAddressArray[i],balance);
        }
        return balanceResult;
    }
}