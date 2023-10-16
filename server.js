const express = require("express");
const cors = require("cors");
const { apiRoute} = require('./secrets');
const app = express();
app.use(cors());

app.get("/properties", (req, res) => {
  const itemList = [
    { id: 1, name: "The First Property" },
    { id: 2, name: "The Second Property" },
    { id: 3, name: "The Third Property" },
  ];
  res.send(itemList);
});

const port = 3000;
const ip = apiRoute;
app.listen(port, ip, () => {
  console.log(`Server is running on http://${ip}:${port}`);
});
