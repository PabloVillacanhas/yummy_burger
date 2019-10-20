import React, { Component } from 'react';

import Burguer from '../../components/Burguer/Burguer'

import "./BurguerBuilder.scss"

export default class BurguerBuilder extends Component {
  render() {
    return (
      <React.Fragment>
        <Burguer></Burguer>
        <p>Cokpit builder</p>
      </React.Fragment>
    );
  }
}
