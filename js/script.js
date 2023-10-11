document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            const target = this.id.replace('-tab', '');
            contents.forEach(function(content) {
                content.classList.remove('active');
            });
            document.querySelector(`.${target}`).classList.add('active');
        });
    });
});
