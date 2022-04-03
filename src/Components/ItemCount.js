import { useState } from "react";

function ItemCount(props){



    const [rate, setRate] = useState(1);

    const increment = () =>{
        if (rate <5){
            setRate(rate+1);
        }
    }

    const decremento = () =>{
        if(rate <=5 && rate >1){
            setRate(rate-1);
        }
    }

    return(
        <>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
             <button class="btn btn-primary me-md-2" type="button" onClick={increment}>+</button>
             <p>Cantidad: <span>{rate}</span></p>
             <button class="btn btn-primary" type="button" onClick={decremento}>-</button>
            <button class="btn btn-primary" type="button">Stock Disponible: {props.stock}</button>
         </div>
        </>

    )
}

export default ItemCount;