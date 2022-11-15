import Home from '../components/FrontDesk/Main/Home'
import NoteList from "../components/FrontDesk/Main/NoteList.vue";
import SaysayList from "../components/FrontDesk/Main/SaysayList.vue";
import Comment from "../components/FrontDesk/Main/Comment.vue";
import Eihei from "../components/FrontDesk/Main/Eihei";
import Login from "../components/Login";
import FrontDesk from "../components/FrontDesk";
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
        component: FrontDesk,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/note',
                component: NoteList,
                // children: [
                //     {
                //         path: '/note/:id',
                //         component: Note
                //     }
                // ]
            },
            {
                path: '/saysay',
                component: SaysayList
            },
            {
                path: '/comment',
                component: Comment
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