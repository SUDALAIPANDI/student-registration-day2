// Creates and returns a card element
export function createCard(name, role) {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h2');
  title.textContent = name;

  const roleEl = document.createElement('p');
  roleEl.textContent = role;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'removeBtn';

  removeBtn.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(roleEl);
  card.appendChild(removeBtn);

  return card;
}
