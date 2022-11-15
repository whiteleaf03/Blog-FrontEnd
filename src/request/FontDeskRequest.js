import axios from "axios";

//获取中二病语句
export async function getChunibyou() {
    let result;
    await axios({
        url: '/fd/api/chunibyou',
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            random: 1
        }
    }).then((response) => {
        result = response.data;
    })
    return result;
}

export async function postComment(nickname, email, text, date) {
    let result;
    await axios({
        url: '/fd/api/comment',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            nickname: nickname,
            email: email,
            text: text,
            date: date
        })
    }).then((response) => {
        result = response.data;
        console.log(result)
    })
    return result;
}

export async function getSaysay() {
    let result;
    await axios({
        url: '/fd/api/saysay',
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        result = response.data;
    })
    return result;
}

export async function getMessage() {
    let result;
    await axios({
        url: '/fd/api/comment',
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        result = response.data;
    })
    return result;
}