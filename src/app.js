$('.page').on('mouseenter', function() {
    $(this).addClass('hover-right')
    if($(this).hasClass('flip-right')) {
        $(this).addClass('flip-right-hover')
    } 
}).on('mouseleave', function() {
    $(this).removeClass('hover-right')
    if($(this).hasClass('flip-right')) {
        $(this).removeClass('flip-right-hover')
    } 
})

document.getElementById('book-read-container').onclick = clickedPage;
const page = document.querySelectorAll('.page');
const cover = document.querySelector('.cover-page')

function clickedPage(e) {   
    let clickedElement=(window.event) ? window.event.srcElement : e.target;
    let page=document.getElementsByTagName(clickedElement.tagName);

    for(let i=0;i<page.length;++i) {
      if(page[i] === clickedElement) {

        if(clickedElement.parentNode.parentNode.classList.contains('flip-right')) {

          clickedElement.parentNode.parentNode.classList.remove('flip-right')
          clickedElement.parentNode.parentNode.classList.add('flip-left')
          clickedElement.parentNode.parentNode.classList.remove('flip-right-hover')
          
          if(i === 1) {
            $('.page').css({
              'width': '585px', 'left': '0%'
            })
            document.querySelector('.shadow-box').style.display = 'none'
          }
          if(i === 61 && clickedElement.parentNode.parentNode.classList.contains('cover-page')) {
            $('.page').css({
              'width': '585px', 'left': '50%'
            })
            document.querySelector('.shadow-box').style.display = 'block'
          } else {
            page[i].parentNode.parentNode.style.zIndex = 5
            page[i + 2].parentNode.parentNode.style.zIndex = 4
            page[i + 4].parentNode.parentNode.style.zIndex = 2
          }

        } else {

          if(clickedElement.parentNode.parentNode.classList.contains('flip-left')) {
            clickedElement.parentNode.parentNode.classList.remove('flip-left')
            clickedElement.parentNode.parentNode.classList.add('flip-right')
          }
          clickedElement.parentNode.parentNode.classList.add('flip-right')
          clickedElement.parentNode.parentNode.classList.remove('hover-right')

          if(i === 0) {
            $('.page').css({
              'width': '585px', 'left': '50%'
            })
            document.querySelector('.shadow-box').style.display = 'block'
          }
          if(i === 60 && clickedElement.parentNode.parentNode.classList.contains('cover-page')) {
            cover.style.cssText = 'width:585px;left:75%;z-index:3;';
            page[i].parentNode.parentNode.style.zIndex = 4
            $('.page').css({
              'width': '585px', 'left': '100%'
            })
            document.querySelector('.shadow-box').style.display = 'none'
          } else {
            page[i + 2].parentNode.parentNode.style.zIndex = 3
            page[i].parentNode.parentNode.style.zIndex = 4
          }
        }
      }    
    }
}
