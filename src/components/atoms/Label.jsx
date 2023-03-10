import styled  from 'styled-components';

const StyledLabel = styled.label`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
line-height: 33px;
margin-left:10px;

color: ${props => props.estilo ? '#000' : '#fff'};
font-size: ${props => props.pequenio ? '14px' : '24px'};

${props => props.titleRed && `
color:#EC7474;
font-size:2rem;
`};

${props => props.textLarge && `


font-family: 'Open Sans';
font-style: normal;
font-weight: 4.0rem;
font-size: 1rem;
line-height: 1rem;
text-align: justify;
padding:5%;
order: 0;
flex-grow: 0;
`};

`;

function Label({msn, estilo , pequenio , titleRed , textLarge}) {
    return ( 
        <StyledLabel estilo={estilo} pequenio={pequenio} textLarge={textLarge} titleRed={titleRed}>{msn}</StyledLabel>
     );
}

export default Label;