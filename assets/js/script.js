$(document).ready(function() {

  $( "#formP" ).submit(function( event ) { //Cuando recibe el submit del botón en formulario, ejecuta:
    event.preventDefault();
    var valueNumber = $("#numberP").val(); //recibe el numero ingresado
    $(".pokeInfo").empty(); //limpia los campos de información
    $(".pStats").empty(); //y estadísticas
  //console.log(valueNumber); //comprueba en la consola que el valor ingresado fue bien recibido
    if(valueNumber !== null && valueNumber !== undefined) { //si el valor ingresado es válido:
      $.ajax({ //pasa al ajax
        url: `https://pokeapi.co/api/v2/pokemon/${valueNumber}/`, //le damos la URL en la que insertamos el valor ingresado
      }).done(function createChart ( data ) { //cuando cargue ésta url:
        if ( data ) { //si recibe bien los datos,
          var dataChart = data.stats; //se instancian las stats para el gráfico
          var i; // (iterador)
          for(i = 0; i < dataChart.length; i++){ // y se recorren con un ciclo for
              dataChart[i].label = dataChart[i]['stat'].name;
              dataChart[i].y = dataChart[i]['base_stat'];
          }
          console.log( "Sample of data:", data ); // prueba para ver qué contiene la data
          $(".pokeInfo").append(`<div class="text-center"> <h3>${data.name}<h3> <div>`); //jquery
          $(".pokeInfo").append(`<img src="${data.sprites.front_default}" alt="${data.name}"> <img>`);
          $(".pokeInfo").append(`<div class="text-center"> <p>Peso: ${data.weight/10} [kg]<p> <div>`);
          var options = {
            animationEnabled: true,

            title: {
              text: "Stats base"
            },
            axisY: {
              title: "Valor",
              includeZero: false
            },
            axisX: {
              title: "Stats"
            },
            data: [{
              type: "column",
              dataPoints: dataChart
            }]
          };
          $(".pStats").CanvasJSChart(options);
        }
      });
    }
  });

  $( "#formN" ).submit(function( event ) { //Cuando recibe el submit del botón en formulario, ejecuta:
    event.preventDefault();
    var valueName = $("#textN").val(); //recibe el numero ingresado
    $(".pokeInfo").empty(); //limpia los campos de información
    $(".pStats").empty(); //y estadísticas
  //console.log(valueName); //comprueba en la consola que el valor ingresado fue bien recibido
    if(valueName !== null && valueName !== "") { //si el valor ingresado es válido:
      $.ajax({ //pasa al ajax
        url: `https://pokeapi.co/api/v2/pokemon/${valueName.toString().toLowerCase()}/`, //le damos la URL en la que insertamos el valor ingresado
      }).done(function createChart ( data ) { //cuando cargue ésta url:
        if ( data ) { //si recibe bien los datos,
          var dataChart = data.stats; //se instancian las stats para el gráfico
          var i; // (iterador)
          for(i = 0; i < dataChart.length; i++){ // y se recorren con un ciclo for
              dataChart[i].label = dataChart[i]['stat'].name;
              dataChart[i].y = dataChart[i]['base_stat'];
          }
          console.log( "Sample of data:", data ); // prueba para ver qué contiene la data
          $(".pokeInfo").append(`<div class="text-center"> <h3>${data.name}<h3> <div>`); //jquery
          $(".pokeInfo").append(`<img src="${data.sprites.front_default}" alt="${data.name}"> <img>`);
          $(".pokeInfo").append(`<div class="text-center"> <p>Peso: ${data.weight/10} [kg]<p> <div>`);
          var options = {
            animationEnabled: true,

            title: {
              text: "Stats base"
            },
            axisY: {
              title: "Valor",
              includeZero: false
            },
            axisX: {
              title: "Stats"
            },
            data: [{
              type: "column",
              dataPoints: dataChart
            }]
          };
          $(".pStats").CanvasJSChart(options);
        }
      });
    }
  });



});