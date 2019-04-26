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

          // Prevents the mobile menu from being closed if a submenu button is clicked
          $("#mobile-menu").on("click", function(e){
            if (e.target.nodeName !== "SPAN") {
              test.toggleClass('menu-opened');
              mainmenu.hide().removeClass('open');
            }
          })
  
          cssmenu.find('li ul').parent().addClass('has-sub');
          
          // Sub Menu for links that have more options
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
            if ($( window ).width() > 850) {
              cssmenu.find('ul').show();
            }
            if ($(window).width() <= 865) {
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

  /**************** EVENTS SECTION ***********************/

  // How to create and delete a new event
    /* Copy and paste this example exactly. 
       Then change the text inside ' ' to match the information for your new event.
       Make sure the flyer name is exactly the same as it is in the file. 

        Example: 

        {
          date: 'december 25, 2019',
          time: '9am-10am',
          title: 'Christmas Day',
          text: 'Join us for blah blah blah',
          flyer: 'nameOfFlyer.jpg'
        },

       Note: For multiple events place them one after another and dont forget the comma after each one
       to delete just remove the entire event in between { } including the comma.
        
        Example:

          {
            date: 'december 25, 2019',
            time: '9am-10am',
            title: 'Event 1',
            text: 'Join us for blah blah blah',
            flyer: 'event1.png'
          },
          {
            date: 'december 25, 2019',
            time: '9am-10am',
            title: 'Event 2',
            text: 'Join us for blah blah blah',
            flyer: 'event2.jpg'
          },

        Last Step: Add the flyer to the img folder on godaddy
    */
  let listOfEvents = [
    // place your new event in here
    {
      date: 'october 31st, 2019',
      dateSpanish: 'spanish date',
      time: '7pm-11pm',
      timeSpanish: 'spanish time',
      title: 'Halloween Party',
      titleSpanish: 'spanish title',
      text: 'Join us for blah blah blah',
      textSpanish: 'spanish text',
      flyer: 'nameOfFlyer.jpg'
    },
    {
      date: 'october 31st, 2019',
      dateSpanish: 'spanish date',
      time: '7pm-11pm',
      timeSpanish: 'spanish time',
      title: 'Halloween Party',
      titleSpanish: 'spanish title',
      text: 'Join us for blah blah blah',
      textSpanish: 'spanish text',
      flyer: 'testing.jpg'
    },  
  ];

  // Don't touch anything below this line //

  listOfEvents.forEach(function(ev) {
    let newEvent = $(`
      <div class="section__flex-item flyer">
        <img src="img/${ev.flyer}"/>
      </div>
      <div class="section__flex-item info">
        <h3 class="info__date">${ev.date.toUpperCase()}</h3>
        <h3 class="info__time">${ev.time.toUpperCase()}</h3>
        <h1 class="info__title">${ev.title}</h1>
        <p class="info__text"> ${ev.text} </p>
      </div>
    `);

    $('#events').append(newEvent);
  });

  /**************** END OF EVENTS SECTION ***************/

  const translator = {
    spanish: {
      // Nav br links
      courses: 'CURSOS',
      aboutUsLink: 'NOSOTROS',
      donate: 'DONACION',
      login: 'INICIAR',
      // Hero Section
      heroTitle: 'Bootcamps culinarios para profesionales de servicio de comida y empresarios',
      heroSubtitle: 'Cocinas ágiles',
      // Curriculum partners
      curriculumPartners: 'Curriculo',
      // Courses Section
      coursesTitle: 'Trayectoria de Carrera',
      coursesBig: 'Tu futuro nos importa',
      coursesP: 'Nos preocupamos por tus objetivos personales y empresariales. Elige la trayectoria profesional correcta. Tome nuestra evaluación para decidir o hablar con nuestros entrenadores de carrera.',
      restaurantManagement: 'Administración del restaurante',
      rmContent: $('<p>Duración del programa: 16 semanas<br><br>El Programa de Certificado de Administracion de Restaurantes prepararía a los estudiantes con capacitación especializada para la administración de restaurantes y hospitalidad. El programa se centra en proporcionar a los estudiantes enfoques de administracion prácticos y teóricos para la administracion de restaurantes, el saneamiento y la seguridad de los alimentos, el control de los costos de los alimentos, la contabilidad de la hospitalidad y los recursos humanos / supervisión.<br><br>Certificaciones:<br><br>Asociación Nacional de Restaurantes<br><span>- Hostelería y gestión de restaurantes.</span><span>- Recursos Humanos / Leyes laborales</span><span>- Contabilidad</span><span>- Costos de Comida</span><span>- Serve Safe - Gerente de Servicio de Alimentos</span><br>Licencias: Gerente de Sanidad del Servicio de Alimentos de la Ciudad de Chicago</p>'),
      certifiedTech: 'Técnico certificado en producción de alimentos',
      ctContent: $('<p>Duración del programa: 16 semanas<br><br>El sistema de credencialización reconocido por la industria de Manufacturing Skill Standards Council (MSSC) que conduce a un técnico de producción certificado cubre las cuatro funciones de producción críticas (seguridad, prácticas de calidad y medición, proceso de fabricación, conciencia de mantenimiento) comunes a todos los sectores de fabricación. Este programa proporciona los conocimientos básicos y los conjuntos de habilidades aplicables para la entrada a puestos de técnico de producción de nivel medio en la industria manufacturera con una especialización en alimentos. Está diseñado para personas que desean ingresar en los campos de fabricación y fabricación de alimentos como trabajadores de la línea de producción, así como empleados con experiencia que desean obtener la certificación MSSC.<br><br>Certificaciones:<br><br><span>HACCP</span><span>Serv Safe - Seguridad alimentaria</span>Consejo de Normas de Habilidades de Fabricación<br><span>- Técnico de Producción Certificado</span></p>'),
      foodSafety: 'Seguridad Alimenticia',
      fsContent: $('<p>Duración: 1 día<br><br>El curso cubre principios críticos que incluyen: higiene personal, contaminación cruzada, tiempo y temperatura, limpieza y desinfección, y más. UNA El examen de práctica se incluye al final del curso para ayudar a prepararse para el examen de certificación de administrador de ServSafe supervisado.</p>'),
      culinaryMed: 'Medicina Culinaria',
      cmContent: $('<p>Duración: 2 días<br><br>CHEF Coaching es un programa innovador diseñado para capacitar a los médicos clínicos a fin de proporcionar instrucción culinaria y educación fáciles de seguir directamente a los pacientes para mejorar la calidad y, a menudo, reducir el costo de la preparación de alimentos en el hogar. Al finalizar el programa, debe esperar mejorar sus habilidades culinarias y traducir este nuevo conocimiento a su práctica y mejorar la nutrición de sus clientes. <br><br>Certificaciones:<br><br>Los graduados en capacitación obtienen un “Certificado de Finalización en Entrenamiento Culinario” del Instituto de Medicina del Estilo de Vida, el Hospital de Rehabilitación Spaulding, la Escuela de Medicina de Harvard</p>'),
      agileKitchen: 'Cocina Agil',
      akContent: $('<p>Duración: 6 semanas<br><br>El programa de capacitación está diseñado para que el participante no entienda los diversos aspectos relacionales del modelo de negocios de alimentos, como las asociaciones, las relaciones con los clientes, las finanzas y el presupuesto con fines de lucro, y los conceptos básicos culinarios para desarrollar su negocio a través de los desafíos del mundo real y los pasos para presentar negocio a inversionistas y nuevas asociaciones para eventualmente salir por su cuenta como dueños de negocios independientes y / o de ladrillo y cemento.<br></p>'),
      culinaryArts: 'Artes Culinarias',
      caContent: $('<p>Duración del programa: 16 semanas<br><br>Un programa que prepara a las personas para brindar servicios de cocina profesional y servicios de cocina relacionados en restaurantes y otros establecimientos comerciales de alimentos. Incluye instrucción sobre planificación de recetas y menús, preparación y cocción de alimentos, supervisión y capacitación de ayudantes de cocina, manejo de suministros de alimentos y recursos de cocina, estética de la presentación de los alimentos y familiaridad o dominio de una amplia variedad de cocinas y técnicas culinarias. <br><br>Certificaciones:<br><br>Asociación Nacional de Restaurantes - Cocina<br>American Culinary Federation - Certified Fundamentals Cook - CFC<br>ServSafe - Gerente de Certificación de Servicios de Alimentos<br>ServSafe = Certificación de alérgenos alimentarios<br><br>Licencias: Gerente de Sanidad del Servicio de Alimentos de la Ciudad de Chicago</p>'),
      // Donation Section
      donation: 'Su contribución financiera garantiza que los futuros estudiantes puedan continuar beneficiándose de este programa sin cargo.',
      donationBtn: 'Donar',
      // About Us Section
      aboutUs: 'Sobre nosotros',
      auBigText: 'Que es Foodhero?',
      auCopy: 'Foodhero es una empresa emergente de tecnología social que ofrece cursos de capacitación personalizados e innovadores en capacitación en agilidad empresarial para empresarios de alimentos y cursos culinarios certificados para profesionales.',
      auOrangeBox: $('<div>Creemos en<br><i>Educación de la fuerza laboral</i><i>Comida Rica</i><i>Menus Nutritivos</i><i>Restaurantes Sostenibles</i><i>Empoderamiento de Negicios & Comunidades</i><i>Responsabilidad Social y Ambiental</i></div>'),
      // Contact Us section
      contactUsTitle: 'Contacto',
      cuName: 'Nombre',
      cuEmail: 'Email',
      cuMessage: 'Mensaje',
      cuSubmit: 'Mandar',
      // Footer Section
      footerCopy: 'Foodhero es una empresa emergente de tecnología social que ofrece cursos de capacitación personalizados e innovadores en capacitación en agilidad empresarial para empresarios de alimentos y cursos culinarios certificados para profesionales.',
      fFollowUs: 'Seguir'
    },
    toggleSpanish: function() {
      $("#courses-link").html(translator.spanish.courses);
      $("#about-us-link").html(translator.spanish.aboutUsLink);
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

  