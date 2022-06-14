const express = require("express");
const fs = require("fs");
const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require("./routes/api");
const uuid = require("uuid");

const app = express();
var PORT = process.env.PORT || 3058;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function () {
  console.log(`App listening on PORT http://localhost:${PORT} `);
});
