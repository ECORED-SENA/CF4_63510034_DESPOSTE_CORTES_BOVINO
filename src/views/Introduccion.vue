<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro.pt-4
      p(data-aos="fade-up") Colombia es un país con una gran diversidad de preferencias, lo cual se refleja al momento de adquirir productos cárnicos en un expendio. En este proceso, influyen varios factores como las costumbres, el precio y el conocimiento de los cortes. 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
