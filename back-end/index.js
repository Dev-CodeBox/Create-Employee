const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/userRoute");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api/v1", userRoutes);
dbConnect();
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});
app.get("/", (request, response) => {
  response.send(
    `<h1 style="text-align:center;">Backend is Running and this is '/' Route</h1>`
  );
});
