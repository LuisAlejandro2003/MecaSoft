import styled from 'styled-components';
import Label from '../atoms/Label';
import Image from '../atoms/Image';
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 
  /* border: 2px solid green; */
 
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
 
  padding-bottom:5%;
  /* border: 2px solid green; */
`;

const StyledLabel = styled.div`
  width: 18%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border:solid black;
  border-width: 0px 0px 2px;
  
  padding-bottom:2%;
  /* border: 2px solid green; */
`;

const StyledDivision = styled.div`
  width: 45%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledCircle = styled.div`
width: 15px;
height: 15px;
border-radius:50%;
background: #000000;
flex: none;
order: 2;
flex-grow: 0;
`;

const StyledCircleWhite = styled.div`
box-sizing: border-box;
width: 15px;
height: 15px;
background: #FFFFFF;
border: 1px solid #000000;
border-radius:50%;
flex: none;
order: 1;
flex-grow: 0;
`;


const StyledRombo = styled.div`
width: 55px;
height: 55px;
/* margin-left:50%; */
/* margin-bottom: 5%; */
background: #E64C63;
transform: rotate(44deg);
border-radius:2px solid black;
`;


const BodyHome = () => {
    return ( 
        <StyledWrapper>
        <StyledDivision>
        <StyledContainer>
          <StyledRombo></StyledRombo>
          </StyledContainer>
           <StyledLabel>
          <Label  msn="Pilotaje" titleRed={true}></Label>
          </StyledLabel>
            <StyledContainer>
              <Label textLarge={true} estilo msn="Un robot es un sistema complejo que tiene una estructura mecánica articulada. Para que su funcionamiento se adapte a las actividades a realizar por su “comportamiento” (movimiento, operación) debe ser esquematizado en un modelo matemático que tenga en cuenta los vínculos de causa y efecto entre los diversos órganos constituyentes (órganos mecánicos, órganos sensoriales, órganos de control)."></Label>
            </StyledContainer>
            <StyledContainer>
            <StyledCircle></StyledCircle>
            <StyledCircleWhite></StyledCircleWhite>
            <StyledCircle></StyledCircle>
            </StyledContainer>
        </StyledDivision>
        <StyledDivision> 
           <Label msn="Derecha" estilo={true}></Label>
           <Image src={"src/images/robot.png"} op={1}></Image>
        </StyledDivision>
        </StyledWrapper>
     );
}
 
export default BodyHome;