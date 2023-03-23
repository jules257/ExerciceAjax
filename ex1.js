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
        name = encodeURIComponent(document.getElementById('name').value);
        xmlHttp.open('GET','ex1.php?name='+ name, true);
        xmlHttp.onreadystatechange = handleResponse;
        xmlHttp.send(null);

    }else{
        setTimeout('process()',1000)
    }
}
function   handleResponse(){
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
         reponse = xmlHttp.responseXML;
         xmlRoot = reponse.documentElement;
         message = xmlRoot.firstChild.data;
         document.getElementById('answer').innerHTML = '<span style="color: red;">'
                                                       + message +  '</span>';
         setTimeout('process()', 1000);                                                                          
        } else{
            alert('erreur au niveau de la lecture');
        }
    }
}
