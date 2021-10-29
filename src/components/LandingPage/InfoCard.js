import { motion } from "framer-motion"
import styled from "styled-components"

export default function InfoCard({ children, title, description, color }) {
    return (
        <InfoCardContainer bgcolor={color}>
                { children }
                <h1>{title}</h1>
        </InfoCardContainer>
    )
}

const InfoCardContainer = styled(motion.div)`
    width: 240px;
    padding: 10px;
    height: 80px;
    border-radius: 0px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgcolor};
    overflow: hidden;

    h1 {
        font-size: 18px;
        font-weight: bolder;
        color: #fff;
        margin-left: 10px;
    }
`
