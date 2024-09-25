import { useState, useEffect } from "react"
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore"
import { db } from "../src/services/config"

const Productos = () => {
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        const misProductos = query(collection(db, "inventario"));
        //para filtrar
        //const misProductos = query(collection(db, "inventario"), where("precio", "<", 500))

        getDocs(misProductos)
            .then(respuesta=>{
                setProductos(respuesta.docs.map((doc)=>({id:doc.id, ...doc.data()})))
            })
    },[productos])
    const descontarStock =async(producto)=> {
        const productoRef = doc(db, "inventario", producto.id);
        const nuevoStock = producto.Stock - 1;

        await updateDoc(productoRef, {stock: nuevoStock})
    }

    return (
    <>
        <h2>Mis productos desde firebase</h2>
        <div>
            {
                productos.map(producto=>(
                    <div key={producto.id}>
                        <h3>{producto.Nombre}</h3>
                        <p>Precio: {producto.Precio}</p>
                        <p>Stock: {producto.Stock}</p>
                        <button onClick={()=>descontarStock(producto)}>Comprar</button>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Productos