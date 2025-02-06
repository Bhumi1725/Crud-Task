items = [];

var fname = document.getElementById('crud');
fname.addEventListener('submit', (e) => {
    e.preventDefault();
    var iname = document.getElementById('iname').value;

    console.log(iname);
    items.push(iname);
    iname.value = '';
    showLists();

})


var lists = document.getElementById('items');
function showLists() {

    lists.innerHTML = " "
    items.forEach((si, index) => {
        let li = document.createElement('li');
        
        li.innerHTML = `<input type="checkbox" id="check${index}" onClick=edit(${index})> <span id="span${index}"> ${si} </span>  <button class="btndel" onClick=delval(${index})><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button> `;
        lists.appendChild(li);
    });
}


function edit(i) {
    let checkBtn = document.getElementById(`check${i}`);
    let spanText = document.getElementById(`span${i}`);

    if(checkBtn.checked){
        spanText.style.textDecoration = 'line-through';
    }
    else{
        spanText.style.textDecoration = 'none';
    }
    
}
function delval(i) {
    console.log(i);
    items.splice(i, 1)
    showLists();
}