import React from 'react';

export default function TableComponent<T>({ data, headers, handleDelete }: { data: T[]; headers: string[], handleDelete: (d: T) => {} }) {
    return (
        <div>
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            {headers.map((h) => (
                                <th scope='col'>{h}</th>
                            ))}
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) => (
                            <tr>
                                <TableRow data={d} size={headers.length}></TableRow>
                                <th>
                                    <button className="btn btn-danger" onClick={() => handleDelete(d)}>Delete</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

function TableRow({ data, size }: { data: any, size: number }) {
    return (
        <>
            {Object.keys(data)
                .slice(0, size)
                .map(key => (
                    <td>{data[key]}</td>
                ))}
        </>)
}
