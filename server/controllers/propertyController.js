const Property = require("../models/Property");

// Add Property
const addProperty = async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);

    const property = await Property.create(req.body);

    console.log("Property Saved:", property);

    res.status(201).json(property);
  } catch (error) {
    console.log("=================================");
    console.log("ERROR WHILE ADDING PROPERTY");
    console.log(error);
    console.log("Message:", error.message);
    console.log("Stack:", error.stack);
    console.log("=================================");

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Properties
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();

    res.status(200).json(properties);
  } catch (error) {
    console.log("=================================");
    console.log("ERROR WHILE FETCHING PROPERTIES");
    console.log(error);
    console.log("Message:", error.message);
    console.log("Stack:", error.stack);
    console.log("=================================");

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addProperty,
  getProperties,
};