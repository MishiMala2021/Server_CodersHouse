//IMPORTAMOS FS PARA MANEJO DE ARCHIVOS
const fs = require("fs");

class Contenedor{

    constructor(nameFile){
        this.nameFile = nameFile;
    }

    //LEER ARCHIVO => Devuelve todo lo que hay en el archivo
    async readFile(){
        console.log(this.nameFile);
        try{
            const data = await fs.promises.readFile(`./${this.nameFile}`, "utf-8");
            return data;
        }catch{
            console.log('Ocurrio algo inesperado, en readFile');
        }
    }


    //MOSTRAR TODOS LOS PRODUCTOS
    async getAll(){
        try{
            const products = await this.readFile();
            return console.log(products);

        }catch{
            console.log('Ocurrio algo inesperado, en getAll');
        }
    }

    //OBTENER PRODUCTO
    getById = async(id)=>{
        try{
            if(fs.existsSync(this.nameFile))

            product = await fs.promises.readFile(this.nameFile, "utf8");

            if(product){
                const product_a = JSON.parse(products)
                const product_a1 = product.find(item=>item.id === id);
                return product
                return "el archivo esta vacio"
            }
        } catch(error){
            console.log(error)
        }
    }

    //BORRAR PRODUCTO
    async deleteProduct(id){

    }

    //BORRAR TODO
    async deleteAll(){

    }

}

const producto = new Contenedor("productos.txt");

async function execute (){

    await producto.getAll();

}

execute();