var xmlHttp = createXmlHttpRequestObject();
function createXmlHttpRequestObject(){
 var xmlHttp;
 try{
xmlHttp = new XMLHttpRequest();
 } catch(e) {
    try{
        xmlHttp = new ActiveXObject(Microsoft.XMLHTTP);
 } catch(e) {
    alert('erreur lors de la création XMLHttpRequest');


 } 
}
if(!xmlHttp)
   alert('erreur lors de la création XMLHttpRequest'); 
else 
return xmlHttp;


}

function process(){
    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
        nam = encodeURIComponent(document.getElementById('name').value);
        xmlHttp.open('GET','ex1.php?name='+ nam, true);
        xmlHttp.onreadystatechange = handleResponse;
        xmlHttp.send(null);

    }else{
        setTimeout('process()',1000)
    }
}