function Crea() {
    
       document.getElementById('nome').style.display= 'block';
       document.getElementById('quantità').style.display= 'block';
       document.getElementById('Update').style.display= 'block';
       document.getElementById('limite').style.display= 'block';    
       document.getElementById('limitebutton').style.display= 'block';
    
    document.getElementById('Update').addEventListener('click', function() {
    Aggiorna();
});
    function Aggiorna(){
    var n1 = document.getElementById('nome').value;
    var n2 = document.getElementById('quantità').value;
    var lim = document.getElementById('limite').value;
    var x3 = document.getElementById('Tabela');
    var count = parseInt(0);
    
   for(i=0;i<x3.rows.length;i++){
               if(n1 == x3.rows[i].cells[0].innerHTML){
                var soglia = parseInt(n2)+parseInt(x3.rows[i].cells[1].innerHTML);   
                
                if(parseInt(soglia) <= parseInt(lim)){
                
                x3.rows[i].cells[1].innerHTML=parseInt(n2)+parseInt(x3.rows[i].cells[1].innerHTML);
                }
                else{
                    
                    window.alert("Error");
                    
                }   
        }
    
    
        }
    for(i=0;i<x3.rows.length;i++){
               if(n1 != x3.rows[i].cells[0].innerHTML){
                count++;
                if(count==x3.rows.length){
                 var row = x3.insertRow(x3.rows.length);
                 var cell1 = row.insertCell(0);
                 var cell2 = row.insertCell(1);
                 cell1.innerHTML = n1;
                 cell2.innerHTML = n2;
               }
        }
    
    
        }
        
       document.getElementById('nome').style.display= 'none';
       document.getElementById('quantità').style.display= 'none';
       document.getElementById('Update').style.display= 'none';
       document.getElementById('limite').style.display= 'none';    
       document.getElementById('limitebutton').style.display= 'none';    
        
        /*
        Create a web-page to manage a warehouse.

Once loaded for the first time, the page should visualize a table which shows the content of the warehouse, with the name of the items and the quantity stored, and a button that can be used to order other items. If the button is clicked, two input fields, with relative descriptions, and another button has to appear. Those input fields have to be used to insert the name of 1 item to be ordered and the quantity ordered. By clicking the second button the order is placed, and the table has to updated with the new item and the respective ordered quantity. If the item already exists in the table, its quantity has to be updated. Once the second button is clicked, the input fields, descriptions and the second button should be hidden. For the next order the input fields should be empty.

 

New requirements: the page should give the possibility to set a maximum amount of item to be stored. An input field will show the limit, set to 30. The user should be able to change the limit and set it by clicking on a button.  Every time the user clicks on a button (all buttons) the limit is checked and, if the number of items in the warehouse is larger than the limit, a warning should appear. 
        */
    
    
    }


    
} 