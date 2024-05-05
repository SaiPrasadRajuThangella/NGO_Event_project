const eventForm = document.getElementById('event-form');
const eventList = document.getElementById('event-list-items');

eventForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(eventForm);
  const eventItem = document.createElement('li');
  eventItem.classList.add('event-item');
  eventItem.innerHTML = `
    <h3>${formData.get('event-title')}</h3>
    <p><strong>Date:</strong> ${formData.get('event-date')} <strong>Time:</strong> ${formData.get('event-time')}</p>
    <p><strong>Description:</strong> ${formData.get('event-description')}</p>
    <p><strong>Location:</strong> ${formData.get('event-location')}</p>
  `;
  eventList.appendChild(eventItem);
  eventForm.reset();
});

// Show the selected section and hide others
window.addEventListener('hashchange', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.id === location.hash.slice(1)) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
});
