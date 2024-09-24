import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)

  return (
    <div>
      <Link to="/cart" className='Carrito'>
      <ShoppingCartIcon sx={{ fontSize: 50 }} ></ShoppingCartIcon>
      </Link>
        {
          cantidadTotal > 0 && <span>{cantidadTotal}</span>
        }

        
    </div>
  )
}

export default CartWidget