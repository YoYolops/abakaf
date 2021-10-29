import styled from "styled-components";
import { motion } from "framer-motion";

export default function Alert({ message, active }) {
    return(
        <AlertBackground
            initial="unactive"
            animate={active ? "active" : "unactive"}
            variants={variants}
        > 
            <p>{message}</p>
        </AlertBackground>
    )
}

const variants = {
    unactive: {
        height: 0,
    },
    active: {
        height: "42px",
    }

}

const AlertBackground = styled(motion.div)`
    width: 100%;
    background-color: #fff;
    border-left: 4px solid #ef4325;
    border-radius: 0px 0px 10px 10px;
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 22px;
        font-weight: bolder;
        color: #ef4325;
    }
`