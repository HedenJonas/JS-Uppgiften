import React from 'react'

const Info = () => {
  return (
    <section className="page desktop features-page grid">
        <div id="featuregraf-text">
            <h2 className="h2-featurespage">Make Your money transfer simple and clear</h2>
            <div>
                <ul className="list-flex">
                    <li className="list1"><i className="fa-light fa-circle-check list-check"></i>Banking transactions are free for you</li>
                    <li className="list1"><i className="fa-light fa-circle-check list-check"></i>No monthly cash commission</li>
                    <li className="list1"><i className="fa-light fa-circle-check list-check"></i>Manage payments and transactions online</li>
                </ul>
            </div>
            <button className="btn-primary btn-learn-more">Learn more <i className="fa-regular fa-arrow-right"></i></button>
        </div>
        <div id="featuregraf"><img src="images/featuregraf.svg" alt="Bild på graf." /></div>
        <div id="featurecontacts"><img src="images/featurecontacts.svg" alt="Bild på kontakter." /></div>
        <div id="featurecontacts-text">
            <h2 className="h2-featurespage">Receive payment from international bank details</h2>
            <div className="flexrow">
                <div>
                    <img src="images/linkeasypayments.svg" alt="Betalkorts ikon." />
                    <p className="margin-top info-text1">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                <div className="margin-left">
                    <img src="images/Linkashback.svg" alt="Plånboks ikon." />
                    <p className="margin-top info-text1">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
            </div>
            <button className="btn-primary btn-learn-more">Learn more <i className="fa-regular fa-arrow-right"></i></button>
        </div>
    </section>
  )
}

export default Info