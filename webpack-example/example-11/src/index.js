"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//引入entry.js 的内容
import entryCon from "./entry";

entryCon();


class HelloWorld extends Component {
  render(){
    return (
      <h1>Hello world</h1>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));