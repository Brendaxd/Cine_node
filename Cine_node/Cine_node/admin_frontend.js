class Administrador {
    constructor(_id, 
    NOMBRE,
    CLAVE,
    EMAIL,
    IMAGEN,
    ESTADO,
    SALT
            ) 
    
    {
        this._id=_id;
        this.NOMBRE =NOMBRE;
        this.CLAVE=CLAVE;
        this.EMAIL=EMAIL;
        this.IMAGEN=IMAGEN;
        this.ESTADO=ESTADO;
        this.SALT=SALT;
   }

    Guardar() {
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
       
            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/nuevoadm');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else
                         {
                            reject(xhr); 
                         }
                };

                xhr.send(JSON.stringify(objetoaenviar));            

            }
            catch(err) {
                reject(err.message);

            }
        });
    }
    
    Login() {
       var objetoaenviar = this;
       // Return a new promise.
       return new Promise(function(resolve, reject) {
       // Do the usual XHR stuff
       
            try {
           
               var xhr = new XMLHttpRequest();
               xhr.open('POST', 'http://localhost:8080/api/loginadm');
               xhr.setRequestHeader('Content-Type', 'application/json');
               xhr.onload = function() {
                   
                   if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                   }
                    else
                        {
                            reject(xhr); 
                        }
               };
               xhr.send(JSON.stringify(objetoaenviar));     
          
           }
           catch(err) {
               reject(err.message);
           }
        });
    }   
    

let imagenenbase64 = "";
$("#imgpeli").change(function(){
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imagenenbase64=e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}



//function botonguardarclick()
//{
    //var peliculainstanciada = new _Pelicula(0,
    //document.getElementById("nombre").value,
    //document.getElementById("duracion").value,
    //document.getElementById("genero").value,
    //document.getElementById("idiomaaudio").value,
    //document.getElementById("idiomasub").value,
    //document.getElementById("sipnosis").value,
    //document.getElementById("clasificacion").value,
    //document.getElementById("precio").value,
    //document.getElementById("hora").value,
    //document.getElementById("fecha").value,
    //document.getElementById("minuto").value,
    //asientos,
    //imagenenbase64,
    //document.getElementById("estado").value);
    
    //peliculainstanciada.Guardar().then(function(response) {
        //console.log("Success!", response);
        //alert("Guardado con exito");
    //}, 
    //function(error) {
        //console.error("Failed!", error);
        //alert("Error " + error);
    //});
//}