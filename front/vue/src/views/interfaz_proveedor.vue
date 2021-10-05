<template>
   
   <p> lol</p>

   

</template>

<script>

export default {
 
    created() {
    this.$store.commit('SET_LAYOUT', 'Interfaz_Proveedor');
  },
}
</script>

<style>
    #v-container{
        display: flex;
        flex-direction: row;
    }
</style>