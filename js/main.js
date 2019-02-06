(function($) {

    $.fn.menumaker = function(options) {
        
        var cssmenu = $(this), settings = $.extend({
          title: "Menu",
          format: "dropdown",
          sticky: false
        }, options);

        var test;
        var mainmenu;
  
        return this.each(function() {
          cssmenu.prepend('<div id="menu-button" class="nav__btn">' + '<a><img src="img/logo.png" alt="logo" width="90"></a>' + '</div>');
          $(this).find("#menu-button").on('click', function(){
            test = $(this);
            test.toggleClass('menu-opened');
            mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });

          $("#mobile-menu").on("click", function(e){
            test.toggleClass('menu-opened');
            mainmenu.hide().removeClass('open');
          })
  
          cssmenu.find('li ul').parent().addClass('has-sub');
  
          multiTg = function() {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };
  
          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
  
          if (settings.sticky === true) cssmenu.css('position', 'fixed');
  
          resizeFix = function() {
            if ($( window ).width() > 775) {
              cssmenu.find('ul').show();
            }
  
            if ($(window).width() <= 775) {
              cssmenu.find('ul').hide().removeClass('open');
            }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);
  
        });
    };
  })(jQuery);

  (function($) {
    $.fn.rkmd_rippleEffect = function() {
      var btn, self, ripple, size, rippleX, rippleY, eWidth, eHeight;
  
      btn = $(this).not('[disabled], .disabled');
  
      btn.on('mousedown', function(e) {
        self = $(this);
  
        // Disable right click
        if(e.button === 2) {
          return false;
        }
  
        if(self.find('.ripple').length === 0) {
          self.prepend('<span class="ripple"></span>');
        }
        ripple = self.find('.ripple');
        ripple.removeClass('animated');
  
        eWidth = self.outerWidth();
        eHeight = self.outerHeight();
        size = Math.max(eWidth, eHeight);
        ripple.css({'width': size, 'height': size});
  
        rippleX = parseInt(e.pageX - self.offset().left) - (size / 2);
        rippleY = parseInt(e.pageY - self.offset().top) - (size / 2);
  
        ripple.css({ 'top': rippleY +'px', 'left': rippleX +'px' }).addClass('animated');
  
        setTimeout(function() {
          ripple.remove();
        }, 800);
  
      });
    };
  }(jQuery));
  
  (function($){
  $(document).ready(function(){
  
  $("#cssmenu").menumaker({
     title: "Menu",
     format: "multitoggle"
  });

  $('.ripple-effect').rkmd_rippleEffect();

  const translator = {
    spanish: {
      // Nav br links
      courses: 'CURSOS',
      aboutUs: 'QUIEN SOMOS',
      donate: 'DONASION',
      login: 'INICIAR',
      // Hero Section
      heroTitle: 'Entrenamiento de cosina para professionales',
      heroSubtitle: 'Cosinas Agiles',
      // Curriculum partners
      curriculumPartners: 'Curriculo',
      // Courses Section
      coursesTitle: 'Cursos',
      coursesBig: 'Tu futuro nos importa',
      coursesP: 'Te ayudamos con tu negosio nasdklabgsf diags faosfoy asgbdo agfasu fabfabifbvay dshkcfgv bhsd ovb bcfgdsaobfgv',
      restaurantManagement: 'bdo agfasu fabfabifbvay dshkcfgv bhsd ovb bcfgdsaobfgv',
      rmContent: $('<p>Length of Program: 16 Semanas<br><br>The Restaurant Management Certificate Program  would prepare students with specialized training for hospitality and restaurant management. The program focuses on providing students with theoretical and practical management approaches to restaurant management, food sanitation and safety, controlling food costs, hospitality accounting and human resources/supervision<br><br>Cerifications:<br><br>National Restaurant Association<br><span>- Hospitality & Restaurant Management</span><span>- Human Resources</span><span>- Accounting</span><span>- Food Costs</span><span>- Serve Safe</span><br>Licenses: City of Chicago Food Service Sanitation Manager</p>'),
      certifiedTech: 'Te fbvay dshkcfgv bhsd ovb bcfgdsaobfgv',
      ctContent: $('<p>Length of Program: 16 Semanas<br><br>The Manufacturing Skill Standards Council (MSSC) industry recognized credentialing system leading to a Certified Production Technician covers the four critical production functions (safety, quality practices & measurement, manufacturing process, maintenance awareness) common to all sectors of manufacturing.This program provides the foundational knowledge and skill sets applicable for entry to mid-level production technician jobs in the manufacturing industry with a specialization in food. It is designed for individuals wanting to enter the manufacturing and food manufacturing fields as production line workers as well as experienced employees wishing to seek MSSC certification.<br><br>Cerifications:<br><br><span>HACCP</span><span>Serve Safe - Food Safety</span>Manufacturing Skills Standards Council<br><span>- Certified Production Technician</span></p>'),
      foodSafety: 'Te afabifbvay dshkcfgv bhsd ovb bcfgdsaobfgv',
      fsContent: $('<p >Length of Program: Dias 1<br><br>The course covers critical principles including: personal hygiene, cross contamination, time and temperature, cleaning and sanitizing, and more. A practice exam is included at the end of the course to help prepare for the proctored ServSafe Manager Certification exam.</p>'),
      culinaryMed: 'agfasu fabfabifbvay dssaobfgv',
      cmContent: $('ty4hjtry4hj'),
      agileKitchen: 'Te afabifbvay dshkcfgv bhsd ovb bcfgdsaobfgv',
      akContent: $('rghtyrh'),
      culinaryArts: 'agfasu fabfabifbvay dssaobfgv',
      caContent: $('tyhyt5hy56'),
      // Donation Section
      donation: 'Spanish copy needed Spanish copy needed Spanish copy needed Spanish copy needed',
      donationBtn: 'Donar',
      // About Us Section
      aboutUs: 'nos otros',
      auBigText: 'conoser',
      auCopy: 'food hero es spanish spanish spanish copy needed',
      auOrangeBox: $('<p>Spanish copy needed<br><i>Workforce Education</i><i>Good Food</i><i>Healthy Menus</i><i>Sustainable Restaurants</i><i>Business & Community Empowerment</i><i>Social & Environmental Responsibility</i></p>'),
      // Contact Us section
      contactUsTitle: 'Contacto',
      cuName: 'Nombre',
      cuEmail: 'Email',
      cuMessage: 'Mensaje',
      cuSubmit: 'Mandar',
      // Footer Section
      footerCopy: 'spanish copy needed spanish copy needed sadikbgaskd',
      fFollowUs: 'Sigir'
    },
    toggleSpanish: function() {
      $("#courses-link").html(translator.spanish.courses);
      $("#about-us-link").html(translator.spanish.aboutUs);
      $("#donate-link").html(translator.spanish.donate);
      $("#login-link").html(translator.spanish.login);
      $("#hero-title").html(translator.spanish.heroTitle);
      $("#hero-subtitle").html(translator.spanish.heroSubtitle);
      $("#curriculum-partners").html(translator.spanish.curriculumPartners);
      $("#courses-title").html(translator.spanish.coursesTitle);
      $("#courses-big-title").html(translator.spanish.coursesBig);
      $("#courses-p").html(translator.spanish.coursesP);
      $("#restaurantManagement").html(translator.spanish.restaurantManagement);
      $("#rmContent").html(translator.spanish.rmContent);
      $("#foodSafety").html(translator.spanish.foodSafety);
      $("#fsContent").html(translator.spanish.fsContent);
      $("#culinaryMed").html(translator.spanish.culinaryMed);
      $("#cmContent").html(translator.spanish.cmContent);
      $("#certifiedTech").html(translator.spanish.certifiedTech);
      $("#ctContent").html(translator.spanish.ctContent);
      $("#agileKitchen").html(translator.spanish.agileKitchen);
      $("#akContent").html(translator.spanish.akContent);
      $("#culinaryArts").html(translator.spanish.culinaryArts);
      $("#caContent").html(translator.spanish.caContent);
      $("#donation").html(translator.spanish.donation);
      $("#donation-btn").html(translator.spanish.donationBtn);
      $("#about-us-heading").html(translator.spanish.aboutUs);
      $("#au-big-text").html(translator.spanish.auBigText);
      $("#au-copy").html(translator.spanish.auCopy);
      $("#au-orange-box").html(translator.spanish.auOrangeBox);
      $("#contact-us-title").html(translator.spanish.contactUsTitle);
      $("#cu-name").html(translator.spanish.cuName);
      $("#cu-email").html(translator.spanish.cuEmail);
      $("#cu-message").html(translator.spanish.cuMessage);
      $("#cu-submit").html(translator.spanish.cuSubmit);
      $("#footer-copy").html(translator.spanish.footerCopy);
      $("#footer-follow-us").html(translator.spanish.fFollowUs);
    },
    resetLanguage: function() {
      location.reload();
    },
  }

  $("#spanish").click(translator.toggleSpanish);
  $("#english").click(translator.resetLanguage);

  });

  (function(document, history, location) {
    var HISTORY_SUPPORT = !!(history && history.pushState);
  
    var anchorScrolls = {
      ANCHOR_REGEX: /^#[^ ]+$/,
      OFFSET_HEIGHT_PX: 50,
  
      /**
       * Establish events, and fix initial scroll position if a hash is provided.
       */
      init: function() {
        this.scrollToCurrent();
        $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
        $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
      },
  
      /**
       * Return the offset amount to deduct from the normal scroll position.
       * Modify as appropriate to allow for dynamic calculations
       */
      getFixedOffset: function() {
        return this.OFFSET_HEIGHT_PX;
      },
  
      /**
       * If the provided href is an anchor which resolves to an element on the
       * page, scroll to it.
       * @param  {String} href
       * @return {Boolean} - Was the href an anchor.
       */
      scrollIfAnchor: function(href, pushToHistory) {
        var match, anchorOffset;
  
        if(!this.ANCHOR_REGEX.test(href)) {
          return false;
        }
  
        match = document.getElementById(href.slice(1));
  
        if(match) {
          anchorOffset = $(match).offset().top - this.getFixedOffset();
          $('html, body').animate({ scrollTop: anchorOffset});
  
          // Add the state to history as-per normal anchor links
          if(HISTORY_SUPPORT && pushToHistory) {
            history.pushState({}, document.title, location.pathname + href);
          }
        }
  
        return !!match;
      },
      
      /**
       * Attempt to scroll to the current location's hash.
       */
      scrollToCurrent: function(e) { 
        if(this.scrollIfAnchor(window.location.hash) && e) {
          e.preventDefault();
        }
      },
  
      /**
       * If the click event's target was an anchor, fix the scroll position.
       */
      delegateAnchors: function(e) {
        var elem = e.target;
  
        if(this.scrollIfAnchor(elem.getAttribute('href'), true)) {
          e.preventDefault();
        }
      }
    };
  
    $(document).ready($.proxy(anchorScrolls, 'init'));
  })(window.document, window.history, window.location);

  })(jQuery);

  