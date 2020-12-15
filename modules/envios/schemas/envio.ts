import {Schema, model} from 'mongoose';

const schemaEnvio = new Schema({
    nombre: String,
    direccion:String,
    destinatario:String,
    direDestinatario:String,
    descripcion:String,
    fecha:Date

});
 
export let envioSchema= model('schemaEnvio', schemaEnvio, 'envios');
