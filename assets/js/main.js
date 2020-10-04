const display = document.querySelector('.display'),
  slider = document.getElementById('slider');

let count = 0;

display.addEventListener('click', function (event) {
  let source = '';

  if (event.target.getAttribute('data-room') === null) return;

  source = event.target.getAttribute('data-room');

  // Dom element for slider
  function addElement(source) {
    let str = '';

    switch (source) {
      case '1':
        // count = 8;
        count = 6;
        break;
      case '2':
        // count = 4;
        count = 6;
        break;
      case '3':
        // count = 40;
        count = 6;
        break;
      case '4':
        // count = 36;
        count = 6;
        break;
      case '5':
        // count = 41;
        count = 6;
        break;
      case '6':
        // count = 49;
        count = 6;
        break;
      case '7':
        // count = 24;
        count = 6;
        break;
    }

    for (let i = 0; i < count; i++) {
      str += `
          <div class="room__item">
            <img id="image" src="./assets/img/preview/${
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
      speed: 300,
      fade: true,
      cssEase: 'linear',
    });
  });

  const closeBtn = document.querySelector('.box-modal_close');

  closeBtn.addEventListener('click', () => {
    $('.slider').slick('unslick');
    slider.querySelectorAll('.room__item').forEach((item) => {
      item.remove();
    });
  });
});
