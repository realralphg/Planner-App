<template>
  <q-layout view="hHh LpR fFf">
    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          My Todo App
        </q-toolbar-title>     
      </q-toolbar>
    </q-header>

    <!-- Footer -->
    <q-footer>
        <q-tabs>
            <q-route-tab v-for="nav in navs" :key="nav.id"
            :to="nav.to" :icon="nav.icon" :label="nav.label"/>
        </q-tabs>
    </q-footer>
    <!-- Left Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :width="250"
      :breakpoint="767">
      <q-list dark>
        <q-item-label header class="text-grey-8">
          Navigation
        </q-item-label>

        <!-- Item on drawer -->
        <q-item class="text-grey-4" v-for="nav in navs" :key="nav.id" :to="nav.to" exact clickable>
            <q-item-section avatar>
                <q-icon :name="nav.icon"/>
            </q-item-section> 

            <q-item-section>
                <q-item-label> {{nav.label}} </q-item-label>
            </q-item-section> 
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default { 

  data () {
    return {
      leftDrawerOpen: false,
      //Create Array to store nav list items data
      navs: [
          {
              label: 'Todo',
              icon: 'list',
              to:'/'
          },
           {
              label: 'Settings',
              icon: 'settings',
              to:'/settings'
          }
      ]
     
    }
  }
}
</script lang="scss">

<style>
.q-drawer .q-router-link--exact-active{
  color: white !important;
}

@media screen and (min-width: 768px) {
    .q-footer{
        display: none;
    }
}

</style>