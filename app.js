const inpKey =document.getElementById('inpKey');

// const inpValue = document.getElementById('inpValue');

const btnInsert = document.getElementById('btnInsert');

const lsOutput = document.getElementById('lsOutput');

const clear = document.getElementById('clear');



btnInsert.onclick = ()=>{ //INSERT DATA IN LOCAL STORAGE
          
    if(inpKey.value != ""){
        localStorage.setItem(inpKey.value, inpKey.value);
        location.reload();
    }   
}



 for(let i = 0;i < localStorage.length; i++){    //PRINT DATA FROM LOCAL STORAGE.
        const key = localStorage.key(i);
        // const value = localStorage.getItem(key);

       const item = document.createElement('div');  //CREATE A DIV INSIDE lsOutput
       item.innerHTML = key;
       item.id = "item";

       const del = document.createElement('button'); //CREATE   DELETE BUTTON INSIDE ITEM
       del.innerHTML = "delete"
       del.id = key;
       item.appendChild(del);
       

       lsOutput.appendChild(item);
    }
    




clear.onclick = ()=>{   //DELETE DATA FROM LOCAL STORAGE .
    localStorage.clear();
    location.reload();
}



const Item = document.getElementById('lsOutput'); //DELETE DEDICATED ITEM 
 Item.onclick = (e)=>{

    let temp = e.path[0].id;
    localStorage.removeItem(temp);
    location.reload();
}