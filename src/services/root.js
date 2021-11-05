import API from './API.js';


async function getUsers(key) {
    try {
        const response = await API.get("/root/users", {
            headers: {
                "Authorization": `Bearer ${key}`
            }
        })

        if(response.data) return response.data;
        return false;
    } catch(e) {
        return false
    }
}

async function updatePaymentStatus(email, key) {
    try {
        const response = await API.post("/root/paymentconfirmation", {
            email,
            rootKey: key
        })
        if(response.data) return response.data
        return false
    } catch(e) {
        return false
    }
}

export {
    getUsers,
    updatePaymentStatus
}