import React, { useRef, useState } from 'react'
import { IStudent } from '../../business logic/interfaces/student.interface';
import { addStudent } from '../../business logic/services/student.service';
import { Toast } from 'primereact/toast';

export default function StudentPage() {
    const [state, setState] = useState<IStudent>({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
    });

    // TODO: ask Elias about useRef
    const toast = useRef<Toast>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setState({ ...state, [key]: event.target.value });
        console.log(state);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("submit", state);
        await addStudent(state);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Added student' })
    };

    return (
        <div>
            <h1>Student Form Add Student</h1>

            <form className="col-6">
                <div className="mb-3">
                    <label htmlFor="inputFirstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="inputFirstName" aria-describedby="emailHelp"
                        placeholder="Elias" onChange={(e) => handleChange(e, "firstName")} />
                    <div id="emailHelp" className="form-text">Nice name</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="inputLastName" aria-describedby="emailHelp"
                        placeholder="Shajrawi" onChange={(e) => handleChange(e, "lastName")} />
                    <div id="emailHelp" className="form-text">Great surname</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
                        placeholder="my@email.com" onChange={(e) => handleChange(e, "email")} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
            <Toast ref={toast} position="bottom-right" />
        </div>
    )
}
