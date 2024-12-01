import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'

const Faq = () => {
    const [accordions, setAccordions] = useState([])

    const fetchFaq = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordions(data)
    }

    useEffect(() => {
        fetchFaq()
    }, [])

  return (

    <section className="page page-4 flex4">
            <h2 className="h2features">Any questions? <br id="br-faq"/> Check out the FAQs</h2>
            <article className="textpage4">
                Still have unanswered questions and need to get in touch?
            </article>
            <div className="flex z-test">

                {
                    accordions.map(item => (
                        <AccordionItem key={item.id} item={item}/>
                    ))
                }

                {/* <div>
                    <div id="faq1" className="faqborder faq">
                        <h2 className="h2faq">Is any of my personal information stored in the App?</h2>
                        <button id="mobile-btn1" className="pilner"><img src="images/pilupp.svg" alt="Pil upp." /></button>
                        <button id="tablet-btn1" className="pilner2"><img src="images/Iconpil ner.svg" alt="Pil ner." /></button>
                    </div>
                    <div id="faq2" className="faqborder faq">
                        <article className="faqtext">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur impedit praesentium culpa aliquam facilis esse architecto officia accusantium ipsam! Praesentium officia, tempora vitae voluptatibus fuga ipsam possimus corrupti impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab iusto, reiciendis recusandae animi explicabo!
                        </article>
                        <br />
                        <article className="faqtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quas numquam exercitationem laborum modi sint quod, quis quisquam ad esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi voluptatibus qui fugiat!
                        </article>
                    </div>
                </div> */}

                {/* <div id="faq3" className="faqborder faq">
                    <h2 className="h2faq">
                        What formats can I download my transaction history in?
                    </h2>
                    <button className="pilner2"><img src="images/Iconpil ner.svg" alt="Pil ner." /></button>
                </div> */}

                

                {/* <div id="faq5" className="faqborder faq">
                    <h2 className="h2faq">
                        When can I use Banking App services?
                    </h2>
                    <button className="pilner2"><img src="images/Iconpil ner.svg" alt="Pil ner." /></button>
                </div> */}

                {/* <div id="faq6" className="faqborder faq">
                    <h2 className="h2faq">
                        Can I create my own password that is easy for me to remember?
                    </h2>
                    <button className="pilner2"><img src="images/Iconpil ner.svg" alt="Pil ner." /></button>
                </div> */}

                {/* <div id="faq7" className="faqborder faq">
                    <h2 className="h2faq">
                        What happens if I forget or lose my password?
                    </h2>
                    <button className="pilner2"><img src="images/Iconpil ner.svg" alt="Pil ner." /></button>
                </div> */}

            </div>
            <div className="contact">
                <div id="contact-btn">
                    <button className="btn-primary">Contact us now</button>
                </div>
                <div id="contact-info">
                    <div id="contact-phone">
                        <img src="images/phone.svg" alt="Telefon ikon." />
                        <article id="contact-info-text">Still have questions?</article>
                        <button className="btn-phone btn-contact">Contact us <i className="fa-regular fa-arrow-right" style={{ color: '#6366f1' }}></i></button>
                    </div>
                    <div id="contact-message">
                        <img src="images/message.svg" alt="meddelande ikon." />
                        <article id="contact-info-text">Don't like phone calls?</article>
                        <button className="btn-message btn-contact"><span>Contact us <i className="fa-regular fa-arrow-right" style={{ color: '#22c55e' }}></i></span></button>
                    </div>
                </div>
                <div className="newsletter">
                    <div className="flexrow klockan">
                        <img src="images/notification-icon-1.svg" alt="Notis klocka." />
                        <h2 className="h2-newsletter" id="mobile-newsletter">Subscribe to our newsletter </h2>
                        <h2 className="h2-newsletter" id="desktop-newsletter">Subscribe to our newsletter to stay informed about latest updates</h2>
                    </div>
                    <div className="sign-up-form">
                        <label className="form-label" htmlFor="email"></label>
                        <input className="form-input" type="email" name="email" id="email" placeholder="Your email" />
                        <button className="btn-primary btn-sub">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Faq