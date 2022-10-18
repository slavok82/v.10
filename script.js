(() => {  
  const todo = document.getElementById('todo');
  const inputFirst =document.getElementById('inputFirst');
  const inputSecond =document.getElementById('inputSecond');
  const button = document.getElementById('btn');
  
  let i = 0;

  button.addEventListener('click', () => {    
    const divBox = document.createElement('div'); 

    const newSpan = document.createElement('span');
    newSpan.innerText = 'ToDo' + ++i;
    todo.append(newSpan);
    console.log(newSpan);

    const title = document.createElement('h2');
    title.innerText = inputFirst.value;  
    
    const description = document.createElement('p');
    description.innerText = inputSecond.value; 
    
    const del = document.createElement('button');
    del.innerText ='delete';
    
    del.addEventListener('click', () => {
      divBox.remove()
    }); 

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');

    console.dir(inputFirst.value);
    console.dir(inputSecond.value);    
    divBox.append(newSpan, title, description, check, del);
    todo.append(divBox);

    inputFirst.value ='';
    inputSecond.value ='';
  });
})();


