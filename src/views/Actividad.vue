<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Cortes, subproductos y conservación de la canal bovina ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los cortes del cuarto trasero de la canal bovina, las categorías de la carne, los subproductos derivados del proceso, y los métodos de conservación. ',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los cortes pertenecientes a la categoría Extra? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Lomo cuadrado. ', esCorrecta: false },
            { id: 'b', texto: 'Cadera. ', esCorrecta: false },
            { id: 'c', texto: 'Solomillo. ', esCorrecta: true },
            { id: 'd', texto: 'Cola.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué porcentaje representa el rendimiento de subproductos en la canal bovina? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '40 %. ', esCorrecta: true },
            { id: 'b', texto: '25 %.', esCorrecta: false },
            { id: 'c', texto: '50 %.', esCorrecta: false },
            { id: 'd', texto: '35 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué corte del cuarto trasero se utiliza principalmente para preparar <em>filet mignon</em>? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Punta de anca. ', esCorrecta: false },
            { id: 'b', texto: 'Muchacho. ', esCorrecta: false },
            { id: 'c', texto: 'Solomito.', esCorrecta: true },
            { id: 'd', texto: 'Entrepierna. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la temperatura adecuada para conservar la carne mediante refrigeración? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '3-4  °C. ', esCorrecta: false },
            { id: 'b', texto: '-10  °C. ', esCorrecta: false },
            { id: 'c', texto: '1-2  °C. ', esCorrecta: true },
            { id: 'd', texto: '10  °C. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué víscera roja forma parte de los subproductos de la canal bovina? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mondongo. ', esCorrecta: false },
            { id: 'b', texto: 'Chunchulla. ', esCorrecta: false },
            { id: 'c', texto: 'Cuajo. ', esCorrecta: false },
            { id: 'd', texto: 'Hígado. ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el tiempo máximo de conservación de la carne congelada? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '4 meses. ', esCorrecta: false },
            { id: 'b', texto: '6 meses. ', esCorrecta: false },
            { id: 'c', texto: '8 meses. ', esCorrecta: false },
            { id: 'd', texto: '12 meses. ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué corte es parte del cuarto trasero de la canal bovina? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Corbata. ', esCorrecta: false },
            { id: 'b', texto: 'Punta de anca. ', esCorrecta: true },
            { id: 'c', texto: 'Morrillo. ', esCorrecta: false },
            { id: 'd', texto: 'Nuca. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué porcentaje del peso de la canal representan los cuartos delanteros? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '48 %. ', esCorrecta: false },
            { id: 'b', texto: '50 %. ', esCorrecta: false },
            { id: 'c', texto: '52 %. ', esCorrecta: true },
            { id: 'd', texto: '55 %. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La esterilización utiliza temperaturas de entre -115 °C y -123  °C para conservar la carne. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero. ', esCorrecta: true },
            { id: 'b', texto: 'False', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El proceso de pasteurización en frío para la carne implica temperaturas de 0 °C. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
