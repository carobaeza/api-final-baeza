import * as express from "express";
import { envioSchema } from "../schemas/envio";


const router = express.Router();



router.get("/envio", async (req, res, next) => {
  try {
    let envios = await envioSchema.find();
    res.send(envios);
  } catch (err) {
    throw err;
  }
});

router.get("/envioId/:id", async (req, res) => {
  let idEnvio = req.params.id;
  try {
    let envios = await envioSchema.findById(idEnvio);
    res.send(envios);
  } catch (err) {
    throw err;
  }
});



router.post('/envio', async (req, res, next) => {
  const envio = await new envioSchema(req.body);
  envio.save((err, envio) => {
      try{
          res.json(envio);
      } catch (err){
          return err;
      }
});
  
});


router.put("/envio/:_id", async (req, res, next) => {
  try {
    const envio = await envioSchema.findByIdAndUpdate(req.params._id, req.body);
    res.send(envio)
  } catch (err) {
    throw err;
  }
});


router.delete('/envio/:_id', async (req, res, next) => {
let envio = await envioSchema.findByIdAndRemove(req.params._id, (err, envio) => {
      
      try {
          console.log('Envio Borrado: ', envio);
      }   catch (err) {
          throw err;
      }
});
});

export = router;