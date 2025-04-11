<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Moldería para cinturones

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/Tema4/img001.svg', alt='')
      .col-lg-11
        p Para elaborar un cinturón se debe tener absoluta certeza tanto de la talla como de la hebilla, ya que éstas son las que definen sus dimensiones. De acuerdo con las medidas, se han estandarizado tallas para el cinturón tanto para la figura masculina, como femenina, para lo cual se pueden consultar las siguientes tablas:
     

    .row.justify-content-center.align.mb-5(data-aos="fade-left")
      .col-lg-3.col-sm-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span  Tallaje femenino
        .tabla-b.color-acento-contenido.mb-5(alt='La tabla presenta un sistema de tallaje femenino, relacionando las tallas con medidas en centímetros. Se incluyen las tallas 4, 6, 8, 10 y 12, con valores de 90 cm a 108 cm en incrementos de 4 cm. El formato estructurado facilita la identificación rápida de las medidas correspondientes a cada talla. ')
          .tabla-b__header
            h4.mb-0 TALLAJE FEMENIMO
          tbody
            tr
              th.text-regular 4
              th.text-regular 90 cm
            tr
              th.text-regular 6
              th.text-regular 94 cm
            tr
              th.text-regular 8
              th.text-regular 98 cm
            tr
              th.text-regular 10
              th.text-regular 102 cm
            tr
              th.text-regular 12
              th.text-regular 108 cm 


      .col-lg-4.col-sm-7.mb-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/Tema4/img02.png', alt='')
      .col-lg-3.col-sm-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span  Tallaje masculino
        .tabla-b.color-acento-contenido.mb-2(alt='La tabla presenta un sistema de tallaje masculino, relacionando las tallas con medidas en centímetros. Incluye las tallas 28, 30, 32, 34, 36 y 38, con valores que van desde 95 cm hasta 120 cm en incrementos de 5 cm. Su estructura permite identificar fácilmente la medida correspondiente a cada talla. ')
          .tabla-b__header
            h4.mb-0 TALLAJE MASCULINO
        
          tbody
            tr
              th.text-regular 38
              th.text-regular 120 cm
            tr
              th.text-regular 36
              th.text-regular 115 cm
            tr
              th.text-regular 34
              th.text-regular 110 cm
            tr
              th.text-regular 32
              th.text-regular 105 cm
            tr
              th.text-regular 30
              th.text-regular 100 cm 
 
            tr
              th.text-regular 28
              th.text-regular 95 cm 
      .col-lg-10
        figcaption Fuente SENA

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-7.tarjeta.color.p-2
        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            img.nota31(src='@/assets/curso/temas/Tema4/img002.svg', alt='')
          .col-lg-10.nota3
            br
            h5.mb-1 Nota. 
            p Estas dimensiones pueden cambiar, pues cada empresa maneja su propio tallaje. 


    p.mb-5 El cinturón se compone de 4 partes principales, las cuales son: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 38. 
          span  Partes del cinturón 
        figure
          img(src='@/assets/curso/temas/Tema4/figura38.svg', alt='La figura expone un esquema de las partes de un cinturón, incluyendo la puntera en un extremo y la hebilla en el otro. Se identifican elementos como el pasador y la chapeta, los cuales contribuyen a la sujeción y ajuste. También se destacan varios orificios distribuidos a lo largo de la correa para permitir la regulación del tamaño. ')
        figcaption Fuente SENA.  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-sm-6.col-10
        .tarjeta.fondoslyder2.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-6.col-lg-6.col-7
              img(src='@/assets/curso/temas/Tema4/ico1.svg')
          .row.justify-content-center.align-items-center.mb-3.px-3
            .col-lg-6.col-sm-6.bg1table.mb-2.col-6
              h5.mb-0.text-center.bg-color.text-white a) Puntera: 
            .col-lg-12.col-sm-11
              p.text-center define la punta que va a tener el cinturón (redonda, cuadrada, en punta, etc.).
      
      .col-lg-3.col-sm-6.col-10
        .tarjeta.fondoslyder2.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-6.col-lg-6.col-7
              img(src='@/assets/curso/temas/Tema4/ico2.svg')
          .row.justify-content-center.mb-3.px-3
            .col-lg-6.col-sm-6.bg1table.mb-2.col-6
              h5.mb-0.text-center.bg-color.text-white b) Pasador: 
            .col-lg-12.col-sm-11
              p.text-center pieza que permite sujetar la puntera después de atravesar la hebilla.

      .col-lg-3.col-sm-6.col-10
        .tarjeta.fondoslyder2.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-6.col-lg-6.col-7
              img(src='@/assets/curso/temas/Tema4/ico3.svg')
          .row.justify-content-center.mb-3.px-3
            .col-lg-6.col-sm-6.bg1table.mb-2.col-6
              h5.mb-0.text-center.bg-color.text-white c) Chapeta:  
            .col-lg-12.col-sm-11
              p.text-center pieza que sostiene la hebilla para armar el cinturón.

      .col-lg-3.col-sm-6.col-10
        .tarjeta.fondoslyder2.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-6.col-lg-6.col-7
              img(src='@/assets/curso/temas/Tema4/ico4.svg')
          .row.justify-content-center.mb-3.px-3
            .col-lg-6.col-sm-6.bg1table.mb-2.col-6
              h5.mb-0.text-center.bg-color.text-white d) Hebilla: 
            .col-lg-12.col-sm-11
              p.text-center es el herraje y se encuentra en diferentes dimensiones, formas y acabados.
           
     
    .row.justify-content-center.align.mb-5(data-aos="fade-left")
      .col-lg-6
        p Para elaborar los moldes del cinturón, es fundamental conocer las dimensiones de la hebilla, ya que esta determina su ancho. Para definir el largo, es necesario consultar directamente las tablas de tallajes.
        p En primer lugar, se debe medir el ancho interno de la hebilla y restarle 3 mm. Esta reducción garantiza que, al cortar las tiras, estas puedan deslizarse con facilidad a través de la hebilla.
        .row
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema4/correa.svg')
          .col-lg-10
            h5 Ejemplo:
            p Medida de la hebilla por la parte interna 3.5 cm -3 mm = 3.2 cm (esta medida será el ancho de la tira).
      .col-lg-6
        .titulo-sexto.color-acento-contenido
            h5 Figura 39. 
            span  Medida de la hebilla 
        figure
          img(src='@/assets/curso/temas/Tema4/figura39.svg', alt='La figura expone un esquema de una hebilla con una medida específica de 3.5 cm en uno de sus lados. Su diseño incluye un marco rectangular con una barra central, lo que sugiere su uso para ajustar correas o cinturones. ')
        .py-1
        figcaption Fuente SENA.       

    p.mb-4 Para sacar el largo de la tira de cuero se toma desde la tercera perforación y para ello es imprescindible tener en cuenta la talla del cinturón. 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 40. 
          span  Largo de cintura
        figure
          img(src='@/assets/curso/temas/Tema4/figura40.svg', alt='La figura ilustra un esquema de un cinturón con indicaciones sobre su largo en relación con la talla. Se señalan los orificios para el ajuste y la ubicación de la hebilla, junto con una línea de referencia que indica el tramo correspondiente a la medida de la talla. El diseño facilita la identificación del tamaño adecuado según las perforaciones disponibles. ')
        figcaption Fuente SENA.  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-sm-10.col-12.mb-5
        .tarjeta.fondotarjeta2.p-4
          .row.justify-content-center.mb-3.px-2
            .col-lg-12.col-sm-12
              p Asimismo, la distancia desde la puntera hasta la perforación central debe ser de 13 a 15 cm. La puntera puede tener diferentes formas, como redonda, cuadrada o en punta. Además, el espacio entre cada perforación o agujero debe ser de 2.5 cm.
            .titulo-sexto.color-acento-contenido
              h5 Figura 41. 
              span  Puntera  
            figure
              img.col-sm-10(src='@/assets/curso/temas/Tema4/figura41.svg', alt='La figura representa la puntera de un cinturón, detallando sus dimensiones y la distribución de los orificios para el ajuste. Se indica un rango de longitud entre 13 y 15 cm desde el extremo redondeado hasta el primer orificio, con una separación de 2.5 cm entre cada perforación. El diseño facilita la regulación del tamaño del cinturón.')
      
      .col-lg-4.col-sm-10.col-12.mb-5
        .tarjeta.fondotarjeta2.p-4
          .row.justify-content-center.align-items-center.mb-3.px-2
            .col-lg-12.col-sm-12
              p  La chapeta se trabaja de 14 cm de largo (el ancho lo define la hebilla como se expuso en la primera parte y su forma la determina la puntera).
            .titulo-sexto.color-acento-contenido
              h5 Figura 42. 
              span  Chapeta 
            figure
              img.col-sm-10(src='@/assets/curso/temas/Tema4/figura42.svg', alt='La imagen representa una chapeta con forma alargada y extremos curvos o biselados. Su dimensión de ancho es de 14 cm, según la anotación en azul. La estructura de la pieza sugiere que es utilizada como refuerzo, adorno o elemento funcional en un proceso de confección. ')
      
      .col-lg-4.col-sm-10.col-12.mb-5
        .tarjeta.fondotarjeta2.p-4
          .row.justify-content-center.align-items-center.mb-3.px-2
            .col-lg-12.col-sm-12
              p El largo del pasador se obtiene del ancho del cinturón, esta medida se duplica y se le agrega 1 cm. Y para obtener el ancho, este se trabaja con una medida estándar de 1.5 cm. 
            .titulo-sexto.color-acento-contenido
              h5 Figura 43. 
              span Largo del pasador
            figure
              img.col-sm-10(src='@/assets/curso/temas/Tema4/figura43.svg', alt='La figura expone el esquema de un pasador para cinturón, con una fórmula que indica su largo basado en el ancho del cinturón más un centímetro adicional. Su diseño rectangular sugiere que rodea la correa para mantenerla en su lugar una vez abrochada la hebilla. ')
      figcaption Fuente SENA.  
    
    
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-7.tarjeta.color.p-3
        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            img.nota31(src='@/assets/curso/temas/Tema4/img002.svg', alt='')
          .col-lg-10.nota
            h5.mb-1 Nota. 
            p Algunos cinturones presentan forro y refuerzo y éste último se realiza en salpa. 



    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12
        img(src='@/assets/curso/temas/Tema5/linea.svg', alt='')











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
