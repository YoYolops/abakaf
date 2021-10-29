import { useEffect, useState } from "react";
import styled from "styled-components";
import User from './User.js';
import UserData from "./UserData.js";
import Address from "./Address.js";
import Confirmation from "./Confirmation.js";
import Alert from "../Alert.js";

export default function Registration() {
    const [ user, setUser ] = useState({})
    const [ userData, setUserData ] = useState({})
    const [ address, setAddress ] = useState({
        uf: "AC"
    })
    const [ stage, setStage ] = useState(0);
    const [ alert, setAlert ] = useState({
        active: false,
        message: ""
    })

    useEffect(() => {console.log(user)}, [])

    function dataValidator() {
        if(stage === 0) {
            if(!user.name || user.name.trim() === "") {
                setAlert({
                    active: true,
                    message: "Insira seu nome"
                })
                return false
            }
            if(!user.birth || user.birth.trim() === "") {
                console.log(user.birth)
                setAlert({
                    active: true,
                    message: "Insira sua data de nascimento"
                })
                return false;
            }
        }
        if(stage === 1) {
            if(!userData.rg || userData.rg.trim() === "") {
                setAlert({
                    active: true,
                    message: "Insira seu rg",
                })
                return false
            }
            if(!userData.email || userData.email.trim() === "") {
                setAlert({
                    active: true,
                    message: "Insira seu e-mail",
                })
                return false
            }
            if(!userData.cellphone || userData.cellphone.trim() === "") {
                setAlert({
                    active: true,
                    message: "Insira um número de celular",
                })
                return false
            }
        }
        if(stage === 2) {
            if(!address.city || address.city.trim() === "") {
                setAlert({
                    active: true,
                    message: "Insira o nome da cidade",
                })
                return false;
            }
            if(!address.neighborhood || address.neighborhood.trim() === "") {
                setAlert({
                    active: true,
                    message: "Insira o nome do seu bairro",
                })
                return false;
            }
            if(!address.number || address.number.trim() === "") {
                setAlert({
                    active: true,
                    message: "Insira um número",
                })
                return false;
            }
            
        }
        setAlert({
            active: false,
            message: "",
        })
        return true;
    }

    return (
        <RegistrationContainer>
            <Alert active={alert.active} message={alert.message}/>
            {
                stage === 0 
                    ? <User user={user} setUser={setUser}/>
                    : stage === 1
                        ? <UserData userData={userData} setUserData={setUserData}/>
                        : stage === 2
                            ? <Address address={address} setAddress={setAddress}/>
                            : <Confirmation finalData={{ user, userData, address }}/>
                        
            
            }
            <div>
                <StageButton id="back" 
                    onClick={() => {
                        if(stage > 0) setStage(prevState => prevState - 1)
                    }}
                    disabled={!stage}
                >
                    Voltar
                </StageButton>
                <StageButton id="next"
                    onClick={() => {
                        if(!dataValidator()) return;
                        console.log("next")
                        if(stage < 3) {
                            setStage(prevState => prevState + 1)
                        }
                    }}
                    disabled={!(stage < 3)}
                >
                    Próximo
                </StageButton>
            </div>
        </RegistrationContainer>
    )
}

const RegistrationContainer = styled.div`
    padding: 20px;
    min-height: 100vh;
    background-color: #F38181;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    div {
        width: 100%;
        max-width: 500px;
        display: flex;
        justify-content: space-around;
        margin-top: 0px;
        margin-bottom: 20px;
    }

    #back {
        background-color: inherit;
        color: #fff;
        font-size: 16px;
        font-weight: bolder;
        border-bottom: 1px solid #fff;
        border-radius: 0px;
    }

    #next {
        background-color: #fff;
        color: #F38181;
        font-size: 16px;
        font-weight: bolder;
        height: 42px;
        width: 100px;
        border-radius: 21px;
    }
    
`

const StageButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
`