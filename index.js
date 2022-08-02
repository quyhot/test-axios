const axios = require('axios').default;
const token = 'YOUR-TOKEN'

const getTest = async () => {
    const a = await axios({
        method: 'GET',
        url: 'http://192.168.16.40:8000/faq',
        headers: {
            'x-access-token': token
        }
    });
    console.log(a.data)
}

const postTest = async (data) => {
    const a = await axios({
        method: 'POST',
        url: 'http://192.168.16.40:8000/faq',
        headers: {
            'x-access-token': token
        },
        data
    });
    console.log(a.data)
}

data = {
    "question": "xe nao xau vl",
    "category": [0],
    "userType": 1
}

getTest()
postTest(data)


