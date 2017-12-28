import React, { Component } from 'react'
import Hello from '../components/Hello'
import style from './main.css';

const Main = () => {
  return (
    <div>
      <h3> React+Parcel 的开发体验，哈哈</h3>
      <Hello />
      <div className="main"></div>
    </div>
  )
};

export default Main
