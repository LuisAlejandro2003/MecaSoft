import styled from "styled-components";
const StyledButton = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledBtnPrimary = styled.button`
    background: #D74A4A;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    font-family: Noto Serif;
    color: #fff;
    padding: 2.5% 28%;
    border: none;
    margin-top:1% ;
&:hover{
    background: white;
    border: 2px solid red;
    color: black;
    cursor: pointer;
}
`;

function Button({name}) {
    return ( 
    <>
    <StyledButton>
    <StyledBtnPrimary type={"button"}>{name}</StyledBtnPrimary>
     </StyledButton>
    </>
     );
}

export default Button;