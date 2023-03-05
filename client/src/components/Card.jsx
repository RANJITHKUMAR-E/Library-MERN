
import image from '../images/book.png'
import React from 'react'
import {data} from "../Data/Data"

const Card = () => {
    return (
   <>
    <div className='col-md-3'>
        <div class="card my-4" >
          <Book/>
        </div>
        </div>
   </>
  )
}

function Book(){
  const BookImg = data.map((book)=>(
    <div className="bookImg">
      {book.img}
    </div>
    )
  )
};

export default Card
