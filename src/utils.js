//新建Cookie
export function setCookie(name, value, expires) {
    document.cookie = `${name}=${value};expires=${expires}`
}

//根据name查找Cookie
export function getCookie(name) {
    let cookies = document.cookie.split(';')
    for (let index in cookies) {
        if (cookies[index].trim().split('=')[0] === `${name}`) {
            return cookies[index].trim().split('=')[1]
        }
    }
}

//时间戳转日期
export function tsToDate(timestamp) {
    let date = new Date(parseInt(timestamp)).toLocaleString().replace(/:\d{1,2}$/,' ');
    if (date !== null) {
        return date
    } else {
        return 'error'
    }
}

//日期转时间戳
export function dateToTimestamp(date) {
    let timestamp = (new Date(date)).getTime()
    if (isNaN(timestamp)) {
        return 0
    } else {
        return timestamp
    }
}