import React from 'react'

export default extends React.Component
{
  const Brick = (brick) => {
    return (
      <li>
        {brick.name}
        <br/>
        {brick.imgURL}
      </li>
    );
  }
}
