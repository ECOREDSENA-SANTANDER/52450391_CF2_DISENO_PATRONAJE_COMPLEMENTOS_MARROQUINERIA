<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Moldería para bolsos, billeteras y cinturones 

    p La moldería es el proceso de diseño y desarrollo de patrones para la fabricación de productos, asegurando precisión en trazos y medidas. En marroquinería, la exactitud de los moldes es crucial para la fidelidad al diseño, pudiendo realizarse de manera digital o manual; en este espacio trabajaremos la moldería manual.

    .row.justify-content-center(data-aos="flip-up").fondot3.px-4
      .col-lg-12.col-12.px-lg-5.px-3
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-11.col-lg-7.col-12
            .d-flex.align-items-center.mt-4
              img.w-card-icon(src="@/assets/curso/temas/Tema6/ico.svg")
              h3.bg2.py-2.w-card-text.text-white Partes de un bolso
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-2.col-sm-6.col-8
            img(src='@/assets/curso/temas/Tema2/img01.png', alt='')
          .col-lg-8.col-12
            p El bolso se compone de diversas piezas, visibles o internas según el diseño:
            ul.lista-ul
              li.mb-0
                i.fas.fa-check-circle
                |#[b Frente:] parte frontal, debe cortarse en la mejor sección del material.
              li.mb-0
                i.fas.fa-check-circle
                |#[b Espaldar:] pieza opuesta al frente, generalmente en contacto con el cuerpo.
              li.mb-0
                i.fas.fa-check-circle
                |#[b Base:] ubicada en la parte inferior, menos visible, permitiendo aprovechar zonas con imperfecciones del material.
              li.mb-0
                i.fas.fa-check-circle
                |#[b Fuelle/escudo lateral:] determina el volumen del bolso; algunos diseños pueden prescindir de esta pieza.
              li.mb-0
                i.fas.fa-check-circle
                |#[b Tapa:] se une al espaldar y su presencia depende del diseño.
              li.mb-0
                i.fas.fa-check-circle
                |#[b Porta cierre/falso interno:] alojamiento del cierre, generalmente en la parte superior.
              li.mb-0
                i.fas.fa-check-circle
                |#[b Correa/manija:] elemento de sujeción, cuya longitud y forma dependen del diseño.
              li.mb-0
                i.fas.fa-check-circle
                |#[b Forro:] puede ser adherido o suelto, según el diseño.
              li.mb-0
                i.fas.fa-check-circle
                |#[b Bolsillo interno:] compartimento auxiliar que mejora la organización del usuario.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/temas/Tema6/ico.svg")
          h3.bg2.py-2.w-card-text.text-white Medidas de aumento para moldes
    p Para el ensamble del bolso, se aplican márgenes de aumento en los moldes según el material y el tipo de operación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-sm-8.col-12
        .tarjeta.fondoslyder3.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-4.col-lg-5.col-4
              img(src='@/assets/curso/temas/Tema2/ico1.svg')
          .row.justify-content-center.mb-3.px-4
            .col-lg-12.col-sm-8
              p #[b Montaje y unión:] 10 mm (aplicable a cuero, textil y sintético).
      
      .col-lg-3.col-sm-8.col-12
        .tarjeta.fondoslyder3.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-4.col-lg-5.col-4
              img(src='@/assets/curso/temas/Tema2/ico1.svg')
          .row.justify-content-center.mb-3.px-4
            .col-lg-12.col-sm-8
              p #[b Doblado:] proceso en el que el material se pliega sobre sí mismo o sobre un refuerzo rígido para dar forma y estructura al producto.
              ul.lista-ul
                li.mb-0
                  i.fas.fa-check-circle
                  |#[b Cuero:] 8 mm sobre sí mismo, 10 mm sobre material rígido.
                li.mb-0
                  i.fas.fa-check-circle
                  |#[b Textil/Sintético:] 10 mm sobre sí mismo, 12 mm sobre material rígido.
      
      .col-lg-3.col-sm-8.col-12
        .tarjeta.fondoslyder3.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-4.col-lg-5.col-4
              img(src='@/assets/curso/temas/Tema2/ico1.svg')
          .row.justify-content-center.mb-3.px-4
            .col-lg-12.col-sm-8
              p #[b Envivado:] técnica de acabado en los bordes del cuero, donde se recorta y pule para suavizar y mejorar la estética de la pieza.
              ul.lista-ul
                li.mb-0
                  i.fas.fa-check-circle
                  |#[b Cuero:] 5 mm.
                li.mb-0
                  i.fas.fa-check-circle
                  |#[b Textil/Sintético:] 10 mm.    
    
      .col-lg-3.col-sm-8.col-12
        .tarjeta.fondoslyder3.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-sm-4.col-lg-5.col-4
              img(src='@/assets/curso/temas/Tema2/ico1.svg')
          .row.justify-content-center.mb-3.px-4
            .col-lg-12.col-sm-8
              p #[b Costuras internas:] 
              ul.lista-ul
                li.mb-0
                  i.fas.fa-check-circle
                  |#[b Cuero:] 8 mm.
                li.mb-0
                  i.fas.fa-check-circle
                  |#[b Textil/Sintético:] 10 mm.   
    
    .row.justify-content-center(data-aos="flip-up").fondot3.px-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7.col-12
            .d-flex.align-items-center.mt-4
              img.w-card-icon(src="@/assets/curso/temas/Tema6/ico.svg")
              h3.bg2.py-2.w-card-text.text-white Marcado e industrialización de moldes
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-2.col-sm-6.col-12
            img(src='@/assets/curso/temas/Tema2/img02.png', alt='')
          .col-lg-8
            p El proceso de industrialización requiere el marcado preciso de cada molde para su identificación eficiente, por ello cada patrón debe incluir:
            ul.lista-ul
              li.mb-0
                i.fas.fa-check-circle
                |#[b Nombre del molde:] correspondiente a la pieza del bolso.

              li.mb-0
                i.fas.fa-check-circle
                |#[b Cantidad de piezas a cortar:] indicando la cantidad necesaria (ej. 2x1).

              li.mb-0
                i.fas.fa-check-circle
                |#[b Material:] especificación del material de corte (ej. cuero, sintético, textil).

              li.mb-0
                i.fas.fa-check-circle
                |#[b Referencia del producto:] código o nomenclatura (ej. BTP-001).

              li.mb-0
                i.fas.fa-check-circle
                |#[b Numeración del molde:] identificación secuencial (ej. 1/6, 2/6, etc.).

            .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
                .col-lg-12.tarjeta.color
                  .row.align-items-center
                    .col-lg-2.d-none.d-lg-block
                      img.imgtamano(src='@/assets/curso/temas/Tema4/img002.svg', alt='')
                    .col-lg-10
                      br
                      h5.mb-0 Nota. 
                      p La metodología de industrialización puede variar según los procesos internos de cada empresa.
           
    
    .row.justify-content-center(data-aos="flip-up")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7.col-12
            .d-flex.align-items-center.mt-4
              img.w-card-icon(src="@/assets/curso/temas/Tema6/ico.svg")
              h3.bg2.py-2.w-card-text.text-white Marcado e industrialización de moldes
    
    
        p Existen diferentes estructuras de bolsos, una de ellas es el bolso tipo pinza, caracterizado por pinzas en la parte inferior que, al cerrarse, generan volumen o amplitud en la pieza.
    
    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-6
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 8. 
          | Bolso tipo pinza
        figure
          img(src='@/assets/curso/temas/Tema2/figura8.svg', alt='La imagen presenta un bolso elegante de tamaño mediano con asas cortas y una correa larga ajustable para llevarlo al hombro. Su diseño incluye un patrón mono gramado en tonos marrón y detalles en cuero color camel. Además, cuenta con un adorno metálico colgante con el logo de la marca y herrajes dorados que complementan su estilo sofisticado. ')
          .py-2
          figcaption.text-negro Fuente SENA.  
    
    
    p A continuación, se describen los pasos en la elaboración de los moldes:
    
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left").fondot03
      .col-lg-8.col-11
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7.col-12
            .d-flex.align-items-center.mt-3
              h3.bg5.py-2.w-card-text Paso 1. Elaborar el molde patrón
        p Se corta cartulina de 51 cm x 37 cm. Ya que al largo se le debe aumentar la medida del ancho del bolso más 3 cm que se usan para trabajar la ventaja de costura.
        p En el caso del alto se agrega solo la mitad del ancho más los 3 cm de ventaja de costura. 
        .py-4

      .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-4.col-9
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 9. 
            | Molde patrón bolso tipo pinza 
          figure
            img(src='@/assets/curso/temas/Tema2/figura9.svg', alt='La imagen expone un molde patrón para la confección de un bolso tipo pinza. La forma es rectangular y cuenta con medidas especificadas de 51 cm de ancho y 37 cm de alto. Las dimensiones están resaltadas en color azul, facilitando su interpretación para el proceso de corte y armado del bolso. ')
            .py-2
            figcaption.text-negro Fuente SENA.  
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
          p Posteriormente se traza una línea sobre la mitad de la cartulina iniciando por el largo del molde, esto con el fin de doblarlo y trabajar simetría. Tome la medida desde la línea de simetría hacia uno de los lados marcando la mitad de la medida del largo (para este caso 20 cm) y así mismo de la parte superior de la cartulina traza 8 mm hacia abajo para agregar ventaja de costura. 


    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 10.
          |  Molde patrón bolso tipo pinza  
        figure
          img(src='@/assets/curso/temas/Tema2/figura10.svg', alt='La imagen representa un molde patrón para la confección de un bolso tipo pinza. Tiene una forma rectangular con dimensiones de 51 cm de ancho y 37 cm de alto. Incluye una línea de simetría central para marcar el doblez y medidas adicionales que indican la distribución del diseño, como separaciones de 20 cm en cada lado y una pinza de 8 mm en la parte superior derecha. Los detalles están resaltados en color azul para facilitar la comprensión del patrón. ')
          .py-2
          figcaption.text-negro Fuente SENA.  

    .row.justify-content-center(data-aos="flip-up").fondot003.px-4
      .col-lg-12.col-12.px-lg-5.px-2
        .row.justify-content-center.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-8.col-12
            p Doble la cartulina y repase los trazos que ya marcó para posteriormente agregar los 4 cm que conforman el ancho del bolso tanto al lado como en la parte inferior. 
      .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-4.col-10
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 11.
            |   Doblez  
          figure
            img(src='@/assets/curso/temas/Tema2/figura11.svg', alt='La imagen detalla dos esquemas del proceso de doblez en la confección de un bolso tipo pinza. Ambos diagramas muestran un rectángulo con medidas específicas, destacando líneas de pliegue y dimensiones clave. El primer esquema indica un doblez con una separación de 20 cm desde el borde, mientras que el segundo añade un detalle de 4 cm en la parte superior, junto con una pequeña pinza de ajuste. Las medidas resaltadas en color azul facilitan la interpretación del diseño. ')
            .py-2
            figcaption.text-negro Fuente SENA.  

      .row.justify-content-center.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-8.col-12
          p Traza la pinza donde se interceptan las líneas que conforman el alto y el largo del bolso, y posteriormente, agrega ventaja de costura tanto al lado como a la pinza y a la parte inferior del molde. 
      
      .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-4.col-10
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 12. 
            | Trazado de pinza 
          figure
            img(src='@/assets/curso/temas/Tema2/figura12.svg', alt='La imagen representa el trazado de la pinza en el proceso de confección de un bolso. Contiene dos esquemas que detallan la distribución de medidas y pliegues, incluyendo referencias para el doblez y la formación de la pinza. Se indican dimensiones como 20 cm de separación desde el borde, una pinza de 8 mm en la parte superior y un margen de 4 cm en la parte inferior. Los elementos están resaltados con líneas y medidas en color azul para facilitar la interpretación del patrón. ')
            .py-2
            figcaption.text-negro Fuente SENA.  

      .row.justify-content-center.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-8.col-12
          p Ya habiendo agregado la ventaja de costura, se procede a cortar y a abrir el molde. 

    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 13. 
          | Corte de molde 
        figure
          img(src='@/assets/curso/temas/Tema2/figura13.svg', alt='La imagen expone el proceso de corte del molde para la confección de un bolso, tras la adición de la ventaja de costura. Incluye dos esquemas: el primero muestra el molde doblado con detalles del corte y una ampliación circular de una sección específica, mientras que el segundo presenta el molde completamente extendido. Se destacan las zonas de ventaja de costura en los bordes con etiquetas en azul, y una flecha indica la transición entre las dos etapas del proceso. ')
          .py-2
          figcaption.text-negro Fuente SENA.  
    
    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 14.
          |  Marcación 
        figure
          img(src='@/assets/curso/temas/Tema2/figura14.svg', alt='La imagen ilustra la marcación del molde para la confección de un bolso. En el centro del diseño se incluyen indicaciones como la identificación del cuerpo del bolso (frente y espaldar), la cantidad de piezas necesarias, el material a utilizar, el número del molde y una referencia. Alrededor del rectángulo, se especifican los márgenes de costura en los cuatro lados, resaltados en azul para facilitar su identificación. ')
          .py-2
          figcaption.text-negro Fuente SENA.  


    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6 
        .tarjeta.color2.p-2
          .row.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/Tema4/img002.svg', alt='')
            .col-lg-10
              br
              h5.mb-0 Nota 1. 
              p Los bolsos se pueden trabajar con el forro adherido al cuerpo donde el mismo molde patrón sirve para sacar dicha pieza, o se puede sacar suelto y para ello es necesario sacar el molde del falso interno o porta cierre y por ende del forro.
        .py-1
          br
      .col-lg-6
        .tarjeta.color2.p-2
          .row.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/Tema4/img002.svg', alt='')
            .col-lg-10
              br
              h5.mb-0 Nota 2. 
              p Es importante tener claro que a partir de este momento el resto de los moldes se realizan calcando sobre el molde patrón.
        .py-3

    .row.justify-content-center.mb-5(data-aos="zoom-in-left").fondot03
      .col-lg-8.col-11
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center.mt-3
              h3.bg5.py-2.w-card-text Paso 2. Falso interno o porta cierre
        p Cuando el forro va suelto es importante crear el falso interno o porta cierre, a través del molde patrón, tomando desde la línea superior (sin tener en cuenta la ventaja de costura) se toman 4 cm hacia abajo y se traza una línea que permite sacar el falso interno o porta cierre del bolso. 
        .py-4

      .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-4.col-9
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 15. 
            | Falso interno  
          figure
            img(src='@/assets/curso/temas/Tema2/figura15.svg', alt='La imagen expone el diseño del falso interno para la confección de un bolso. Se indica una línea horizontal en la parte superior con la etiqueta "Línea para porta cierre o falso interno", ubicada a 4 cm del borde. La estructura mantiene la forma rectangular del molde base con extensiones laterales y en la parte inferior, resaltando los espacios necesarios para ensamblar esta sección con el resto del bolso. ')
            .py-2
            figcaption.text-negro Fuente SENA.  
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
          p Posteriormente, sobre la línea trazada agrega 8 mm de ventaja de costura hacia abajo para obtener el molde del porta cierre.


    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 16. 
          |  Línea para porta cierre 
        figure
          img(src='@/assets/curso/temas/Tema2/figura16.svg', alt='La imagen expone el trazado de la línea para el porta cierre en la confección de un bolso. Se incluye una línea horizontal en la parte superior etiquetada como "Línea para porta cierre o falso interno", ubicada a 4 cm del borde. Además, en el extremo derecho se señala un pequeño corte o marca de referencia. La estructura mantiene la forma rectangular con extensiones en los laterales e inferior, lo que facilita su integración en el diseño del bolso. ')
          .py-2
          figcaption.text-negro Fuente SENA.  
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
          p Se realiza el corte para la porta cierre trabajándolo a doblez. 


    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 17.
          |   Doblez porta cierre 
        figure
          img(src='@/assets/curso/temas/Tema2/figura17.svg', alt='La imagen representa el proceso de doblez del porta cierre en la confección de un bolso. Se destaca un rectángulo con líneas paralelas que indican las secciones de pliegue. En el lado izquierdo, la palabra "Doblez" está resaltada en azul, señalando el punto exacto donde se debe realizar el doblez. La estructura mantiene una forma alargada, facilitando su integración en el diseño del bolso. ')
          .py-2
          figcaption.text-negro Fuente SENA.  
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
          p Posteriormente se abre el molde del Porta cierre o falso interno. 


    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 18. 
          |  Molde porta cierre abierto 
        figure
          img(src='@/assets/curso/temas/Tema2/figura18.svg', alt='La imagen representa el molde del porta cierre en su posición abierta. Su forma es rectangular y alargada, con líneas paralelas que delimitan las secciones para el ensamblaje. La estructura muestra los márgenes y pliegues necesarios para su correcta integración en el bolso. ')
          .py-2
          figcaption.text-negro Fuente SENA.  
    
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
          p A continuación, se marcan los moldes.


    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 19.
          |   Marcar moldes  
        figure
          img(src='@/assets/curso/temas/Tema2/figura19.svg', alt='La figura representa un molde etiquetado con información relevante para la confección. Contiene una tabla con datos como el nombre de la pieza (porta cierre), la cantidad, el material, el número de molde y la referencia. En los bordes del molde, la palabra "Costura", está resaltada en color azul, indicando  las áreas donde se debe unir o coser la pieza. ')
          .py-2
          figcaption.text-negro Fuente SENA.  
    
  
    .row.justify-content-center.mb-5(data-aos="zoom-in-left").fondot03
      .col-lg-8.col-11
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center.mt-3
              h3.bg5.py-2.w-card-text Paso 3. Molde del forro
        p Para sacar el #[b molde del forro] del bolso. A través del molde patrón sobre la misma línea del falso interno se le agrega en la parte superior 8 mm de ventaja de costura y de esta manera se obtiene el forro del bolso. 
        .py-4

      .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-4.col-9
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 20. 
            | Molde forro 
          figure
            img(src='@/assets/curso/temas/Tema2/figura20.svg', alt='La imagen representa el molde del forro para la confección de un bolso. Se indica una línea horizontal en la parte superior con la etiqueta "Línea para porta cierre o falso interno y para sacar forro", lo que marca la referencia para el corte y ensamblaje. La estructura mantiene un diseño rectangular con extensiones en los laterales e inferior, facilitando su integración en la construcción del bolso. ')
            .py-2
            figcaption.text-negro Fuente SENA.  
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8
          p Se realiza el corte del forro trabajándolo a doblez.

    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-4.col-10
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 21. 
            | Corte forro con doblez 
          figure
            img(src='@/assets/curso/temas/Tema2/figura21.svg', alt='La imagen ilustra el corte del forro con doblez para la confección de un bolso. Se destacan referencias clave como la "Ventaja de costura" en la parte superior y el "doblez" en el lateral izquierdo, indicados en azul. En la esquina superior derecha, se señala un pequeño corte o marca de referencia. La estructura mantiene una forma rectangular con extensiones en la parte inferior, facilitando su ensamblaje en el diseño final del bolso. ')
            .py-2
            figcaption.text-negro Fuente SENA.  
  

    .row.justify-content-center(data-aos="flip-up").fondot003.px-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-8.col-12
            p Posteriormente abre el molde del Forro. 
      .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-4.col-10
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 22. 
            |  Posterior forro 
          figure
            img(src='@/assets/curso/temas/Tema2/figura22.svg', alt='La imagen representa el corte del forro con doblez para la confección de un bolso. Se destacan referencias clave como la "Ventaja de costura" en la parte superior y el "Doblez" en el lateral izquierdo, indicados en azul. En la esquina superior derecha, se señala un pequeño corte o marca de referencia. La estructura mantiene una forma rectangular con extensiones en la parte inferior, facilitando su ensamblaje en el diseño final del bolso. ')
            .py-2
            figcaption.text-negro Fuente SENA.  

      .row.justify-content-center.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-8.col-12
          p A continuación, se marcan los moldes. 
      
      .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-4.col-10
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 23. 
            | Marcación de moldes 
          figure
            img(src='@/assets/curso/temas/Tema2/figura23.svg', alt='La imagen presenta varios moldes utilizados en confección, cada uno con información específica sobre la pieza correspondiente. En el molde central, se indican datos como el nombre de la pieza (Cuerpo), la cantidad, el material, el número de molde y la referencia. Alrededor de los bordes de cada molde, la palabra "costura" aparece resaltada en color azul, señalando las zonas destinadas a la unión de las piezas. La disposición de los moldes sugiere diferentes partes de una prenda o accesorio, organizadas con marcaciones precisas para su ensamblaje. ')
            .py-2
            figcaption.text-negro Fuente SENA.  

      .row.justify-content-center.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-8.col-12
          p Si el bolso necesita un refuerzo en su base, éste se saca según el largo del cuerpo por el ancho y restándole 3 mm por cada lado. 

    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 24. 
          | Refuerzo 
        figure
          img(src='@/assets/curso/temas/Tema2/figura24.svg', alt='La figura representa la marcación de moldes en un diseño de costura. En el centro, se incluyen etiquetas con información sobre el forro, la cantidad, el material, el número de molde y la referencia. Alrededor del contorno, la palabra "Costura" se encuentra posicionada en diferentes bordes, indicando las áreas destinadas para la confección. ')
          .py-2
          figcaption.text-negro Fuente SENA.  


    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8.col-12
        p Este mismo bolso puede venir unido el frente y el espaldar, para ello en la parte inferior del molde patrón no se agrega ventaja de costura, sino que se dobla el molde horizontalmente para poder cortar simétrico el nuevo patrón, como se muestra en la figura.
      
    .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
      .col-lg-4.col-10
        .titulo-sexto.color-acento-contenido.text-negro
          h5.text-negro Figura 25.
          | Cuerpo bolso tipo pinza 
        figure
          img(src='@/assets/curso/temas/Tema2/figura25.svg', alt='La imagen representa el molde del cuerpo de un bolso tipo pinza. Contiene un área central donde se especifican datos como el nombre de la pieza (Cuerpo), la cantidad, el material, el número de molde y la referencia. Alrededor del contorno del molde, la palabra "costura" aparece resaltada en color azul, indicando las zonas donde se realizarán las uniones mediante costura. La estructura del molde sugiere que la pieza está diseñada para ser doblada o ensamblada con otras partes para formar la forma final del bolso. ')
          .py-2
          figcaption.text-negro Fuente SENA.  

    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8.col-12
        p Posteriormente, se elaboran los moldes restantes según el diseño del bolso, incluyendo chapetas, asas o cargaderas, bolsillos, entre otros. Estos se desarrollan al concluir el proceso de moldería.

    .row.justify-content-center.mb-5(data-aos="zoom-in-left").fondofinal
      .col-lg-8.col-11
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-7
            .d-flex.align-items-center.mt-3
              h3.bg5.py-2.w-card-text Paso 4. Industrialización de los moldes
        p Es el registro de los datos que se agrega a cada molde, como se expone.
        .py-4

      .row.justify-content-center.align-items-center.p-2.mb-5(data-aos="flip-up")
        .col-lg-8.col-9
          .titulo-sexto.color-acento-contenido.text-negro
            h5.text-negro Figura 26. 
            | Industrialización de los moldes 
          figure
            img(src='@/assets/curso/temas/Tema2/figura26.svg', alt='La figura expone un esquema técnico de los moldes para la confección de un bolso, incluyendo las piezas del cuerpo (frente y espaldar), el forro y otras secciones como pestañas. Cada molde especifica la cantidad requerida, el material utilizado, el número de molde y la referencia correspondiente. Además, se indican las líneas de costura en los bordes para facilitar el ensamblaje. ')
            .py-2
            figcaption.text-negro Fuente SENA.  

      .row.justify-content-around.align-items-center
        .col-12-lg-12
          img(src="@/assets/curso/temas/Tema2/linea.svg")


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
