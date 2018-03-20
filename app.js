$(window).on('load', () => {
    progressBar();
    flyingText();
    intro();
    projectLayout();
    setTimeout(function() {
        $('.preloader').addClass('complete');
    }, 2500);

})

function progressBar() {
    let width = 5;
    let bar = document.getElementById('bar');
    
    setInterval(() => {
        if (width >= 100) {
          clearInterval(this);
        } else {
          width++;
          bar.style.width = `${width}%`;
          bar.innerHTML = `${width * 1}%`;
        }
    }, 20);
}

function flyingText() {
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 3000);
}

function intro() {
    let icon_one = $('.social:nth-child(1)');
    let icon_two = $('.social:nth-child(2)');
    let icon_three = $('.social:nth-child(3)');


    setTimeout(function() {
        $('.home-container').css('opacity', '1');
    }, 3500);
    setTimeout(function () {
      icon_one.css('opacity', '1');
    }, 4300);
    setTimeout(function () {
      icon_two.css('opacity', '1');
    }, 5100);
    setTimeout(function () {
      icon_three.css('opacity', '1');
    }, 5900);
}

function projectLayout() {
    let frame_1 = $('#frame_1');
    let frame_2 = $('#frame_2');
    let frame_3 = $('#frame_3');
    let frame_4 = $('#frame_4');
    let frame_5 = $('#frame_5');
    let frame_6 = $('#frame_6');
    let frame_7 = $('#frame_7');
    let frame_8 = $('#frame_8');
    let frame_9 = $('#frame_9');
    let frame_10 = $('#frame_10');
    let frames = [
        frame_1, frame_2, frame_3, frame_4, frame_5,
        frame_6, frame_7, frame_8, frame_9, frame_10
    ];
    let ms_time = 3000;

    frames.forEach((f) => {
        ms_time += 500;
        setTimeout(function() {
            console.log("frame is settling!");
            f.css('opacity', '1');
        }, ms_time);
    });

}