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
  const confetti = function(x,y) {
    window.setInterval(function(){
      // Create particle element and put in body
      const particle = document.createElement(particle)
      document.body.appendChild(particle)
      $("#sponsors").append(particle)
      // Apply random width from 2 to 7 px, height is 2 times width
      const width = Math.floor(Math.random()*5+2)
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
        // (CSS) particles spawn at 0, 0 with zero opacity
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
      animation.onfinish = () => {$('particle').remove();};
    }, 5);
  }
  $(document).ready(confetti(150,150))
  

  // Slider bij vrienden
  $(document).ready(function() {
    const $rewardBox = $('#vrienden-rewards')
    $('#vrienden-range').on('input change', function() {
      const bedrag =  $('#vrienden-range').val()
      const vriendenLevels = ["vriend-level-0","vriend-level-1","vriend-level-2","vriend-level-3","vriend-level-4","vriend-level-5",]
      $('#vrienden-value').html("€ "+ bedrag + "!")
      if (bedrag < 5) {
        $('#reward-info').html("level 0")
        $rewardBox.removeClass(vriendenLevels)
        $rewardBox.addClass("vriend-level-0")
      } else if (bedrag >= 5 && bedrag < 15) {
        $('#reward-info').html("level 1")
        $rewardBox.removeClass(vriendenLevels)
        $rewardBox.addClass("vriend-level-1")

      } else if (bedrag >= 15 && bedrag < 25) {
        $('#reward-info').html("level 2")
        $rewardBox.removeClass(vriendenLevels)
        $rewardBox.addClass("vriend-level-2")

      } else if (bedrag >= 25 && bedrag < 35) {
        $('#reward-info').html("level 3")
        $rewardBox.removeClass(vriendenLevels)
        $rewardBox.addClass("vriend-level-3")

      } else if (bedrag >= 35 && bedrag < 50) {
        $('#reward-info').html("level 4")
        $rewardBox.removeClass(vriendenLevels)
        $rewardBox.addClass("vriend-level-4")
        
      } else if (bedrag >= 50) {
        $('#reward-info').html("level 5")
        $rewardBox.removeClass(vriendenLevels)
        $rewardBox.addClass("vriend-level-5")
        var horizontalCenter = Math.floor(window.innerWidth/2);
        var verticalCenter = Math.floor(window.innerHeight/2);
//        confetti(horizontalCenter,verticalCenter)
      }
    });
  });

  /*
  $(document).ready(function() {
    const $valueSpan = $('.valueSpan');
    const $value = $('#vrienden-range');
    $valueSpan.html($value.val());
    $value.on('input', () => {
  
      $valueSpan.html($value.val());
      if ($value.val() < 5) {
        $(".rewardsText1").hide();
        $(".rewardsText2").hide();
        $(".rewardsText3").hide();
        $(".rewardsText4").hide();
      } 
      if ($value.val() >= 5) {
        $(".rewardsText1").show();
        $(".rewardsText2").hide();
        $(".rewardsText3").hide();
        $(".rewardsText4").hide();
      } 
      if ($value.val() >= 15) {
        $(".rewardsText1").show();
        $(".rewardsText2").show();
        $(".rewardsText3").hide();
        $(".rewardsText4").hide();
      } 
      if ($value.val() >= 25) {
        $(".rewardsText1").show();
        $(".rewardsText2").show();
        $(".rewardsText3").show();
        $(".rewardsText4").hide();
      }
      if ($value.val() >= 35) {
        $(".rewardsText1").show();
        $(".rewardsText2").show();
        $(".rewardsText3").show();
        $(".rewardsText4").show();
      }

    });
  });
*/
  // Formulier bij Vrienden
  
  var $form = $('form#vrienden-form'),
  url = 'https://script.google.com/macros/s/AKfycbwAbxEO_Jlkbum4LyrC-BVMu-Y2UlYPcaevnHmx-D0dcawVBtI/exec'

  $('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
  url: url,
  method: "GET",
  dataType: "json",
  data: $form.serializeObject()
    }).success(
      // do something
  );
})


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

  // teams carousel (uses the Owl Carousel library)
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