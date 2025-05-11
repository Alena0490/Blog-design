/***Scrolování na stránce */
document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined') {
        (function($) {
            $(function() {
                function smoothScroll(target) {
                    if ($(target).length) {
                        $("html, body").animate({
                            scrollTop: $(target).offset().top - 30
                        }, 1000);
                        
                        // Odebrání # z URL, aby stránka neskočila zpět
                        history.replaceState(null, null, ' ');
                    } else {
                        console.warn("Sekce " + target + " nebyla nalezena.");
                    }
                }

                $(".scroll-start").click(function(event) {
                    event.preventDefault();
                    smoothScroll(".scroll-end");
                });
            });
        })(jQuery);
    } else {
        console.error("jQuery nebylo načteno.");
    }
});

//Vrácení nahoru
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  /***Přepnutí na Light/Dark mode */
  const toggle = document.getElementById('modeToggle');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });
