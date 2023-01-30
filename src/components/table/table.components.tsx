import React from 'react'

export default function TableComponent({ data, headers }: { data: any[]; headers: string[] }) {
    return (
        <div>
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            {headers.map((h) => (
                                <th scope='col'>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, index) => (
                            <tr>
                                <th scope='col'>{index}</th>
                                <TableRow data={d} size={headers.length}></TableRow>
                                <th>
                                    <button className="btn btn-danger">Delete</button>
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
