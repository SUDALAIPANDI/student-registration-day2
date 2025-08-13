import { createCard } from './cardModule.js';

const addProfileBtn = document.getElementById('addProfileBtn');
const cardContainer = document.getElementById('cardContainer');

addProfileBtn.addEventListener('click', () => {
  const name = prompt("Enter name:");
  if (!name) return;

  const role = prompt("Enter role:");
  if (!role) return;

  const card = createCard(name, role);
  cardContainer.appendChild(card);
});
