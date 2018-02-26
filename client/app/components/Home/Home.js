import React, { Component } from 'react';
import styled from 'styled-components'


const TempHolder = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`



class Home extends Component {

  render() {
    return (
      <TempHolder>
        <h1>Welcome to Spill!</h1>
        <p>This is an environmental reporting website</p>
      </TempHolder>
    );
  }
}

export default Home;
