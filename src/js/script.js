// if (1*4 == 8*1) {
//     console.log('Верно')
// } else {
//     console.log ("Error!")
// }

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log("Разрешено")
// } else {
//     console.log("Запрещено")
// }

// for (let i=1; i<8; i++) {
//     console.log(i);
// }

// function logging(a,b) {
//     console.log(a+b)
// }

// logging(3,10);

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // autoplay: true,
        // autoplaySpeed: 2900,
        // fade: true,
        // cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }
              
          ]
    
    });
  });