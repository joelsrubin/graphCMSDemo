import React from 'react';
const { AvatarGenerator } = require('random-avatar-generator');
const generator = new AvatarGenerator();
import styled from 'styled-components';

export default function Student({ student }) {
  return (
    <div>
      <Avatar src={generator.generateRandomAvatar()} />
      <h4>
        {student.name} {''}
      </h4>
    </div>
  );
}

const Avatar = styled.img`
  max-width: 100px;
  max-height: 100px;
`;
