import styled from "styled-components";
const StyledContainerTop = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5%;
`;

const StyledContainerImg = styled.div`
    width: 90px;
    height: 80px;
    margin: 0% 1%;
`;

function Img({src}) {
    return ( 
    <>
        <StyledContainerTop>
            <StyledContainerImg>
                <img src={src} />
            </StyledContainerImg>
        </StyledContainerTop>
    </> 
    );
}

export default Img;