import Vue from 'vue'
import  {uid} from 'quasar'

const state = {
    tasks: {
      'ID1': {
                name: 'Do Groceries',
                dueDate: '2020/04/16',
                dueTime: '18.00',
                completed: false
            },
      'ID2':{
                name: 'Go to Gym',
                dueDate: '2020/04/16',
                dueTime: '17.30',
                completed: false
            },
      'ID3':{
                name: 'Visit Daddy',
                dueDate: '2020/04/16',
                dueTime: '14.00',
                completed: false
            }
    }
}

const mutations = {
    updateTask(state, payload){
        Object.assign(state.tasks[payload.id], payload.updates)
    },

    deleteTask(state, id){
        Vue.delete(state.tasks, id)
    },

    addTask(state, payload){
        Vue.set(state.tasks, payload.id, payload.task)
    }
    
}

const actions = {
    updateTask({commit}, payload){
        commit('updateTask', payload)   
    },

    deleteTask({commit}, id){
        commit('deleteTask', id)
    },

    addTask({commit}, task){
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
    
}

const getters = {
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key]
            if(tasks.completed !== true){            
                tasks[key] = task
            }
        })                         
        return tasks
    },

    // tasksCompleted: (state) => {
    //     let tasks = {}
    //     Object.keys(state.tasks).forEach(function(key) {
    //         let task = state.tasks[key]
    //         if(tasks.completed == true){
    //             tasks[key] = task
    //         }
    //     })         
    //     return tasks
    // }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
    
}