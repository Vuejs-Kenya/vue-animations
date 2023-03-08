import { createRouter, createWebHistory } from 'vue-router';
import IntroductionView from '../views/IntroductionView.vue';
import TransitionComponentView from '../views/TransitionComponentView.vue';
import TransitionGroupsView from '../views/TransitionGroupsView.vue';
import ClassBasedAnimationsView from '../views/ClassBasedAnimationsView.vue';
import StateDrivenAnimationsView from '../views/StateDrivenAnimationsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: IntroductionView
    },
    {
      path: '/transitionComponent',
      name: 'transitionComponent',
      component: TransitionComponentView
    },
    {
      path: '/transitionGroups',
      name: 'transitionGroups',
      component: TransitionGroupsView
    },
    {
      path: '/classBasedAnimations',
      name: 'classBasedAnimations',
      component: ClassBasedAnimationsView
    },
    {
      path: '/stateDrivenAnimations',
      name: 'stateDrivenAnimations',
      component: StateDrivenAnimationsView
    }
  ]
});

export default router;
