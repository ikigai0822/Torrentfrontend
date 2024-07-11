document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.getElementById('avatar');
    let offsetX, offsetY;
    let isDragging = false;
  
    avatar.addEventListener('mousedown', function (e) {
      isDragging = true;
      offsetX = e.clientX - avatar.getBoundingClientRect().left;
      offsetY = e.clientY - avatar.getBoundingClientRect().top;
  
      function moveAt(e) {
        if (isDragging) {
          avatar.parentElement.style.left = e.pageX - offsetX + 'px';
          avatar.parentElement.style.top = e.pageY - offsetY + 'px';
        }
      }
  
      function onMouseMove(e) {
        moveAt(e);
      }
  
      document.addEventListener('mousemove', onMouseMove);
  
      avatar.addEventListener('mouseup', function () {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
      }, { once: true });
  
      avatar.addEventListener('mouseleave', function () {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
      }, { once: true });
    });
  
    // avatar.addEventListener('click', function () {
    //   avatar.classList.toggle('reaction');
    // });
  });