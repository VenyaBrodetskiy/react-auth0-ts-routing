import React, { useEffect, useState } from 'react';
import { IStudent } from '../../business logic/interfaces/student.interface';
import { getStudent } from '../../business logic/services/student.service';
import TableComponent from '../../components/table/table.components';

export default function StudentsPage() {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getStudents() {
        const students = await getStudent();
        students && setStudents(students);
        setIsLoading(false);
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
                <TableComponent data={students} headers={["First Name", "Last Name"]} ></TableComponent>
            )

            }
        </div>
    )
}
