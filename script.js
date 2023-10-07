let list_container = document.getElementById('list-container');
let input_box = document.getElementById('input-box');

input_box.addEventListener('keypress', (e) => {
    if ((e.key === 'Enter')) {
        addTask();
    }
})

function addTask() {
    if (input_box.value === '') {
        alert('Enter Some Data')
    } else {
        let li = document.createElement('li')
        li.innerHTML = input_box.value;
        list_container.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    input_box.value = '';
    saveTask();
}

list_container.addEventListener("click", function(e) {

    
    if(e.target.tagName === "LI") {
        // console.log('saved')
        e.target.classList.toggle('check');
        saveTask();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
})


function saveTask() {
    localStorage.setItem('data',list_container.innerHTML);
}

function showTask() {
    list_container.innerHTML=localStorage.getItem('data')
}

showTask();
