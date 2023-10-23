var skills = [92, 90, 84, 90,90,85,95,90];

var bars = document.querySelectorAll('.line');

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


  //Active scroll for about
  const aboutContent = document.querySelector('.about.content');

  aboutContent.addEventListener('mouseenter', function() {
    aboutContent.classList.remove('transparent-scrollbar');
  });
  
  aboutContent.addEventListener('mouseleave', function() {
    aboutContent.classList.add('transparent-scrollbar');
  });

   //Active scroll for projects
   const projectsContent = document.querySelector('.projects.content');

   projectsContent.addEventListener('mouseenter', function() {
    projectsContent.classList.remove('transparent-scrollbar');
   });
   
   projectsContent.addEventListener('mouseleave', function() {
     projectsContent.classList.add('transparent-scrollbar');
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


      
      bars.forEach(function(bar, index) {
        var skill = 0;
        if (tab.id === "cv") skill = skills[index];
        void bar.offsetWidth;
        bar.style.width = skill + '%';
      });
      

    });
  });

  const mobs = document.querySelectorAll('.mobile');

  mobs.forEach(mob => {
    mob.addEventListener('click', function() {
      const activeMob = document.querySelector('.mobile.active');
      const activeContent = document.querySelector('.content.active');
      const targetContent = document.querySelector(`.${mob.id.slice(1)}.content`);

      if (activeMob !== mob) {
        activeMob.classList.remove('active');
        mob.classList.add('active');

        activeContent.classList.remove('active', 'roll-down');
        targetContent.classList.add('active', 'roll-down');

        // Triggering reflow to force the animation
        void targetContent.offsetWidth;

        
      }

      bars.forEach(function(bar, index) {
        var skill = 0;
        if (mob.id === "mcv") skill = skills[index];
        void bar.offsetWidth;
        bar.style.width = skill + '%';
      });

    });
  });


  document.getElementById('right').addEventListener('click', function() {
    var currentPage = document.querySelector('.content.active');
    var currTab = document.querySelector('.tab.active');
    var currMob = document.querySelector('.mobile.active');
    var nextMob;
    var nextPage;
    var nextTab;
    var nextTabId;
  
    nextPage = currentPage.nextElementSibling;
    if (!nextPage){
      const section = document.querySelector('#side'); // Select the section element
      if (section) nextPage = section.firstElementChild; 
       nextTabId = nextPage.classList[1];
      }
    else{
       nextTabId = nextPage.classList[1];
      }

    nextTab = document.getElementById(nextTabId);
    nextMob = document.getElementById("m"+nextTabId);
  
    if (nextPage) {
      currTab.classList.toggle('active');
      currentPage.classList.toggle('active');
      currentPage.classList.toggle('roll-down');
      nextPage.classList.toggle('active');
      nextPage.classList.toggle('roll-down');
      nextTab.classList.toggle('active');
      currMob.classList.toggle('active');
      nextMob.classList.toggle('active');
    }
      bars.forEach(function(bar, index) {
        var skill = 0;
        if (nextPage.id === "cv-page") skill = skills[index];
        void bar.offsetWidth;
        bar.style.width = skill + '%';
        
      });


  });


  document.getElementById('left').addEventListener('click', function() {
    var currentPage = document.querySelector('.content.active');
    var currTab = document.querySelector('.tab.active');
    var currMob = document.querySelector('.mobile.active');
    var prevMob;
    var prevPage;
    var prevTab;
    var prevTabId;
  
    prevPage = currentPage.previousElementSibling;
    if (!prevPage){
      const section = document.querySelector('#side'); // Select the section element
      if (section) prevPage = section.lastElementChild; 
       prevTabId = prevPage.classList[1];
      }
    else prevTabId = prevPage.classList[1];
      
    prevTab = document.getElementById(prevTabId);
    prevMob = document.getElementById('m'+prevTabId)

    if (prevPage) {
      currTab.classList.toggle('active');
      currentPage.classList.toggle('active');
      currentPage.classList.toggle('roll-down');
      prevPage.classList.toggle('active');
      prevPage.classList.toggle('roll-down');
      prevTab.classList.toggle('active');
      currMob.classList.toggle('active');
      prevMob.classList.toggle('active');
    }


    var bars = document.querySelectorAll('.line');
    bars.forEach(function(bar, index) {
        var skill = 0;
        if (prevPage.id === "cv-page") skill = skills[index];
        bar.offsetWidth;
        bar.style.width = skill + '%';
        
    });



      
  }); 


});
