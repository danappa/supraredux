
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Read = () => {
const [data, setData] = useState([]);

useEffect(() => {
    getData();
}, []);

function getData() {
    axios.get('https://64d77f512a017531bc134cd2.mockapi.io/post')
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

return (
    <>
        <h2>Read operation</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {data.map((eachData) => (
                    <tr key={eachData.id}>
                        <th scope="row">{eachData.id}</th>
                        <td>{eachData.name}</td>
                        <td>{eachData.email}</td>
                        <td>
                            <button className="btn-success">edit</button>
                        </td>
                        <td>
                            <button className="btn-danger">delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);
};

export default Read;
