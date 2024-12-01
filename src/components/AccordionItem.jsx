import React, { useState } from 'react'

const AccordionItem = ({item}) => {
    const[isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div id="faq4" className="faqborder faq" onClick={toggleAccordion}>
            <h2 className="h2faq">{item.title}</h2>
            <div className='pilner'>
                <i className={`btn-accordion fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
            </div>
            <div id="tablet-text1">
                <p className={`faqtext ${isOpen ? 'active' : ''}`}>{item.content}</p>
            </div>
        </div>
  )
}

export default AccordionItem

// import React from 'react';

// const AccordionItem = ({ item, isOpen, toggleAccordion }) => {
//     return (
//         <div id="faq4" className="faqborder faq" onClick={toggleAccordion}>
//             <h2 className="h2faq">{item.title}</h2>
//             <div className='pilner'>
//                 <i className={`btn-accordion fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
//             </div>
//             <div id="tablet-text1">
//                 <p className={`faqtext ${isOpen ? 'active' : ''}`}>{item.content}</p>
//             </div>
//         </div>
//     );
// };

// export default AccordionItem;