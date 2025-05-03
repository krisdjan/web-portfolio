const form = document.getElementById('commentForm');
const commentSection = document.getElementById('commentSection');
const templateSource = document.getElementById('comment-template').innerHTML;
const template = Handlebars.compile(templateSource);

function formatTime(hours, minutes) {
  const h = hours.toString().padStart(2, '0');
  const m = minutes.toString().padStart(2, '0');
  return `${h}:${m}`;
}

// Handle loading comments from localStorage
function loadComments() {
  const saved = localStorage.getItem('comments');
  const comments = saved ? JSON.parse(saved) : [];
  comments.forEach(({ name, time, comment }) => {
    const commentHTML = template({ name, time, comment });
    commentSection.innerHTML += commentHTML;
  });
}

// Handle saving comments to localStorage
function saveComment(name, time, comment) {
  const saved = localStorage.getItem('comments');
  const comments = saved ? JSON.parse(saved) : [];
  comments.push({ name, time, comment });
  localStorage.setItem('comments', JSON.stringify(comments));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const comment = document.getElementById('comment').value.trim();
  const date = new Date();
  const time = formatTime(date.getHours(), date.getMinutes());

  if (name && comment) {
    const commentHTML = template({ name, time, comment });
    commentSection.innerHTML += commentHTML;
    saveComment(name, time, comment); // Save to localStorage
    form.reset();
  }
});


document.addEventListener('DOMContentLoaded', loadComments);
