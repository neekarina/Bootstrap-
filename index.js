const viewportHeight = window.innerHeight ;
window.scrollBy({ top: viewportHeight, behavior: 'smooth' });

// Attach the click event listener to the button
document.getElementById('scrollDownBtn').addEventListener('click', scrollDown);