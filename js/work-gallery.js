(function () {
  const workGallery = document.querySelector('.projects');
  const workGalleryItems = workGallery.querySelectorAll('.project');
  console.log(workGalleryItems);
  //get data-type attribute from each item
  workGalleryItems.forEach((item) => {
    const type = item.getAttribute('data-type');
    console.log(type);
  });
  //loop through each item and add a click event listener
  //when clicked, check if the data-type attribute matches the filter
  //if it does, show the item
  //if it doesn't, hide the item
  //if the filter is 'all', show all items
})();
