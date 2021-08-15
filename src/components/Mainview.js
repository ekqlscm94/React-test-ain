import React from 'react';
import styled from 'styled-components';


function Mainview(){
    return(
       <Main></Main>
    );
}

const Main = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(.img01.jpg/1920x760);
    background-size: cover;
    @media screen and (max-width: 570px) {
      flex-direction: column;
  }
`

export default Mainview