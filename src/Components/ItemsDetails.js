
import Item6 from "./Item6"

//const {product} = require ('../Productos')



 function ItemDetails({product}){
    
    const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
    }
    
    console.log(product, "soy el item list")


    var results = product.filter(function (id)
    
    {
         return  product.id === '4' 
              ?
                <Item6></Item6>
           
                :<p>Cargando</p>
 
        });
   console.log(results)
}

export default ItemDetails





