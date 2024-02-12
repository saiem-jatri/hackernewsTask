import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Stories from '../components/Stories.vue'
import Story from '../components/Story.vue'
import Sidebar from '../components/Sidebar.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router