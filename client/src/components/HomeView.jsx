import styled from "styled-components"

const Container=styled.div`
    width : 100vw;
    height : 100vh;
    padding:28px;
    background: 
    url("https://iili.io/HEC6cZB.png") center;
    background-size: cover;
    display : flex;
    align-items : center;
    justify-content: center;
    overflow:hidden;

`;

const TopWrapper=styled.div`
        width: 50%;
        height: 2cm;
        padding: 20px;
        margin-top:2px;
        background-color: rgba(240, 228, 228, 0.83);
`;


const LWrapper=styled.div`
        width: 20%;
        height: 7cm;
        padding: 20px;
        background-color: rgba(240, 228, 228, 0.83);
`;

const RWrapper=styled.div`
        width: 20%;
        height: 7cm;
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


const Login = () => {
    return (
        <Container>
            <TopWrapper/>
        <LWrapper>
            <Admin/>
                <Button>Admin Login</Button>
        </LWrapper>

        <RWrapper>
            <User/>
                <Button>Student Login</Button>
        </RWrapper>
        </Container>
    )
}

export default Login