<template>
     <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
    >
      {{ mensaje }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
        </template>  
        </v-snackbar>
      
</template>

<script>
export default {

      props :["mensaje", "snackbar"],
      data: () => ({
      multiLine: true,

    }),

}
</script>

<style>

</style>