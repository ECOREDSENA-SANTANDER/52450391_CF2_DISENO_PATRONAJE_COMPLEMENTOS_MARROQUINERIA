<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Desarrollo y evaluación del producto o prototipo
    
    p(data-aos="fade-up") Una vez seleccionado el producto y definida su ficha técnica, se procede a la elaboración de los moldes, los cuales pueden desarrollarse de manera manual o digital, dependiendo de las características del diseño y los requerimientos técnicos.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azull")
          .row.justify-content-center.align-items-start(titulo="Desarrollo del producto o prototipo")
            .col-md-2
              img(src='@/assets/curso/temas/Tema4/img01.png', alt='')
            .col-md-10
              p Con los moldes listos, se inicia el proceso productivo para la obtención del producto o prototipo, asegurando la aplicación de los parámetros definidos en la fase de evaluación previa. Este proceso debe cumplir con estándares de calidad, funcionalidad y viabilidad productiva, garantizando que el resultado final se ajuste a los requerimientos establecidos.
          .row.justify-content-center.align-items-start(titulo="Evaluación del producto o prototipo")
            .col-md-2
              img(src='@/assets/curso/temas/Tema4/img02.png', alt='')
            .col-md-10
              p La evaluación del producto o prototipo es una fase clave para determinar la efectividad del proceso de producción, en esta etapa se realizan controles de calidad y análisis funcionales para verificar si el desarrollo se ajusta a los parámetros establecidos. De ser necesario, se procede a realizar ajustes o rediseños que optimicen el producto antes de su producción en serie o lanzamiento al mercado.
          .row.justify-content-center.align-items-start(titulo="Manejo e interpretación de la información en el proceso de diseño")
            .col-md-2
              img(src='@/assets/curso/temas/Tema4/img03.png', alt='')
            .col-md-10
              p El proceso de diseño de un producto o colección requiere un análisis riguroso de la información disponible en diversas fuentes, tales como bocetos, revistas, catálogos, estudios de tendencias y referencias históricas. La conceptualización del diseño parte de una inspiración que puede provenir de diferentes experiencias, como viajes, literatura, arte o referencias culturales, las cuales permiten definir una línea creativa coherente con los objetivos del proyecto.
              p El análisis de la información no solo facilita la toma de decisiones estratégicas en el diseño, sino que también permite evaluar colecciones anteriores y realizar estudios de competencia. Esto contribuye a la definición de estrategias innovadoras que potencien la propuesta de valor del producto y optimicen su aceptación en el mercado.
              p Además, la consolidación de información propia a partir del desarrollo del producto posibilita la trazabilidad de este, permitiendo un seguimiento detallado desde su concepción hasta su implementación, asegurando coherencia en el diseño y en la oferta final.
</template>

<script>
export default {
  name: 'Tema4',
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
