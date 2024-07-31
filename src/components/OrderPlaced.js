import React from 'react'
import './home.css'

function OrderPlaced() {
  return (
    <div className='container placed'>
        <div>
            <img className='greentick' alt='greentick' src='https://th.bing.com/th/id/R.a1849d676a332b5516f3dd3cf3d90609?rik=XwaA15sdUDGrag&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fgreen_tick%2f27880-5-green-tick-clipart.png&ehk=23wDe1sjBvA6xbwbaYRnxtE0tnwNzqbafc3L5kmYcms%3d&risl=&pid=ImgRaw&r=0' />
            <h1 className='text-center'>Order Placed Successfully</h1>
        </div>
    </div>
  )
}

export default OrderPlaced