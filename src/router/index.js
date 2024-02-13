import { createRouter, createWebHistory } from 'vue-router'
import Stories from '../components/StoriesNew.vue'
import Story from '../components/Story.vue'
import Comments from '../components/Comments.vue'

const routes = [
    {
        path: '/', components: {
            default: Stories,
        }
    },
    {
        path: '/stories/:id', components: {
            default: Story,
        },
        name: 'story',
    },
    {
        path: '/comments/:id/:id', components: {
            default: Comments,
        },
        name: 'comments',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router