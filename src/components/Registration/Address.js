import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Address({ setAddress, address }) {
    const [ city, setCity ] = useState(address.city)
    const [ uf, setUf ] = useState(address.uf)
    const [ neighborhood, setNeighborhood ] = useState(address.neighborhood)
    const [ number, setNumber ] = useState(address.number)
    const [ complement, setComplement ] = useState(address.complement)

    useEffect(() => {
        setAddress({
            city,
            uf,
            neighborhood,
            number,
            complement
        }) 
        return () => {
            setAddress({
                city,
                uf,
                neighborhood,
                number,
                complement
            }) 
        }
    }, [city, uf, neighborhood, number, complement, setAddress])

    return (
        <AddressForm
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
                <h1>Agora falta só o seu endereço</h1>

            <input 
                type="text"
                placeholder="Cidade"
                onChange={ e => setCity(e.target.value) }
                value={city}
            />
            <label>UF:</label>
            <select name="UF" onChange={e => setUf(e.target.value)}>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="RS">RS</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="SP">SP</option>
                <option value="TO">TO</option>
            </select>
            <input 
                type="text"
                placeholder="Bairro"
                onChange={ e => setNeighborhood(e.target.value) }
                value={neighborhood}
            />
            <input 
                type="text"
                placeholder="Nº"
                onChange={ e => setNumber(e.target.value) }
                value={number}
            />
            <input 
                type="text"
                placeholder="Complemento"
                onChange={ e => setComplement(e.target.value) }
                value={complement}
            />
        </AddressForm>
    )
}

const AddressForm = styled(motion.div)`
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