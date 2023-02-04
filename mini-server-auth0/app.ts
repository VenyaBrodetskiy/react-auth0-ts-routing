import axios from "axios";
import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { Data } from "./data/data";
import { IStudent } from "./interfaces";

dotenv.config();

const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.get("/api/roles", async (req: Request, res: Response) => {

    const token = process.env.AUTH0_MANAGEMENT_API_TOKEN;
    const userId = req.query.userId;
    const endpoint = `https://dev-jz8i8ymmqw7p0b8t.us.auth0.com/api/v2/users/${userId}/roles`;
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }
    let response = await axios.get(endpoint, options);
    if (response.status === 200 && response.data.length > 0) {
        console.log(response.data);
        res.send(response.data);
        res.end();
    } else {
        res.send("no roles found");
        res.end();
    }
});

app.get("/api/students", async (req: Request, res: Response) => {
    res.send(Data.students);
});

app.post("/api/students", async (req: Request, res: Response) => {
    const student = req.body as IStudent;
    student.id = Data.students.length + 1;
    Data.students.push(student);
    res.send(student);
});

app.delete("/api/students", async (req: Request, res: Response) => {
    const student = req.body as IStudent;
    const newStudents = Data.students.filter((s) => s.id !== student.id);
    Data.students = newStudents;
    res.send(Data.students);
})

app.listen(3030, () => {
    console.log("Server started on port 3030");
});
