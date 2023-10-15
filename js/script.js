document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('menu-button').addEventListener('click', function() {
  
    document.getElementById('main').classList.toggle('active');

  });

  function handleMobileClick() {
    var mobileElements = document.getElementsByClassName('mobile');

    for (var i = 0; i < mobileElements.length; i++) {
        mobileElements[i].addEventListener('click', function() {
            document.getElementById('menu-button').click();
        });
    }
}

  handleMobileClick();


  
  

  const aboutContent = document.querySelector('.about.content');

  aboutContent.addEventListener('mouseenter', function() {
    aboutContent.classList.remove('transparent-scrollbar');
  });
  
  aboutContent.addEventListener('mouseleave', function() {
    aboutContent.classList.add('transparent-scrollbar');
  });

  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const activeTab = document.querySelector('.tab.active');
      const activeContent = document.querySelector('.content.active');
      const targetContent = document.querySelector(`.${tab.id}.content`);

      if (activeTab !== tab) {
        activeTab.classList.remove('active');
        tab.classList.add('active');

        activeContent.classList.remove('active', 'roll-down');
        activeContent.classList.add('roll-up');
        targetContent.classList.add('active', 'roll-down');

        // Triggering reflow to force the animation
        void targetContent.offsetWidth;

        activeContent.classList.remove('roll-up');
        
      }
    });
  });

});
