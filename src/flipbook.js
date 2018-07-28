document.getElementById('book-read-container').onclick = clickedPage;
const page = document.querySelectorAll('.page');
const pageLength = (page.length * 2)-1 
const cover = document.querySelector('.cover-page')

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

function clickedPage(e) {   
    let clickedElement = e.target;
    let tag = document.getElementsByTagName(clickedElement.tagName);

    for(let i=0;i<tag.length;++i) {
      if(tag[i] === clickedElement) {

        if(clickedElement.parentNode.parentNode.classList.contains('flip-right')) {

          clickedElement.parentNode.parentNode.classList.remove('flip-right')
          clickedElement.parentNode.parentNode.classList.add('flip-left')
          clickedElement.parentNode.parentNode.classList.remove('flip-right-hover')
          
          if(i === 1) {
            for(let p of page) p.style.cssText = 'width: 585px;left: 0%;';
            document.querySelector('.shadow-box').style.display = 'none'
          }
          if(i === pageLength && clickedElement.parentNode.parentNode.classList.contains('cover-page')) {
            for(let p of page) p.style.cssText ='width: 585px;left: 50%;z-index:4;';
            setTimeout(() => {
              document.querySelector('.shadow-box').style.display = 'block'  
            }, 850);
            
          } else {
            tag[i].parentNode.parentNode.style.zIndex = 5
            tag[i + 2].parentNode.parentNode.style.zIndex = 4
            tag[i + 4].parentNode.parentNode.style.zIndex = 2
          }
          
          // part for going forward  
        } else {

          if(clickedElement.parentNode.parentNode.classList.contains('flip-left')) {
            clickedElement.parentNode.parentNode.classList.remove('flip-left')
            clickedElement.parentNode.parentNode.classList.add('flip-right')
          }
          clickedElement.parentNode.parentNode.classList.add('flip-right')
          clickedElement.parentNode.parentNode.classList.remove('hover-right')

          if(i === 0) {
            for(let p of page) p.style.cssText = 'width: 585px;left: 50%;';
            setTimeout(() => {
              document.querySelector('.shadow-box').style.display = 'block'  
            }, 850);
          }
          if(i === (pageLength - 1) && clickedElement.parentNode.parentNode.classList.contains('cover-page')) {
            cover.style.cssText = 'width:585px;left:75%;z-index:3;';
            tag[i].parentNode.parentNode.style.zIndex = 4
            for(let p of page) p.style.cssText ='width: 585px;left: 100%; z-index:3;';
            document.querySelector('.shadow-box').style.display = 'none'
          } else {
            tag[i + 2].parentNode.parentNode.style.zIndex = 3
            tag[i].parentNode.parentNode.style.zIndex = 4
          }
        }
      }    
    }
}
