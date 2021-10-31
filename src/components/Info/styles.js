import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
`

export const Expander = styled(motion.div)`
    width: 100%;
    display: block;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.p`
    font-size: 18px;
    font-weight: bolder;
    margin-right: 10px;
`

export const Description = styled(motion.p)`
    font-size: 16px;
    line-height: 18px;
`