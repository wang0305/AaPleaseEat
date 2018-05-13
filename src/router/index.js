import Vue from 'vue';
import Router from 'vue-router';
import find from '../components/Find.vue';
import message from '../components/Message.vue';
import rankings from '../components/Rankings.vue';
import myMessage from '../components/MyMessage.vue';
import location from '../components/Location';
import selection from '../components/Selection';
import food from '../components/Food.vue';
import add from '../components/Add.vue'
import mine from '../components/mine'
import film from '../components/Film'
import date from '../components/Date';
import detail from '../components/detail/Detail.vue';
import updateCircle from '../components/UpdateCircle';
import filmFood from '../components/detail/FilmFood';


Vue.use(Router);

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};

export default new Router({
  routes: [
    {path: '/find', component: find},
    {path: '/message', component: message},
    {path: '/rankings', component: rankings},
    {path: '/myMessage', component: myMessage},
    {path: '/location', component: location},
    {path: '/selection', component: selection},
    {path: '/food', component: food, name: '/food'},
    {path: '/add', component: add, name: '/add'},
    {path: '/mine', component: mine, name: '/mine'},
    {path: '/film', component: film, name: '/film'},
    {path: '/date', component: date, name: '/date'},
    {path: '/detail/:id', component: detail},
    {path: '/updateCircle', component: updateCircle},
    {path: '/filmFood', component: filmFood, name: '/filmFood'},
    {path:'/selection',component:selection}
  ]
})
