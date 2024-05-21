
let inputbox = document.querySelector('#inputtask');
let button = document.querySelector('#btn');

let taskList = document.querySelector('#tasklist');

let workList = document.querySelectorAll('.workList');


let completeList = document.querySelector('.completedtask');

let completeLi = document.querySelectorAll('.complt');


button.addEventListener('click', () => {

    if (inputbox.value == '') {
        alert('Enter Your Task');
    }
    else {
     event.preventDefault();
    let li = document.createElement('li');

    li.className = 'workList';
    let liValue = inputbox.value;

    li.innerHTML = liValue;

    taskList.append(li);

    inputbox.value = '';
    }


})

// const moveToComplete = (event) => {
    

// }




taskList.addEventListener('click', (event) => {
    

    newLi = document.createElement('li');
    newLi.className = 'complt';

    newLi.innerHTML = event.target.innerHTML;

    completeList.append(newLi);


   //moveToComplete(event);

   event.target.remove();

   
})











completeList.addEventListener('click', () => {
    console.log(completeLi);

    console.log(event.target.matches('.complt'));

    event.target.remove();
})









