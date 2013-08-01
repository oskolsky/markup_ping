// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  retina = window.devicePixelRatio > 1;
  
  if (retina) {
    x2 = '@2x';  
  } else {
    x2 = '';
  }
  

  if (document.images) {
    var img = new Object();
    if (retina) {
      img["1"] = new Image(368, 368);
      img["1"].src = "/img/hiw/hiw-1@2x.png";
      img["2"] = new Image(368, 368);
      img["2"].src = "/img/hiw/hiw-2@2x.png";
      img["3"] = new Image(368, 368);
      img["3"].src = "/img/hiw/hiw-3@2x.png";
      img["4"] = new Image(368, 368);
      img["4"].src = "/img/hiw/hiw-4@2x.png";
      img["5"] = new Image(368, 368);
      img["5"].src = "/img/hiw/hiw-5@2x.png";
      img["6"] = new Image(368, 368);
      img["6"].src = "/img/hiw/hiw-6@2x.png";
      img["7"] = new Image(368, 368);
      img["7"].src = "/img/hiw/hiw-7@2x.png";
      img["8"] = new Image(368, 368);
      img["8"].src = "/img/hiw/hiw-8@2x.png";
      img["9"] = new Image(368, 368);
      img["9"].src = "/img/hiw/hiw-9@2x.png";
    } else {
      img["10"] = new Image(368, 368);
      img["10"].src = "/img/hiw/hiw-1.png";
      img["11"] = new Image(368, 368);
      img["11"].src = "/img/hiw/hiw-2.png";
      img["12"] = new Image(368, 368);
      img["12"].src = "/img/hiw/hiw-3.png";
      img["13"] = new Image(368, 368);
      img["13"].src = "/img/hiw/hiw-4.png";
      img["14"] = new Image(368, 368);
      img["14"].src = "/img/hiw/hiw-5.png";
      img["15"] = new Image(368, 368);
      img["15"].src = "/img/hiw/hiw-6.png";
      img["16"] = new Image(368, 368);
      img["16"].src = "/img/hiw/hiw-7.png";
      img["17"] = new Image(368, 368);
      img["17"].src = "/img/hiw/hiw-8.png";
      img["18"] = new Image(368, 368);
      img["18"].src = "/img/hiw/hiw-9.png";
    }
  }   

  $('.hiw').find('img').attr('src', '/img/hiw/hiw-1' + x2 + '.png');

  var fl = $.stickyFooter();

  if (fl) {
    $('.index').css({visibility: 'visible'});
  }

  if (iOSCheck()) {
    document.location.href = 'https://itunes.apple.com/us/app/ping-app/id590359158?mt=8';
  }

  // HIW
  // ----------------------------------------------------------------------------------------------------  
  $('.hiw').click(function() {

    if ( $('.iphone_screen').is(':hidden') ) {
      
      hiwOpen();

    } else {

      hiwClose();

    }

  });

  // SELECT DROPDOWN
  // ----------------------------------------------------------------------------------------------------  
  $('.select').toggle(function() {
    $(this).addClass('select_active');
    $(this).find('.select_dropdown').show();
  }, function() {
    $(this).removeClass('select_active');
    $(this).find('.select_dropdown').hide();
  });
  
  $('.select').find('dd').click(function() {
    var value = $(this).text();
    $('.select_hidden').attr('value', value);
    $('.select_title').text(value);
  });  

  containerCentered()

});

// DOCUMENT SCROLL
// ----------------------------------------------------------------------------------------------------
$(document).scroll(function() {});

// WINDOW LOAD
// ----------------------------------------------------------------------------------------------------
$(window).load(function() {});

// WINDOW RESIZE
// ----------------------------------------------------------------------------------------------------
$(window).resize(function() {

  $.stickyFooter();

  containerCentered();

  // Reset
  $('.index_block').attr('style', '');
  $('.iphone').attr('style', '');
  $('.hiw').find('img').attr('src', '/img/hiw/hiw-1' + x2 + '.png');
  $('.iphone').find('.iphone_phone').show();
  $('.iphone').find('.iphone_screen').hide();
  $('.iphone').find('.iphone_marks').hide();

});

function containerCentered() {
  var
      containerH = $('.index_container').outerHeight(),
      footerH    = $('#footer').outerHeight(),
      documentH  = $(document).outerHeight();

  var
      marginTop = Math.floor( (documentH - footerH - containerH) / 3 * 2 );

  $('.index_container').css({marginTop: marginTop});

}

function hiwOpen() {
  var 
      i = 1,
      newStep = '',
      oldStep = '',
      w = $('body').outerWidth();

  var intervalID = setInterval(function() {

      src = '/img/hiw/hiw-' + (i) + x2 + '.png';

      $('.hiw').find('img').attr('src', src);

      if (i == 9) {
        clearInterval(intervalID);

        if (w <= 1439) {
          // 1280
          $('.index_block').animate({width: '1200px'});
          $('.iphone').animate({marginLeft: '227px'});
        } else if (w >= 1440 && w <= 1919) {
          // 1440
          $('.index_block').animate({width: '1345px'});
          $('.iphone').animate({marginLeft: '260px'});
        } else if (w >= 1920) {
          // 1920
          $('.index_block').animate({width: '1750px'});
          $('.iphone').animate({marginLeft: '343px'});
        }

        $('.iphone').find('.iphone_phone').fadeOut(500);
        $('.iphone').find('.iphone_screen').fadeIn(500);
        $('.iphone').find('.iphone_marks').fadeIn(1250);

      }

      i++;

  }, 75); 
}

function hiwClose() {
  var 
      i = 9,
      newStep = '',
      oldStep = '',
      w = $('body').outerWidth();

  var intervalID = setInterval(function() {

      src = '/img/hiw/hiw-' + (i) + x2 + '.png';

      $('.hiw').find('img').attr('src', src);

      if (i == 1) {
        clearInterval(intervalID);

        if (w <= 1439) {
          // 1280
          $('.index_block').animate({width: '800px'});
          $('.iphone').animate({marginLeft: '0'});
        } else if (w >= 1440 && w <= 1919) {
          // 1440
          $('.index_block').animate({width: '900px'});
          $('.iphone').animate({marginLeft: '0'});
        } else if (w >= 1920) {
          // 1920
          $('.index_block').animate({width: '1130px'});
          $('.iphone').animate({marginLeft: '0'});
        }

        $('.iphone').find('.iphone_phone').fadeIn(500);
        $('.iphone').find('.iphone_screen').fadeOut(500);
        $('.iphone').find('.iphone_marks').fadeOut(250);

      }

      i--;

  }, 75); 
}