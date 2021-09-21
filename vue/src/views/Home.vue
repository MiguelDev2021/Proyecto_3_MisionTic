<template>
  
  <div>  
    Hola somos nosotros
  </div>   
</template>

<script>

export default {

  created () {
            this.$store.commit('SET_LAYOUT', 'Interfaz_default')
        }
}
</script>

<style>

</style>
