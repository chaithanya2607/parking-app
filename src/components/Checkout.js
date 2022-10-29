import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function Checkout() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://63234c53bb2321cba916eb6e.mockapi.io/drivers")
      .then((data) => data.json())
      .then((user) => setUsers(user.reverse()));
  };

  return (
    <div className="home">
      <div className="container">
        <div className="py-4">
          <h1 className="text-center text-light">List of Vehicles</h1>

          <table className="table table-light table-striped border shadow mt-4">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Driver Name</th>
                <th scope="col">Vehicle Number</th>
                <th scope="col">Checkin Date</th>
                <th scope="col">Checkin Time</th>
              </tr>
            </thead>
            <tbody>
              {users.map((use, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{use.drivername}</td>
                  <td>{use.vehiclenumber}</td>
                  <td>{use.checkindate}</td>
                  <td>{use.checkintime}</td>
                  <td>
                    <IconButton
                      onClick={() => {
                        navigate(`/${use.id}`);
                      }}
                      className="btn btn-primary me-2"
                    >
                      <VisibilityIcon color="dark" />
                    </IconButton>
                  </td>
                  <td>
                    <IconButton
                      onClick={() => {
                        navigate(`/edit-user/${use.id}`);
                      }}
                    >
                      <ModeEditIcon color="success" />
                    </IconButton>
                  </td>
                  <td>
                    <IconButton
                      onClick={() => {
                        fetch(
                          `https://63234c53bb2321cba916eb6e.mockapi.io/drivers/${use.id}`,
                          { method: "DELETE" }
                        ).then(() => getUsers());
                      }}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}