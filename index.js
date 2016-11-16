function Crea() {
    
       document.getElementById('nome').style.display= 'block';
       document.getElementById('nome').value= "Insert Element";
       document.getElementById('quantità').style.display= 'block';
       document.getElementById('quantità').value= "Insert Element";
       document.getElementById('Update').style.display= 'block';
       document.getElementById('limite').style.display= 'block';    
       document.getElementById('limitebutton').style.display= 'block';
       
       
   
    
}
function Aggiorna(){
    var n1 = document.getElementById('nome').value;
    var n2 = document.getElementById('quantità').value;
    console.log(n1);
    console.log(n2);
    var lim = document.getElementById('limite').value;
    var x3 = document.getElementById('Tabela');
    var count = parseInt(0);
    var soglia = parseInt(n2);
    for(i=0;i<x3.rows.length;i++){
        console.log("i");
        console.log(i);
        soglia = parseInt(soglia)+parseInt(x3.rows[i].cells[1].innerHTML); 
         if(n1 == x3.rows[i].cells[0].innerHTML){
              
             
                if(soglia <= parseInt(lim)){
                    
                    x3.rows[i].cells[1].innerHTML=parseInt(n2)+parseInt(x3.rows[i].cells[1].innerHTML);
                    console.log("row aggiornato");
                    console.log(x3.rows[i].cells[1].innerHTML);
                }
                if(soglia >= parseInt(lim)){
                    
                    window.alert("Error");
                    x3.rows[i].cells[1].innerHTML=parseInt(n2)+parseInt(x3.rows[i].cells[1].innerHTML);
                    
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
       document.getElementById('limitebutton').value="Limite";
       
    }
function CambiaStato(){
    
    document.getElementById('limitebutton').value="Cambiato limite con successo";
    
}







    
