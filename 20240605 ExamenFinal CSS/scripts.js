function creaContadorChar(nombreOpcion){
    // cada opcion tendrá un Listener sobre la longitud del texto, la funcion recibe un string

    let laOpcion = "f"+nombreOpcion;
    console.log ("creando listener para " + laOpcion);
    document.getElementById(laOpcion).addEventListener('keyup', ()=>{

            let laOpcion25 = laOpcion + "25";
            let laOpcionError  = laOpcion + "Error";
            let laOpcionContador = laOpcion + "Contador";
            console.log (laOpcion25, laOpcionError, laOpcionContador);

            let texto = document.getElementById(laOpcion).value;
            let contador = texto.length;
            console.log ( "desde UP " + laOpcion + ", desc:" + texto + "cont:" + contador   );
            if (contador > 25) {
                
                document.getElementById(laOpcionError).innerHTML = "El campo no puede tener mas de 25 caracteres";
                document.getElementById(laOpcion).value = window[laOpcion25];
                document.getElementById(laOpcionContador).innerHTML = "25/25";
                
            } else {
                
                document.getElementById(laOpcionContador).innerHTML = contador +"/25";
                
            };
            console.log ( "desde UP,"+ laOpcion + ", desc:" + texto + "cont:" + contador   );
    }); 


    document.getElementById(laOpcion).addEventListener('keydown', ()=>{
        let texto = "";
        let contador = 0;
        if (document.getElementById(laOpcion).value != null ) {
            texto = document.getElementById(laOpcion).value;
            contador  = texto.length;
        };
        console.log ( laOpcion + "desde Down, desc:" + texto + "cont:" + contador   );

        if (contador == 25) {
            campo = laOpcion +"25";
            window[campo] = texto;
        }
        }); 
}; // fin de funcion de creacion de listeners

function añadeOpcion(nombreOpcion) { 
   
    /* Debería generar el codigo equivalente a 
    <div>
    <label> OpcionN:</label>
    <input  id="fOpcionN" name="fOpcionN">
    <span id="fContadorN" ></span>
    <span id="fdescripcionErrorN""></span> 
    </div>*/

    // insertaré las nuevas opciones antes del boton
    
    let nuevaOpcion = document.createElement("div");
    nuevaOpcion.id="fdiv" + nombreOpcion;
    nuevaOpcion.classList.add("form-floating","mb-3","mt-3");
    const referenceElement = document.getElementById("fButtonMas");
    const parentElement = referenceElement.parentNode;
    parentElement.insertBefore(nuevaOpcion, referenceElement);

    let elInput =document.createElement("input");
    elInput.id = "f" + nombreOpcion;
    elInput.name = "n" + nombreOpcion;
    elInput.placeholder="Introduzca Opcion";
    elInput.className="form-control";
    elInput.size = 40;
    nuevaOpcion.appendChild (elInput);
    

    let nuevaLabel = document.createElement("label");
    nuevaLabel.innerHTML= nombreOpcion;
    nuevaLabel.setAttribute('for', "f"+ nombreOpcion);
    nuevaOpcion.appendChild (nuevaLabel);

    let elSpan = document.createElement("span");
    elSpan.id = "f" + nombreOpcion +"Contador";
    nuevaOpcion.appendChild (elSpan);

    elSpan = document.createElement("span");
    elSpan.id = "f" + nombreOpcion +"Error";
    nuevaOpcion.appendChild (elSpan);
};

function añadeButtonMas(){
    let button = document.createElement("a");
    button.innerHTML = "Agregar";
    button.classList.add("btn","btn-primary","btn-sm","btn-dark");
    button.id= "fButtonMas";
    button.name= "nButtonMas";
    button.type= "button";
    button.onclick = ()=>{
        
        const divOpciones = document.getElementById("fOpciones");
        const inputs = divOpciones.querySelectorAll('input');
        if (inputs.length < 3 ) {
            añadeOpcion("Opcion3");
            creaContadorChar ("Opcion3");
        }else{
            if (inputs.length < 4 ) {
            añadeOpcion("Opcion4");
            creaContadorChar ("Opcion4");
            } else {
                if (inputs.length < 5 ) {
                        alert("No se pueden agregar mas opciones");
                }
            }
        };
    };
    document.getElementById("fOpciones").appendChild(button);
};

