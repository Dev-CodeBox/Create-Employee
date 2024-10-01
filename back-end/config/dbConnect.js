const mongoose = require("mongoose");
require("dotenv");

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    })
    .then(() => console.log("DATABASE CONNECTED SUCESSFULLY"))
    .catch((error) => {
      console.log(`FAILED TO CONNECT DATABASE`);
      console.error(error.message);
      process.exit(1);
    });
};
module.exports = dbConnect;
