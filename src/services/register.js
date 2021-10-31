import API from './API';

export default async function register(finalData) {
    try {
        const response = await API.post("/register", finalData)
        return {
            success: true,
            data: response.data
        }
    } catch(e) {
        if(e.response.status === 409) return {
            success: false,
            message: "Você já está inscrito e não pode se inscrever de novo"
        }
        return {
            success: false,
            message: "Desculpe, algo está errado com nossos servidores"
        }
    }
}