function borraOpciones() { //
        var wmodal = document.getElementById("wmodal");
        console.log ( wmodal);
        wmodal.showModal();
        if (!wmodal.open) { 
            console.log("Dialog close");
            wmodal.open();
        } else {
            console.log("Dialog is open");
        };

        // lanza escuchas sobre los botones 
        var cancelButton = document.getElementById("cancel");
        var confirmButton = document.getElementById("confirm");

        confirmBoton.addEventListener("click", function () {
            var divOpciones = document.getElementById("fOpciones");
            fOpciones.innerHTML="";
        });
  
        // Form cancel button closes the dialog box
        cancelBoton.addEventListener("click", function () {
            wmodal.close();
         });
        
    };

function generaEncuesta (){

// detecta si ya se han introducido opciones
    const divOpciones = document.getElementById("fOpciones");
    const inputs = divOpciones.querySelectorAll('input');
    if (inputs.length < 2 ) { // añade dos opciones y boton

// validacio fpregunta
    let fpregunta = document.getElementById("fpregunta").value.trim()
    if(fpregunta.length==0){ // obligatorio
            fpreguntaError.innerHTML = "Una encuesta sin pregunta parece muy abierta. Indique por favor la pregunta"
            error = true
        }else{
            fpreguntaError.innerHTML = "";
      
// muestra los dos primeros campos de entrada para las opciones 1 y 2
// y un boton para añadir dos opciones más
            añadeButtonMas();
            añadeOpcion ("Opcion1");
            añadeOpcion ("Opcion2");
            creaContadorChar ("Opcion1");
            creaContadorChar ("Opcion2");
        };

    }else{
        borraOpciones();
    };

};

function registraBDEncuesta (){
// Aquí iría el código para enviar el formulario
    alert("Encuesta registrada");
};

function creaModales (){
/* Tiene que crear una estructura modal como esto:
    <dialog id="iconModal" close>
        <form method="dialog">
            <menu id="menuIconModal">
                <button id="cancelBoton" type="reset">Cancel</button>
            </menu>
        </form>
    </dialog> */
    

let data = {
            "Emoticonos y personas": ["😀", "😁", "😂", "🤣"],
            "Animales y naturaleza": ["🐶", "🐱", "🐭", "🐹"],
            "Comida y bebida": ["🍏", "🍎", "🍐", "🍊"]
            };
        

for (const category in data) { // para cada categoria se construye un modal

    const elDialog = document.createElement('dialog');
    elDialog.id = category.slice(0,3) + 'Modal';
    elDialog.setAttribute('close', close);

    const form = document.createElement('form');
    form.method = 'dialog';

    const menu = document.createElement('menu');
    menu.id = 'menu' + category.slice(0,3) + 'Modal';
    menu.classList.add("iconoModal","nav-link","icon-container");
           
    const ul = document.createElement('ul');
    for (const emoji of data[category]) {
        const li = document.createElement('li');
        li.textContent = emoji;
        li.classList.add("icon-list");

        // para cada Icono crea un listener seleccionado
        li.onclick = function() {
            const unspan = document.createElement('li');
            unspan.textContent = emoji;
            unspan.innerHTML = li.textContent;
            document.getElementById("selectedIconContainer");
            selectedIconContainer.appendChild(unspan);
            elDialog.close();
        }
        ul.appendChild(li);
        };
    
    const cancelBoton = document.createElement('button');
    cancelBoton.id = 'cancelBoton' + category.slice(0,3) ;
    cancelBoton.type = 'reset';
    cancelBoton.textContent = 'x';
    
    menu.appendChild(cancelBoton);
    menu.appendChild(ul);
    form.appendChild(menu);
    elDialog.appendChild(form);
    
// Se insertaran los modales antes del Wmodal (este sirve para confirmar el  borrado de encuesta) 
// sera el elemento de referencia
    
    let referenceElement = document.getElementById("wmodal");
    let parentElement = referenceElement.parentNode;
    parentElement.insertBefore(elDialog, referenceElement);
    

// Ahora crea un li en el div 'contIconos' para invocarlos.
// Como 'Icono' utiliza el primero  que aparece en cada una de las lista de 'data'

    let elSpan = document.createElement("span");
    elSpan.id = "span" + category.slice(0,3);
    elSpan.classList.add("iconoModal","nav-link");
    elSpan.textContent = data[category][0];

    elSpan.addEventListener("click", function(){  

        console.log ( elDialog);
         elDialog.showModal();
        if (!elDialog.open) { 
            
            console.log("Dialog close");
            elDialog.open();
        } else {
            console.log("Dialog is open");
        };

        // El boton de cancelar cierra la ventana de dialogo
        cancelBoton.addEventListener("click", function () {
            console.log (this.id);
            elDialog.close();
         });
        
        });

    
    let elLi = document.createElement("li");
    elLi.classList.add("nav-item");
    elLi.id= "fButton"+ category.slice(0,3) ;
    elLi.name= "nButton" + category.slice(0,3) ;
    elLi.appendChild (elSpan);

// Se insertaran en la barra de Nav, antes de los botones de Generar encuesta,
// El boton de 'generar encuesta' es el elemento de referencia
    
    referenceElement = document.getElementById("liGeneraEnc");
    parentElement = referenceElement.parentNode;
    parentElement.insertBefore(elLi, referenceElement);

    };


}; 

