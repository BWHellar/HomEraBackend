const express = require("express");
const cors = require("cors");
const { apiRoute } = require("./secrets");
const bodyParser = require("body-parser");
const moment = require("moment");
const app = express();
app.use(cors());
app.use(bodyParser.json());

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
    image: "image1.jpg",
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
    image: "image2.jpg",
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
    image: "image3.jpg",
  },
];
app.get("/maintenance", (req, res) => {
  res.send(maintenanceList);
});

app.post("/maintenance", (req, res) => {
  const newItem = req.body; // Assuming you are using a middleware like bodyParser to parse the request body

  // Generate a new ID for the item
  const newId = maintenanceList.length + 1;
  newItem.id = newId;

  maintenanceList.push(newItem);
  res.send(newItem);
});

// Accounting
app.get("/accounting/invoices", (req, res) => {
  const itemList = [
    {
      id: 1,
      date: moment().format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 2,
      date: moment().subtract(1, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 3,
      date: moment().subtract(2, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 1,
      date: moment().subtract(3, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 2,
      date: moment().subtract(4, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 3,
      date: moment().subtract(5, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
  ];
  res.send(itemList);
});

app.get("/accounting/debit", (req, res) => {
  const itemList = [
    {
      id: 1,
      date: moment().format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 2,
      date: moment().subtract(1, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 3,
      date: moment().subtract(2, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 1,
      date: moment().subtract(3, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 2,
      date: moment().subtract(4, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 3,
      date: moment().subtract(5, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
  ];
  res.send(itemList);
});

app.get("/accounting/credit", (req, res) => {
  const itemList = [
    {
      id: 1,
      date: moment().format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 2,
      date: moment().subtract(1, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 3,
      date: moment().subtract(2, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 1,
      date: moment().subtract(3, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 2,
      date: moment().subtract(4, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
    {
      id: 3,
      date: moment().subtract(5, "month").format("MMMM"),
      num: (Math.random() * 100).toFixed(2),
    },
  ];
  res.send(itemList);
});

// Messages
app.get("/messages", (req, res) => {
  const itemList = [
    { id: 1, text: "Hello!", sender: "bot" },
    { id: 2, text: "Hi there!", sender: "user" },
    { id: 3, text: "How are you?", sender: "user" },
    { id: 4, text: "I'm good, thank you!", sender: "bot" },
  ];
  res.send(itemList);
});

app.listen(port, ip, () => {
  console.log(`Server is running on http://${ip}:${port}`);
});
