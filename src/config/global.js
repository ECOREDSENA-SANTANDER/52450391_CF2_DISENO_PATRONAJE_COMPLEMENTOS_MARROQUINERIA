export default {
  global: {
    Name: 'Marroquinería, el arte de crear en cuero',
    Description:
      'El diseño y patronaje en marroquinería es un proceso creativo y técnico que permite la transformación del cuero y otros materiales en complementos funcionales y estéticos como bolsos, billeteras y cinturones. Inicia con la conceptualización del diseño, seguido del trazado y creación de moldes con medidas precisas. Se utilizan materiales como cuero curtido, sintéticos y textiles, junto con insumos como herrajes y adhesivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Herramientas y maquinaria para marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Maquinaria y equipos',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Moldería para bolsos, billeteras y cinturones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Moldería en común para bolsos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Moldería para cinturones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo de la información a lo largo de la cadena de mando',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Corte, preparación y confección de artículos de cuero',
        desarrolloContenidos: true,
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
      tema: 'Herramientas y maquinaria para marroquinería ',
      referencia: 'NO HAY INFO EN EL DI',
      tipo: 'Cartillas',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Marroquinería',
      significado:
        'arte y técnica de transformar el cuero en productos funcionales y estéticos como bolsos, billeteras y correas.',
    },
    {
      termino: 'Patronaje',
      significado:
        'proceso de diseño y creación de patrones que sirven como guía para cortar y ensamblar las piezas en la marroquinería.',
    },
    {
      termino: 'Curtido',
      significado:
        'Tratamiento químico y mecánico aplicado al cuero para hacerlo resistente y duradero.',
    },
    {
      termino: '<i>Mood board</i>',
      significado:
        'tablero visual compuesto por imágenes, colores y texturas que sirven como inspiración para el diseño.',
    },
    {
      termino: 'Tendencias',
      significado:
        'Cambios y estilos predominantes en la industria de la moda y la marroquinería que influyen en los diseños.',
    },
    {
      termino: 'Moldería',
      significado:
        'Desarrollo de moldes precisos para garantizar la fidelidad al diseño en la fabricación de artículos en cuero.',
    },
    {
      termino: 'Lezna',
      significado:
        'Herramienta con punta metálica afilada utilizada para perforar cuero y facilitar la costura.',
    },
    {
      termino: 'Estaquillo',
      significado:
        'Instrumento que marca puntos de referencia en el cuero y asienta el pegado de piezas curvas.',
    },
    {
      termino: 'Sacabocados',
      significado:
        'Herramienta empleada para perforar cuero y otros materiales en diferentes formas y tamaños.',
    },
    {
      termino: 'Desbastado',
      significado:
        'técnica de reducción del grosor del cuero en los bordes para facilitar el ensamblaje y mejorar el acabado.',
    },
    {
      termino: 'Entintado',
      significado:
        'Proceso de aplicación de tinta en los bordes del cuero para mejorar su apariencia y durabilidad.',
    },
    {
      termino: 'Troqueladora',
      significado:
        'Máquina utilizada para realizar cortes precisos en cuero mediante moldes con formas prediseñadas.',
    },
    {
      termino: 'Fileteadora',
      significado:
        'Máquina especializada en la terminación y acabado de los bordes de artículos de cuero y textiles.',
    },
    {
      termino: 'Chapeta',
      significado:
        'Pieza de cuero que sostiene la hebilla en la fabricación de cinturones y otros accesorios.',
    },
    {
      termino: 'Fuelle',
      significado:
        'Parte lateral de un bolso que determina su volumen y capacidad, pudiendo ser rígido o flexible.',
    },
  ],
  referencias: [
    {
      referencia: 'Vallejos, L. (2017). Manual básico para marroquinería.',
      link: '',
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
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elizabeth Mena Rengifo',
          cargo: 'E-Pedagoga instruccional',
          centro: 'Centro Atención Sector Agropecuario - Regional Risaralda ',
        },
        {
          nombre: 'Mónica Cecilia Alzate',
          cargo: 'Instructor Diseño curricular',
          centro: 'Centro Textil y de Gestión Industrial - Regional Antioquia',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'PENDIENTE ASIGNACIÓN',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
