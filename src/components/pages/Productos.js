import React from 'react'
import { data } from '../../data/productos'
import Cards from '../Cards/Cards'

export const Productos2 = () => {
  return (
    <div className='container-fluid'>
    <h3 className='text-center mt-5 text-uppercase'>Productos 0000</h3>
    <div className='container py-4'>
      <div className='row'>
        {data.productos.map((item, index) => {
          return (
            <Cards img={item.img} titulo={item.nombre} text={item.text} precio={item.precio} key={index} />

          )
        })}
      </div>
    </div>
  </div>
    
  )
}