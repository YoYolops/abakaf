import { useContext, useState } from "react"
import styled from "styled-components"
import { Expander, Description, Header } from "../Info/styles"
import { updatePaymentStatus } from "../../services/root"
import RootContext from "../context/RootContext"
import Spinner from "../Spinner"

export default function DashBoard({ users, setUsers }) {
    const [ clicked, setClicked ] = useState(-1)
    const [ userSelected, setUserSelected ] = useState({})
    const { rootKey } = useContext(RootContext)
    const [ isLoading, setIsLoading ] = useState(false);

    async function updatePayment() {
        const proceed = prompt(
            `Você está prestes a enviar um email para ${userSelected.name} confirmando o pagamento da matrícula,
            Essa operação é irreversível. Deseja prosseguir?
            CLIQUE EM 'OK' PARA PROSEGUIR,
            CLIQUE EM 'CANCELAR' PARA CANCELAR
            `
        )

        if(proceed === null) return;
        
        setIsLoading(true)
        console.log(userSelected.email)
        const response = await updatePaymentStatus(userSelected.email, rootKey);
        console.log(response)
        if(response) {
            const newUsers = users.map(user => {
                if(user.id === userSelected.id) return {
                    ...user,
                    paymentStatus: true
                }
                return {...user}
            })
            setUsers(newUsers)
            setUserSelected({})
            setIsLoading(false)
        } else {
            alert("Alguma coisa deu errado")
            setIsLoading(false)
            setUserSelected({})
        }
    }

    return (
        <DashBoardContainer>
            <PaymentUpdater
                disabled={(userSelected.paymentStatus === undefined ?  true : userSelected.paymentStatus)}
                onClick={updatePayment}
            >
                {`Atualizar matricula de ${userSelected.name?.split(" ")[0] || "?"} para Pago`}
            </PaymentUpdater>
            {
                isLoading
                    ? <Spinner bg="#e8ae10" color="#fff"/>
                    : void(0)
            }
            <Head>
                <HeadTitle>Usuários cadastrados via web</HeadTitle>
                <LegendSection>
                    <LegendBox color="#00b518"/><p>Pagamento Realizado</p>
                </LegendSection>
                <LegendSection>
                    <LegendBox color="#aa2933"/><p>Pagamento Pendente</p>
                </LegendSection>
            </Head>

        {
            users.map((user, index) => (
                <UserContainer 
                    key={user.id}
                    colorize={user.paymentStatus}
                    onClick={ () => {
                        console.log(userSelected.paymentStatus)
                        if(clicked === index) {
                            setClicked(-1)
                            setUserSelected({})
                            return;
                        }
                        setClicked(index)
                        setUserSelected(user)
                }}>
                    <Header>
                        {user.name}
                    </Header>
                    <Expander
                        initial="initial"
                        animate={clicked === index ? "animate" : "initial"}
                        variants={variants}
                    >
                        <Description
                            animate={clicked === index ? "animate" : "initial"}
                            variants={contentVariants}
                        >
                            {`Sexo: ${user.gender},`}<br />
                            {`Nasc.: ${user.birth},`}<br />
                            {`RG: ${user.rg},`}<br />
                            {`email: ${user.email},`}<br />
                            {`Celular: ${user.cellphone},`}<br />
                            {`Telefone Res.: ${user.telephone},`}<br />
                            {`Status Pagamento: ${user.paymentStatus ? "Pago" : "Pendente"},`}<br />
                        </Description>
                    </Expander>
                </UserContainer>
            ))
        }

        </DashBoardContainer>
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

const Head = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 40px;
`
const HeadTitle = styled.h1`
    color: #fff;
    font-size: 24px;
    font-weight: bolder;
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
`

const LegendSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5px;
`

const LegendBox = styled.div`
    width: 40px;
    height: 25px;
    background-color: ${props => props.color};
`

const UserContainer = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: bolder;
    background-color: ${props => props.colorize ? "#00b518" : "#aa2933"};
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
`

const DashBoardContainer = styled.div`
    padding: 10px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const PaymentUpdater = styled.button`
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #e8ae10;
    width: 100%;
    height: 40px;
`