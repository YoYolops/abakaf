import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Confirmation({ finalData }) {
    useEffect(() => {console.log(finalData)}, [])

    return (
        <ConfirmationContainer
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
            <h1>{`Olá, ${finalData.user?.name.split(" ")[0]}`}</h1>
            <h2>Verifique se os dados que inseriu estão corretos: </h2>
            <DataRevision>
                <InputRevision>
                    <p className="title">Nome: </p>
                    <p>{finalData.user.name}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">Sexo: </p> 
                    <p>{finalData.user.gender}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">Data nasc.: </p>
                    <p>{finalData.user.birth}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">RG: </p>
                    <p>{finalData.userData.rg}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">E-mail: </p>
                    <p>{finalData.userData.email}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">Cel.: </p>
                    <p>{finalData.userData.cellphone}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">Tel.: </p>
                    <p>{finalData.userData.telephone}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">Cidade: </p>
                    <p>{finalData.address.city}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">UF: </p>
                    <p>{finalData.address.uf}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">Bairro: </p>
                    <p>{finalData.address.neighborhood}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">Número: </p>
                    <p>{finalData.address.number}</p>
                </InputRevision>
                <InputRevision>
                    <p className="title">Complemento: </p>
                    <p>{finalData.address.complement}</p>
                </InputRevision>
            </DataRevision>

        </ConfirmationContainer>
    )
}

const ConfirmationContainer = styled(motion.div)`
    padding-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 22px;
        font-weight: bolder;
        color: #fff;
        margin-bottom: 15px;
    }

    h2 {
        color: #fff;
        font-weight: bold;
        margin-bottom: 20px;
    }
`

const DataRevision = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-top: 2px solid #fff;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
`

const InputRevision = styled.section`
    width: 100%;
    padding-bottom: 5px;
    border: 3px solid #fff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .title {
        background-color: #fff;
        width: 100%;
        color: #F38181;
        font-size: 18px;
        font-weight: bolder;
        margin-bottom: 5px;
    }

    p {
        padding: 3px;
        text-align: center;
        font-size: 16px;
        font-weight: bolder;
    }
`