var $titu = $('#titulo')
var titulo = "jeje"

$(window).ready(function() {
  $('.elem').mouseenter(function(){
    titulo = $(this).children('img').attr("alt")
    $titu.html(titulo)
  })
  $('.elem').mouseleave(function(){
    titulo = "Selecciona algún proyecto"
    $titu.html(titulo)
  })

  $('.logo').hover(function(){
    $('.vocal', this).toggleClass("animVocal")
  })

  $('.elem').click(function(event){
    $('.emer').height("400px");
    if($(this).is(":nth-child(1)")){
      $('.speed').css("display", "flex")

    }else if($(this).is(":nth-child(2)")){
      $('.canino').css("display", "flex")

    }else if($(this).is(":nth-child(3)")){
      $('.boreal').css("display", "flex")

    }else if($(this).is(":nth-child(4)")){
      $('.particula').css("display", "flex")

    }else if($(this).is(":nth-child(5)")){
      $('.ciudad').css("display", "flex")

    }
  })
  $('.cerrar').click(function(event){
    $('.emer').height("0px");
    $('.conten').fadeOut(1000);
    $('video')[0].pause();
    $('video')[1].pause();
    $('video')[2].pause();
  })


})