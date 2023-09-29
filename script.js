// CACHE VARIABLES
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('#item');
const buttonEl = document.querySelector('button');
const items =JSON.parse( localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];
const data =JSON.parse( localStorage.getItem('tasks'))? JSON.parse(localStorage.getItem('tasks')) : [];



// create li and append to ul
const createLi = (text) => {
    const li =document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

// Loop through data
data.map((item) =>{
    createLi(item)
})

// submit form Event
form.addEventListener('submit',function(e) {
    e.preventDefault();

 // add to localStorage.SetItem
 items.push(input.value)
 localStorage.setItem('tasks', JSON.stringify(items))

    // add to ul
    createLi(input.value);
    input.value = " ";

})
// clear data

buttonEl.addEventListener('click',function() {
    localStorage.clear();
  ul.innerHTML = ''
})