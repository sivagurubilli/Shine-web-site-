const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.listen(port, () => {
    console.log("listening on port 5432");
});