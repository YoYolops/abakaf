import styled from 'styled-components';
import qr from '../../assets/qr.png';
import { MdContentCopy, MdDone } from 'react-icons/md';
import { ImCopy } from 'react-icons/im';
import { useState } from 'react';

export default function Inscription({ name, token }) {
    const [ qrCopyClicked, setQrCopyClicked ] = useState(false);
    const [ pixClicked, setPixClicked ] = useState(false);

    function unclick(wich) {
        setTimeout(() => {
            wich === 'qr'
                ? setQrCopyClicked(false)
                : setPixClicked(false)
        }, [3000])
    }

    return (
        <InscriptionContainer>
            <Head>{`Tudo certo, ${name.split(" ")[0]} !`}</Head>
            <Text>Sua inscrição será efetivada quando o pagamento for realizado. <br/> Você pode pagar via pix :</Text>
            <Value>R$ 130,00</Value>
            <QrCode>
                <img src={qr} alt=""/>
            </QrCode>
            <InstructionText>Abra o app em que vai fazer a transferência, escaneie a imagem ou cole o código do QR Code</InstructionText>
            <CopyButton onClick={() => {
                navigator.clipboard.writeText("00020126580014BR.GOV.BCB.PIX01364cf4ffc2-0f2a-41b6-9eca-0f52f04650435204000053039865406130.005802BR5921Yohan Lopes Rodrigues6009SAO PAULO61080540900062070503***6304D52C")
                setQrCopyClicked(true)
                unclick('qr')
            }}>
                Copiar código do QR code
                {
                    qrCopyClicked
                        ? <MdDone color="#95E1D3"/>
                        : <MdContentCopy />
                }
            </CopyButton>
            <CopyButton onClick={() => {
                navigator.clipboard.writeText("4cf4ffc2-0f2a-41b6-9eca-0f52f0465043");
                setPixClicked(true);
                unclick('pix')
            }}>
                Copiar chave pix
                {
                    pixClicked
                        ? <MdDone color="#95E1D3" />
                        : <ImCopy />
                }
            </CopyButton>
        </InscriptionContainer>
    )
}

const InscriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 24px;
`

const Head = styled.h1`
    color: #fff;
    font-size: 24px;
    font-weight: bolder;
    margin: 20px 0px;
`
const Value = styled.h3`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`
const Text = styled.p`
    color: #fff;
    font-size: 19px;
    font-weight: bold;
    margin: 20px 0px;
    text-align: center;
`

const InstructionText = styled.p`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin: 20px 0px;
    text-align: center;
`

const QrCode = styled.section`
    background-color: #fff;
    width: 190px;
    height: 190px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;

    img {
        width: 178px;
        height: 178px;
    }
`

const CopyButton = styled.button`
    width: 320px;
    height: 60px;
    background-color: #EAFFD0;
    border-radius: 5px;
    border: none;
    outline: none;
    color: #F38181;
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;


    svg {
        margin-left: 10px;
    }
`