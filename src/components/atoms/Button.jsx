import styled from "styled-components";
const StyledButton = styled.button`
background: #D74A4A;
border-radius: 12px;
text-align: center;
font-size: 20px;
font-family: Noto Serif;
color: #fff;
padding: 2% 20%;
border: none;
margin-top:4% ;
&:hover{
    background: #FDEDED;
    border: none;
    color: black;
}
`;

function Button({name}) {
    return ( 
    <>
    <StyledButton type={"button"}>{name}</StyledButton>
    </>
     );
}

export default Button;