import '../index.css'
import image from '../images/book.png'
import React from 'react'
import {data} from "../Data/Data"
import BookPopUp from "../components/BookPopUp";

const Card = () => {
    return (
   <>      
   <div className="div container">
            <div class="card my-4 ml-3" >
            <div className="d-flex align-content-center flex-wrap">
              
                  {data.map((book)=>(<>
                    <img src={book.img} alt="" style={{marginLeft:'20px'}}/>
                  </>
                    )
                  )}
                   {data.map(()=>(<>
                   <div className='p-3  ml-3'style={{marginLeft:'30px'}}>
                   
                   <BookPopUp name=" View Book"/>
                   </div>
                    
                  </>
                    )
                  )}
        
          </div>
        </div>
        </div>  
   </>
  )
}


export default Card
