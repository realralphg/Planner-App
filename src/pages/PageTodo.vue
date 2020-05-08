<template>
  <q-page class="q-pa-md" >
    <q-item-label header class="text-h4 text-weight-thin">Reminder on Todos</q-item-label>
    
    <!-- Generating TasksTodo List -->
    <q-list bordered separator>
      <task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key">   </task>
    </q-list>

    

    <!-- Generating TasksCompleted List -->
    <!-- <q-list bordered separator>
      <task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key">   </task>
    </q-list> -->
    



    <!-- Floating Button -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="add"
        direction="up"
        color="primary">
        
        <q-fab-action @click="setAlarm=true" color="orange-4" icon="alarm" />
        <add-task :type="'add'" />
      </q-fab>
    </q-page-sticky>



    <!-- Dialog Alert Box for ALARM -->
    <q-dialog v-model="setAlarm">
      <set-alarm/>
    </q-dialog>

  </q-page>
</template>



<script>
import { mapGetters } from 'vuex'
export default {

  components: {
    'task' : require('components/Tasks/task.vue').default,
    'add-task' : require('components/Modals/AddTask.vue').default,
    'set-alarm' : require('components/Modals/SetAlarm.vue').default,
  },

  data(){
    return{
      setAlarm: false
    }

  },
  
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  
}
</script>



<style>

.text-strikethrough{
  text-decoration: line-through;
}
</style>
