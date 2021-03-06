const display = document.querySelector('.display'),
  slider = document.getElementById('slider');

let count = 0;

function sliderClose() {
  $('.slider').slick('unslick');
  slider.querySelectorAll('.room__item').forEach((item) => {
    item.remove();
  });
}

display.addEventListener('click', function (event) {
  let source = '';
  if (event.target.getAttribute('data-room') === null) return;

  source = event.target.getAttribute('data-room');

  // Dom element for slider
  function addElement(source) {
    let str = '';

    switch (source) {
      case '1':
        count = 8;
        break;
      case '2':
        count = 40;
        break;
      case '3':
        count = 36;
        break;
      case '4':
        count = 41;
        break;
      case '5':
        count = 4;
        break;
      case '6':
        count = 49;
        break;
      case '7':
        count = 24;
        break;
    }

    for (let i = 0; i < count; i++) {
      str += `
          <div class="room__item">
            <img id="image"
            src="./assets/img/room-${source}/${
              i + 1
            }.jpg" alt="room-${source}" />
          </div>
          `;
    }
    slider.innerHTML = str;
  }
  addElement(source);

  // Slider settings
  $('#exampleModal').arcticmodal();

  $(document).ready(function () {
    $('.slider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      swipe: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
    });
  });

  const closeBtn = document.querySelector('.box-modal_close'),
    overlay = document.querySelector('.arcticmodal-container');

  closeBtn.addEventListener('click', () => {
    sliderClose();
  });

  overlay.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('box-modal') ||
      e.target.classList.contains('arcticmodal-container')
    ) {
      sliderClose();
    }
  });
});
