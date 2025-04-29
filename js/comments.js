const form = document.getElementById('commentForm');
const commentSection = document.getElementById('commentSection');
const templateSource = document.getElementById('comment-template').innerHTML;
const template = Handlebars.compile(templateSource);
let date = new Date();

function formatTime(hours, minutes) {
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    return `${h}:${m}`;
  }


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const time = formatTime(date.getHours(), date.getMinutes());


    if (name && comment) {
    const commentHTML = template({ name, time, comment });
    commentSection.innerHTML += commentHTML;
    form.reset();
    }
});