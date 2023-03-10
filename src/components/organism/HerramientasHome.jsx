import styled from 'styled-components';
import Label from '../atoms/Label';

const StyledWrapper = styled.div`
  width: 100%;
  flex-direction:column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:3%;
  /* border: 2px solid green; */
`;
const StyledWrapperLabel = styled.div`
  width:10%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid green; */

`;


const DivCircle = styled.div`

width: 20px;
height: 20px;
left: 784px;
top: 213px;
border-radius:50%;
background: #E64C63;
`;

const HerramientasHome = () => {
    return ( 
        <StyledWrapper>
            <StyledWrapperLabel>
             <Label msn="Herramientas" titleRed={true}></Label>
             </StyledWrapperLabel>
          
             <DivCircle></DivCircle>
         
        </StyledWrapper>
        
     );
}
 
export default HerramientasHome;