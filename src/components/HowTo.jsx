import React from 'react'

const HowTo = () => {
  return (
    <section className="BG2">
        <div className="page page-3 flex3">
            <h2 className="h2features">How Does It Work?</h2>
            <div id="desktop3mobiler">
                <img src="images/3mobilerdesktop1.svg" alt="Bild på olika mobilskärmar." />
                <img src="images/3mobilerdesktop-ram.svg" alt="Bild på olika mobilskärmar." />
                <img src="images/3mobilerdesktop3.svg" alt="Bild på olika mobilskärmar." />
            </div>
            <div id="tablet3mobiler">
                <img id="tablet3mobiler-ID2" src="images/3mobiler1.svg" alt="Bild på olika mobilskärmar." />
                <span>
                    <img id="tablet3mobiler-ID1" src="images/3mobiler.svg" alt="Bild på olika mobilskärmar." />
                    <img id="tablet3mobiler-ID3" src="images/3mobiler2.svg" alt="Bild på olika mobilskärmar." />
                </span>
                <img id="tablet3mobiler-ID4" src="images/3mobiler3.svg" alt="Bild på olika mobilskärmar." />
            </div>
            <div className="imagemobile">
                <img src="images/mobil.svg" alt="mobil ram." className="background" />
                <img src="images/4 → 03-app-showcase-screens.png.svg" alt="Bild på olika mobilskärmar." className="foreground" />
            </div>
            <div className="h3container">
                <h3 className="h3features">
                    <span id="sida3-h3-1">Step 3.</span>
                    <span id="sida3-h3-2"> Transfers to people from your contact list</span>
                    <span id="sida3-h3-3">Latest transaction history</span>
                </h3>
            </div>
            <article className="textpage3">
                <span id="sida3-article-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis doloribus quos totam placeat fuga mollitia optio.</span>
                <span id="sida3-article-2">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </span>
            </article>
        </div>
    </section>
  )
}

export default HowTo