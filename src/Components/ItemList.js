
import Item from "./Item"



const product = [
    {
        id:1,
        nombre:"Imperial",
        precio:"$",
        stock:100,
        descripcion:"Imperial Edicion Especial Amber Larger",
        imagen:"https://club23.com.ar/wp-content/uploads/2021/08/ImperialRoja.jpg",
    },
    {
        id:2,
        nombre:"Imperial Apa",
        precio:"$",
        stock:100,
        descripcion:"Cerveza Imperial APA: APA es una Pale Ale de origen americano hecha con 100% de lúpulo Cascade y maltas especiales como Munich Caramelo y algo de Tostada que le da cuerpo a la cerveza y un equilibrio perfecto.",
        imagen:"../../Productos/imperial.jpg",
    },
      {
        id:3,
        nombre:"Imperial Golden",
        precio:"$",
        stock:100,
        descripcion:"Edición limitada. una cerveza con sabor equilibrado, ligera y fácil de tomar.Una lager ideal para esos momentos en los que querés disfrutar de un sabor más suave sin resignar calidad y sabor",
        imagen:"https://ardiaprod.vteximg.com.br/arquivos/ids/215211-1000-1000/Cerveza-Imperial-Golden-lata-473-Ml-_1.jpg?v=637713698773570000",
    },
    {
        id:4,
        nombre:"Imperial Ipa",
        precio:"$",
        stock:100,
        descripcion:"La India Pale Ale (IPA), es un estilo de cerveza proveniente de Inglaterra con gran carácter, que se ve reflejado en su mayor graduación alcohólica y mayor amargor que las cervezas rubias tradicionales. La graduación alcohólica es de 6% Vol. La desarrollada por Imperial contiene doble Lúpulo: Mandarina Bavaria y Cascade.",
        imagen:"../Productos/imperialipa.jpg",
    },
    {
        id:5,
        nombre:"Patagonia Kune",
        precio:"$",
        stock:100,
        descripcion:"La Patagonia Pale Ale presenta una combinación de maltas especiales, que da lugar a una cerveza de color dorado bronce brillante de leve amargor y cuerpo medio. Cerveza muy balanceada y fácil de tomar.",
        imagen:"../Productos/patagonia.jpg",
    }
    
];



function ItemList(){
    return(
        <>
        {
            product.length > 0
            ? product.map(item => <Item key={item.id} 
                                        nombre={item.nombre}
                                        price={item.precio}
                                        stock={item.stock}
                                        descripcion={item.descripcion}
                                        image={item.imagen}/> )
            : <p>Cargando</p>

            }
       
            </>
                )
}

export default ItemList

