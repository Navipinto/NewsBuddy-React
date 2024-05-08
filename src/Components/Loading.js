import React, { Component } from 'react'
import loadinggif from './loadinggif.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loadinggif} alt="loading" />
      </div>
    )
  }
}

export default Loading