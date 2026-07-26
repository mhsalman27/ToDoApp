const mongoose = require('mongoose');
const dns = require('dns');

// Node's resolver can end up pointed at a local proxy (127.0.0.1) added by
// VPN/security software, which refuses SRV lookups even though the OS
// resolver works fine. Force a public resolver so mongodb+srv:// works.
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`ConnectDb SuccessFully : `);
        }
        catch (error) {
        console.log(`Error : ${error.message}`);
    }
}


module.exports = connectDb;
