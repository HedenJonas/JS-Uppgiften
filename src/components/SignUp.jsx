// Fick detta med hjälp av Chatgpt4o på min befintliga html kod:

import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    // Skapar komponenten och 2st variabler som med setEmail/setError och useState får värdet för inmatning av email och vilket felmeddelande som ska skrivas ut. Tilldelas tom string först.
    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
        // funktion som kontrollerar att inmatningen följer strukturen på en email med en regular expression för att validera. 
        // Returnerar true eller false beroende på om emailen följer strukturen eller inte.
    };
  

    const handleSubmit = (e) => {
    e.preventDefault(); // Stoppar formuläret från att skickas
        if (!email) {
        setError('E-postadress är obligatorisk');
        } else if (!validateEmail(email)) {
        setError('Ogiltig e-postadress');
        } else {
        setError(''); 
        console.log("Form Submitted:", email);  
        }
        // if = om email är tomt får setError värdet 'E-postadress är obligatorisk'
        // else if = om email inte följer strukturen som används i validateEmail(värdet true eller false som returneras) får setError värdet 'Ogiltig e-postadress'
        // else = setError tar bort eventuella felmeddelanden som visats. Nästa rad skickar ut i konsolen. Här skulle kod för vad som ska hända med emailen ligga.
    };
  // ad

    return (
        <div className='email-form'>
        <form className="sign-up-form" onSubmit={handleSubmit}> {/* handleSubmit funktionen körs när formuläret ska skickas. */}
            <label className="form-label" htmlFor="email"></label>
            <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // value={email} ser till att input fältet och email alltid har samma värde. 
            // onChange={(e) => setEmail(e.target.value)} gör att email uppdateras med det som skrivs in
            />
            <button className="btn-primary btn-sub" type="submit">Subscribe</button> 
            {/* type="submit" gör att knappen skickar formuläret*/}
        </form>
            {error && <p className="error-message">{error}</p>}
            {/* Här skrivs relevant felmeddelande ut, men bara om det inte är en tom string */}
        </div>
    );
}

export default SignUp;