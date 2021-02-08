require('@babel/polyfill');
import React, { useState, useEffect } from 'react';
import { API } from '../utils.js';
import Student from './Student.jsx';
import Staff from './Staff.jsx';
import { request } from 'graphql-request';
import styled from 'styled-components';

export default function App() {
  const [students, setStudents] = useState(null);
  const [staffs, setStaff] = useState(null);
  const [timeZone, setTimezone] = useState('"mountain"');

  const fetchStudents = async () => {
    const { students } = await request(
      API,
      `
      {
        students{
          name
          timeZone

        }
      }

  `
    );
    setStudents(students);
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  console.log(students);

  if (students) {
    return (
      <Container>
        <h1>Students</h1>

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
  grid-template-rows: 10% 50%;
`;
