require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth nominee concert good knee slot gaze'; 
let testAccounts = [
"0xee336dfea55bffff4ea7d3cc4a89bb1de6515aeb6d78b1a6ac8cec66ebef4012",
"0xefd81108d99f442c1f7c388003e3c6a35f39e16f8369ebdc548a81a9eba748d5",
"0x20cf204e3202a7e5f3d321dc8c18abfd98a9583a7768c52fb1b593fcec5a8d2e",
"0x08aa3fa8e483d75303a2c9e271625992ef6522c7299d952341c4fdafcd6c6f4a",
"0xe44615900208c39908d72a99e5753c1dc45552e3153941c8ffa07f15372683ad",
"0x0eb9a57a169869df24282aa4f37f887b292abfc27b555d03af3fd472971a3e8f",
"0x9a50ccd55bf2273068e041b0d3728633fb64d7c46000a3ebba2b2242e7cfa7ec",
"0xf9b80523f5942fa53181dd17edd47840b68898ce813eed4991a8e891e68713fd",
"0xca2a49a19db4c828b9efcbcdc84715271f80cf69e4f470324e014746acefb0d9",
"0x94784adf3cd568bb07892119740f9a6c0a8d4c04117bc35bf5c7f59f3f92a5b3"
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

