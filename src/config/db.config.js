const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.db, {
     
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected with database");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
