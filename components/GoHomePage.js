import Router from "next/router";
import styled from 'styled-components'

const Button = styled.button`
width: 80px;
height:80px;
background: #18068f;
border-radius: 50%;
padding:  10px;
color: #ffffff;
box-shadow:none;
outline: none;
border: none;
cursor: pointer;
position: fixed;
bottom: 40px;
right: 40px;
`

export default function GoHomePage(paras) {
  const goHomePage = () => {
    Router.push("/");
  };
  return <Button type='button' onClick={goHomePage}>Go back to home</Button>;
}
