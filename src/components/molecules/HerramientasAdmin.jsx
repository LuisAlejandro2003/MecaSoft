import styled from 'styled-components';

import OpcionesNavAdmin from './OpcionesNavAdmin';
import Label from '../atoms/Label';
const StyledWrapperContainerGray = styled.div`
 padding:1.5%;
  width: 52%;
  height: 100%;
  border-radius:10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #EAE8E8;
`;

const HerramientasAdmin = () => {
    return ( 
        <>
        
        <OpcionesNavAdmin msn="Herramienta respecto al sistema de referencia" estilo={true} ></OpcionesNavAdmin>
        <StyledWrapperContainerGray>
        <OpcionesNavAdmin estilo={true} pequenio={true}  msn="[X, Y, Z] mm |  Rot[Z,Y', Z' ']deg - Adept/Comau/Kawasaki"></OpcionesNavAdmin>
        </StyledWrapperContainerGray>
        </>
     );
}
 
export default HerramientasAdmin;