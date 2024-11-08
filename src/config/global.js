export default {
  global: {
    componenteFormativo:
      'Cortes básicos de la canal trasera, subproductos, conservación y rentabilidad cárnica',
    descripcionCurso:
      'El componente formativo aborda los cortes básicos del cuarto trasero de la canal bovina, la clasificación de la carne en diferentes categorías, y el aprovechamiento de subproductos. También detalla métodos de conservación como refrigeración, congelación, esterilización y pasteurización. Además, incluye un análisis del rendimiento cárnico y subproductos obtenidos, así como un video explicativo sobre el desposte.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Categorías de la carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Cortes del cuarto trasero de la canal bovina ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Rendimiento cárnico ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Rendimiento cárnico de la canal ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Métodos de conservación de la carne ',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Categorías de la carne ',
      referencia:
        'Recetas del Sur. (2023).Categorización de la Carne ¿Cómo funciona el Sistema?. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=3_xv-k2cBkg&ab_channel=RecetasdelSur',
    },
    {
      tema: 'Cortes del cuarto trasero de la canal bovina ',
      referencia:
        'Ecosistema de Recursos Educativos. (2018). Pasos para el desposte del cuarto trasero de la canal bovina. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=qfsXFexcZag&ab_channel=EcosistemadeRecursosEducativos  ',
    },
    {
      tema: 'Rendimiento cárnico ',
      referencia:
        'La Finca de Hoy. (2019).Categorías y rendimiento cárnico del wagyu. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=7tXfAq3wKY0&ab_channel=LaFincadeHoy  ',
    },
    {
      tema: 'Rendimiento cárnico de la canal ',
      referencia:
        'TVMÁS. (2017). Veracruz Agropecuario - El Canal Bovino, rendimiento y cortes. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=GFbKOROEtas&ab_channel=TVM%C3%81S  ',
    },
    {
      tema: 'Métodos de conservación de la carne ',
      referencia:
        'DW Pía Castro. (2019). El charqui o el arte de conservar carne. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=aTD2FQlKmrk&ab_channel=DWP%C3%ADaCastro ',
    },
  ],
  glosario: [
    {
      termino: 'Canal bovina',
      significado:
        'parte del cuerpo del bovino que queda después de retirar la cabeza, patas, vísceras y piel. ',
    },
    {
      termino: 'Subproductos',
      significado:
        'materiales obtenidos del bovino además de la carne, como vísceras, sangre, huesos, y piel. ',
    },
    {
      termino: 'Solomito',
      significado:
        'corte del cuarto trasero utilizado para preparar platos como <em>filet mignon</em>.',
    },
    {
      termino: 'Refrigeración',
      significado:
        'método de conservación de la carne a bajas temperaturas, entre 1-2 ºC. ',
    },
    {
      termino: 'Esterilización',
      significado:
        'método de conservación a temperaturas extremas (-115 ºC a -123 ºC) que elimina microorganismos. ',
    },
    {
      termino: 'Vísceras rojas',
      significado: 'órganos internos como corazón, hígado, riñón y lengua. ',
    },
    {
      termino: 'Vísceras blancas',
      significado:
        'partes como intestinos y estómagos (mondongo, librillo, bonete, etc.). ',
    },
    {
      termino: 'Congelación',
      significado:
        'Proceso de conservación que utiliza temperaturas bajo cero, generalmente a -18 ºC. ',
    },
    {
      termino: 'Rumen',
      significado:
        'parte del estómago del bovino, conocida también como mondongo. ',
    },
    {
      termino: 'Pasteurización',
      significado:
        'método de conservación que usa choque térmico para eliminar microorganismos. ',
    },
  ],
  referencias: [
    {
      referencia:
        'CONtexto Ganadero. (2014). Sello de calidad de carne colombiana se orienta a promocionar un producto orgánico.',
      link:
        'https://www.contextoganadero.com/internacional/sello-de-calidad-de-carne-colombiana-se-orienta-promocionar-un-producto-organico',
    },
    {
      referencia:
        'El Semiárido. (2015). Ensayan productos cárnicos con bajo contenido de sodio para atenuar el alto consumo de sal.',
      link:
        'http://www.elsemiarido.com/ensayan-productos-carnicos-con-bajo-contenido-de-sodio-para-atenuar-el-alto-consumo-de-sal/',
    },
    {
      referencia:
        'Instituto de Promoción de la Carne Vacuna Argentina (IPCVA). (2015). <em>Tipos de corte de carne</em>.',
      link: 'http://www.ipcva.com.ar/nomenclador2015/index.html ',
    },
    {
      referencia:
        'La Trocha Digital. (2017, junio 19). Se viene la carne “larga vida”.',
      link:
        'https://www.latrochadigital.com.ar/2017/06/19/se-viene-la-carne-larga-vida/',
    },
    {
      referencia:
        'Maribona, C. (2015, noviembre 17). La peculiar carne seca de Sudáfrica que se elabora en Sant Cugat del Vallés. ABC. ',
      link:
        'https://www.abc.es/viajar/gastronomia/20150320/abci-carne-biltong-sudafrica-201503181204.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Iván Cifuentes García ',
          cargo: 'Experto temático ',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
