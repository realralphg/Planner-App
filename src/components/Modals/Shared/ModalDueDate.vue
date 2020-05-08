<template>
    <div class="q-pa-md" style="max-width: 300px">
        <q-input label="Due Date" :value="dueDate" @input="$emit('update:dueDate', $event)">
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date :value="dueDate" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script>
    export default{
        props: ['dueDate'],
       data(){
           return{

           }
       }
    }

</script>