document.addEventListener("DOMContentLoaded", function() {  // primera carga de DOM  
    // variables para control de entrada de texto
        window.fOpcion125 ="";
        window.fOpcion225 ="";
        window.fOpcion325 ="";
        window.fOpcion425 ="";


   creaModales(); // Crea Modales para Iconos

// Lanza listener para postear encuesta   
    const emiForm = document.getElementById("miForm");
    console.log (emiForm);

    emiForm.addEventListener('submit', (event)=>{  //validación on submit de la encuesta
        let error= false;

        //interrumpe el funcionamiento defecto del evento y para el envio del formulario
        event.preventDefault();

        // validaciones fpregunta
        let vpregunta = document.getElementById("fpregunta").value.trim()
        if(vpregunta.length==0){ // obligatorio
                fpreguntaError.innerHTML = "Una encuesta sin pregunta parece muy abierta. Indique por favor la pregunta"
                error = true
        }else{
                fpreguntaError.innerHTML = ""
                
        };

// Selecciona el div con el atributo name="fOpciones"
        const divOpciones = document.getElementById("fOpciones");

// Selecciona todos los inputs dentro del div seleccionado
        const inputs = divOpciones.querySelectorAll('input');

let encuesta = {
    nombre: vpregunta,
    Opcion1: {txt: "", vot: 0},
    Opcion2: {txt: "", vot: 0},
    Opcion3: {txt: "", vot: 0},
    Opcion4: {txt: "", vot: 0}
};

// Las dos primeras opciones son obligatorias
        inputs.forEach((input, index) => {
            let texto = input.value.trim()
            var elIdconF = input.id;

            if((texto.length==0) && ((index == 0)||(index == 1))){
                let elSpanid = elIdconF +"Error";
                let elSpan = document.getElementById(elSpanid);
                elSpan.innerHTML = "La opción es obligatoria";
                
                error = true;
            }else{
                console.log (encuesta[index]);
                var elId = elIdconF.slice(1);
                console.log(elId);
                encuesta[elId].txt = texto;
            
            };
        });

// No hay que verificar que la longitud sea mayor de 25 caracteres porque ya se limita la entrada en el campo  
// Si no hay ningun error enviaría el formulario
        if(!error) {

            console.log(encuesta);
            registraBDEncuesta();

            // limpia pantalla    
            document.getElementById("fpregunta").value = "";
            document.getElementById("fOpciones").innerHTML="";
            document.getElementById("selectedIconContainer").innerHTML="";

        };
            
    });
});