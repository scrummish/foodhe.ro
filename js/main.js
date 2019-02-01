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

  });

  })(jQuery);