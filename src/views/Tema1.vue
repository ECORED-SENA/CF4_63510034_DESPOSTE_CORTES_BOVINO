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
          p El cuarto trasero de la canal bovina tiene un valor económico más alto en comparación con el delantero, y junto con la región dorsolumbar, produce la mayor parte de los cortes de alto valor comercial que ofrece el bovino. En Colombia, los cortes o postas se comercializan "sin hueso", lo que asegura una separación muscular definida y la clasificación de los cortes según su calidad.
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
              p.mb-0 Sudar. En algunas regiones se le llama "pitar", que es el proceso de cocción en olla a presión
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
        p.mb-0 La canal del bovino proporciona beneficios conocidos como "productos", que corresponden a los diferentes cortes de carne que se pueden extraer, ya sea del cuarto trasero o del delantero. Asimismo, entre estos productos se considera como residuo el deshuese, el cual puede destinarse a la industria para la extracción de calcio o para la fabricación de juguetes para caninos, debidamente tratados.
    
    p.mt-5(data-aos="fade-up") Además, la canal ofrece otros beneficios conocidos como "subproductos", entre los que se incluyen vísceras rojas, vísceras blancas, huesos, carnaza, pelaje, pezuñas y sangre. Estos subproductos agregan valor al proceso de faenado y aprovechamiento del bovino.

    .cont_1_4.mt-5.pt-4
      .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/20.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Subproductos del rendimiento
      
      p.p-relative(data-aos="fade-up") Entre los subproductos del rendimiento, se destacan:

      .cont_1_5.mt-5
        .col-xl-8.m-auto
          .row.justify-content-center
            .col-xl.col-lg-8.col-md-10.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="900")
              .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img.d-flex.align-content-center.align-items-end.text-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/21.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    .w-100.text-center
                      h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#F1DE5F;border-radius:5px;max-width:fit-content") Vísceras rojas
                  .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    span.p-1.ps-5.pe-5.h4.m-auto(style="background-color:#F1DE5F;border-radius:5px;") Vísceras rojas
                    ul.lista-ul.mt-4
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Corazón
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Hígado
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Riñón
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Pulmón (boffe)
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Lengua
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Bazo (pajarilla)
            .col-xl.col-lg-8.col-md-10.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="900")
              .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img.d-flex.align-content-center.align-items-end.text-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/22.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    .w-100.text-center
                      h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#F1DE5F;border-radius:5px;max-width:fit-content") Vísceras blancas
                  .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                    span.p-1.ps-5.pe-5.h4.m-auto(style="background-color:#F1DE5F;border-radius:5px;") Vísceras blancas
                    ul.lista-ul.mt-4
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Intestinos (chunchulla)
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Rumen (mondongo, callo)
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Retículo (bonete, redecilla)
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Omaso (librillo)
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Abomaso (cuajo)
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Sesos (cerebro, cerebelo)
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Criadillas (testículos)
                      li.d-flex
                        i.fas.fa-check-circle(style="color:#AA7B72;")
                        span Caradilla (músculos maseteros)
    

    .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/20.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Obtención de los subproductos
    
    .row
      .col-lg(data-aos="fade-right")
        p Los subproductos se obtienen mediante un proceso cuidadoso de extracción y preparación. Por ejemplo, el corazón se prepara removiendo la grasa y recortando el pericardio, mientras que el hígado se separa de la vesícula biliar y los tejidos grasos adyacentes. El intestino delgado, conocido como chunchulla, se limpia de restos de epiplón y grasa mesentérica antes de su trenzado para reducir su tamaño. El rumen, retículo, omaso y abomaso requieren un lavado con agua clorada o un proceso de cocción según el tipo de tratamiento deseado.
      .col-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/23.png")
    
    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5.mt-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Sesos
              p Constituida por el cerebro, el cerebelo y el bulbo raquídeo, está recubierto por tres membranas delgadas. Deben eliminarse los coágulos alternativamente, pueden prepararse sin membranas.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/24.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Corazón
              p Se prepara removiendo la grasa del corazón, se recorta el pericardio y se eliminan arterias, venas y válvulas auriculares. Puede prepararse completo o bien seccionando al medio.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/25.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Lengua
              p Se prepara eliminando el hueso hioides mientras que el epitelio lingual debe permanecer intacto. Se clasifica usualmente por peso y color (blanca o negra y manchada).
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/26.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Hígado
              p Para su preparación se separa la vesícula biliar, resto del vaso sanguíneo hepático, ganglios linfáticos y las grasas adyacentes al hilo. Se pueden clasificar por color o por rango de peso.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/27.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Riñón
              p Se prepara removiendo la cápsula y la grasa perirrenal. Se extrae el uréter y el tejido graso adyacente.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/28.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Carrillos
              p Está constituida por los músculos maseteros. Los músculos subyacentes al maxilar inferior deben ser excluidos.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/29.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Rumen, retículo, omaso y abomaso
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Mondongo crudo: lavado con agua clorada. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Mondongo semicocido: cocción durante 40-45 minutos. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#AA7B72;")
                  span Mondongo cocido blanqueado: cocción durante 50-55 minutos y blanqueo con agua oxigenada.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/30.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Bazo
              p Después de su extracción se eliminan los restos de tejido conjuntivo circundante y los vasos sanguíneos esplénicos.
              p Se utilizan los tendones de los músculos flexores de las extremidades distales de ambos miembros y el tejido fibroso circundante. El más común es el ligamento funicular de la nuca.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/31.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Tendones
              p Se utilizan los tendones de los músculos flexores de las extremidades distales de ambos miembros y el tejido fibroso circundante. El más común es el ligamento funicular de la nuca.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/32.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              h4 Intestino
              p Comprende la porción inicial del intestino delgado, es decir, el duodeno. Debe estar libre de restos de epiplón y grasas mesentéricas. Se trenza para reducir su tamaño, de ahí su forma.
            .col-lg-6
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/33.png')
  
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_3 1.3 Rendimiento cárnico de la canal
    
    .row
      .col-lg(data-aos="fade-right")
        p Durante el proceso de sacrificio, la canal bovina se obtiene después de despojar al animal de la cabeza, patas, vísceras y piel. Esta canal representa alrededor del 60 % del peso total del animal, mientras que los subproductos constituyen el 40 % restante.
        p.fw-bold Peso de la canal y los cuartos
        p A continuación, se presenta una tabla que presenta un ejemplo de rendimiento bovino, destacando los porcentajes de rendimiento en canal y subproductos, así como el peso correspondiente de los cuartos anteriores y posteriores. Este ejemplo permite analizar la distribución de peso y valor dentro de la canal bovina:
      .col-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/34.png")
    
    .cont_1_6.pt-5
      .col-xl-7.col-lg-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 1.
          span Ejemplo de rendimiento y distribución del peso en la canal bovina de 400 kg
        .tabla-a.color-acento-contenido(data-aos="zoom-in-up") 
          table
            thead
              tr(style="background-color:#F8F7F4;")
                th(style="border:0;") Aspecto
                th(style="border:0;") Valor
            tbody.bg-white
              tr
                td Rendimiento en canal
                td 60-63 %
              tr
                td Peso de la canal
                td 240 kg (tomando como base 60 %)
              tr
                td Rendimiento de subproductos
                td 37-40 %
              tr
                td Peso de los subproductos
                td 160 kg (tomando como base 40 %)
              tr
                td Rendimiento de cuartos anteriores
                td 52-55 %
              tr
                td Peso de los cuartos anteriores
                td 124.8 kg (tomando como base 52 %)
              tr
                td Rendimiento de cuartos posteriores
                td 45-48 %
              tr
                td Peso de los cuartos posteriores
                td 115.2 kg (tomando como base 48 %)
      
      .col-xl-10.m-auto.mt-5
        .p-3(data-aos="zoom-in" data-aos-duration="800" style="background-color:#FCEFEC;border-radius:17px;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/36.svg")
            .col(style="place-self:center;")
              p.mb-0 Es importante destacar que el cuarto anterior, debido a sus características (52 %), es más pesado que el cuarto posterior (48 %), por lo que aportaría mayor peso y cantidad a la canal. Sin embargo, debido a la terneza, jugosidad y calidad de los cortes del cuarto posterior, es este el que aporta el mayor valor a la canal bovina.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_4 1.4. Métodos de conservación de la carne
    
    p(data-aos="fade-up") La carne, al ser altamente perecedera, puede convertirse en una fuente de crecimiento de microorganismos si no se respetan los estándares de inocuidad. Por ello, se emplean métodos de conservación como la refrigeración y la congelación para alargar su vida útil y mantener sus propiedades organolépticas.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/20.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Refrigeración
    
    .cont_1_7.mt-5
      .row
        .col-lg(data-aos="fade-right")
          p La refrigeración es el método de conservación más común establecido para preservar la carne y el más específico para los hogares. Este método se basa en las tradiciones de los antepasados, quienes buscaban conservar los alimentos en cuevas bajo tierra y en zonas frías o heladas.
          .row.mt-4
            .col-md-6.mb-4.mb-md-0
              .p-2.h-100(style="background-color:#D3F0E0;border-radius:15px;box-shadow:0px 3px 7px rgba(0,0,0,.15);")
                .row
                  .col-auto(style="place-self:center;")
                    figure
                      img(src="@/assets/curso/tema1/38.svg")
                  .col(style="place-self:center;")
                    p.fw-bold.mb-0 Temperatura
                    p.mb-0 1 a 2 °C.
            .col-md-6.mb-4.mb-md-0
              .p-2.h-100(style="background-color:#FAE0DA;border-radius:15px;box-shadow:0px 3px 7px rgba(0,0,0,.15);")
                .row
                  .col-auto(style="place-self:center;")
                    figure
                      img(src="@/assets/curso/tema1/39.svg")
                  .col(style="place-self:center;")
                    p.fw-bold.mb-0 Tiempo
                    p.mb-0 Empacada al vacío por 14 días.
        .col-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/40.png")
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/20.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Congelación
      
      .row.mt-5
        .col-lg(data-aos="fade-right")
          p La congelación es un método de conservación que busca evitar el crecimiento de microorganismos, ya que estos no pueden reproducirse a temperaturas inferiores a -10 ºC. Existen dos tipos principales de congelación utilizados para conservar la carne. El primero es el #[strong congelador por placas], que comprime la carne entre dos placas con líquido refrigerante. El segundo método más utilizado es el #[strong túnel de congelación], que utiliza una cámara donde el aire, a una temperatura de -20 a -40 ºC, se envía a una velocidad de 50 km/h.
          p Es importante tener en cuenta que el método de congelación puede aumentar el tamaño de la carne en un 8 %, lo que implica que se necesita más espacio de almacenamiento.
          .row.mt-4
            .col-md-6.mb-4.mb-md-0
              .p-2.h-100(style="background-color:#D3F0E0;border-radius:15px;box-shadow:0px 3px 7px rgba(0,0,0,.15);")
                .row
                  .col-auto(style="place-self:center;")
                    figure
                      img(src="@/assets/curso/tema1/38.svg")
                  .col(style="place-self:center;")
                    p.fw-bold.mb-0 Temperatura
                    p.mb-0 -18 °C.
            .col-md-6.mb-4.mb-md-0
              .p-2.h-100(style="background-color:#FAE0DA;border-radius:15px;box-shadow:0px 3px 7px rgba(0,0,0,.15);")
                .row
                  .col-auto(style="place-self:center;")
                    figure
                      img(src="@/assets/curso/tema1/39.svg")
                  .col(style="place-self:center;")
                    p.fw-bold.mb-0 Tiempo
                    p.mb-0 10-12 meses.
        .col-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/41.png")
      
        p.mt-5(data-aos="fade-up") Además, se debe prestar especial atención al proceso de descongelación. Durante la congelación, se forman cristales que, si no se controlan, pueden dañar los tejidos de la carne. Para llevar a cabo una descongelación adecuada, se recomienda bajar gradualmente la temperatura de la cámara o trasladar la carne a un lugar con una temperatura más baja, generalmente entre -4 y -6 ºC, durante un período de 4 días.
      
    .cont_1_2.pt-5
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/20.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Esterilización
      
      .row.mt-5
        .col-lg(data-aos="fade-right")
          p La #[strong esterilización] es un método que tiene como objetivo eliminar toda forma de vida, incluyendo las esporas que permiten la reproducción de microorganismos. En este proceso, se utiliza la #[strong esterilización por frío], que emplea temperaturas extremadamente bajas, entre -115 ºC y -123 ºC, lo que permite prolongar de manera considerable la vida útil del producto.
          .row.mt-4
            .col-md-6.mb-4.mb-md-0
              .p-2.h-100(style="background-color:#D3F0E0;border-radius:15px;box-shadow:0px 3px 7px rgba(0,0,0,.15);")
                .row
                  .col-auto(style="place-self:center;")
                    figure
                      img(src="@/assets/curso/tema1/38.svg")
                  .col(style="place-self:center;")
                    p.fw-bold.mb-0 Temperatura
                    p.mb-0 -120 °C.
            .col-md-6.mb-4.mb-md-0
              .p-2.h-100(style="background-color:#FAE0DA;border-radius:15px;box-shadow:0px 3px 7px rgba(0,0,0,.15);")
                .row
                  .col-auto(style="place-self:center;")
                    figure
                      img(src="@/assets/curso/tema1/39.svg")
                  .col(style="place-self:center;")
                    p.fw-bold.mb-0 Tiempo
                    p.mb-0 Superior a un año.
        .col-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/42.png")
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/20.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Pasteurización o pasterización
      
      .row.mt-5
        .col-lg(data-aos="fade-right")
          p La #[strong pasteurización] o #[strong pasterización], desarrollada por Louis Pasteur, es un método que utiliza un choque térmico entre altas y bajas temperaturas para destruir microorganismos. En el caso de las carnes, se aplica en frío, por lo que se denomina #[strong pasteurización en frío].
          .row.mt-4
            .col-md-6.mb-4.mb-md-0
              .p-2.h-100(style="background-color:#D3F0E0;border-radius:15px;box-shadow:0px 3px 7px rgba(0,0,0,.15);")
                .row
                  .col-auto(style="place-self:center;")
                    figure
                      img(src="@/assets/curso/tema1/38.svg")
                  .col(style="place-self:center;")
                    p.fw-bold.mb-0 Temperatura
                    p.mb-0 -100 °C.
            .col-md-6.mb-4.mb-md-0
              .p-2.h-100(style="background-color:#FAE0DA;border-radius:15px;box-shadow:0px 3px 7px rgba(0,0,0,.15);")
                .row
                  .col-auto(style="place-self:center;")
                    figure
                      img(src="@/assets/curso/tema1/39.svg")
                  .col(style="place-self:center;")
                    p.fw-bold.mb-0 Tiempo
                    p.mb-0 Empacado al vacío durante 21 días.
        .col-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/42.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/20.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Irradiación
    
    .row
      .col-lg(data-aos="fade-right" style="place-self:center;")
        p.mb-0 La #[strong irradiación] es uno de los métodos más utilizados para conservar la carne en países como Estados Unidos, Japón, Israel, Rusia y Hungría. Este método emplea radiación ionizante, similar a la de los microondas y las ondas de radio, para generar partículas cargadas de energía. También se usan rayos gamma o rayos X. Este proceso es aprobado por la Comisión del Codex Alimentarius de la Organización Mundial de la Salud para la eliminación de bacterias y patógenos como la salmonella.
      .col-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/44.svg")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/20.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Otros métodos de conservación
    
    .cont_1_2.pt-4
      p(data-aos="fade-up") Existen varios otros métodos que se utilizan para conservar la carne y los productos cárnicos. Entre ellos se encuentran:

      .row.mt-5
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/45.png")
        .col-lg-9(data-aos="fade-up")
          SlyderF(columnas="col-lg-6 p-4")
            .tarjeta.bg-white.p-4.cont_1_8.pt-xl-5.pb-xl-5
              figure.mb-3
                img(src="@/assets/curso/tema1/46.svg")
              h5.mb-3 Salazonado
              p Utiliza la sal para deshidratar la carne, inhibiendo el crecimiento de microorganismos.
            .tarjeta.bg-white.p-4.cont_1_8.pt-xl-5.pb-xl-5
              figure.mb-3
                img(src="@/assets/curso/tema1/47.svg")
              h5.mb-3 Curado
              p Involucra el uso de sal, azúcar, nitratos o nitritos para preservar y dar sabor a la carne.
            .tarjeta.bg-white.p-4.cont_1_8.pt-xl-5.pb-xl-5
              figure.mb-3
                img(src="@/assets/curso/tema1/48.svg")
              h5.mb-3 Ahumado
              p Consiste en exponer la carne al humo, lo que le confiere sabor y propiedades conservantes.
            .tarjeta.bg-white.p-4.cont_1_8.pt-xl-5.pb-xl-5
              figure.mb-3
                img(src="@/assets/curso/tema1/49.svg")
              h5.mb-3 Acidificación
              p Se realiza mediante la adición de ácidos, como el vinagre, para reducir el pH e inhibir el crecimiento bacteriano.
            .tarjeta.bg-white.p-4.cont_1_8.pt-xl-5.pb-xl-5
              figure.mb-3
                img(src="@/assets/curso/tema1/50.svg")
              h5.mb-3 Desecación
              p Implica el secado de la carne para eliminar el agua, lo que previene la proliferación de microorganismos.


        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
