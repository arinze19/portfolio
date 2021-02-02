import { createRouter, createWebHistory } from 'vue-router';
import Home        from './components/pages/Home.vue'
import ProjectList from './components/pages/ProjectList.vue'
import About       from './components/pages/About.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: ProjectList },
    { path: '/:notFound(.*)', redirect: '/'}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router