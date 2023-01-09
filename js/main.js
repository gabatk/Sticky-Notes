const addBtn = document.querySelector('.menu__button-add');
const deleteAllBtn = document.querySelector('.menu__button-delete-all');
const saveBtn = document.querySelector('.note-panel__save');
const cancelBtn = document.querySelector('.note-panel__cancel');
const deleteBtns = document.getElementsByClassName('note__header-delete');
const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const panelCategory = document.querySelector('#category');
const panelText = document.querySelector('#text');
const panelError = document.querySelector('.note-panel__error');

let selectedValue;
let cardID = 0;

const showPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	panelError.style.visibility = 'hidden;';
	panelCategory.selectedIndex = 0;
	panelText.value = '';
};

addBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
