require('@babel/polyfill');
import React, { useState, useEffect } from 'react';
import { API } from '../utils.js';
import Student from './Student.jsx';
import Staff from './Staff.jsx';
import { request } from 'graphql-request';
import styled from 'styled-components';

export default function App() {
  const [students, setStudents] = useState(null);
  const [timeZone, setTimeZone] = useState('pacific');

  useEffect(() => {
    const fetchStudents = async () => {
      const { students } = await request(
        API,
        `
        {
            students {
              name
              id
            }
          }
    `
      );
      console.log('rendered:', students);
      setStudents(students);
    };
    fetchStudents();
  }, [timeZone]);

  const clickHandler = (e) => {
    setTimeZone(`${e.target.innerHTML.toLowerCase()}`);
  };

  if (students) {
    return (
      <Container>
        <h1>Students</h1>
        {/* <Buttons>
          <button onClick={clickHandler}>Pacific</button>
          <button onClick={clickHandler}>Mountain</button>
          <button onClick={clickHandler}>Central</button>
          <button onClick={clickHandler}>Eastern</button>
        </Buttons> */}

        <Class>
          {students.map((student, i) => (
            <Student key={i} student={student} />
          ))}
        </Class>
      </Container>
    );
  } else {
    return <div>loading</div>;
  }
}
const Buttons = styled.div`
  margin-top: 10px;
`;
const Class = styled.div`
  display: flex;
  width: 75%;
  height: 50vh;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 10% 50%;
`;

// {
//   students(where: { timeZone: ${timeZone} }) {
//     name
//     id
//   }
// }
