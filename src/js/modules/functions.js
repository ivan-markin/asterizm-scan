export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });  
}

export function mobileMenuHandler() {
  const menuPopupEl = document.querySelector('.mobile-menu');
  
  document.querySelector('.menu-open').addEventListener('click', () => {    
    menuPopupEl.classList.add('active');	
    document.body.classList.add('fixed');    
  })
  
  document.querySelector('.menu-close').addEventListener('click', () => {    
    menuPopupEl.classList.remove('active');	
    document.body.classList.remove('fixed');
  })
}