gsap.registerPlugin(ScrollTrigger);

        var targetsEndTrigger = document.querySelectorAll(".endtrigger");

        var targetsHeight = document.querySelectorAll(".height");

        var targetsBreak = document.querySelectorAll(".break");

        targetsEndTrigger.forEach((target, index) => {
          const pinSpacing = index === targetsEndTrigger.length - 1 ? "true" : false;
          const endTrigger = `#card${index + 1}`
          const opacityFirst = index === 0 ? 1 : 0;
          const opacitySecond = index === targetsEndTrigger.length - 1 ? 1 : 0;
          const tl = gsap
            .timeline({
              defaults: { duration: 1 },
              scrollTrigger: {
                trigger: target,
                pin: true,
                scrub: true,
                start: "center center",
                // end,
                endTrigger,
                markers: false,
                toggleActions: "restart none reverse reset",
                pinSpacing,
              },
            })
            .from(target, { opacity: opacityFirst, duration: 0.5 }, 0)
            .to(target, { opacity: opacitySecond, duration: 0.5 }, 0.8);
        });

        targetsHeight.forEach((target, index) => {
          const pinSpacing = index === targetsHeight.length - 1 ? "true" : false;
          const end =
            index === targetsHeight.length - 1
              ? `+=${target.offsetHeight}px`
              : `+=${targetsHeight[index + 1].offsetHeight}px`;
          const opacityFirst = index === 0 ? 1 : 0;
          const opacitySecond = index === targetsHeight.length - 1 ? 1 : 0;
          const tl = gsap
            .timeline({
              defaults: { duration: 1 },
              scrollTrigger: {
                trigger: target,
                pin: true,
                scrub: true,
                start: "center center",
                end,
                markers: false,
                toggleActions: "restart none reverse reset",
                pinSpacing,
              },
            })
            .from(target, { opacity: opacityFirst, duration: 0.5 }, 0)
            .to(target, { opacity: opacitySecond, duration: 0.5 }, 0.8);
        });

        targetsBreak.forEach((target, index) => {
          const pinSpacing = index === targetsBreak.length - 1 ? "true" : false;
          const end =
            index === targetsBreak.length - 1
              ? `+=${target.offsetHeight}px`
              : `+=${targetsBreak[index + 1].offsetHeight}px`;
          const opacityFirst = index === 0 ? 1 : 0;
          const opacitySecond = index === targetsBreak.length - 1 ? 1 : 0;
          const tl = gsap
            .timeline({
              defaults: { duration: 1 },
              scrollTrigger: {
                trigger: target,
                pin: true,
                scrub: true,
                start: "center center",
                end,
                markers: false,
                toggleActions: "restart none reverse reset",
                pinSpacing,
              },
            })
            .from(target, { opacity: opacityFirst, duration: 0.5 }, 0)
            .to(target, { opacity: opacitySecond, duration: 0.5 }, 0.8);
        });

        //fancy box
        $('[data-fancybox="gallery"]').fancybox({
          buttons: [
            "slideShow",
            "thumbs",
            "zoom",
            "fullScreen",
            "share",
            "close"
          ],
          loop: false,
          protect: true
        });


$(".scroll-totop").hide();
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('.scroll-totop').fadeIn();
				} else {
					$('.scroll-totop').fadeOut();
          startCount();
				}
			});
			// scroll body to 0px on click
			$('.scroll-totop').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
			});
		});

    AOS.init({
      duration: 1200,
    })

$('.sliderx').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.2,
    slidesToScroll: 2,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.group-a').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.stadion-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    autoplay:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });

$(".h--timeline-date").click(function(){
  $(".helping_").fadeOut();
})

$(".maskot__image").click(function(){
  $(".sliderx__help").fadeOut()
})
$(".js-tilt").tilt({
  max: 30,
  speed: 600,
  scale: 1,
  transition: true,
  perspective: 600,
});
$(".count").addClass("dedi")
function isScrolledIntoView($elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function count($this) {
      var current = parseInt($this.html(), 10);
      if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
          $this.html(++current);
          $this.data("isCounting", true);
          setTimeout(function () {
              $this.data("isCounting", false);
              count($this);
          }, 20);
      }
  }

  $(".count").each(function () {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('1930');
      $(this).data("isCounting", false);
  });

  function startCount() {
      $(".count").each(function () {
          count($(this));
      });
  };
  $(document).ready(function(){
    startCount();
    $(".count").addClass("muter")
  })