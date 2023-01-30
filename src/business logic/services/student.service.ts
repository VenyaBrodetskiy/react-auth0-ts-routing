import axios from "axios";
import { IStudent } from "../interfaces/student.interface";

export const addStudent = async (student: IStudent): Promise<IStudent | undefined> => {
    try {
        let response = await axios.post(
            "http://localhost:3030/api/students",
            student
        );
        if (response.status === 200 && response.data) {
            return response.data as IStudent;
        }
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export const getStudent = async (): Promise<IStudent[] | undefined> => {
    try {
        let response = await axios.get("http://localhost:3030/api/students");

        if (response.status === 200 && response.data) {
            return response.data as IStudent[];
        }
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

