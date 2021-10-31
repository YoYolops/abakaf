import ktpic from '../../assets/ktpic.jpeg';
import marpic from '../../assets/marlon.png';
import aclev from '../../assets/aclevia.png';
import { GiGraduateCap } from 'react-icons/gi';
import { IoIosCloseCircle } from 'react-icons/io';
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Header, Title, Expander, Description } from './styles.js'

export default function TeacherInfo() {
    const [ isClicked, setIsClicked ] = useState(false)

    function toggle() {
        setIsClicked(prevState => !prevState)
    }

    return (
        <TeacherInfoContainer onClick={toggle}>
            <Header>
                <Title>Professores</Title>
                {
                    isClicked
                        ? <IoIosCloseCircle size={28}  color="#191919"/>
                        : <GiGraduateCap size={28} color="#191919"/>
                }
            </Header>
            <Expander
                initial="initial"
                animate={isClicked ? "animate" : "initial"}
                variants={variants}
            >
                <Picture 
                    src={ktpic}
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                />
                <Name
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Kátia Macêdo Duarte
                </Name>
                <Description
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Possui graduação em Pedagogia pela Universidade Federal de Campina Grande (2008), Especialização em Educação em Direitos Humanos (UFPB/2014) e em Educação: Política de Igualdade Racial no Ambiente Escolar (UFRPE/2015). Trabalha na E.M.E.F Maria das Chagas Candeia no Ensino Fundamental e na Educação Infantil, Mestre em Ensino pelo Programa de Pós-graduação em Ensino (PPGE) da Universidade do Estado do Rio Grande do Norte (UERN), Campus Avançado Maria Elisa de Albuquerque Maia (CAMEAM), vinculada a Linha de Pesquisa: Ensino de Ciências Humanas e Sociais.
                </Description>

                <Picture 
                    src={marpic}
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                />
                <Name
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Marlon Lima
                </Name>
                <Description
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Psicopedagogo Clínico e Institucional, Consultor Educacional, Professor PEB I, Professor nos Cursos de Graduação em Pedagogia e Pós em Psicopedagogia.
                </Description>

                <Picture 
                    src={aclev}
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                />
                <Name
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Ana Clévia Gadelha
                </Name>
                <Description
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Psicopedagoga, Terapeuta ABA/TEA
                </Description>
            </Expander>
        </TeacherInfoContainer>
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

const TeacherInfoContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    max-width: 600px;
    border-bottom: 1px solid #191919;
    padding: 0px 10px 10px 10px;
    background-color: #F38181;
    border-radius: 5px;
    cursor: pointer;
`

const Picture = styled(motion.img)`
    max-width: 128px;
    max-height: 128px;
    border-radius: 64px;
    margin-bottom: 20px;
    margin-top: 20px;
`

const Name = styled(motion.p)`
    font-size: 18px;
    color: #191919;
    font-weight: bolder;
    margin-bottom: 10px;

`
