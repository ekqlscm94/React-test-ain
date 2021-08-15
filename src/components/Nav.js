import React, { useState }  from 'react';
import LOGO from './logo.png';
import styled from 'styled-components';
import { IoIosMenu } from "react-icons/io";


function Nav() {

  const [menu, setmenu] = useState(false)

  return (
    <Common>
      <Home href='/'><LogoImg src={LOGO}/></Home>

      <ContlorBox menu={menu}>
        <Contlor href='/mainnews'>메인뉴스</Contlor>
        <Contlor href='/portfolio'>포트폴리오</Contlor>
        <Contlor href='/service'>서비스소개</Contlor>
        <Contlor href='/promotion'>홍보컨설팅</Contlor>
      </ContlorBox>
      <Menubar href='#' onClick={() => {setmenu(!menu)}} >
        <IoIosMenu></IoIosMenu>
      </Menubar>
    </Common>
  );
}



const Common = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    @media screen and (max-width: 570px) {
      flex-direction: column;
  }
`

const Home = styled.a`
    @media screen and (max-width: 570px) {
      flex-direction: column;
  }
`
const LogoImg = styled.img`
    display: flex;
    width:150px;
    @media screen and (max-width: 570px) {
      flex-direction: column;
  }
`


const ContlorBox = styled.div`
    display: flex;
    font-weight: bold;
    align-items:center;
    margin-right:200px;
    @media screen and (max-width: 570px) {
      flex-direction: column;
      align-items:flex-end;
      display: ${({menu}) => {
         return menu === false ? 'none' : 'flex'
      }};
  }
`

const Contlor = styled.a`
    margin: 10px;
    text-decoration: none;
    color: black;
    &:hover{
      color: #FFBF00;
      border-bottom: 3px solid #FFBF00;
      padding-bottom: 5px;   
    }
`
const Menubar = styled.a`
    display: flex;
    align-items:center;
    font-size: 30px;
    position: absolute;
    right: 32px;
    height: 97px;
    @media screen and (min-width: 570px) {
        display: none;    
    }
`
export default Nav