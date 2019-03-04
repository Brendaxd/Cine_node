var controllerpelicula = require('./controllerpelicula.js');
module.exports = function(app){
	var clasepelicula = new controllerpelicula();
	app.post('/api/nuevapelicula',clasepelicula.Guardar);
	app.post('/api/modificapelicula',clasepelicula.Modificar);
	app.post('/api/eliminapelicula',clasepelicula.Eliminar);
	app.post('/api/seleccionapelicula',clasepelicula.Seleccionartodos);
	app.post('/api/seleccionapeliculaporfecha',clasepelicula.Seleccionarporfecha);
	app.post('/api/seleccionarpeliculaporid',clasepelicula.Seleccionarporid);
	app.post('/api/seleccionapeliculapornombre',clasepelicula.Seleccionarpornombre);
    
    
    var claseadm = new controllerAdministrador();
	app.post('/api/nuevoadm', claseadm.Guardar);
	app.post('/api/loginadm', claseadm.Login);
    
    
	app.get('*',function(req,res){
		 res.sendfile('./login.html');
	});
};