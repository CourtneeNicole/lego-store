import React, {Component} from 'react'
import bricks from '../data/bricks'
import Brick from './Brick'
export default class extends Component {
  render (){
    const renderBricks = () => {
    return bricks.map(brick => Brick(brick))
  }
    return(
      <div>
        Bricks
        <ul>
          {renderBricks()}
        </ul>
      </div>
    );
      }
      }
  
