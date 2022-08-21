/** @format */

import React, { useState } from "react";
import { MainBox, Table } from "./styled";
import { Data } from "./data";

function App() {
  // states
  const [data, setData] = useState(Data);
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [newId, setNewId] = useState('')
  const [newName, setNewName] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [newCourse, setNewCourse] = useState('')
  //functions
  const deleteItem = (id) => {
    let res = data.filter((vl) => vl.id !== id);
    setData(res);
  };
  const add = () => {
    setData([...data, {id: data.length+1, name: newName, status: newStatus, course: newCourse} ])
  }

  return (
    <MainBox>
      <h1 className="title">CRUD</h1>
        <input type="text" placeholder="search" onChange={(e) => setInputValue(e.target.value)} />
        <button className="add" onClick={() => setToggle(!toggle)}>{!toggle ? 'New' : 'Close'}</button>
        {toggle && <div className="modal">
          <input type="text" placeholder="name" onChange={(e) => setNewName(e.target.value)}/>
          <input type="text" placeholder="status"onChange={(e) => setNewStatus(e.target.value)}/>
          <input type="text" placeholder="Course" onChange={(e) => setNewCourse(e.target.value)}/>
          <button onClick={() => add()}>Add</button>
        </div>}
      <Table>
        {data.map((value, index) => {
          if(value.name.toLowerCase().includes(inputValue.toLowerCase()))
           return (
            <Table.Tr>
              <Table.Td>{index+1}</Table.Td>
              <Table.Td>{value.name}</Table.Td>
              <Table.Td>{value.status}</Table.Td>
              <Table.Td>
                {value.course}
                <button>Edit</button>
                <button onClick={() => deleteItem()}>Delete</button>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table>
    </MainBox>
  );
}

export default App;
