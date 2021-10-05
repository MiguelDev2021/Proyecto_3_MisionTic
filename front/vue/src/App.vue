<template>
 <component :is="layout"></component>
</template>

<script>
import Interfaz_ventas_categorias from "./components/interfaces/Interfaz_ventas_categorias.vue"
import Interfaz_default from "./components/interfaces/Interfaz_default.vue"
import Interfaz_Proveedor  from "./components/interfaces/Interfaz_Proveedor.vue"
import {mapState} from 'vuex'
export default {
 components: {Interfaz_ventas_categorias, Interfaz_default, Interfaz_Proveedor},
computed: mapState(['layout']),     
}

</script>


<style>

</style>