import styled from "styled-components"

const Container=styled.div`
    height : 100vh;
    background-color:rgba(174, 240, 255, 1);
    display : flex;
    align-items : center;
    justify-content : center;

`;

const Wrapper=styled.div`
        margin-top:30px;
        margin-left:5cm;
        width: 35%;
        padding: 20px;
        background-color: rgba(138, 221, 250, 0.83);
`;

const LWrapper=styled.h1`
        background: 
        url("https://iili.io/HEn3Hn1.png") ;
        height:7cm;
        width:7cm;
        background-size: cover;
        margin-left:40px;
`;

const TopWrapper=styled.div`
        width: 55%;
        height: 20px;
        padding: 20px;  
        position:absolute;
        background-repeat : no-repeat;
        margin-top: -450px;
        align-items : center;
        justify-content: center;
`;

const Image = styled.img`
    margin-top:-41px;
    width : 12%;
    height : 12vm;
    margin-left:6%;
`;
const TopText=styled.div`
        margin-top:-40px;
        padding:2px;
        margin-left:150px;
        font-size: 20px;
        font-weight: bold;
`;

const Title=styled.h1`
        position:relative;
        margin-left:160px;
        font-size: 24px;
        font-weight: bold;
`;

const Form=styled.form`
        display: flex;
        flex-direction: column;
`;

const Input=styled.input`
        justify-content:center;
        width:200px;
        margin: 10px 0px; 
        padding: 10px;
        margin-left:120px;
        border-radius:7%;

`;

const Button=styled.button`
        width: 40%;
        position:relative;
        border: 2px solid black;
        border-radius:50%;
        padding: 15px 20px;
        background-color: white;
        color: black;
        cursor: pointer;
        margin-top:10px;
        margin-left:140px;
        margin-bottom: 2px;
`;

const Link= styled.a`
        font-weight:bold;
        margin: 5px 160px;
        font-size: 13px;
        cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <TopWrapper>
            <Image src="https://iili.io/HEnpLUQ.png" />
                <TopText>
                ONLINE LIBRARY MANAGEMENT SYSTEM
                </TopText>
        </TopWrapper>
        <LWrapper/>
        <Wrapper>
            <Title>
                Admin Login
            </Title>
            <Form>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Link>Forgot Password?</Link>
                <Link>Click here</Link>
                <Button>Login</Button>
            </Form>
        </Wrapper>
        </Container>
    )
}

export default Login