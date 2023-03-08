import styled from 'styled-components';
import Label from "../atoms/Label";

const StyledWrapperContainerGray = styled.div`
 padding:1.5%;
  width: 50%;
  height: 100%;
  border-radius:10px;
  flex-direction:column;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #EAE8E8;
`;


const StyledWrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction:column;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top:3%;
  /* border: 2px solid green; */
`;
const ContainerLabel = styled.div`
  display: flex;
  width: 100%;
  height: 33%;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid goldenrod; */
`;

const ListEnlaces = () => {
    return ( 

   <StyledWrapperContainer>
     <Label msn="Lista de enlaces cinematicos" estilo={true}></Label>
     <StyledWrapperContainerGray>
      <ContainerLabel>
      <Label msn="1: Type P θ=37.00° d=415.00mm a=0.00mm a=0.00°" pequenio = {true} estilo={true}></Label>
      </ContainerLabel>
      <ContainerLabel>
      <Label msn="2: Type R θ=126.00° d=0.00mm a=200.00mm a=0.00°" pequenio = {true} estilo={true}></Label>
      </ContainerLabel>
      <ContainerLabel>
      <Label msn="3: Type R θ=173.00° d=0.00mm a=200.00mm a=0.00°" pequenio = {true} estilo={true}></Label>
      </ContainerLabel>
     </StyledWrapperContainerGray>
     
  </StyledWrapperContainer>
     );
}
 
export default ListEnlaces;