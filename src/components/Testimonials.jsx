import React, { useEffect, useState } from 'react'
import Testimonialsapi from './Testimonialsapi'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    const getTestimonials = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    }

    useEffect(() => {
        getTestimonials()
    }, [])

    return (
    <section className="BG2">
            <div className="page testimonials">
                <div id="h1-testimonials">
                    <p>Clients are Loving Our App</p>
                </div>
                <div className="testimonial">

                    {
                        testimonials.map((testimonial) => (
                            <Testimonialsapi key={testimonial.id} item={testimonial} />
                        ))
                    }

                </div>
            </div>
        </section>
  )
}

export default Testimonials