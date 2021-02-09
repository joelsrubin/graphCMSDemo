import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import styled from 'styled-components';
import { API } from '../utils.js';
import Student from './Student.jsx';
export default function Class({ timeZone }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { students } = await request(
        API,
        `{
        students {
          id
          name
          timeZone
        }
      }
    `
      );
      console.log('rendered:', students);
      setStudents(students);
    };
    fetchStudents();
  }, [timeZone]);
  return (
    <ClassRoom>
      {students.map((student, i) => (
        <Student key={i} student={student} />
      ))}
    </ClassRoom>
  );
}

const ClassRoom = styled.div`
  display: flex;
  width: 75%;
  height: 50vh;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

/*
`{
  students(where: {timeZone: "${timeZone}"}) {
    id
    name
  }
}
`
*/
