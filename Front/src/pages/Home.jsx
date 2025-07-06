import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Home = () => {
  let [allCity, setAllCity] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/city`).then((response) => {
      setAllCity(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h3>All City List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {allCity.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.state}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
