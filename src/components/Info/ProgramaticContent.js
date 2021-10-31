import { IoIosCloseCircle } from 'react-icons/io';
import { BiBookContent } from 'react-icons/bi';
import { Header, Title, Expander, Description } from './styles.js'
import { useState } from "react";
import styled from "styled-components";

export default function ProgramaticContent() {
    const [ isClicked, setIsClicked ] = useState(false)

    function toggle() {
        setIsClicked(prevState => !prevState)
    }

    return (
        <ProgramaticContentContainer onClick={toggle}>
            <Header>
                <Title>Conteúdo Programático</Title>
                {
                    isClicked
                        ? <IoIosCloseCircle size={28}  color="#191919"/>
                        : <BiBookContent size={28} color="#191919"/>
                }
            </Header>
            <Expander
                initial="initial"
                animate={isClicked ? "animate" : "initial"}
                variants={variants}
            >
                <Description
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Conceitos básicos da análise do comportamento<br />
                    – Breve histórico da ABA<br />
                    – Procedimentos de ensino: ensino incidental,
                    ensino por tentativa discreta, modelagem,
                    encadeamento de respostas e análise de tarefas,
                    sistema de dicas (níveis de ajuda),
                    emparelhamento com o modelo, fading, esquemas
                    de reforçamento, reforçamento diferencial, treino
                    discriminativo.<br />
                    – Aplicação dos procedimentos no plano
                    individual de ensino aplicado em contextos
                    clínicos, terapêuticos e educacionais.
                </Description>
            </Expander>
        </ProgramaticContentContainer>
    )
}

const variants = {
    initial: {
        height: 0,
        transition: {
            type: "spring",
            delay: .2,
            damping: 25,
            stiffness: 200
        },
    },
    animate: {
        height: "auto",
    },
}

const contentVariants = {
    initial: {
        opacity: 0,
        transition: {
            duration: .1,
        },
    },
    animate: {
        opacity: 1,
        transition: {
            delay: .2,
        },
    }
}

const ProgramaticContentContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    max-width: 600px;
    border-bottom: 1px solid #191919;
    padding: 0px 10px 10px 10px;
    background-color: inherit;
    border-radius: 5px;
    cursor: pointer;
`