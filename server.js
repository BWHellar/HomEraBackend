const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const itemList = ["Item 1", "Item 2", "Item 3"];
  res.send(itemList);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
