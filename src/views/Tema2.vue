<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Materiales para la elaboración de moldes, tipos, características

    p Para llevar a cabo el proceso de patronaje, es fundamental contar con los siguientes materiales y elementos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-8.mb-4.col-sm-6
        img(src='@/assets/curso/temas/Tema2/img01.png', alt='')
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Cartulina o cartón dúplex")
            .col-md-12.mb-4.mb-md-0
              p Este material, compuesto por láminas de papel de mayor espesor, facilita el corte y la conformación de los moldes. Se utiliza para desarrollar la moldería de acuerdo con el diseño requerido. Comercialmente, se encuentra en pliegos de 100 x 70 cm y en diversas tonalidades en el caso de la cartulina.
          .row(titulo="Portaminas o lápiz")
            .col-md-12.mb-4.mb-md-0
              p Se emplea para realizar trazos precisos sobre el papel, lo que garantiza líneas exactas en la elaboración del molde. Se recomienda utilizar minas de 0.5 a 0.7 m.m para obtener una mayor precisión en los detalles.
          .row(titulo="Borrador")
            .col-md-12.mb-4.mb-md-0
              p Su función principal es corregir trazos sin generar manchas en el molde. Se recomienda el uso de borradores de miga de pan o de nata, ya que permiten hacer correcciones con mayor limpieza y precisión.
          .row(titulo="Mina plata")
            .col-md-12.mb-4.mb-md-0
              p Este tipo de mina es ideal para marcar sobre materiales como cuero o sintético, ya que sus trazos son fáciles de remover. Se emplea para señalar líneas de corte de patrones y delimitar el doblez de algunas piezas, facilitando así la confección.

</template>

<script>
export default {
  name: 'Tema2',
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
