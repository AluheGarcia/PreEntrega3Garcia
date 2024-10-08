import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

    const manejadorFormulario = (e) => {
        e.preventDefault()
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos")
            return;
        }


        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {

                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id)
                        vaciarCarrito();
                        setNombre("")
                        setApellido("")
                        setTelefono("")
                        setEmail("")
                        setEmailConfirmacion("")
                    })
                    .catch(error => {
                        console.log("Error al crear la orden", error)
                        setError("Se produjo un error al crear la orden!")
                    })

            })
            .catch((error)=>{
                console.log("No se pudo actualizar el stock", error)
                setError("No se puede actualizar el stock")
            })

    }

    return (
        <div>
            <h2>Checkout: </h2>

            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre}</p>
                            <p>{producto.item.precio} x {producto.cantidad}</p>
                            <p>{producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                    <br /><br />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} value={apellido} />
                    <br /><br />
                </div>

                <div>
                    <label htmlFor="celular">Celular</label>
                    <input type="text" id="celular" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor=""> Email Confirmacion </label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
                </div>

                {
                    error && <p style={{ color: "red" }}>{error}</p>
                }
                <button type="submit">Confirmar Compra</button>
                {
                    ordenId && (
                        <strong>¡Gracias por tu compra! Tu num de orden es: {ordenId}</strong>
                    )
                }


            </form>
        </div>
    )
}

export default Checkout