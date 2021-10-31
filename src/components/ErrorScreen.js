import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useLayoutEffect } from 'react';

export default function ErrorScreen() {
    const history = useHistory();

    useLayoutEffect(() => {
        if(!history.location.state) window.location.href = "/"
    }, [history])

    return (
        <ErrorContainer>
            <ErrorCode>{`Erro ${history.location.state?.status}`}</ErrorCode>
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_zlix1k9x.json"  background="transparent"  speed="1"  style={{width: "100%", height: "300px"}}  loop  autoplay></lottie-player>
            <MessageContainer>
                <ErrorMessage>
                    { history.location.state?.error }
                </ErrorMessage>
            </MessageContainer>
        </ErrorContainer>
    )
}

const ErrorContainer = styled.div`
    background-color: #fff;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #FF2E63;
    padding-top: 20px;
`

const MessageContainer = styled.div`
    width: 90%;
    max-width: 300px;
`

const ErrorMessage = styled.p`
    font-size: 18px;
    color: #FF2E63;
    font-weight: bolder;
    text-align: center;
    line-height: 22px;
`

const ErrorCode = styled.h1`
    font-size: 32px;
    color: #FF2E63;
    font-weight: bolder;
    text-align: center;
`