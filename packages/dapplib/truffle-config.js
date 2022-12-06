require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note praise proof gesture bread slot gift'; 
let testAccounts = [
"0x2d95120a84e93aaa5c6bf4074df5bba9c9dc771df7c4f4def251af187b5903b2",
"0x1247e01f8ec9bd661a927bbeea1bd406ed337fb77b5ca2f5bcb4e4cc61c8041a",
"0x6cdb9059a68edb3c6ace9ea797b45186022afc5d202d0096731b8a7b68566d9c",
"0xda71dccbb7e5de1c1e196b8a335fc3b00ee7b2d21e1e7eb3a3777149a6f7de65",
"0x62b0eea36988a1e50d264bc7ed4db22e6266508d14b0e5d48e1b7818bef9c7de",
"0x506cc15a875e9e3fd81721f6c36204d3e0a052d06e2d2e01b2e4097e780e007d",
"0x79bdcba4d2541edab17fa44b954506bb3601d2cb10e258892bd19f736de2505d",
"0x9b935006eede6b2eca1d6e0fb148fe0f6f9785bb7d523111469db8ef053273cf",
"0x8ca046e923a0234aa6922b5984310a915e1947785e98234607e9bb1aed26b941",
"0x1f660fa8f048f351b4f510f4e2ad6c352431665c37cdb2c2b5316a1c9f4343a1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

