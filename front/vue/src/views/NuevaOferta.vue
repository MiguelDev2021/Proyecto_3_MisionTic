<template>
    <v-container>
    <p>REGISTRAR NUEVA OFERTA</p>
     <v-form>
    <v-container>
          <v-text-field
            v-model="title"
            :rules="rules"
            counter="25"
            hint="This field uses counter prop"
            label="Nombre de Oferta"
          ></v-text-field>
      
      
    </v-container>
     </v-form>
    </v-container>

</template>

<script>
export default {
    
}
</script>

<style>

</style>