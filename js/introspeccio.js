function analitzarForms() {
    let forms = window.document.forms;
    console.log(forms);
    let form; 
    for (let i = 0; i < forms.length; i++) {
      form = forms[i];
      console.log(forms[i]);
      document.getElementById("contingut").innerHTML+="<p>FORMS: "+form.id+" "+form.action+" method:"+form.method;
      let elements = form.elements;
          for (let j = 0; j < elements.length; j++) {
              let element = elements[j];
              document.getElementById("contingut").innerHTML+="<br>elements: "+element.name;
              
              console.log(element.name);
              console.log(element.value);
          }
          
    }
    document.getElementById("contingut").innerHTML+="<hr>";

}

function analitzarEnllacos() {
    let links = window.document.links;
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      let href = link.getAttribute('href');
      console.log(link.textContent);
  
      document.getElementById("contingut").innerHTML+="<p>LINKS: "+href+" "+link.textContent;
    }
    document.getElementById("contingut").innerHTML+="<hr>";

}

function analitzarImatges() {
    let images = window.document.images;
    for (let i = 0; i < images.length; i++) {
      let image = images[i];                
      let src = image.getAttribute('src');
  
      document.getElementById("contingut").innerHTML+="<p>IMATGES: "+src;
    }
    document.getElementById("contingut").innerHTML+="<hr>";
}

function analitzarDocument() {
    let url = window.document.URL;
    document.getElementById("contingut").innerHTML="<p>URL: "+url;    
}

function introspeccio() {
    analitzarDocument();
    analitzarEnllacos();
    analitzarImatges();
    analitzarForms();
}

function clearIntrospeccio() {
    document.getElementById("contingut").innerHTML="";    
}