import { useState, useContext } from 'react';
import styled from 'styled-components';
import { getUsers } from '../../services/root';
import RootContext from '../context/RootContext';
import Spinner from '../Spinner';

export default function RootAuth({ setUsers }) {
    const { setRootKey } = useContext(RootContext)
    const [ insertedRootKey, setInsertedRootKey ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)

    async function rootAuth() {
        setIsLoading(true)
        if(insertedRootKey === "" || insertedRootKey.length !== 32) {
            alert("Chave Inválida")
            setIsLoading(false)
            return;
        }

        const registeredUsers = await getUsers(insertedRootKey) 
        if(registeredUsers) {
            setRootKey(insertedRootKey)
            setUsers(registeredUsers)
            return;
        }

        alert("Chave Inválida")
        setIsLoading(false)
    }


    return (
        <RootAuthContainer>
            {
                isLoading
                    ? <Spinner bg="#e8ae10" color="#fff" />
                    : void(0)
            }
            <RootInput
                placeholder="Insira a chave mestra"
                value={insertedRootKey}
                type="text"
                onChange={e => { setInsertedRootKey(e.target.value) }}
            />
            <RootLog
                onClick={rootAuth}
            >
                Entrar
            </RootLog>
        </RootAuthContainer>
    )
}

const RootAuthContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const RootInput = styled.input`
    height: 64px;
    width: 300px;
    background-color: inherit;
    border-radius: 5px;
    border: 2px solid #e8ae10;
    outline: none;
    color: #fff;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 20px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #fff;
    }
    :-ms-input-placeholder {
        color: #fff;
    }
`

const RootLog = styled.button`
    width: 100px;
    height: 32px;
    border-radius: 5px;
    background-color: #e8ae10;
    border: none;
    outline: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`