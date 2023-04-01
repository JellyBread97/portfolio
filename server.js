const express = require("express");
const appRoute = require("./route/route.js");

const path = require("path");
const contactRoute = require("./route/route");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/api", appRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server listening to port 5000 only`));
