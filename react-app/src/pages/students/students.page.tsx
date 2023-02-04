import { Toast } from 'primereact/toast';
import React, { useEffect, useRef, useState } from 'react';
import { IStudent } from '../../business logic/interfaces/student.interface';
import { deleteStudent, getStudent } from '../../business logic/services/student.service';
import TableComponent from '../../components/table/table.components';

export default function StudentsPage() {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const toast = useRef<Toast>(null);


    async function getStudents() {
        const students = await getStudent();
        students && setStudents(students);
        setIsLoading(false);
    }

    async function handleDeleteStudent(student: IStudent) {
        const result = await deleteStudent(student);
        if (typeof result === "string") {
            toast.current?.show({ severity: 'error', summary: "Failed to delete student", detail: result.toString() });
        } else {
            toast.current?.show({ severity: 'success', summary: "Deleted student", detail: `${student.firstName} ${student.lastName} successfully deleted` })
            setStudents(result);
        }
    }

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <div>
            <h1>Students</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <TableComponent data={students} headers={["#", "First Name", "Last Name"]} handleDelete={(s) => handleDeleteStudent(s)}></TableComponent>
                </>
            )}
            <Toast ref={toast} position="bottom-right" />

        </div>
    )
}
