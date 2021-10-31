import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function UserData({ setUserData, userData }) {
    const [ rg, setRg ] = useState(userData.rg)
    const [ email, setEmail ] = useState(userData.email)
    const [ cellphone, setCellphone ] = useState(userData.cellphone)
    const [ telephone, setTelephone ] = useState(userData.telephone)

    useEffect(() => {
        setUserData({
            rg,
            email,
            cellphone,
            telephone
        })
        return () => {
            setUserData({
                rg,
                email,
                cellphone,
                telephone
            })
        }
    }, [rg, email, cellphone, telephone, setUserData])

    return (
        <UserDataForm
            layout
            initial={{ x: 300, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 1 }}
            transition={{
                x: {
                    type: "spring",
                    stiffness: 250,
                    damping: 20
                }
            }}
        >
            <h1>Agora vamos pedir algumas informações pessoais...</h1>
            <input 
                type="text"
                placeholder="RG*"
                onChange={ e => setRg(e.target.value) }
                value={rg}
            />
            <input 
                type="email"
                placeholder="E-mail*"
                onChange={ e => setEmail(e.target.value) }
                value={email}
            />
            <input 
                type="tel"
                placeholder="Tel. res. (opcional, somente números)"
                onChange={ e => setTelephone(e.target.value) }
                value={telephone}
            />
            <input 
                type="tel"
                placeholder="Nº Celular* (somente números)"
                onChange={ e => setCellphone(e.target.value) }
                value={cellphone}
            />

        </UserDataForm>
    )
}

const UserDataForm = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 300px;

    h1 {
        color: #fff;
        font-size: 24px;
        font-weight: bolder;
        width: 100%;
        text-align: center;
        margin-bottom: 40px;
    }

    input {
        margin-bottom: 20px;
        height: 42px;
        border: none;
        outline: none;
        border-radius: 3px;
        padding: 5px;
        font-size: 16px;
        font-weight: bolder;
        color: #F38181;
    }
`