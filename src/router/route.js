import Home from '../components/FrontDesk/Main/Home'
import Note from "../components/FrontDesk/Main/Note";
import Saysay from "../components/FrontDesk/Main/Saysay";
import Message from "../components/FrontDesk/Main/Message";
import Eihei from "../components/FrontDesk/Main/Eihei";
import Login from "../components/Login";
import FontDesk from "../components/FrontDesk";
import BackDesk from "../components/BackStage";
import BSAnalysis from "../components/BackStage/BSAnalysis";
import BSSaysay from "../components/BackStage/BSSaysay";
import BSDaily from "../components/BackStage/BSDaily";
import BSComment from "../components/BackStage/BSComment";
import BSNote from "../components/BackStage/BSNote";
import BSEihei from "../components/BackStage/BSEihei";

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
                component: BSAnalysis
            },
            {
                path: '/admin/note',
                component: BSNote
            },
            {
                path: '/admin/saysay',
                component: BSSaysay
            },
            {
                path: '/admin/daily',
                component: BSDaily
            },
            {
                path: '/admin/comment',
                component: BSComment
            },
            {
                path: '/admin/eihei',
                component: BSEihei
            }
        ]
    }
]