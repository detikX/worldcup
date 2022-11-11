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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  
  // $.ajax({
  //   url: "js/bola.json",
  //   type: "GET",
  //   // beforeSend: function () {
  //   //   $(".loader_ajax").show();
  //   //   // $(".thumbs").hide();
  //   // },
  //   // complete: function () {
  //   //   $(".loader_ajax").hide();
  //   //   // $(".thumbs").show();
  //   // },
  //   success:(response)=>{
  //     console.log(response);

  //     // var name_id = $(".maskot__image").attr("data-target")
  //     // $(document).on('click','.maskot__image[data-target="#modalBola"]',function(){
  //     //   var dataID =$(this).attr("data-target");
  //     //   // alert(dataID)
  //     //   $("#image-maskot .modal-content").html(`
  //     //                 <div class="modal-body">
  //     //                    <div class="modal-image">
  //     //                      ${dataID}
  //     //                    </div>
  //     //                </div>
  //     //            `);
  //     // })
  //     // $(".maskot__image").on('click',function(){
  //     //   var dataID =$(this).attr("data-target");
  //     //   $("#image-maskot .modal-content").html(`
  //     //                <div class="modal-body">
  //     //                   <div class="modal-image">
  //     //                     ${dataID}
  //     //                   </div>
  //     //               </div>
  //     //           `);
  //     // })

  //   }
  // })
  // $("#image-foto .modal-body").html("")
  // $(".listing[data-target='#image-foto']").on('click', function(i,x) {
  //     $('#image-foto').modal('show')
  //     var data = $(this).attr("data-help");

  //     $("#image-foto .modal-content").html(`
  //             <div class="modal-body">
  //                 <div class="modal-image">
  //                     <img src=${i.target.src} />
  //                 </div>
  //             </div>
  //         `);
  // })


$(".h--timeline-date").click(function(){
  $(".helping_").fadeOut();
})

$(".maskot__image").click(function(){
  $(".sliderx__help").fadeOut()
})