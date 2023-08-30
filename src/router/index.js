import Vue from 'vue'
//1.导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import HelloWorld from '@/components/HelloWorld'
import HelloElementUI from '@/components/helloElementUI'
import SeTest from '@/components/SeUI/seTest.vue'
import SeInsex from '@/components/SeUI/seIndex.vue'

export default new VueRouter({
  mode:'hash',
  routes: [ 
  
    {
      path:"/",
      name:"Home",
      component:()=>import('@/components/HelloWorld'),
      redirect:"/appSE",
      children:[
        {
          path:"/appSE",
          name:"AppSE",
          component:()=>import('@/components/SeUI/appSE.vue')
  },
  
  {
    path:"/containerSE",
    name:"ContainerSE",
    component:()=>import('@/components/SeUI/containerSE.vue')
},
  {
    path:"/blockSE",
    name:"BlockSE",
    component:()=>import('@/components/SeUI/blockSE.vue')
  },
  {
    path:"/formField",
    name:"FormField",
    component:()=>import('@/components/SeUI/formField.vue')
  },
  {
    path:"/dropDown",
    name:"DropDown",
    component:()=>import('@/components/SeUI/dropDown.vue')
  },
  {
    path:"/helloWorldTemplate",
    name:"HelloWorldTemplate",
    component:()=>import('@/components/HelloWorldTemplate.vue')
  },
  {
    path:"/tableSE",
    name:"TableSE",
    component:()=>import('@/components/SeUI/tableSE.vue')
  },
  {
    path:"/skeletonSE",
    name:"SkeletonSE",
    component:()=>import('@/components/SeUI/skeletonSE.vue')
  },
  {
    path:"/stepperSE",
    name:"StepperSE",
    component:()=>import('@/components/SeUI/stepperSE.vue')
  },
  {
    path:"/buttonSE",
    name:"ButtonSE",
    component:()=>import('@/components/SeUI/buttonSE.vue')
  },
  {
    path: '/helloElementUI',
    name: 'HelloElementUI',
    component:HelloElementUI
  },
  {
    path:"/elementTest",
    name:"ElementTest",
    component:()=>import('@/components/ElementUI/test.vue')
  },
  {
    path:"/longTableTest3",
    name:"LongTableTest3",
    component:()=>import('@/components/LongTableList/longTable3.vue')
  },
      ]
    },
   
    
{
  path:"*",
  name:"NotFound",
  component:()=>import('@/components/NotFound/404.vue')
},
    {
        path: '/seTest',
        name: 'SeTest',
        component:SeTest
      },
      {
        path: '/seInsex',
        name: 'SeInsex',
        component:SeInsex
      }
  ]
})
 