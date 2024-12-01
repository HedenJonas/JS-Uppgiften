import React from 'react'
import StarRating from './StarRating'

const Testimonialsapi = ({item}) => {
  return (
    <div className="testimonial-1">
        <div className="quotes">
            <i className='fa-sharp fa-solid fa-quote-left quote'></i>
        </div>
        <StarRating starRating={item.starRating}/>
        <div className="testimonial-text">
            <p>{item.comment}</p>
        </div>
        <div className="flexrow gap">
            <img src={item.avatarUrl} alt={item.author} />
        <div className="">
            <p className="t-name">{item.author}</p>
            <p className="t-title">{item.jobRole}</p>
        </div>
        </div>
    </div>
  )
}

export default Testimonialsapi