import API from './API';

export default async function register(finalData) {
    try {
        const response = await API.post("/register", finalData)
        console.log(response)
        return {
            success: true,
            data: response.data
        }
    } catch(e) {
        if(e.response?.status === 409) return {
            status: 409,
            success: false,
            message: "Você já está inscrito e não pode se inscrever de novo"
        }
        if(e.response?.status === 409) return {
            status: 409,
            success: false,
            message: "Você já está inscrito e não pode se inscrever de novo"
        }
        if(e.response?.status === 400) return {
            status: 400,
            success: false,
            message: "Algum(s) dados inseridos parecem ser falso(s), portanto sua inscrição foi bloqueada. Tente novamente com dados válidos"
        }
        return {
            status: 500,
            success: false,
            message: "Desculpe, algo está errado com nossos servidores"
        }
    }
}