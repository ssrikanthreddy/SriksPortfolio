document.addEventListener('DOMContentLoaded', function() {

  

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
