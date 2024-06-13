const connectDB = require("./config/db");
require("dotenv").config();

const app = require("./app");

// Connect Database
connectDB();

// const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

