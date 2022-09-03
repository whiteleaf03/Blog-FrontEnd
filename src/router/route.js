import Home from '../components/Main/Home'
import Note from "../components/Main/Note";
import Saysay from "../components/Main/Saysay";
import Message from "../components/Main/Message";
import Eihei from "../components/Main/Eihei";

export const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/note',
        component: Note
    },
    {
        path: '/saysay',
        component: Saysay
    },
    {
        path: '/message',
        component: Message
    },
    {
        path: '/eihei',
        component: Eihei
    }
]