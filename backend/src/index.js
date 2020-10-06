const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// CONFIG
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.engine('html',require('ejs').renderFile);
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARS
app.use(morgan("dev"));

// ROUTES
app.use("/", require("./routes/index_routes"));

// STATIC FILES
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get("port"), () =>{
    console.log(`Server on port ${app.get("port")}`);
});