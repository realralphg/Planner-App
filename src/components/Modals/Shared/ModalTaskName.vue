<template>
    <q-input  
    class="q-pa-md" 
    style="max-width: 300px" 
       :value="name" 
       @input="$emit('update:name', $event)"
       label="Task Name" ref="name"
       autofocus
       :rules="[val => !!val || 'A task needs a name!']" />
</template>

<script>
    export default{
        props: ['name'],
       data(){
           return{

           }
       }
    }

</script>