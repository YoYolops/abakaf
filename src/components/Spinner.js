import { CgSpinnerAlt } from 'react-icons/cg';
import styled from 'styled-components';

export default function Spinner({ color, bg }) {
    return (
        <SpinnerContainer bg={bg ? bg : "inherit"}>
            <CgSpinnerAlt className="spinner" size={60} color={color ? color : "#8C11BE"}/>
        </SpinnerContainer>
    )
}

const SpinnerContainer = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${ props => props.bg };
    display: flex;
    align-items: center;
    justify-content: center;
    .spinner {
        animation: rotate 1s linear infinite;
    }
    
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`