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

  const fetchStudents = async () => {
    const { students } = await request(
      API,
      `
      {
        students {
          id
          name
        }

      }

  `
    );
    setStudents(students);
  };

  // const fetchStaff = async () => {
  //   const { staffs } = await request(
  //     API,
  //     `{
  //     staffs {
  //       name
  //       role
  //     }
  //   }
  //     `
  //   );
  //   setStaff(staffs);
  // };

  useEffect(() => {
    // fetchStaff();
    fetchStudents();
  }, []);
  console.log(staffs);

  if (students) {
    return (
      <Container>
        <Class>
          <h1>Students</h1>
          {students.map((student, i) => (
            <Student key={i} student={student} />
          ))}
        </Class>
        <Class>
          {/* <h1>Staff</h1>
          {staffs.map((staffMember, i) => (
            <Staff key={i} staff={staffMember} />
          ))} */}
        </Class>
      </Container>
    );
  } else {
    return <div>loading</div>;
  }
}

const Class = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
