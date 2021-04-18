import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carlist:[],
    carlistadd: 0
  },
  mutations: {
    addCar(state,li){
      state.carlist.push(li)
    },
    carConter(state,index){
      state.carlist[index].carConter += 1;
    },
    carlistadd(state,add){
      state.carlistadd = add
    },
    deletes(state,i) {
      console.log("执行",i)
      delete state.carlist[i]
      console.log(state.carlist)
    }
  },
  actions: {
    addCar(context,li){
      let index = context.state.carlist.indexOf(li);
      let add = 0;

      console.log(index,context.state.carlist)
      if(index != -1){
        context.commit('carConter',index)
      }else{
        context.commit('addCar',li)
      }

      for(let i in context.state.carlist){
        add += context.state.carlist[i].carConter
      }
      context.commit('carlistadd',add)
    }
  },
  modules: {
  }
})
