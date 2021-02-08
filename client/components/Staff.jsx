import React from 'react';
const { AvatarGenerator } = require('random-avatar-generator');
const generator = new AvatarGenerator();
import styled from 'styled-components';

export default function Staff({ staff }) {
  return (
    <div>
      <h1>{staff.name}</h1>
    </div>
  );
}
