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

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-xl-5
          p.mb-0 El vendedor se encarga de ofrecer un producto inocuo, agradable a la vista y con características organolépticas específicas. No obstante, es el comprador quien determina los requisitos visuales particulares según sus gustos, al solicitar un producto con ciertas características de terneza (pulpa) que pueda utilizarse en un método específico de cocción (sudar, freír, asar). Esto puede hacer que otros componentes, que podrían mejorar la experiencia de consumo de carne, pasen desapercibidos.
      
      .row.mt-4
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/intro3.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 Debido a lo anterior, los cortes de carne en Colombia se clasifican en categorías, que se relacionan con la calidad, el contenido de grasa, la terneza y la jugosidad del producto cárnico.
    
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
