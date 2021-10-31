import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import User from './User.js';
import UserData from "./UserData.js";
import Address from "./Address.js";
import Confirmation from "./Confirmation.js";
import Alert from "../Alert.js";
import Spinner from '../Spinner.js';
import register from "../../services/register.js";
import Inscription from "./Inscription.js";

export default function Registration() {
    const history = useHistory()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [ user, setUser ] = useState({
        gender: "F"
    })
    const [ userData, setUserData ] = useState({})
    const [ address, setAddress ] = useState({
        uf: "AC"
    })
    const [ stage, setStage ] = useState(0);
    const [ alert, setAlert ] = useState({
        active: false,
        message: ""
    })
    const [ serverResponse, setServerResponse ] = useState({})

    useEffect(() => {
        if(Object.keys(serverResponse).length) {
            if(serverResponse.success) setStage(prevState => prevState + 1)
            else {
                history.push("/error", {
                    error: serverResponse.message
                })
            }
        }
    }, [setStage, serverResponse, history])

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
            if(!userData.email || userData.email.trim() === "" || !emailRegex.test(userData.email)) {
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

    const renderStage = {
        "0": <User user={user} setUser={setUser}/>,
        "1": <UserData userData={userData} setUserData={setUserData}/>,
        "2": <Address address={address} setAddress={setAddress}/>,
        "3": <Confirmation finalData={{ user, userData, address }}/>,
        "4": <Spinner color="#fff"/>,
        "5": <Inscription name={serverResponse.data?.name} token={serverResponse.data?.userId} />
    }

    return (
        <RegistrationContainer>
            <Alert active={alert.active} message={alert.message}/>
            { renderStage[`${stage}`] }
            <div>
                <StageButton
                    hide={stage === 5}
                    id="back"
                    onClick={() => {
                        if(stage > 0) setStage(prevState => prevState - 1);
                        else if(stage === 0) history.push("/")
                    }}
                >
                    {stage < 3 ? "Voltar" : "Voltar e corrigir"}
                </StageButton>
                <StageButton
                    hide={stage === 5}
                    id="next"
                    onClick={async () => {
                        if(!dataValidator()) return;
                        if(stage < 3) {
                            setStage(prevState => prevState + 1)
                        }
                        if(stage === 3) {
                            setStage(prevState => prevState + 1)
                            const resp = await register({user, userData, address});
                            setServerResponse(resp);
                        }
                    }}
                    disabled={!(stage < 4)}
                >
                    {stage < 3 ? "Próximo" : "Finalizar"}
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
    display: ${ props => props.hide ? "none" : "unset" };
    border: none;
    outline: none;
    cursor: pointer;
`