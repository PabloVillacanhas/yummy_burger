import React, { Component } from 'react';

import Burguer from '../../components/Burguer/Burguer'

export default class BurguerBuilder extends Component {
  render() {
    return (
        <div>   
            <Burguer></Burguer>
            <div>Burguer Cockpit</div>
        </div>
    );
  }
}
