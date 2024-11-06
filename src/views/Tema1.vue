<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Categorías de la carne

    p(data-aos="fade-up") La carne se divide en categorías según el corte, las cuales pueden clasificarse de mayor a menor costo en Colombia de la siguiente manera:

    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5.mt-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Categoría extra
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Lomo alto
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Lomo bajo
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Solomillo
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/2.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Categoría primera A
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Cadera
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Bola negra
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Pierna
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Entrepierna
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Punta de anca
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/3.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Categoría primera B
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Lomo aguja (primeras cinco vértebras torácicas)
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Sobrebarriga gruesa
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Espaldilla
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Costilla especial
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/4.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Categoría segunda
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Corbata
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Sobrebarriga delgada
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Punta de falda
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/5.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Categoría tercera
              .row.mt-4
                .col-md
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#AA7B72;")
                      span Carrillada
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#AA7B72;")
                      span Costillar
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#AA7B72;")
                      span Falda
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#AA7B72;")
                      span Morrillo
                .col-md
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#AA7B72;")
                      span Pecho
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#AA7B72;")
                      span Nuca
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#AA7B72;")
                      span Cola
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/6.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Cortes del cuarto trasero de la canal bovina
    
    .cont_1_2
      .row
        .col-lg(data-aos="fade-right")
          p El cuarto trasero de la canal bovina tiene un valor económico más alto en comparación con el delantero, y junto con la región dorsolumbar, produce la mayor parte de los cortes de alto valor comercial que ofrece el bovino. En Colombia, los cortes o postas se comercializan "sin hueso," lo que asegura una separación muscular definida y la clasificación de los cortes según su calidad.
          p Cortes comerciales del cuarto posterior:
        .col-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/7.png")
      
      .row.mt-5.justify-content-center
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/8.png")
            span Solomito
            div
              p.mb-0 #[em Filet mignon], asar, a la plancha, al horno
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/9.png")
            span Lomo cuadrado
            div
              p.mb-0 A la plancha, al carbón, al horno
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/10.png")
            span Entrepierna
            div
              p.mb-0 Asar, freír, sudar
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/11.png")
            span Cola
            div
              p.mb-0 Sudar. Forma parte del plato conocido como sancocho
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/12.png")
            span Muchacho, capón
            div
              p.mb-0 Relleno, sudar
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/13.png")
            span Punta de anca
            div
              p.mb-0 Asar, al carbón, a la plancha
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/14.png")
            span Chocozuela
            div
              p.mb-0 Sudar. En algunas regiones se le llama "pitar," que es el proceso de cocción en olla a presión
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/15.png")
            span Bola negra
            div
              p.mb-0 Sudar, freír, asar, a la plancha
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/16.png")
            span Ampolleta, caderita
            div
              p.mb-0 Freír, asar, a la plancha
        .col-lg-3.mb-4.col-md-6(data-aos="zoom-in" data-aos-duration="900")
          .cont_1_3.h-100
            figure
              img(src="@/assets/curso/tema1/17.png")
            span Tortuga y lagarto
            div
              p.mb-0 Sudar
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Rendimiento cárnico
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-xl-5
        p.mb-0 La canal del bovino proporciona beneficios conocidos como "productos," que corresponden a los diferentes cortes de carne que se pueden extraer, ya sea del cuarto trasero o del delantero. Asimismo, entre estos productos se considera como residuo el deshuese, el cual puede destinarse a la industria para la extracción de calcio o para la fabricación de juguetes para caninos, debidamente tratados.
    
    p.mt-5(data-aos="fade-up") Además, la canal ofrece otros beneficios conocidos como "subproductos," entre los que se incluyen vísceras rojas, vísceras blancas, huesos, carnaza, pelaje, pezuñas y sangre. Estos subproductos agregan valor al proceso de faenado y aprovechamiento del bovino.
    

        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
