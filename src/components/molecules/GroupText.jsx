import styled from 'styled-components';
import InputText from "../atoms/InputText";
const StyledWrapperContainerText = styled.div`
  width: 70%;
  height: 100%;
 padding-top:2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`;
const GroupText = () => {
    return ( 
        <StyledWrapperContainerText> 
        <InputText></InputText>
        <InputText></InputText>
        <InputText></InputText>
        </StyledWrapperContainerText>
       
     );
}
 
export default GroupText;