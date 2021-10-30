
import styled from 'styled-components';
import { GiGraduateCap, GiOnTarget } from 'react-icons/gi';
import { IoIosCloseCircle } from 'react-icons/io';
import { BiBookContent } from 'react-icons/bi';
import { FaFeatherAlt } from 'react-icons/fa';
import { useState } from 'react';

import TeacherInfo from './TeacherInfo';
import TargetAudience from './TargetAudience';
import ProgramaticContent from './ProgramaticContent';
import Methodology from './Methodology';

export default function Info() {
    const [ teacherActive, setTeacherActive ] = useState(false)
    const [ targetPublic, setTargetPublic ] = useState(false)
    const [ content, setContent ] = useState(false)
    const [ methodology, setMethodology ] = useState(false)

    function toggle(stateSetter) {
        stateSetter(prevState => !prevState)
    }

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

const variants = {
    initial: {
        height: 0,
        transition: {
            delay: .2,
        },
    },
    animate: {
        height: "unset",
    },
}

const picVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: .2,
        },
    },

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

