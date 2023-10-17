const express = require("express");
const cors = require("cors");
const { apiRoute} = require('./secrets');
const app = express();
app.use(cors());


const port = 3000;
const ip = apiRoute;

// Properties
app.get("/properties", (req, res) => {
  const itemList = [
    { id: 1, name: "The First Property" },
    { id: 2, name: "The Second Property" },
    { id: 3, name: "The Third Property" },
  ];
  res.send(itemList);
});

// Maintenance
let maintenanceList = [
  {
    id: 1,
    unit: 101,
    property: "The First Property",
    propertyId: 1,
    category: "Plumbing",
    description: "Leaky faucet in the kitchen",
    enter: true,
    fire: false,
    pet: true,
    image: "image1.jpg"
  },
  {
    id: 2,
    unit: 102,
    property: "The First Property",
    propertyId: 1,
    category: "Electrical",
    description: "Lights not working in the living room",
    enter: false,
    fire: true,
    pet: false,
    image: "image2.jpg"
  },
  {
    id: 3,
    unit: 201,
    property: "The First Property",
    propertyId: 2,
    category: "Painting",
    description: "Wall needs to be repainted in the bedroom",
    enter: true,
    fire: false,
    pet: true,
    image: "image3.jpg"
  }
];
app.get("/maintenance", (req, res) => {
  res.send(maintenanceList);
});

app.listen(port, ip, () => {
  console.log(`Server is running on http://${ip}:${port}`);
});
