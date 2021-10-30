
import styled from 'styled-components';
import TeacherInfo from './TeacherInfo';
import TargetAudience from './TargetAudience';
import ProgramaticContent from './ProgramaticContent';
import Methodology from './Methodology';

export default function Info() {
    return (
        <InfoContainer>
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_vcwuvno3.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
            <TeacherInfo />
            <TargetAudience />
            <ProgramaticContent />
            <Methodology />
        </InfoContainer>
    )
}

const InfoContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    background-color: #FCE38A;
    color: #191919;
    display: flex;
    flex-direction: column;
    align-items: center;
`

