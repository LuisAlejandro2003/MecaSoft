import styled from 'styled-components';
import OpcionesNavAdmin from "../molecules/OpcionesNavAdmin";
//Contiene las etiquetas del menu
const StyledWrapperContainerLabel = styled.div`
width:60%;
height:100%;
/* border: 2px solid green; */
 display: flex;
 justify-content: space-around;
 align-items:center;
`;
//Contiene la etiqueta inicio
const StyledWrapperContainerInicio = styled.div`
width:20%;
height:100%;
/* border: 2px solid blue; */
display: flex;
justify-content: space-around;
align-items:center;
`;

//Contiene el logo
const StyledWrapperContainerLogo = styled.div`
width:20%;
height:100%;
/* border: 2px solid green; */
display: flex;
 justify-content: center;
 align-items:center;
`;
//Contiene todos los elementos del navbar
const StyledWrapperContainer = styled.div`
width: 100%;
height: 85px;
background: #E12A45;
 display: flex;
 justify-content: end;
 align-items:flex-start;
`;

const Navbar = () => {
    return (
       
        <StyledWrapperContainer>
            <StyledWrapperContainerLogo>
                <img src= "/src/images/logo.svg"  alt="react.svg" />
            </StyledWrapperContainerLogo>  
            <StyledWrapperContainerInicio>
                <OpcionesNavAdmin msn="Inicio"></OpcionesNavAdmin>
            </StyledWrapperContainerInicio>
             <StyledWrapperContainerLabel>
                <OpcionesNavAdmin msn="Registro"></OpcionesNavAdmin>
                <OpcionesNavAdmin msn="Usuarios"></OpcionesNavAdmin>
                <OpcionesNavAdmin msn="Historial"></OpcionesNavAdmin>
                <OpcionesNavAdmin msn="Solicitudes"></OpcionesNavAdmin>
                <OpcionesNavAdmin msn="Salir" ></OpcionesNavAdmin>
            </StyledWrapperContainerLabel>
        </StyledWrapperContainer>  
     );
}
export default Navbar;