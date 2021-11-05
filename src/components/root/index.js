import RootContext from "../context/RootContext"
import { useContext, useState } from "react"
import RootAuth from "./RootAuth.js";
import styled from "styled-components";
import Spinner from "../Spinner";
import DashBoard from './DashBoard.js'

export default function Root() {
    const { rootKey, isLoading } = useContext(RootContext)
    const [ users, setUsers ] = useState([])

    if(isLoading) return(
        <RootContainer>
            <Spinner />
        </RootContainer>
    )

    return (
        <RootContainer>
            {
                rootKey === ""
                    ? <RootAuth setUsers={setUsers}/>
                    : <DashBoard users={users} setUsers={setUsers}/>
            }
        </RootContainer>
    )
}

const RootContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #191919;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`