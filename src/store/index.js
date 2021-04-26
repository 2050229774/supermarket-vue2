import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carlist:[],
    carlistadd: 0,
    carBoole: []
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
      state.carlist.splice(i,1)
    }
  },
  actions: {
    addCar(context,li){
      let index = context.state.carlist.indexOf(li);
      let add = 0;

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
