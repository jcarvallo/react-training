import React from "react";
import { Table, Button } from "reactstrap";

const Datalist = props => {
  const { data, handleEdit, handleDelete } = props;
  
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((td, index) => (
          <tr key={index}>
            <th scope="row">{td.id}</th>
            <td>{td.name}</td>
            <td>{td.username}</td>
            <td>{td.email}</td>
            <td>{td.phone}</td>
            <td>
              <Button color="success" onClick={() => handleEdit(td)}>
                Edit
              </Button>{" "}
              <Button color="danger" onClick={() => handleDelete(td)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Datalist;
