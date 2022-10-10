import Home from '../components/FontDesk/Main/Home'
import Note from "../components/FontDesk/Main/Note";
import Saysay from "../components/FontDesk/Main/Saysay";
import Message from "../components/FontDesk/Main/Message";
import Eihei from "../components/FontDesk/Main/Eihei";
import Login from "../components/Login";
import FontDesk from "../components/FontDesk";

export const routes = [
    {
        path: '/',
        component: FontDesk,
        redirect: '/home',
        children: [
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
    },
    {
        path: '/login',
        component: Login
    }
]