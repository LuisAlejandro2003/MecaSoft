import styled from "styled-components";
import GroupText from "../molecules/GroupText";
import HerramientasAdmin from "../molecules/HerramientasAdmin";
import ListEnlaces from "./ListEnlaces";
import RangeGroup from "../molecules/RangeGroup";

const BodyPilotajesAdmin = () => {
  return (
      <StyledWrapperContainer>
  
        <StyledWrapperContainerLeft>
         <HerramientasAdmin></HerramientasAdmin>
         <GroupText></GroupText>
         <ListEnlaces></ListEnlaces>
        </StyledWrapperContainerLeft>

        <StyledWrapperContainerRight>
        <RangeGroup></RangeGroup>
        </StyledWrapperContainerRight>
        </StyledWrapperContainer>
  );
};

const StyledWrapperContainerLeft = styled.div`
  width: 50%;
  height: 100%;
 
  flex-direction:column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledWrapperContainerRight = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledWrapperContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top:10%
`;



export default BodyPilotajesAdmin;
