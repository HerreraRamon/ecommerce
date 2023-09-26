//import Institutos from '../models/Institutes';
//import {OK, FAIL, BITACORA,DATA, AddMSG } from '../../middlewares';


export const getInstitutesAll = async() => {
    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = "Extraer todos los institutos";
        data.method = "GET";
        data.api = "/institutes";
        data.process = "Extraer todos los Institutos de la coleccion de cat_institutos";

        const InstitutesAll = await Institutos.find()
        .then((instutes) => {
            if (institutes) {
                if(institutes.length==0){
                    data.status = 404;
                    data.messageDEV = "La base de datos <<NO>> tiene Institutos configurados";
                    throw Error(data.messageDEV);
                }
                return institutes;

            }
            data.status = 200;
            data.messageUSR = "La extracción de los Institutos <<SI>> tuvo exito";
            data.dataRes = InstitutesAll;

            bitacora = AddMSG (bitacora,data,'OK',200,true);

            return OK(bitacora);

        })

    }catch (error){
        if(!data.status) data.status = error.statusCode;
        let {message} = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.Res = error;
        data.messageUSR = "La extracción de los Institutos <<SI>> tuvo exito"
        bitacora = AddMSG(bitacora,data,'FAIL');

        return FAIL(bitacora);
        
    }


    finally{
        //Haya o no haya error siempre ejecuta aqui.
    }

}