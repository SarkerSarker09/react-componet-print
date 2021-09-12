import React from "react";

const  TableComponent = React.forwardRef((props, ref) => {
  return (<table className="table" ref={ref}>
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <tr key={1}>
        <td>Mokha</td>
        <td>Alamgir</td>
        <td>mokha@gmail.com</td>
        <td>
          <img src="https://via.placeholder.com/140x100" alt="thumb1" />
        </td>
      </tr>
      <tr key={2}>
        <td>Tala</td>
        <td>Hazi</td>
        <td>thazi@gmail.com</td>
        <td>
          <img src="https://via.placeholder.com/140x100" alt="thumb2" />
        </td>
      </tr>
      <tr key={3}>
        <td>Tareq</td>
        <td>Vay</td>
        <td>tareqvay@gmail.com</td>
        <td>
          <img src="https://via.placeholder.com/140x100" alt="thumb3" />
        </td>
      </tr>
    </tbody>
  </table>);

})

export default TableComponent;
