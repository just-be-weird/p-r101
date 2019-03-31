# p-r101
Understanding ReactJS

# Understanding Syntax
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return ();
  }
}

export default App;


# To use css modules visit official page of create react app
they suggest us to rename our css-modules filenames to be in format of [name].module.scss or [name].module.sass

# If we use PureComponent then we don't need to shouldComponentUpdate and it's state check as its
  provided by PureComponent