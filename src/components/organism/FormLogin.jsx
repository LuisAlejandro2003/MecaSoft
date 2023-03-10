import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { images } from "../../images/images";
import '.././styles/FormLogin.css';
import Button from "../atoms/Button";
import GroupInput from "../molecules/GroupInput";
import styled from "styled-components";
import Titulo from "../atoms/Titulo";
import Icon from "../atoms/Icon";

const StyledContainer = styled.div`
    margin: 10% 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse; 
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const StyledContainerForm = styled.div`
   /* display: flex; */
   padding: 80px 30px;
   width: 500px;
   height: auto;
`;

const StyledContainerIlustracion = styled.div`
    display:flex;
    width: 40%;
    height: 100%;
    padding: 80px 20px;
    margin-left: 2%;
`;

const StyledLink = styled.div`
    display: flex;
    justify-content: center;
`;

function FormLogin() {
    return ( 
    <>
    <StyledContainer>
    <StyledContainerForm>
        <form>
        <Titulo msn={"Roboto"} />
        <GroupInput tamanio={false} src={images.userIcon} tamanioI={true} type={"text"} placeholder={"Usuario"} />
        <GroupInput tamanio={false} src={images.contraIcon} tamanioI={true} type={"text"} placeholder={"Contraseña"} />
        {/* <StyledLink>
        <Link to="/register" className="estilo-link">¿Has olvidado la contraseña?</Link>
        </StyledLink> */}
        <Button name={"Iniciar sesion"} />
        </form>
    </StyledContainerForm>

        <StyledContainerIlustracion>
        <Icon src={images.ilustration} />
      </StyledContainerIlustracion>
    </StyledContainer>
    </> );
}

export default FormLogin;