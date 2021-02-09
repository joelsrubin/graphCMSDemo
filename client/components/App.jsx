require('@babel/polyfill');
import React, { useState, useEffect, Suspense } from 'react';
import { API } from '../utils.js';
import Student from './Student.jsx';
import { request } from 'graphql-request';
import styled from 'styled-components';
const Class = React.lazy(() => import('./Class.jsx'));
import Loader from 'react-loader-spinner';

export default function App() {
  const [timeZone, setTimeZone] = useState('pacific');

  const clickHandler = (e) => {
    setTimeZone(`${e.target.innerHTML.toLowerCase()}`);
  };

  return (
    <Container>
      <h1>Students</h1>
      <Buttons>
        <button onClick={clickHandler}>Pacific</button>
        <button onClick={clickHandler}>Mountain</button>
        <button onClick={clickHandler}>Central</button>
        <button onClick={clickHandler}>Eastern</button>
      </Buttons>
      <ClassRoom>
        <Suspense
          fallback={
            <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
          }
        >
          <Class timeZone={timeZone} />
        </Suspense>
      </ClassRoom>
    </Container>
  );
}
const Buttons = styled.div`
  margin-top: 10px;
`;
const ClassRoom = styled.div`
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
