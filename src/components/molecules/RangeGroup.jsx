import styled from 'styled-components';
import Range from "../atoms/Range";
import Button from '../atoms/Button';
const StyledWrapperContainerRangeGroup = styled.div`
  width: 100%;
 flex-direction:column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
`;

const StyledWrapperContainerRange = styled.div`

  width: 50%;
  height: 20%;
  padding-top:3%;
  padding-left:7%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid green; */
`;


const RangeGroup = () => {
    return ( 
    <StyledWrapperContainerRangeGroup>
      <StyledWrapperContainerRange>
      <Range></Range>
      </StyledWrapperContainerRange>
      <StyledWrapperContainerRange>
      <Range></Range>
      </StyledWrapperContainerRange>
      <StyledWrapperContainerRange>
      <Range></Range>
      </StyledWrapperContainerRange>
      <Button name="Enviar"></Button>
    </StyledWrapperContainerRangeGroup>
      
     );
}
 
export default RangeGroup;