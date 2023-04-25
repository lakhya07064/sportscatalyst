import React, { Component } from 'react'
import load from './loader.gif'

export class loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={load} alt="load"/>
      </div>
    )
  }
}

export default loading