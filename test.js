const { SSL_OP_EPHEMERAL_RSA } = require("constants");
const { syncBuiltinESMExports } = require("module");

async function test(){
    await sleep(5000);
    console.log('i woke up now');
}