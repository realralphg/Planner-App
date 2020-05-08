<template>
    <div>
         
         <q-btn v-if="type == 'edit'" icon="edit" flat dense round color="primary"  
              @click.stop="showAddTask = true"/>

        <!-- Dialog Alert Box for ADD-TASK -->
        <q-dialog v-model="showAddTask">
        <q-card>
            <q-card-section class="row">
                <div class="text-h6">{{type == 'add' ? 'Add Task' : 'Edit Task'}}</div>
                <q-space/>
                <q-btn icon="close" flat round dense v-close-popup/>
            </q-card-section>

            <!-- Add Input Fields here  -->
            <form @submit.prevent="validateForm">
            <q-card-section class="q-pt-none" >
            <!-- Text Input  -->
            <q-input  class="q-pa-md" style="max-width: 300px" 
            v-model="taskToSubmit.name" label="Task Name" ref="name"
            :rules="[val => !!val || 'A task needs a name!']" autofocus />

            <!-- Date Input  -->
                <div class="q-pa-md" style="max-width: 300px">
                    <q-input label="Due Date" v-model="taskToSubmit.dueDate">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>

            <!-- Time Input  -->
                <div class="q-pa-md" style="max-width: 300px">
                    <q-input label="Due Time" v-model="taskToSubmit.dueTime" >
                        <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                            <q-time v-model="taskToSubmit.dueTime" />
                            </q-popup-proxy>
                        </q-icon>
                        </template>
                    </q-input>
                </div>  
            </q-card-section>

            <!-- Action Buttons Add and Edit  -->
            <q-card-actions v-if="type=='add'" align="right">
                <q-btn type="submit" label="Save" color="primary"/>
            </q-card-actions>

            <q-card-actions v-if="type=='edit'" align="right">
                <q-btn type="submit" label="Update" color="primary"/>
            </q-card-actions>
            </form>

        </q-card>  
        </q-dialog>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    props:['type','task', 'id'],

    data(){
        return{
            showAddTask: false,
            taskToSubmit: {
                name: this.task ? this.task.name : '',
                dueDate: this.task ? this.task.dueDate : '',
                dueTime: this.task ? this.task.dueTime : '',
                completed: false
            }
        }
    },

    methods: {
        ...mapActions('tasks', ['addTask', 'updateTask']),

        validateForm(){
            this.$refs.name.validate()
            if(!this.$refs.name.hasError){
                this.submitTask()
            }
        },

        submitTask(){
            if (this.type=="edit"){
                this.updateTask({
                    id: this.id,
                    updates: this.taskToSubmit
                }) 
                
            }else{
                    this.addTask(this.taskToSubmit)
                }
            
            this.$emit('close')
        },

        // mounted() {
        //     this.taskToSubmit = Object.assign({}, this.task)
        // },
    }

}

</script>