const hideList = document.querySelector(`#hideList`);
const description = document.querySelector('#description');
const descriptionInput = document.querySelector('#descriptionInput');
const descriptionButton = document.querySelector('#descriptionButton');
const addItemInput = document.querySelector('#addItemInput');
const addItemButton = document.querySelector('#addItemButton');
const myList = document.querySelector(`#myList`);

// kod z cwiczenia
//zmienilem event.target.tagName == 'BUTTON' na event.target.className === 'removeButton'
// dodalem class 'removeButton' do elementów button w HTML wewnatrz li

const listElements = document.getElementsByTagName('li');
const listDiv = document.querySelector(`.list`);




listDiv.addEventListener('click', (event) =>{
	if(event.target.className === 'removeButton') {
		let li = event.target.parentNode;
		let ul = li.parentNode;
		ul.removeChild(li);
	}
});

// koniec kodu z cwiczenia


// zmiana opisu listy
descriptionButton.addEventListener('click', () => {
	description.textContent = `${descriptionInput.value} :`;
	descriptionInput.value = '';
});

//ukrywanie/odsłanianie listy

hideList.addEventListener('click', () => {
	if (listDiv.style.display === 'block' || listDiv.style.display === ''  ) {
		listDiv.style.display = 'none';
		hideList.textContent = 'Show List';
	} else {
		listDiv.style.display = 'block'
		hideList.textContent = 'Hide List';
	}
});

// dodawanie elementów do listy

addItemButton.addEventListener('click', () =>{
	if (addItemInput.value.length < 2) {
		alert('THIS IS NOT A WORD, DUMBASS!!!');
		addItemInput.value = '';
	} else {
		let newLi = document.createElement('li');
		let newButton = document.createElement('button');
		newButton.className = 'removeButton';
		newButton.textContent = 'Remove';
		newLi.textContent = addItemInput.value;
		newLi.appendChild(newButton);
		myList.appendChild(newLi);
	}

	});
//podswietla element listy po najechaniu na niego myszką
listDiv.addEventListener('mouseover', (event) =>{
	if(event.target.tagName === 'LI') {
		event.target.style.background = 'red';
	}
});
listDiv.addEventListener('mouseout', (event) =>{
	if(event.target.tagName === 'LI') {
		event.target.style.background = '';
	}
});
