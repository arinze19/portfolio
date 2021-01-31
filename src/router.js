import { createRouter, createWebHistory } from 'vue-router';
import Home     from './components/pages/Home.vue'
import Projects from './components/pages/Projects.vue'
import About    from './components/pages/About.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router