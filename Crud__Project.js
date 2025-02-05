items=[];

        var fname = document.getElementById('crud');
        fname.addEventListener('submit',(e)=>{
            e.preventDefault();
            var iname = document.getElementById('iname').value;

            console.log(iname);
            items.push(iname);
iname.value='';
            showLists();
            
        })


        var lists = document.getElementById('items');
        function showLists(){

            lists.innerHTML =" "
            items.forEach((si,index) => {
                let li = document.createElement('li');
                // li.innerHTML='';
                li.innerHTML = `${si} <button onclick=edit(${index})>Edit</button> <button onClick=delval(${index})>delete</button> `;
            console.log(si,index);
            lists.appendChild(li);
            });
        }


        function edit(i){
items[i]=''
var data = prompt(items[i]);
if(data !== ''){
    items[i]=data;
    showLists();
}
        }
        function delval(i){
console.log(i);
items.splice(i,1)
showLists();
        }