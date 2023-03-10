import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Img from "../atoms/Img";
import Button from "../atoms/Button";
import GroupInput from "../molecules/GroupInput";
import { images } from "../../images/images";
import Titulo from "../atoms/Titulo";
import Icon from "../atoms/Icon";



const StyledContainer = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const StyledContainerForm = styled.div`
   padding: 30px 30px;
   width: 500px;
   height: auto;
`;

const StyledContainerIlustracion = styled.div`
    display:flex;
    width: 40%;
    height: 100%;
    margin-left: 2%;
`;

function FormRegister() {
  const form = useRef();
  const navigate = useNavigate();

  return (
    <>
  <Img src={images.regresarIcon} />
    <StyledContainer>
      <StyledContainerForm>
        <form>
          <Titulo msn={"Registrar usuario"} />
          <GroupInput tamanio={true} src={images.nombreIcon} tamanioI={false} type={"text"} placeholder={"Nombre completo"} />
          <GroupInput tamanio={true} src={images.userIcon} tamanioI={false} type={"text"} placeholder={"Nombre de usuario"} />
          <GroupInput tamanio={true} src={images.correoIcon} tamanioI={false} type={"text"} placeholder={"Correo"} />
          <GroupInput tamanio={true} src={images.matriculaIcon} tamanioI={false} type={"text"} placeholder={"Matricula"} />
          <GroupInput tamanio={true} src={images.contraIcon} tamanioI={false} type={"text"} placeholder={"Contraseña"} />
          <GroupInput tamanio={true} src={images.contraIcon} tamanioI={false} type={"text"} placeholder={"Confirmar contraseña"} />
          <Button name={"Registrar"} />
        </form>
      </StyledContainerForm>

      <StyledContainerIlustracion>
        <Icon src={images.ilustration} />
      </StyledContainerIlustracion>
    </StyledContainer>
    </>
  );
}

export default FormRegister;