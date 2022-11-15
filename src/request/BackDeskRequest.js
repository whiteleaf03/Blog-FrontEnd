import axios from "axios";
import {getCookie} from "../utils.js";

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

export async function getAnalysis() {
    let result;
    await axios({
        url: '/bs/api/analysis',
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'token': getCookie('token')
        }
    }).then((response) => {
        result = response.data;
    })
    return result;
}

export async function getSaysay() {
    let result;
    await axios({
        url: '/bs/api/saysay',
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            token: getCookie('token')
        }
    }).then((response) => {
        result = response.data;
    })
    return result;
}

export async function postSaysay(date, text) {
    let result;
    await axios({
        url: '/bs/api/saysay',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            token: getCookie('token')
        },
        data: JSON.stringify({
            date: date,
            text: text
        })
    }).then((response) => {
        result = response.data;
    })
    return result;
}

export async function putSaysay(id, text) {
    let result;
    await axios({
        url: '/bs/api/saysay',
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            token: getCookie('token')
        },
        data: JSON.stringify({
            id: id,
            text: text
        })
    }).then((response) => {
        result = response.data;
    })
    return result;
}

export async function deleteSaysay(id) {
    let result;
    await axios({
        url: '/bs/api/saysay',
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            token: getCookie('token')
        },
        data: JSON.stringify({
            id: id
        })
    }).then((response) => {
        result = response.data;
    })
    return result;
}