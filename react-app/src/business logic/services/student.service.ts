import axios from "axios";
import { StringDecoder } from "string_decoder";
import { IStudent } from "../interfaces/student.interface";

export const addStudent = async (student: IStudent): Promise<IStudent | undefined> => {
    try {
        const response = await axios.post(
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

export const deleteStudent = async (student: IStudent): Promise<IStudent[] | string> => {
    try {
        const response = await axios.delete(
            "http://localhost:3030/api/students",
            {
                data: student
            }
        );
        if (response.status === 200) {
            console.log("Student is deleted from DB");
            return response.data as IStudent[];
        }
        else {
            console.log(response.status, "Failed to delete");
            return `${response.statusText} failed to delete`;
        }

    } catch (error) {
        console.log(error);
        return error as string;
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

