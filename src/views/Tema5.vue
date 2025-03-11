<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Trazado de modelos para diseños en marroquinería

    .row.justify-content-center.align-items-center.mb-3(data-aos="down")
      .col-lg-5
        img(src='@/assets/curso/temas/Tema5/img01.png', alt='')
      .col-lg-7
        p En el proceso de elaboración de artículos, la gestión eficiente de la información desempeña un papel fundamental en la calidad del producto final. Para lograr este objetivo, se emplean fichas técnicas, herramientas esenciales que permiten recopilar, estructurar y sistematizar la información técnica de los productos. Estas fichas no solo facilitan el desarrollo adecuado de los artículos, sino que también garantizan el cumplimiento de los estándares de calidad y las especificaciones requeridas en cada fase del proceso.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-5.bg4.p-3.mb-3
        p.px-2 Las fichas técnicas del producto, presentadas durante el proceso de formación, contienen detalles específicos sobre los requerimientos del proceso productivo, proporcionando una guía clara y estructurada para el personal de producción en cada etapa del desarrollo. En ellas se incluyen aspectos clave como los materiales necesarios, las especificaciones técnicas y los procedimientos de fabricación. Esta información permite asegurar la coherencia, precisión y eficiencia en la producción.
      .col-lg-3.col-8.mb-3
        img(src='@/assets/curso/temas/Tema5/img02.png', alt='')
      .col-lg-4
        .row
          .col-2.mb-4.col-2
            img(src='@/assets/curso/temas/Tema5/ico.svg', alt='')
          .col-12
            p.px-2 Para facilitar su consulta y aplicación, se dispone de un modelo referencial accesible en las tablas correspondientes, lo que permite a los usuarios validar la información y seguir de manera rigurosa las indicaciones establecidas. De esta manera, las fichas técnicas se consolidan como una herramienta indispensable para optimizar la gestión de la producción y mejorar la calidad del producto final.
      .py-3
      .row.justify-content-center.mb-5(data-aos="flip-up")
        .col-lg-12
          img(src='@/assets/curso/temas/Tema5/linea.svg', alt='')













</template>

<script>
export default {
  name: 'Tema5',
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
