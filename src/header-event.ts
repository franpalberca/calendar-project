const helpItems = document.querySelectorAll('.event-item');

const eventInfo: { [key: string]: string } = {
  'create-events': 'Información para Create and Manage Events',
  'delete-events': 'Información para Delete Events',
  'search-events': 'Información para Search an Event',
};

function showPopup(content: HTMLElement) {
  const popup = document.createElement('div');
  const closeButton = document.createElement('span');

  popup.className = 'popup';
  closeButton.className = 'popup-close';
  closeButton.innerText = 'x';

  popup.appendChild(content);
  popup.appendChild(closeButton);
  document.body.appendChild(popup);

  closeButton.addEventListener('click', () => {
    document.body.removeChild(popup);
  });
}

function handleMenuItemClick(event: Event) {
  const menuItem = event.target as HTMLElement;
  const menuItemId = menuItem.id;

  if (menuItemId && eventInfo[menuItemId]) {
    const content = document.createElement('div');
    content.innerText = eventInfo[menuItemId];

    showPopup(content);
  }
}

helpItems.forEach((item) => {
  item.addEventListener('click', handleMenuItemClick);
});
