//script for carousel or slideshow

let slideIndex = 1;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName('carousel-slide')[0].children;
    
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slides[slideIndex - 1].style.display = 'block';
}


//sript for social media share

showSlide(slideIndex);

const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach(button => {
    button.addEventListener('click', shareOnSocialMedia);
});

function shareOnSocialMedia(event) {
    event.preventDefault();

    const url = window.location.href;
    const title = document.title;

    if (event.target.classList.contains('facebook')) {
        shareOnFacebook(url);
    } else if (event.target.classList.contains('twitter')) {
        shareOnTwitter(url, title);
    } else if (event.target.classList.contains('linkedin')) {
        shareOnLinkedIn(url, title);
    }
}

function shareOnFacebook(url) {
    // Implement Facebook sharing API here
    console.log('Sharing on Facebook:', url);
}

function shareOnTwitter(url, title) {
    // Implement Twitter sharing API here
    console.log('Sharing on Twitter:', url, title);
}

function shareOnLinkedIn(url, title) {
    // Implement LinkedIn sharing API here
    console.log('Sharing on LinkedIn:', url, title);
}


// Function to handle form submission
function submitComment(event) {
  event.preventDefault();

  // Get user input
  var nameInput = document.getElementById('name-input');
  var commentInput = document.getElementById('comment-input');

  var name = nameInput.value;
  var comment = commentInput.value;

  // Create a new comment element
  var commentElement = document.createElement('div');
  commentElement.classList.add('comment');

  var nameElement = document.createElement('div');
  nameElement.classList.add('name');
  nameElement.textContent = name;

  var textElement = document.createElement('div');
  textElement.classList.add('text');
  textElement.textContent = comment;

  // Append the comment elements to the comment list
  var commentList = document.getElementById('comment-list');
  commentElement.appendChild(nameElement);
  commentElement.appendChild(textElement);
  commentList.appendChild(commentElement);

  // Clear the input fields
  nameInput.value = '';
  commentInput.value = '';
}

// Attach event listener to the comment form
var commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', submitComment);


// Function to handle accordion toggle
function toggleAccordion() {
  var accordionItem = this.parentElement;
  accordionItem.classList.toggle('active');
}

// Attach event listeners to accordion headers
var accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(function(header) {
  header.addEventListener('click', toggleAccordion);
});
