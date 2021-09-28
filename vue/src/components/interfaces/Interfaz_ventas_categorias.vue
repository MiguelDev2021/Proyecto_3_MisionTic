<template>
  <!-- App.vue -->

  <v-app>
    <!-- esta el diseño del header -->
    <v-app-bar
      color="green accent-2"
      dark
      hide-on-scroll
      prominent
      app
      
    
    >
    

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon >
        <v-icon large>mdi-magnify </v-icon>
      </v-btn>

      <v-btn icon to="login" link >
        <v-icon large>mdi-account</v-icon>
      </v-btn>

      <v-btn icon to="home" link>
        <v-icon large>mdi-home  </v-icon>
      </v-btn>


      <v-btn icon >
        <v-icon large>mdi-cart-outline  </v-icon>
      </v-btn>
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
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      
    }),
  }


</script>