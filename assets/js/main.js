/**
* Template Name: iPortfolio - v1.2.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

!(function($) {
  "use strict";
  
  // CUSTOM JAVASCRIPT

  // Alles op z'n kop
  $(".upside-down-toggle").click(function() {
    $('body').toggleClass('upside-down');
    $(".upside-down-toggle").remove();
  });

  // Confetti!
  var allConfetties = [];
  function destroyConfetti(allConfetties) {
    allConfetties.forEach( (id)=>window.clearInterval(id))
  }
  function createConfetti(x,y,interval,confetti=0){
    if (confetti!=0) {window.clearInterval(confetti)}
    let id = window.setInterval(
      function(){shootParticle(x,y)},
      interval)
    allConfetties.push(id)
    return id
  }

  function shootParticle(x,y) {
      // Create particle element and put in body
      const particle = document.createElement('particle')
      document.body.appendChild(particle)
      // Apply random width from 2 to 7 px, height is 2 times width
      const size = Math.floor(Math.random()*5+2)
      particle.style.width = `${size}px`;
      particle.style.height = `${size*2}px`;
      // Get random color
      particle.style.background = `hsl(${Math.random() * 360 }, 80%,50%)`;
      // Generate a destination for the particle in a spread above the given x and y coordinates
      const destinationX = x + (Math.random()-0.5) * 2 * 75;
      const destinationY = y - (Math.random()*(0.2)+0.3) * 200;
      // Rotate correspondingly
      const rotation = (destinationX-x);

      // Make the animation
        // (see CSS) particles spawn at 0, 0 with zero opacity
      const animation = particle.animate(
        [{ // first keyframe: move particle to x and y and give it opacity
          transform: `translate(${x - (size / 2)}px, ${y - (size / 2)}px) rotate(0deg)`,
          opacity: 1 },
        { // second keyframe: this is the destination
          transform: `translate(${destinationX}px, ${destinationY}px) rotate(${rotation}deg)`,
          opacity: 0 }],
        // More animation parameters
        { // Set a random duration from 500 to 1500 ms
        duration: 500 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        // Delay every particle with a random value from 0ms to 200ms
        delay: Math.random() * 200}
      );
      // After animation, the particles are invisible, but still there
      // This removes them
      animation.onfinish = () => {
        particle.remove();
      };
  }

  // Show / hide corona banner
  $('#banner-button').on("click", function(event) {
    $("#banner").toggle("show")
  })
  
  // Slider bij vrienden
  var firstConfetti = 0;
  var secondConfetti = 0;
  $(document).ready(function() {
    const $rewardBox = $('#vrienden-rewards')
    const vriendenLevels = ["vriend-level-0","vriend-level-1","vriend-level-2","vriend-level-3","vriend-level-4","vriend-level-5",]

    $('#vrienden-range').on('input change', function() {
      const $rewardTitle = $("#sponsors").find("h4")
      const bedrag =  $('#vrienden-range').val()
      $('#vrienden-value').html("€ "+ bedrag + "!")
      let offset = $('#vrienden-range').offset();
      let vriendenWidth = $('#vrienden-range').outerWidth();
      let left = Math.floor(offset.left)
      let top = Math.floor(offset.top)
      let right = Math.floor(offset.left + vriendenWidth)

      $rewardBox.removeClass(vriendenLevels)
      $('#actual-icon').removeClass()
      $('#reward-info').find('#actual-icon').css('display','flex')
      $('#reward-info').find('video').css('display','none')

      if (bedrag < 5) {
        $rewardBox.addClass("vriend-level-0")
        $('#actual-icon').addClass('icofont-battery-empty')
        $rewardTitle.html("Een kennis")
        firstConfetti = createConfetti(left,top,400,firstConfetti)
        secondConfetti = createConfetti(right,top,400,secondConfetti)
        $(".description").html("Je krijgt van ons een grote dankjewel en een dikke kus!")

      } else if (bedrag >= 5 && bedrag < 15) {
        $rewardBox.addClass("vriend-level-1")
        $('#actual-icon').addClass('icofont-medal')
        $rewardTitle.html("Vriend!")
        firstConfetti = createConfetti(left,top,100,firstConfetti)
        secondConfetti = createConfetti(right,top,100,secondConfetti)  
        $(".description").html("Bedankt dat je wil steunen. Bij aankomst op het toernooi krijg je een medaille!")

      } else if (bedrag >= 15 && bedrag < 25) {
        $rewardBox.addClass("vriend-level-2")
        $('#reward-info').find('#actual-icon').css('display','none')
        $('#reward-info').find('video').css('display','flex')
        $('#vrienden-video').removeAttr('hidden')        
        $rewardTitle.html("Gif-vriend #BFF")
        firstConfetti = createConfetti(left,top,50,firstConfetti)
        secondConfetti = createConfetti(right,top,50,secondConfetti)  
        $(".description").html("Wow! Wat een topvriend! We maken speciaal voor jou een gepersonaliseerde bedank-gif!")

      } else if (bedrag >= 25 && bedrag < 35) {
        $rewardBox.addClass("vriend-level-3")
        $('#actual-icon').addClass('icofont-beer')
        $rewardTitle.html("Drinkmaatje!")
        firstConfetti = createConfetti(left,top,30,firstConfetti)
        secondConfetti = createConfetti(right,top,30,secondConfetti)  
        $(".description").html("Holapola! Jij bent zo'n goede vriend, dat we met jou wel eens iets willen gaan drinken. En wij trakteren! Je krijgt bij aankomst op het toernooi een <strong>pakket Belgische bieren</strong> van ons!")

      } else if (bedrag >= 35 && bedrag < 50) {
        $rewardBox.addClass("vriend-level-4")
        $('#actual-icon').addClass('icofont-jacket')
        $rewardTitle.html("Matching outfits! #merch")
        firstConfetti = createConfetti(left,top,10,firstConfetti)
        secondConfetti = createConfetti(right,top,10,secondConfetti)  
        $(".description").html("Op mensen als jou steunt het NSK, en we vinden dat iedereen dat mag weten. Van ons krijg je een echte <strong>single edition NSK 2020 t-shirt</strong>!")

      } else if (bedrag >= 50) {
        $rewardBox.addClass("vriend-level-5")
        $('#actual-icon').addClass('icofont-heart')
        $rewardTitle.html("Halve trouwboek")
        firstConfetti = createConfetti(left,top,1,firstConfetti)
        secondConfetti = createConfetti(right,top,1,secondConfetti)
        $(".description").html("Jij bent de allerbeste. Je krijgt een finalekaartje én je zit bij de finale vooraan op een versierde stoel! Je mag ook nog kiezen tussen een t-shirt of een bierpakket én we bedanken je persoonlijk met een gif!")
      }
    });
  });

  // Formulier bij Vrienden

  var request;
  $("#vrienden-form").submit(function(event) {

    $('#vrienden-content').addClass('disappear');
    destroyConfetti(allConfetties);
    $("#vrienden-thanks").addClass('appear');

    // Prevent default posting of form
    event.preventDefault();
    // Abort any pending request
    if (request) {
      request.abort();
    }
    // Local variable to access the form
    var $form = $(this);
    // Select and cache all fields, we need them later
    var $inputs = $form.find("input, select, button, textarea");
    // Serialize the data in the form
    var serializedData = $form.serialize();
    // Disable the inputs for the duration of the Ajax request
    $inputs.prop("disabled",true);
    
    // Fire off the request!
    request = $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbyMUhV8wVw3ttT_tIv7XwWbZHEZVGlLxh8QtgSWdk61ZWGXkLU9cdll/exec',
      type: 'post',
      data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function(response, textStatus, jqXHR){
      /* Moved this earlier, so it seems to react quicker.
      $('#vrienden-content').addClass('disappear');
      destroyConfetti(allConfetties);
      $("#vrienden-thanks").addClass('appear');
      */
    });
    
    // Callback handler that will be called on failure
    request.fail(function(jqXHR, textStatus, errorThrown){
      alert("Something went wrong while processing your request, please contact us at nsk@preparee.be")
      console.error("The following error occured: "+
        textStatus, errorThrown);
    });

    // Callback handler that will be called always
    request.always(function () {
      // Re-enable the inputs
      $inputs.prop("disabled",false);
    });
  });

  // END OF CUSTOM JAVASCRIPT  


  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
      filter: '.filter-2019'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  //  carousel (uses the Owl Carousel library)
  $(".teams-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });

})(jQuery);