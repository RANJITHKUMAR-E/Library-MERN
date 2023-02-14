import React from 'react'
import '../index.css'
// import Button from '../components/Button'
const Table = () => {
  return (
    <>
<table className="table">
<thead className="thead-light">
    <tr>
      <th scope="col">Book ID</th>
      <th scope="col">Book Name</th>
      <th scope="col">Borrowed Date</th>
      <th scope="col">Expected Return Date</th>
      <th scope="col">Fine Status</th>
      <th scope="col">Payment Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Stepping to my 19</td>
      <td>12/2/2023</td>
      <td>4/5/2021</td>
      <td>Rs.250</td>
      <td>Nil</td>
      <td><button type="button" class="btn btn-success" style={{backgroundColor:"#E9760D"}}>Renew</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>On my mind</td>
      <td>11/1/2023</td>
      <td>4/5/2021</td>
      <td>Rs.0</td>
      <td>Pending</td>
      <td><button type="button" class="btn btn-success" style={{backgroundColor:"rgb(144, 238, 144)"}}>Success</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Loving The Quest</td>
      <td>23/8/2021</td>
      <td>4/5/2021</td>
      <td>Rs.100</td>
      <td>Nil</td>
      <td><button type="button" class="btn btn-success" style={{backgroundColor:"rgb(144, 238, 144)"}}>Success</button></td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Table
