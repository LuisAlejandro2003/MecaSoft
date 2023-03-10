import styled from "styled-components";
import Titulo from "../components/atoms/Titulo";
import Icon from "../components/atoms/Icon";
import { images } from "../images/images";

const StyledContainer = styled.div`
    margin: 14%;
`;

const StyledImg = styled.div`
    width: 20%;
    height: 30%;
    margin-left: 40%;
`;

function NotFound() {
    return ( 
    <>
    <StyledContainer>
        <Titulo msn={"404. Pagina no encontrada"} />
            <StyledImg>
                <Icon src={images.robot} />
            </StyledImg>   
    </StyledContainer>
    
    </> );
}

export default NotFound;