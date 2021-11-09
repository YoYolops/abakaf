import styled from 'styled-components';
import { GiPuzzle } from 'react-icons/gi';

import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <LandingPageContainer>
            <Header>
                <GiPuzzle size={80}/>
                <HeaderTextContainer>
                    <h1>Curso ABA</h1>
                    <h2>Várzea Alegre - CE</h2>
                </HeaderTextContainer>
            </Header>

            <Presentation>
                <h1>Apresentação</h1>
                <div>
                    <p>
                        Análise do Comportamento
                        Aplicada, como é conhecida no Brasil trata-se de uma
                        abordagem da psicologia comportamental que foi
                        adaptada e aplicada ao tratamento e ensino de
                        crianças portadoras de diversos transtornos e
                        psicopatologias, como Transtorno do Espectro Autista
                        (TEA), Transtorno de Déficit de Atenção e
                        Hiperatividade (TDAH), Transtorno OpositorDesafiador (TOD), dentre outros. Baseia-se nos
                        princípios de reforço positivo, solicitações graduais,
                        repetição e as divisão das tarefas em pequenas partes,
                        ensinadas inicialmente em separado. 
                    </p>

                    <Badge>
                        <div className="ring">
                            <p>VAGAS</p>
                            <p className="central">LIMITADAS</p>
                            <p>RESERVE!</p>
                        </div>
                    </Badge>
                </div>
            </Presentation>

            <Directions>
                <Link to="/info">Mais informações</Link>
                <Link to="/" id="second">Inscrições encerradas</Link>
                <a href="https://wa.me/5588996988968" target="_blank" rel="noreferrer" id="third">Contate-nos</a>
            </Directions>
            
        </LandingPageContainer>
    )
}

const LandingPageContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: rgb(246,245,251);
    background: linear-gradient(45deg, rgba(246,245,251,1) 50%, rgba(255,255,255,1) 50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 60px 20px 20px 20px;
    overflow: hidden;
`

const Header = styled.header`
    width: 100%;
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 60px;


    svg {
        transform: rotate(30deg);
        color: #2BC1C0;
    }
`

const HeaderTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 30px;
        color: #2BC1C0;
        font-weight: bolder;
        margin-bottom: 10px;
    }

    h2 {
        color: #2BC1C0;
    }
`

const Directions = styled.div`
    width: 100%;
    height: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        height: 46px;
        width: 220px;
        text-align: center;
        line-height: 46px;
        border-radius: 23px;
        background-color: red;
        cursor: pointer;
        margin-bottom: 10px;
    }

    #second {
        background-color: #E9D61A;
    }

    #third {
        background-color: #00a54b;
    }
`
const Presentation = styled.div`
    margin-top: 20px;
    margin-bottom: 60px;
    border-radius: 5px;
    border-top: 2px solid #2BC1C0;
    width: 100%;
    max-width: 600px;
    padding-top: 40px;
    padding-bottom: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #2BC1C0;
    position: relative;

    h1 {
        font-size: 20px;
        font-weight: bolder;
        margin-bottom: 20px;
        color: #fff;
        width: 100%;
        text-align: left;
        padding: 0px 0px 10px 20px;
        border-bottom: 2px solid #fff;
    }

    div {
        padding: 20px;
        line-height: 20px;

        p {
            color: #fff;
            font-weight: bolder;
        }
    }
`

const Badge = styled.div`
    position: absolute;
    top: -28px;
    right: -19px;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.6) rotate(25deg);

     .ring {
        width: 140px;
        height: 140px;
        border-radius: 70px;
        border: 5px solid #B7E7F1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .central {
            background-color: #A41859;
            width: 180px;
            height: 30px;
            text-align: center;
            color: #fff;
            font-weight: bold;
            line-height: 30px;
            border-radius: 3px;
        }

        p {
            color: #A41859;
            font-weight: bold;
            margin-bottom: 5px;
            text-justify: inter-word;
        }
     }
`