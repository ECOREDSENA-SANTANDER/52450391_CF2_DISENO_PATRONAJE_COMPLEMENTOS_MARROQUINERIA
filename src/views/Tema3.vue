<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Inspiración para el diseño

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            p.mb-4 La investigación se lleva a cabo para identificar fuentes de inspiración que faciliten la generación de ideas y conceptos; esto implica explorar diversos elementos como lugares, formas y movimientos artísticos, entre otros, que contribuyan al desarrollo del cuaderno de bocetos. En este proceso, se experimentará con colores, materiales y texturas, los cuales serán fundamentales para la creación de alternativas de diseño; una vez analizadas las tendencias de moda, estas alternativas servirán como base para iniciar el diseño de la colección, consolidando así propuestas derivadas de la investigación.
            br
            br
    p En el proceso de investigación, el diseñador recopila información relevante sobre el tema de estudio, considerando tanto la investigación primaria como la secundaria así:

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-7.bg1.p-4
        ul.lista-ul
          li
            i.fas.fa-check-circle
            | #[b Investigación primaria:] se basa en la información que el diseñador obtiene directamente a través de bocetos, fotografías, videos y otros recursos visuales.
          li
            i.fas.fa-check-circle
            | #[b Investigación secundaria:] se apoya en estudios previos, documentos, revistas y otras fuentes ya existentes.
      .col-lg-5 
        img(src='@/assets/curso/temas/Tema3/img02.png', alt='')

      p Toda esta información se va integrando en el cuaderno de bocetos, donde se anexan recortes, trazos y otros elementos gráficos. Posteriormente, esta recopilación sirve como base para la creación del #[em mood board] o panel de investigación; este panel permite interpretar y organizar la información inicial del cuaderno de bocetos, facilitando su representación en el panel de colores y el panel de texturas.

 
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-8.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            img(src="@/assets/curso/temas/Tema3/img03.png", alt="")
            .text.p-2
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-3.mb-3.text-white Carta de colores
                p.px-4 Se elabora a partir de la investigación realizada, con el propósito de ofrecer una representación visual de la paleta cromática de la colección.
      
      .col-lg-4.col-md-8.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            img(src="@/assets/curso/temas/Tema3/img04.png", alt="")
            .text.p-2
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-3.mb-3.text-white Carta de materiales
                p.px-4 Su objetivo es vincular los materiales seleccionados con la gama de colores definida, considerando sus texturas y características para garantizar coherencia en el diseño.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/temas/Tema3/img05.svg")
          h3.bg2.py-2.w-card-text.text-white Generación de alternativas
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-sm-8
        img(src='@/assets/curso/temas/Tema3/img06.png', alt='')
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-1.p-4.bg3
          .col-lg-12
            p La generación de alternativas en el proceso de diseño se fundamenta en la elaboración de bocetos que representen la estructura, forma y función del producto. Se requiere la producción de al menos seis bocetos que permitan visualizar y evaluar distintas posibilidades antes de la selección final.
            p Estos bocetos cumplen una función crítica en la representación de ideas de diseño, facilitando la transmisión de especificaciones estructurales y formales. En contextos de diseño industrial o en grandes empresas, estos esquemas garantizan una comunicación efectiva dentro del comité de diseño. 
        p Para una representación efectiva, los bocetos deben incluir elementos clave como formas, proporciones y perspectivas del producto, para ello se recomienda su desarrollo en soportes que permitan ciclos de mejora y refinamientos, asegurando así la evolución progresiva de las ideas hasta alcanzar una propuesta óptima.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/temas/Tema3/img07.svg")
          h3.bg2.py-2.w-card-text.text-white Selección de alternativas de diseño
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-down")
      .col-lg-5
        img(src='@/assets/curso/temas/Tema3/img08.png', alt='')
      .col-lg-7.bg4.p-4
        p La selección de alternativas de diseño se basa en el análisis de las necesidades del mercado y las tendencias actuales, asegurando que las propuestas cumplan con los requerimientos establecidos. Para ello, se consideran aspectos clave como coherencia formal, estética, elementos conceptuales, características estructurales y funcionales del producto.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5
        .d-flex.align-items-center.mt-3
          h3.bg5.py-2.w-card-text La tipología del producto
 
    p.mb-3 Es un factor determinante en este proceso, ya que define su estructura, construcción y método de confección. En el caso de los bolsos, se pueden evaluar distintas categorías, tales como:
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-down")
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema3/infografia.svg', alt='Texto que describa la imagen')
      

          .tarjeta.fondotarjeta.p-4(x="36%" y="12%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Bolso tote
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/tote.png', alt='Texto que describa la imagen')
          
          .tarjeta.fondotarjeta.p-4(x="28%" y="31%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Riñonera
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/riñonera.png', alt='Texto que describa la imagen')
          
          .tarjeta.fondotarjeta.p-4(x="27%" y="50%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Bandolera
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/bandolera.png', alt='Texto que describa la imagen')
          
          .tarjeta.fondotarjeta.p-4(x="29%" y="69%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Bolso a la muñeca
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/muneca.png', alt='Texto que describa la imagen')

          .tarjeta.fondotarjeta.p-4(x="36%" y="88%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Morral o mochila
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/mochila.png', alt='Texto que describa la imagen')
          
          .tarjeta.fondotarjeta.p-4(x="64%" y="88%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Bolso con marco
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/marco.png', alt='Texto que describa la imagen')

          .tarjeta.fondotarjeta.p-4(x="71%" y="69%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Bolso tipo sobre
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/sobre.png', alt='Texto que describa la imagen')

          .tarjeta.fondotarjeta.p-4(x="73%" y="50%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Bolso tipo balde
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/balde.png', alt='Texto que describa la imagen')

          .tarjeta.fondotarjeta.p-4(x="72%" y="31%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Bolso bag o barril
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/balde.png', alt='Texto que describa la imagen')


          .tarjeta.fondotarjeta.p-4(x="64%" y="12%" numero="+")
            .py-2
            .row.align-items-center
              .col-lg-12
                h5 Bolso de mano
              .col-lg-12
                img(src='@/assets/curso/temas/Tema3/mano.png', alt='Texto que describa la imagen')























      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-down")
        .col-lg-9
          p Esta clasificación facilita la identificación de la mejor alternativa según el propósito y funcionalidad esperada del producto.
      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-down")
        .col-lg-3.col-8.mb-3.col-sm-6
          img(src='@/assets/curso/temas/Tema3/img09.png', alt='')
        .col-lg-9
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-start.mb-2(data-aos="zoom-in-left")
                .col-sm-12.col-lg-5.col-12
                  .d-flex.align-items-center
                    h3.bg5.py-2.w-card-text Características del producto
            .col-lg-12
              p Se evalúan elementos clave como la presencia de tapa, tipo de cierre, forro, diseño de manijas (simples, dobles, rectilíneas), distribución de bolsillos internos y externos, materiales, colores y herrajes, asegurando coherencia estética y funcional.

          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-start.mb-2(data-aos="zoom-in-left")
                .col-sm-12.col-lg-5
                  .d-flex.align-items-center
                    h3.bg5.py-2.w-card-text Estructura
            .col-lg-12
              p Se analiza la composición del diseño en términos de ejes de simetría, centros y modularidad para garantizar estabilidad y armonía visual.
          
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-start.mb-2(data-aos="zoom-in-left")
                .col-sm-12.col-lg-5
                  .d-flex.align-items-center
                    h3.bg5.py-2.w-card-text Función
            .col-lg-12
              p Hace referencia a la forma cómo, se verifica el cumplimiento de los requerimientos del mercado objetivo, considerando aspectos como confort, ciclo de vida del producto (durabilidad de materiales), ligereza y calidad, asegurando su usabilidad y competitividad.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/temas/Tema3/img07.svg")
          h3.bg2.py-2.w-card-text.text-white Evaluación y estandarización del diseño y producción


    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
      .col-lg-12.col-md-12.col-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/img10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            p.mb-4 Se verifica la coherencia del producto en términos de forma, función y estilo, analizando acabados, materiales y estética mediante una lista de verificación que evalúa el diseño conceptual, técnico y de detalle.
            br
            br
            p El proceso productivo se examina en función de su viabilidad y eficiencia, considerando operaciones, equipos, herramientas y recursos, con una clara identificación de los insumos y productos resultantes.
            br
            br
            p Finalmente, se #[b estandariza el producto,] definiendo tipología, dimensiones y componentes para la elaboración de la #[b ficha técnica,] documento que establece los parámetros de producción y control de calidad.
            br
            br

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 6. 
      span Ficha técnica del producto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        img(src='@/assets/curso/temas/Tema3/tabla.svg', alt='La figura representa una ficha técnica de producto estructurada en diferentes secciones. En la parte superior, se incluyen campos para el nombre del artículo, colección, línea, fecha, dimensiones, colores y referencia, junto con un espacio destinado a la imagen del producto. Más abajo, se dispone un apartado para la descripción general. La ficha también contiene una sección de especificaciones, donde se detallan los materiales y colores del interior y exterior del producto. Se incorporan datos sobre la costura, especificando el tipo de hilo, calibre, color y si se realiza manualmente o con máquina. Finalmente, se incluyen espacios para registrar los herrajes, apliques y observaciones adicionales.')
        figcaption Fuente: SENA

    .tarjeta.fondolink.p-4.mb-0
      .row.justify-content-around.align-items-center.p-4
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/Tema3/web.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p  A continuación, puede descargar el anexo que contiene el formato de la ficha técnica del producto. 
              h3.mb-1 Ficha técnica del producto  
            .col-sm-auto.col-lg-2
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Ir al sitio
                i.fas.fa-globe
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src='@/assets/curso/temas/Tema3/linea.svg', alt='')



















































</template>

<script>
export default {
  name: 'Tema3',
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
