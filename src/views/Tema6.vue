<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Corte, preparación y confección de artículos de cuero


    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-5.bg3.p-3.mb-3
        br
        p.px-2 Para la confección de un producto, es fundamental llevar a cabo el proceso de corte y preparación del material, ya que en esta etapa se ajustan y acondicionan las piezas necesarias. Durante este proceso, se pueden realizar acciones como rebajar el material, entintar bordes, doblar y tinturar piezas, dependiendo del tipo de material con el que se trabaja. En el caso del cuero, es esencial conocer sus partes.
      .col-lg-3.col-8.mb-3
        img(src='@/assets/curso/temas/Tema6/img01.png', alt='')
      .col-lg-4
        .row
          .col-lg-3.mb-4.col-2
            img(src='@/assets/curso/temas/Tema6/ico1.svg', alt='')
          .col-lg-12
            p.px-2 El cuero es la principal materia prima en marroquinería y se compone de dos capas: la flor y la carnaza. La flor corresponde a la parte exterior del material y conserva la textura natural de la piel animal, mientras que la carnaza es la capa interna o reverso del cuero.
      
    p Las secciones más relevantes del cuero para el proceso de corte incluyen:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-sm-6.col-10
        .tarjeta.fondoslyder2.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-5.col-lg-4.col-6
              img(src='@/assets/curso/temas/Tema6/ico2.svg')
          .row.justify-content-center.mb-3.px-2
            .col-lg-11.col-sm-8
              p.text-center #[b Crupón:] es la zona más firme y uniforme, considerada la mejor para cortar el cuerpo del bolso y las manijas.
      
      .col-lg-4.col-sm-6.col-10
        .tarjeta.fondoslyder2.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-5.col-lg-4.col-6
              img(src='@/assets/curso/temas/Tema6/ico2.svg')
          .row.justify-content-center.mb-3.px-2
            .col-lg-11.col-sm-8
              p.text-center #[b Cuello:] se emplea para extraer piezas internas del diseño.

      .col-lg-4.col-sm-6.col-10
        .tarjeta.fondoslyder2.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-5.col-lg-4.col-6
              img(src='@/assets/curso/temas/Tema6/ico2.svg')
          .row.justify-content-center.mb-3.px-2
            .col-lg-11.col-sm-8
              p.text-center #[b Falda:] se destina al corte de piezas que requieren refuerzo con materiales como salpa, odena o polex.
  
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 44. 
            span  Hoja de cuero 
          figure
            img(src='@/assets/curso/temas/Tema6/figura44.svg', alt='La figura representa la distribución de una hoja de cuero, destacando sus principales secciones. Se identifican el cuello, el crupón, la falda y la cola, cada una con diferentes características y usos en la marroquinería. Además, se indica la dirección en la que el material se estira, lo que es relevante para su manipulación y corte adecuado. ')
          .py-2
          figcaption Fuente SENA.  
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.bg44.p-4
        .row.align-items-center
          .col-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema4/img002.svg', alt='')
          .col-lg-10
            h5 Nota. 
            ul.lista-ul
              li.mb-0
                i.fas.fa-check-circle
                | #[b Salpa:] se refiere a un material aglomerado hecho de fibras de cuero reciclado.
              li.mb-0
                i.fas.fa-check-circle 
                | #[b Odena:] es un tipo de cartón prensado utilizado para reforzar bolsos, cinturones y otros artículos de cuero.
              li.mb-0 
                i.fas.fa-check-circle
                | #[b Polex:] también es un material sintético empleado en refuerzos, posiblemente con origen en nombres de marca.
    p.mb-5 El proceso de corte en telas y materiales sintéticos también provoca estiramiento en el material; en el caso de las telas de tejido plano o sintéticos, el estiramiento ocurre en la dirección de la trama. Por otro lado, en las telas no tejidas, el estiramiento se distribuye de manera uniforme en ambos sentidos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 45. 
          span  Estiramiento cuero 
        figure
            img(src='@/assets/curso/temas/Tema6/figura45.svg', alt='La figura representa el comportamiento del estiramiento en un material en rollo, específicamente cuero. Se indican dos direcciones principales: estiramiento en el sentido horizontal y estabilidad en el sentido vertical. Esta distribución sugiere que el material tiene mayor elasticidad en un eje y mayor resistencia en el otro, lo cual es clave para su manipulación y corte adecuado. ')
            .py-2
            figcaption Fuente SENA.
            .py-2 
      .col-lg-4.col-10
        img(src='@/assets/curso/temas/Tema6/img03.png', alt='')



    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.bg44.p-4
        .row.align-items-center
          .col-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema4/img002.svg', alt='')
          .col-lg-10
            h5 Nota. 
            p Antes de cortar, es fundamental verificar la pieza y el sentido de estiramiento del material para evitar deformaciones posteriores. Además, se debe considerar la industrialización del molde, asegurando que el corte se realice por el derecho del material. Si el molde indica 2X1, significa que deben obtenerse dos piezas, colocando primero la plantilla en una cara y luego volteándola para cortar la segunda.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-botones.text-white
          .tarjeta.color-acento-botones.bg55.p-4(titulo="Proceso de Corte")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                p.text-negro.mb-0 Una vez elaborados los moldes, el corte se puede realizar de forma mecánica, utilizando troqueladoras, cortadoras de rayo láser o de chorro de agua, o de manera manual con cuchilla, método que se abordará en este curso. Para obtener un corte preciso, es esencial contar con un banco de trabajo adecuado y una piedra de afilar para mantener el filo de la cuchilla en óptimas condiciones.
                p.text-negro Para el corte de materia prima, especialmente cuero, es fundamental considerar su estiramiento. Para las piezas, se emplea cuchilla en cuero y sintéticos, mientras que en textiles se utilizan tijeras. En el caso del cuero, sintéticos o cartón, el molde se coloca sobre el material antes de realizar el corte, asegurando precisión en el proceso.
              .col-lg-5
                .titulo-sexto.color-acento-contenido.text-negro
                  h5.text-negro Figura 46. 
                  |Mesa de corte 
                figure
                  img(src='@/assets/curso/temas/Tema6/figura46.png', alt='La figura muestra una mesa de corte utilizada en procesos de manufactura. Su estructura metálica y superficie resistente proporcionan un espacio adecuado para realizar cortes con precisión. Debajo de la mesa, se encuentran herramientas y equipos complementarios, optimizando el área de trabajo para mayor eficiencia en el proceso de corte. ')
                  .py-2
                  figcaption.text-negro Fuente SENA.  

          .tarjeta.color-acento-botones.bg55.p-4(titulo="Desbastado de piezas")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                p.mb-0.text-negro El desbastado es el proceso de reducción del calibre o grosor en los bordes de las piezas, realizado según la función del material. Este procedimiento puede efectuarse de forma manual o con una máquina desbastadora. Su aplicación facilita el ensamblaje del producto al evitar abultamientos, permitiendo costuras más limpias y un mejor acabado estético. Además, es una técnica clave en la elaboración de vivos y ribetes.
              .col-lg-5
                .titulo-sexto.color-acento-contenido.text-negro
                  h5.text-negro Figura 47. 
                  |Desbaste de pieza 
                figure
                  img(src='@/assets/curso/temas/Tema6/figura47.png', alt='La figura presenta piezas de material con el proceso de desbastado aplicado en sus bordes. Se aprecia la reducción del grosor en ciertas áreas, lo que facilita el ensamblaje y mejora el acabado final del producto. Esta técnica permite obtener un ajuste preciso en las costuras y optimizar la apariencia del material trabajado. ')
                  .py-2
                  figcaption.text-negro Fuente SENA.  
          
          .tarjeta.color-acento-botones.bg55.p-4(titulo="Entintado de bordes")
           .row.justify-content-center.align-items-center.mb-5
              .col-lg-7
                p.mb-0.text-negro Es un proceso que se realiza cuando hay piezas que quedan al corte al momento de ensamblarlas. Para ello es importante revisar qué piezas necesitan entintar sus cantos o bordes para aplicar tinta marroquinera a éstos. Esta operación también se puede hacer con un pincel.
              .col-lg-5
                .titulo-sexto.color-acento-contenido.text-negro
                  h5.text-negro Figura 48. 
                  | Entintado de bordes
                figure
                  img(src='@/assets/curso/temas/Tema6/figura48.png', alt='La imagen representa un proceso de entintado de bordes, donde una persona aplica color a la orilla de una pieza de material, posiblemente cuero o similar. Se utiliza una herramienta manual con un rodillo para distribuir la tinta de manera uniforme. La base de apoyo presenta rastros de pigmento, lo que indica su uso frecuente en este tipo de acabado. ')
                  .py-2
                  figcaption.text-negro Fuente SENA.  
       
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/temas/Tema6/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Doblado de piezas

    p.mb-5 Después del desbastado, las piezas deben prepararse antes de la costura. Para facilitar la confección del producto, es necesario doblarlas previamente. En los diseños pueden presentarse diversas formas, como curvas entrantes, curvas salientes y piezas rectas, entre otras.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-8.mb-4.col-sm-6
        img(src='@/assets/curso/temas/Tema6/img04.png', alt='')
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Doblado de piezas con curva entrante")
            .col-md-12.mb-4.mb-md-0
              p Se deben realizar pequeñas incisiones o piquetes a intervalos de 5 mm a lo largo de la curva entrante. Luego, se aplica solución de caucho por el revés en un área de 16 mm para facilitar el doblez. Durante el proceso, es importante evitar la deformación de la curva. Vale la pena señalar que se utiliza un martillo para asegurar la adherencia del material.
          .row(titulo="Doblado de Piezas con Curva Saliente")
            .col-md-6.mb-4.mb-md-0
              p En este caso, se aplica solución de caucho en un área de 16 mm a lo largo del perímetro de la pieza. A continuación, se inicia el pegado a intervalos de 1 cm, moldeando la curva gradualmente. Para lograr un mejor acabado, es recomendable utilizar un estaquillo o punzón para ajustar el pegado y, posteriormente, reafirmarlo con un martillo.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.text-negro
                h5.text-negro Figura 49. 
                | Doblado curva saliente 
              figure
                img(src='@/assets/curso/temas/Tema6/figura49.png', alt='La figura muestra una mesa de corte utilizada en procesos de manufactura. Su estructura metálica y superficie resistente proporcionan un espacio adecuado para realizar cortes con precisión. Debajo de la mesa, se encuentran herramientas y equipos complementarios, optimizando el área de trabajo para mayor eficiencia en el proceso de corte. ')
                .py-2
                figcaption.text-negro Fuente SENA. 
          .row(titulo="Doblado de piezas rectas")
            .col-md-6.mb-4.mb-md-0
              p Sobre el perímetro de la pieza a un área de 16mm se aplica solución de caucho y se procede a doblar la pieza y a afirmar con el martillo el pegado de esta. 
            .col-lg-6
              .titulo-sexto.color-acento-contenido.text-negro
                h5.text-negro Figura 50. 
                | Doblado de pieza recta  
              figure
                img(src='@/assets/curso/temas/Tema6/figura50.png', alt='La figura representa el proceso de doblado en una pieza recta. Se utilizan las manos para ajustar el material sobre una superficie de trabajo, asegurando precisión en el pliegue. La aplicación de adhesivo en los bordes facilita la fijación, contribuyendo a un mejor acabado en la confección.')
                .py-2
                figcaption.text-negro Fuente SENA. 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.bg44.p-2
        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema4/img002.svg', alt='').p-4
          .col-lg-10
            h5 Nota. 
            p Teniendo previamente preparadas cada una de las piezas se pasa a la confección y armado del producto.
    
    .row.align-items-center
      .col-lg-12
        img(src='@/assets/curso/temas/Tema6/linea.svg', alt='')

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
