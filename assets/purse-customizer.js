document.querySelectorAll('.motif-btn').forEach(btn => {

  btn.addEventListener('click', () => {

    const img = document.createElement('img');

    img.src = btn.dataset.image;

    img.classList.add('design-element');

    img.style.top = '100px';
    img.style.left = '100px';

    document
      .querySelector('#design-layer')
      .appendChild(img);

    makeDraggable(img);

  });

});
document
.getElementById('add-designer-text')
.addEventListener('click', () => {

  const value =
    document.getElementById(
      'designer-text-input'
    ).value;

  const div =
    document.createElement('div');

  div.innerText = value;

  div.classList.add('text-element');

  document
    .querySelector('#design-layer')
    .appendChild(div);

  makeDraggable(div);

});
function makeDraggable(el){

  let active = false;

  let x = 0;
  let y = 0;

  el.addEventListener('mousedown', start);

  function start(e){

    active = true;

    x = e.clientX;
    y = e.clientY;

    document.addEventListener(
      'mousemove',
      move
    );

    document.addEventListener(
      'mouseup',
      end
    );

  }

  function move(e){

    if(!active) return;

    const dx = e.clientX - x;
    const dy = e.clientY - y;

    el.style.left =
      (el.offsetLeft + dx) + 'px';

    el.style.top =
      (el.offsetTop + dy) + 'px';

    x = e.clientX;
    y = e.clientY;

  }

  function end(){

    active = false;

  }

}