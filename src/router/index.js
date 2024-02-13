import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Stories from '../components/StoriesNew.vue'
import Story from '../components/Story.vue'
import Sidebar from '../components/Sidebar.vue'
import Comments from '../components/Comments.vue'

const routes = [
    {
        path: '/', components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/stories', components: {
            default: Stories,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/stories/:id', components: {
            default: Story,
            LeftSideBar: Sidebar
        },
        name: 'story',
    },
    {
        path: '/comments/:id/:id', components: {
            default: Comments,
            LeftSideBar: Sidebar
        },
        name: 'comments',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router