$(function(){

    // cursor effect
    $('body').mousemove(function(e){
        xVal=e.clientX;
        yVal=e.clientY;

        gsap.to('.cursor',{
            x:xVal,
            y:yVal,
            stagger:0.01
        })
    })



    // BGM play,stop
    $('.listen-area').click(function(){
        // console.log();

        if($(this).hasClass('on')){
            $('#bgm').get(0).pause()
            $('.bar').removeClass('on')
            $(this).children('.text').text("Play")
        }else{
            $('#bgm').get(0).play()
            $('.bar').addClass('on')
            $(this).children('.text').text("Stop")
        }
        $(this).toggleClass('on');
    })



    // header scroll
    let scrollTop = 0;

    $(window).scroll(function(){
        const curr = $(this).scrollTop();
  
        if(curr > 1){
            if (curr > scrollTop) {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
            scrollTop = curr;
        } else {
            $('.header').removeClass('on');

        }
    });



    // flow text - main txt
    gsap.to('.sc-visual .word-area .wrap',10,{
        ease:"none",
        xPercent:-100,
        repeat:-1,
    });
    // flow text - project txt
    gsap.to('.sc-project .flowtxt-area .wrap',15,{
        ease:"none",
        xPercent:-100,
        repeat:-1,
    });


    
    // main image auto change
    $(function(){
        let mainBg = 1;
        
        setInterval(function(){
            mainBg++;
            if(mainBg > 15) {mainBg = 1;}
            $("#mainBg").attr("src","./assets/img/main"+mainBg+".jpg");
        },3000);
    });



    // My story 스와이퍼
    const storySlide = new Swiper(".story-slide", {
        loop: true,
        loopedSlides: 2,
        
        slidesPerView: 1,
        spaceBetween: 20,

        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 'auto'
            },
            768: {
                slidesPerView: '2',
            }
        }
    });



    // 프로젝트 리스트 mouse hover 시
    flowtxtHover = $('.sc-project .flowtxt-area')

    // 마우스 올렸을 때
    $(flowtxtHover).mouseover(function(){
        $(this).siblings('.bg').addClass('on')
        $(this).parent().siblings('.cont-area').addClass('on')
    });
    // 마우스 뗐을 때
    $(flowtxtHover).mouseout(function(){
        $(this).siblings('.bg').removeClass('on')
        $(this).parent().siblings('.cont-area').removeClass('on')
    });



}) //삭제 금지