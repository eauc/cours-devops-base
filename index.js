"use strict";

const app = require("./src/app.js");

const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log("Server started on port", port);
});
