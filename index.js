const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/database");


const app = express();

app.use(express.json());


app.use(cors({ origin: "*" }));


// Connect to the database and start the server only if the DB connection is successful
connectDB().then(() => {
    console.log('Database connected successfully');
    
    // Start server after successful DB connection
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process with failure
  });
  

// Routes
app.get("/", (req, res) => {
    res.json({ data: "hai" });
  });





