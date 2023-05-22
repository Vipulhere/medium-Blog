import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import blogsRouter from "./routes/blogs.js";
import uploadRouter from "./middlewares/uploadImg.js";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const port = 8800;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.use(cors({origin:"http://localhost:3000",
//   methods:["get","post","delete","put","fetch"],
//   credentials:true
// }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb" }));
app.use("/images", express.static(path.join(__dirname, "/images")));

// Middlewares

// Routes
app.use("/api/auth", authRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/upload", uploadRouter);

// Static/s
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"), {
//     function(err) {
//       res.status(500).send(err);
//     },
//   });
// });

mongoose.set('strictQuery', false);

const Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

Connect().then(() => {
  app.listen(port, () => {
    console.log("Example app running at", port);
  });
});


