import axios from "axios";

//登录请求
export async function login(username, password) {
    let result;
    await axios({
        url: '/bs/api/login',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            username: username,
            password: password
        })
    }).then((response) => {
        result = response.data;
    })
    return result;
}
