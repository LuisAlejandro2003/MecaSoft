import styled from 'styled-components';
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

const StyledContainerInputs = styled.div`
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
    position: relative;
    margin-bottom: 5%;
    font-family: 'Fenix';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2%;
    text-align: justify;
`;
const StyledInput= styled.input`
    background: #EEF1F0;
    width:${props => props.tamanio ?  '72%' : '80%'};
    height: 50px;
    padding: 0 10%;
    border-radius: 8px;
    border: none;
`;
const StyledImg = styled.img`
    position: absolute;
    top: 9%;
    left: ${props => props.tamanioI ?  '10%' : '14%'};
    width: 10%;
    height: 70%;
`;

function GroupInput({src, tamanioI ,tamanio, type, placeholder}) {

    return ( 
    <StyledContainerInputs>
    <StyledImg tamanioI={tamanioI} src={src} />
    <StyledInput tamanio={tamanio} type={type} placeholder={placeholder} />
    </StyledContainerInputs>
    );
}

export default GroupInput;