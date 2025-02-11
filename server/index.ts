import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = 5000;

const app = express();

app.use(cors());

// ping server
app.get('/', (req, res) => {
    res.send({ message: " real server" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));