document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('menu-button').classList.toggle('cross');
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

  //Main scroll bar
  const main = document.querySelector('#main');

  main.addEventListener('mouseenter', function() {
    main.classList.remove('transparent-scrollbar');
  });
  
  main.addEventListener('mouseleave', function() {
    main.classList.add('transparent-scrollbar');
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
        targetContent.classList.add('active', 'roll-down');

        // Triggering reflow to force the animation
        void targetContent.offsetWidth;
        
      }
    });
  });

  const mobs = document.querySelectorAll('.mobile');

  mobs.forEach(mob => {
    mob.addEventListener('click', function() {
      const activeMob = document.querySelector('.mobile.active');
      const activeContent = document.querySelector('.content.active');
      const targetContent = document.querySelector(`.${mob.id}.content`);

      if (activeMob !== mob) {
        activeMob.classList.remove('active');
        mob.classList.add('active');

        activeContent.classList.remove('active', 'roll-down');
        targetContent.classList.add('active', 'roll-down');

        // Triggering reflow to force the animation
        void targetContent.offsetWidth;
      }
    });
  });


  document.getElementById('right').addEventListener('click', function() {
    var currentPage = document.querySelector('.content.active');
    //console.log(currentPage); // Check if this logs the correct element
    var nextPage = currentPage.nextElementSibling;
    //console.log(nextPage);
  
    if (nextPage && !nextPage.classList.contains('ignore')) {
      currentPage.classList.toggle('active');
      currentPage.classList.toggle('roll-down');
      nextPage.classList.toggle('active');
      nextPage.classList.toggle('roll-down');
    }
  });


  document.getElementById('left').addEventListener('click', function() {
    var currentPage = document.querySelector('.content.active');
    //console.log(currentPage); // Check if this logs the correct element
    var prevPage = currentPage.previousElementSibling;
    //console.log(prevPage);
  
    if (prevPage) {
      currentPage.classList.toggle('active');
      currentPage.classList.toggle('roll-down');
      prevPage.classList.toggle('active');
      prevPage.classList.toggle('roll-down');
    }
  });

});
