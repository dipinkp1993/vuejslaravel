import VueRouter from 'vue-router';
//import ExampleComponent from './components/ExampleComponent';
import Bookables from "./bookables/Bookables";
import Example2 from './components/Example2';
const routes=[
    {
        path:'/',
        component:Bookables,
    },
    {
        path:'/second',
        component:Example2,
    }
    
];
const router = new VueRouter({
  routes,
  mode:"history",
});
export default router;