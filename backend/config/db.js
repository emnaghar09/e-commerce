require('dotenv').config();
const mongoose = require('mongoose');
const connectDB= async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to mongoose database')
    } catch (error) {
    console.log(error);
    }
  }
// try {
//     await mongoose.connect(process.env.MONGO_URI,{
//         useNewUrIParser :true,
//         useUnifiedTopology :true,
//     });
//     console.log('MongoDB connecion SUCCESS');
// } catch (error) {
//     console.error('MongoDB connecion FAIL');
//     process.exit(1);
// }

// }
module.exports = connectDB;
