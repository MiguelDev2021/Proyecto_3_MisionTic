<template>
  <!-- App.vue -->

  <v-app>
  <v-navigation-drawer app
   v-model="drawer"
      absolute
      bottom
      temporary>
    <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar app
  color="green accent-2"
      dark
      hide-on-scroll
      prominent
    
      >

       <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon large>mdi-magnify </v-icon>
      </v-btn>

      <v-btn icon to="login" link>
        <v-icon large>mdi-account</v-icon>
      </v-btn>

      <v-btn icon to="home" link>
        <v-icon large>mdi-home  </v-icon>
      </v-btn>


      
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

 <v-footer 
    dark
    padless
  >
    <v-card
      
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Conectacta con nosotros en redes sociales!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</v-app>
</template>

<script> 

  export default {
 
  data: () => ({
      drawer: false,
      group: null,
       icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
 

    }),

    watch: {
      group () {
        this.drawer = false
      },
    }
  }
  


</script>