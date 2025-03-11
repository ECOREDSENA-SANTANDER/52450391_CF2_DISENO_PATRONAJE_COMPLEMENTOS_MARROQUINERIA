<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.fondo5.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Trazado de modelos para diseños en marroquinería

    p.mb-5 El proceso de trazado de modelos para la elaboración de bolsos, billeteras, accesorios para la cabeza y correas sigue una metodología estandarizada, basada en principios de construcción geométrica y proporcionalidad. Este enfoque permite definir con precisión las dimensiones y características esenciales de cada diseño, garantizando coherencia y funcionalidad en el desarrollo de productos de marroquinería.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-12
        TabsC.color-acento-color-acento-contenido   
          .bgimg2.py-4.py-md-4(titulo="Encaje del dibujo")
            .row.justify-content-center.align-items-center.mb-5.p-4
              .col-md-5.mb-4.mb-md-0
                h4 Encaje del dibujo
                p El primer paso consiste en establecer las líneas de construcción que definirán la estructura básica del producto, determinando sus dimensiones en términos de largo, alto y ancho. Estas líneas sirven como guía para la distribución del diseño y pueden ser eliminadas o ajustadas una vez finalizado el boceto.
              
              .col-md-5
                .py-2
                .titulo-sexto.color-acento-contenido
                  h5 Figura 7. 
                  span Encajar el dibujo con líneas de construcción
                figure
                  img(src='@/assets/curso/temas/Tema5/figura7.png', alt='Un esquema geométrico compuesto por un trapecio y un cuadrado está estructurado con líneas de construcción. El trapecio tiene una base inferior de 35 cm y una altura de 20 cm. El cuadrado se encuentra centrado en la parte superior del trapecio, interceptándolo parcialmente.')
        
          .bgimg2.py-4.py-md-4(titulo="Determinación de proporciones")
            .row.justify-content-center.align-items-center.mb-5.p-4
              .col-md-5.mb-4.mb-md-0
                h4 Determinación de proporciones
                p A partir de las líneas de construcción, se establecen las proporciones de las diferentes partes del producto, asegurando una distribución armónica y equilibrada. Este proceso permite visualizar la relación entre los distintos elementos del diseño antes de avanzar en su desarrollo tridimensional.
            
              .col-md-5
                .py-2
                .titulo-sexto.color-acento-contenido
                  h5 Figura 8. 
                  span Determinar proporciones
                figure
                  img(src='@/assets/curso/temas/Tema5/figura8.png', alt='Se presenta a un individuo, sentado en un espacio de trabajo, sostiene un documento o una hoja mientras la coloca dentro de un portafolio de cuero abierto. La escena sugiere un proceso de determinación de proporciones y ajuste de dimensiones.')
            
          .bgimg2.py-4.py-md-4(titulo="Elaboración del boceto")
            .row.justify-content-center.align-items-center.mb-5.p-4
              .col-md-5.mb-4.mb-md-0
                h4 Elaboración del boceto
                p Con base en los principios de perspectiva y volumetría, se genera un boceto tridimensional del producto, incorporando detalles clave como formas, materiales y propuesta de color. Este paso es fundamental para la visualización del diseño final y su viabilidad en el proceso de producción.
                p El boceto es la representación gráfica de la idea conceptual del producto y no requiere conocimientos avanzados en dibujo técnico, ya que su propósito es servir como una herramienta de exploración creativa y de comunicación en el desarrollo del diseño.
            
              .col-md-5
                .py-2
                .titulo-sexto.color-acento-contenido
                  h5 Figura 9. 
                  span Bocetos en marroquinería
                figure
                  img(src='@/assets/curso/temas/Tema5/figura9.png', alt='Se evidencia a una persona que traza líneas sobre un gran pliego de papel extendido sobre una mesa de trabajo. A su alrededor se encuentran diversos objetos relacionados con la marroquinería. El ambiente evoca un proceso artesanal y creativo, en la etapa de diseño de un producto de cuero.')
          
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
