<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fondointroduccion2.align-items-center.p-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
          .col-lg-8.fondo2.p-3.col-12
            p.p-4 La marroquinería es un arte que combina la tradición artesanal con la innovación tecnológica para crear complementos que no solo son funcionales, sino también expresiones de diseño y estilo; este proceso inicia con la selección cuidadosa de materiales, que incluyen cuero genuino, sintéticos y textiles especializados, cada uno aportando propiedades únicas de resistencia, flexibilidad y estética. A partir de allí, el diseño y patronaje cobran protagonismo, permitiendo definir con precisión la forma y estructura de cada pieza, desde bolsos y billeteras hasta cinturones y otros accesorios. La confección se lleva a cabo mediante técnicas que van desde la costura manual hasta el uso de maquinaria de última generación, lo que garantiza acabados de alta calidad. La industria marroquinera sigue evolucionando gracias a la incorporación de nuevas tecnologías y la experimentación con materiales sostenibles, manteniendo un equilibrio entre la tradición del oficio y las exigencias del mercado contemporáneo  .
          .col-lg-4
            img(src='@/assets/curso/img01.png', alt='')
     

    .row.fondointroduccion.align-items-center.p-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")           
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2bDjgp4Qvks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .py-3
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
