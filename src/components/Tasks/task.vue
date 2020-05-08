<template>
      <!-- Designing a List Item -->
      <q-item clickable @click="updateTask({id: id, updates: { completed: !task.completed }})"  
      :class="!task.completed ? 'bg-orange-2' : 'bg-green-2'" v-ripple>
        <!-- Adding checkbox -->
        <q-item-section side top>
          <q-checkbox v-model="task.completed" /> 
        </q-item-section>
        <!-- Adding taskName ............Go code strikethrough in style -->
        <q-item-section>
          <q-item-label :class="task.completed ? 'text-strikethrough': null">{{task.name}}</q-item-label>
        </q-item-section>

        <q-space/>
        <!-- Adding Calendar icon, date and time -->
        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="events" size="18px" class="q-mr-xxs"></q-icon>
            </div>
            
            <div class="column">
              <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
              <q-item-label class="row justify-end" caption> <small>{{task.dueTime}}</small></q-item-label>
            </div>
          </div>
        </q-item-section>

        <!-- Adding edit and delete icons -->
        <q-item-section side>
          <div class="row">
             
              <add-task :type="'edit'" :task="task" :id="id"/>
              <q-btn flat dense round color="red" icon="cancel" 
              @click.stop="promptToDelete(id)"/>             
          </div>
        </q-item-section>
      
      </q-item>
</template>

<script>
    import {mapActions} from 'vuex'
    
    export default {
        props: ['task', 'id', 'showAddTask'],

        components: {
          'add-task' : require('components/Modals/AddTask.vue').default
        },

        methods: {
            ...mapActions('tasks', ['updateTask', 'deleteTask']),
              promptToDelete(id){
                this.$q.dialog({
                    title: 'Confirm',
                    message: 'Really, Delete?',
                    cancel: true,
                    persistent: true
                }).onOk(() => {
                    this.deleteTask(id)
                    })
            }
        }
    }

</script>

<style>

</style>