import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default function UserList(props) {
  var cnt = 0;
  var users = Array.from(props.users);
  users = users.reverse();

  return (
    <>
      <h4 className="p-3 my-3 bg-primary text-white">Users List </h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>s.no</th>
            <th>User Image</th>
            <th>User Details</th>
            <th>Contact</th>
            <th>Book Details</th>
            <th>Books Borrowed</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              cnt += 1;
              return (
                <tr>
                  <td>{cnt}</td>
                  <td>
                    <img src={user.photo} alt="" style={{ height: "15vh" }} />
                  </td>
                  <td style={{ width: "40vh" }}>
                    <b>User name</b> : {user.userName}
                    <br />
                    <br />
                    <b>Roll No</b> : {user.rollNo}
                    <br />
                    <br />
                    <b>Department</b> : {user.department}
                    <br />
                  </td>
                  <td style={{ width: "40vh" }}>
                    <b>eMail</b> : {user.eMail}
                    <br />
                    <br />
                    <b>Mobile</b> : {user.Mobile}
                  </td>
                  <td>
                    <br />
                    <b>Pending Fine</b> : {user.pendingFine}
                    <br />
                    <b>No of books</b> : {user.books}
                  </td>
                  <td>
                    <b>Books borrowed</b> : {user.booksBorrowed}
                  </td>
                  <td>
                    <i className="fa fa-pen p-2 m-2 bg-primary text-light"></i>
                    <i
                      className="fa fa-trash p-2 m-2 bg-danger text-light"
                      onClick={async () => {
                        try {
                          const resp = await axios.delete(
                            `/api/user/${user._id}`
                          );
                          console.log(resp);
                          window.location.reload(false);
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
