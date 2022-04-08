import ItemCount from "./ItemCount"



function ItemListContainer(greeting){

    const onAdd=(cantidad)=>{
        alert(`La cantidad de productos seleccionado es: ${cantidad}`)
    }
    
    return(
        <>
        <p>
        {greeting.greeting}
        </p>
        <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
      
        </>
    )
}

export default ItemListContainer