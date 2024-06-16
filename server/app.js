// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const errorMiddleware = require("./middleware/errorMiddleware.js");

// const userRouter = require("./routes/userRoutes");
// const jobRouter = require("./routes/jobRoutes.js");

// const app = express();

// // Set security HTTp headers
// // app.use(
// //   cors({
// //     origin: "https://prima-zeta.vercel.app", // Your frontend domain
// //     credentials: true, // Allow credentials (cookies)
// //   })
// // );

// app.use(
//   cors({
//     origin: "http://localhost:3001",
//     credentials: true,
//   })
// );
// // app.options("*", cors());

// // Body parser, reading data from body into req.body
// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(cookieParser());

// // Development logging
// app.use(morgan("dev"));

// // Test route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "Hello from server!",
//   });
// });

// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/jobs", jobRouter);

// app.use(errorMiddleware.notFound);
// app.use(errorMiddleware.errorHandler);

// module.exports = app;








// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const errorMiddleware = require("./middleware/errorMiddleware.js");

// // const userRouter = require("./routes/userRoutes");
// // const jobRouter = require("./routes/jobRoutes.js");
// const adminRouter = require("./routes/authRoutes.js");

// const app = express();

// // Set security HTTp headers
// // app.use(
// //   cors({
// //     origin: "https://prima-zeta.vercel.app", // Your frontend domain
// //     credentials: true, // Allow credentials (cookies)
// //   })
// // );

// app.use(
//   cors({
//     origin: "http://localhost:3001",
//     credentials: true,
//   })
// );
// // app.options("*", cors());

// // Body parser, reading data from body into req.body
// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(cookieParser());

// // Development logging
// app.use(morgan("dev"));

// // Test route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "Hello from server!",
//   });
// });

// // app.use("/api/v1/users", userRouter);
// // app.use("/api/v1/jobs", jobRouter);
// app.use("/api/v1/admin", adminRouter);

// app.use(errorMiddleware.notFound);
// app.use(errorMiddleware.errorHandler);

// module.exports = app;





const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const errorMiddleware = require("./middleware/errorMiddleware.js");
const userRouter = require("./routes/userRoutes");
const Config_routes = require("./routes/Config_routes");

// const config_client_routes = require("./routes/config_client_routes");

dotenv.config(); // Load environment variables from .env file
const app = express();

// Set security HTTp headers
// app.use(
//   cors({
//     origin: "https://prima-zeta.vercel.app", // Your frontend domain
//     credentials: true, // Allow credentials (cookies)
//   })
// );

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// app.options("*", cors());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Development logging
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello from server!",
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/config", Config_routes);
// app.use("/api/v1/config", config_client_routes);

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

module.exports = app;