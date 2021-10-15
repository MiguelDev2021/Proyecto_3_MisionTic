<template>
   <v-card
    :loading="loading"
    class="my-12"
    max-width="501"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{ofert.nombre_oferta}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ofert.cantidad}}
      </div>

      <div>{{ofert.informacion}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Ver Mas informacion   </v-card-title>


    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve(ofert.code)"
       
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: [
        "ofert",
        "code"
    ],
  data() {
    return {
      loading: false,
      selection: 1,

      
    };
  },

  methods: {
    reserve(code) {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);

      this.$router.push(`/oferts/${code}`)
      
    },
  },
};
</script>

<style>

</style>