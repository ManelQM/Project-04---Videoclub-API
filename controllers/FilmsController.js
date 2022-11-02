router.get('/', async (req, res) => {

    try {

      let resultado = await Film.findAll();
        
        if(resultado[0].id !== undefined){
            res.send(resultado)
        };
    } catch (error) {
        console.log(error);
    };
})

PeliculaController.getAll = (req, res) => {

    peliculas.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a las películas."
        });
      });
  };
