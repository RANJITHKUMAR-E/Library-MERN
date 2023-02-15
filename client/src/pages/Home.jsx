import React from "react";


import styled from "styled-components"

const Container=styled.div`
        
        height : 100vh;
        padding:28px;
        background: 
        url("https://iili.io/HEC6cZB.png") center;
        background-size: cover;
        display : flex;
        align-items : center;
        justify-content: center;

`;

const TopWrapper=styled.div`
        width: 65%;
        height: 20px;
        padding: 20px;
        background: 
        url("https://iili.io/HEnpLUQ.png") left ;
        position:absolute;
        background-repeat : no-repeat;
        margin-top: -490px;
        background-color: rgba(180, 230, 252, 1);
        align-items : center;
        justify-content: center;
`;

const TopText=styled.div`
        padding:2px;
        margin-left:250px;
        font-size: 20px;
        font-weight: bold;
`;


const LWrapper=styled.div`
        width: 20%;
        height: 8cm;
        padding: 20px;
        background:url ("https://iili.io/HEnpLUQ.png") center;
        background-color: rgba(240, 228, 228, 0.83);
`;

const RWrapper=styled.div`
        width: 20%;
        height: 8cm;
        padding: 20px;
        margin-left:4cm;
        background-color: rgba(240, 228, 228, 0.83);
`;

const Admin=styled.h1`
        background: 
        url("https://iili.io/HEn3Hn1.png") center;
        height:5cm;
        width:5cm;
        background-size: cover;
        margin-left:35px;
`;

const User=styled.h1`
        background: 
        url("https://iili.io/HEn2yZP.png") center;
        height:5cm;
        width:5cm;
        background-size: cover;
        margin-left:35px;
`;



const Button=styled.button`
        width: 40%;
        border: 2px solid black;
        border-radius:50%;
        padding: 15px 20px;
        background-color: white;
        color: black;
        cursor: pointer;
        margin-left:78px;
        margin-bottom: 10px;
`;


const Home = () => {
return (
        <>
        <Navbar/>
        </>
)
}

export default Home
