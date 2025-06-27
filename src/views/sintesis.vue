<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La marroquinería es un arte y una industria que combina tradición y tecnología en la fabricación de artículos de cuero. Este proceso implica diversas etapas que van desde el uso de herramientas especializadas hasta la confección detallada de productos terminados. La estructura presentada organiza los principales aspectos del trabajo en cuero, abarcando desde la maquinaria empleada hasta los procedimientos de moldeado y corte.
    p Dentro de este proceso, el uso de herramientas y maquinaria específica facilita la transformación del cuero en productos de alta calidad. Además, el desarrollo de moldes juega un papel esencial en la producción de bolsos, billeteras y cinturones, permitiendo la estandarización y optimización de materiales. Finalmente, la fase de corte y preparación es crucial para asegurar acabados profesionales mediante técnicas como el desbastado de piezas y el entintado de bordes. Esta síntesis permite comprender de manera estructurada los elementos clave en la creación de artículos de marroquinería.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de flujo sobre marroquinería con un título en la parte superior y cuatro flechas que conducen a diferentes áreas: herramientas y maquinaria, moldería para bolsos y cinturones, moldería común para bolsos, y corte y confección de artículos de cuero. Cada área incluye subtemas clave, como maquinaria, medidas para moldes, procesos de corte y acabado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
