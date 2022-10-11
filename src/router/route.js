import Home from '../components/FontDesk/Main/Home'
import Note from "../components/FontDesk/Main/Note";
import Saysay from "../components/FontDesk/Main/Saysay";
import Message from "../components/FontDesk/Main/Message";
import Eihei from "../components/FontDesk/Main/Eihei";
import Login from "../components/Login";
import FontDesk from "../components/FontDesk";
import BackDesk from "../components/BackDesk";
import BDAnalysis from "../components/BackDesk/BDAnalysis";
import BDSaysay from "../components/BackDesk/BDSaysay";
import BDDaily from "../components/BackDesk/BDDaily";
import BDComment from "../components/BackDesk/BDComment";
import BDNote from "../components/BackDesk/BDNote";

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
    },
    {
        path: '/admin',
        component: BackDesk,
        redirect: '/admin/analysis',
        children: [
            {
                path: '/admin/analysis',
                component: BDAnalysis
            },
            {
                path: '/admin/note',
                component: BDNote
            },
            {
                path: '/admin/saysay',
                component: BDSaysay
            },
            {
                path: '/admin/daily',
                component: BDDaily
            },
            {
                path: '/admin/comment',
                component: BDComment
            }
        ]
    }
]