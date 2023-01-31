import React, { useEffect, useState } from 'react'
import { IStudent } from '../../business logic/interfaces/student.interface';
import { getStudent } from '../../business logic/services/student.service';
import TableComponent from '../../components/table/table.components';
import Modal from "react-modal";
import StudentPage from '../student/student.page';

export default function ModalPage() {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [modalIsOpen, setIsOpen] = useState(false);
    // const [newStudent, setNewStudent] = useState<IStudent>();

    const toggleModal = () => {
        setIsOpen(!modalIsOpen);
    };

    // const submitModalStudent = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     // 
    //     const form = event.target as HTMLFormElement;
    //     const data = new FormData(form);
    //     const student = Object.fromEntries(data.entries()) as unknown as IStudent;

    //     console.log("submit");
    // }

    async function getStudents() {
        const students = await getStudent();
        students && setStudents(students);
        setIsLoading(false);
    };

    useEffect(() => {
        getStudents();
    }, [students]);

    return (
        <div>
            <h1>Modal Example</h1>
            <button type="button" className="btn btn-outline-primary mb-3" onClick={toggleModal}>Add Student</button>

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <TableComponent
                        data={students}
                        headers={["#", "First Name", "Last Name"]}
                    ></TableComponent>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={toggleModal}
                        className="custom-modal bg-primary-subtle rounded col-6 m-auto mt-5 p-2"
                    >
                        <StudentPage toggleFunc={toggleModal}></StudentPage>
                    </Modal>
                </div>
            )}
        </div>
    )
}
