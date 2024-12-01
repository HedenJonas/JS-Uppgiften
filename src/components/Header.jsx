import React from 'react'

const Header = () => {
  return (
    <header className="BG">
        <section className="page page-1 flex1 ">
            <h1 className="h1">
                Manage All Your Money In One App
            </h1>
            <div className="flex1-1">
                <div id="item1-1" className="image1">
                    <img className="image1-1" src="images/mobiler.svg" alt="Silicon - Manage your money. Visas på två mobiler." />
                </div>
                <div id="item1-2" className="flex1-2">
                    <p id="item1-2-1" className="text1">
                        We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.
                    </p>
                    <button className="app" id="apple"><a className="fit" href="https://www.apple.com/se/app-store/" target="_blank"><img src="images/appstore-light.svg.svg" alt="Länk till appstore." /></a></button>
                    <button className="app" id="google"><a className="fit" href="https://play.google.com/store/games?device=windows" target="_blank"><img src="images/googleplay-light.svg.svg" alt="Länk till Google play." /></a></button>
                    <div id="item1-2-2" className="discover">
                        <button className="pilner"><img src="images/Iconpil ner.svg" alt="Pil ner." /></button>
                        <p className="text2">Discover more</p>
                    </div>
                </div>
            </div>
        </section>
    </header>
  )
}

export default Header