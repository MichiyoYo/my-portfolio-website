(function () {
  const filterBtns = document.querySelectorAll('.filter-button');
  const workGallery = document.querySelector('.projects');
  const workGalleryItems = workGallery.querySelectorAll('.project');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach((btn) => {
        btn.classList.remove('active-filter');
      });
      btn.classList.add('active-filter');
      const filter = e.target.dataset.type;
      const itemsArray = Array.from(workGalleryItems);
      itemsArray.forEach((item) => {
        if (item.dataset.type.includes(filter) || filter === 'all') {
          item.classList.remove('hideWork');
          item.classList.add('showWork');
        } else {
          item.classList.add('hideWork');
          item.classList.remove('showWork');
        }
      });
    });
  });
})();
