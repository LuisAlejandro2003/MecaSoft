import styled from "styled-components";

const StyledImg = styled.img`
    ${
        props => {
            switch(props.op) {
                case 1:
                    return `
                        height: 10%;
                        width: 70%;
                    `;
                case 2:
                    return `
                        height: 19px;
                        width: 212px;
                        font-size: 12px;
                    `;
                case 3:
                    return `
                        height: 41px;
                        width: 212px;
                        font-size: 16px;
                    `;
                case 4:
                    return `
                        width: 231px;
                        height: 32px;
                        font-size: 11px;
                    `;
            }
        }
    }
`;

function Image({src, op}) {
    return (
        <StyledImg src={src} op={op}></StyledImg>
    );
}




export default Image;