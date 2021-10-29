import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function User({ setUser, user }) {
    const [ name, setName ] = useState(user.name ?? "")
    const [ gender, setGender ] = useState(user.gender ?? "")
    const [ birth, setBirth ] = useState(user.birth ?? "")

    useEffect(() => {
        setUser({
            name,
            gender,
            birth
        })
        return () => {
            setUser({
                name,
                gender,
                birth
            })
        }
    }, [name, gender, birth])

    return (
        <UserForm
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
            <h1>Primeiro precisamos saber quem é você!</h1>
            <input 
                type="text"
                placeholder="Nome"
                onChange={ e => {
                    console.log("data changed")
                    setName(e.target.value)} }
                value={name}
            />
            <label>Sexo:</label>
            <select name="Sexo" value={gender} onChange={ e => setGender(e.target.value) }>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
            </select>
            <label>Data de nascimento</label>
            <input type="date" value={birth} onChange={e => {
                console.log("data changed")
                setBirth(e.target.value)
            }}></input>
        </UserForm>
    )
}

const UserForm = styled(motion.div)`
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

    label {
        color: #fff;
        margin-bottom: 4px;
    }

    input, select {
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