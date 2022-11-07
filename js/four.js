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

$('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.2,
    slidesToScroll: 2,
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