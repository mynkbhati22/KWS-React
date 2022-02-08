import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import { FaMapSigns } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'
import { AiFillReconciliation } from 'react-icons/ai'
function Retail() {
  return (
    <>
      <div className="about-container">
        <div className="container-content">
          <h1 className="deficrypto">Application of Blockchain Retail</h1>
          <p className="tm-para">
            <br />
            The retail industry is responsible for making the product meet its
            final consumer. As simple as it sounds, the retail industry faces a
            lot of struggles like tight margins, meeting ever-rising customer
            expectations, regulatory and quality issues too. The retail sector
            hasn’t changed much over the years, but high profile companies are
            bringing in the concept of blockchain technology, initially
            developed by the creators of cryptocurrency, for easy exchange and
            communication with its consumers.
          </p>
        </div>
      </div>
      <div className="team-container">
        <div className="team-container-content">
          <br /> <br />
          <h4 className="cf-software">Key Issues Faced ny Retail Sector</h4>
          <p className="bitcoin-para">
            Opertional Inefficiency The retail supply chains lack transparency,
            with one system isolated from the other and static record keeping,
            are major obstructions in integration of operation system.
          </p>
          <p className="bitcoin-para">
            Consolidated Operational Omnichannel Retail As awareness increases,
            consumers demand omnichannel shopping and every other data related
            to it but retailers face problems due to improper data management in
            providing them.
          </p>
          <p className="bitcoin-para">
            Consumer Participation & Tracking As consumer tries to fetch more
            and more data about the product, their efforts entail security
            risks, they are difficult to compile, share and develop insights,
            this, in turn, increases administrative costs.
          </p>
        </div>
      </div>
      <div className="advantages container">
        <h3 className="advantage">Blockchain: A Solution to Retail</h3>
        <div className="hyper">
          <p className="lending">
            Blockchain ensures an end to end tracking of products from the point
            of their manufacturing to sales and distribution. This technology is
            a ledger-based system where data is divided into blocks and nodes.
            This data is completely decentralised, tamper-proof and easy to use.
            The retail sector is a complex web of production, logistic, supply
            and customer relationships. There are many ways that blockchain the
            retail, some of them are
          </p>

          <p className="lending">
            Each and every stage of the supply chain could be tracked down with
            the help of blockchain. This will help in achieving transparency and
            ease in passing requests at all levels.
          </p>

          <p className="lending">
            Payments will be made easy, safe and secure. Blockchain creates
            irrefutable records that are accessible by all parties.
          </p>
        </div>
      </div>

      <div className="container-bottom">
        <div className="bottom-left">
          <h6 className="www">Why work with us !</h6>
          <br />
          <h3 className="dnw">Does your bussiness need a website ?</h3>
          <br />
          <h2 className="left-text">We're available</h2>
          <br />
          <p className="left-para">
            If you want to expand your business in the digital domain and need
            an affordable solution, we are here to help you by building a
            cost-effective yet professional website design for a near-perfect
            start of the digital journey for your products and services. Get in
            touch with us, we’d love to hear your idea and give your business
            “DIGITAL WINGS”.
          </p>
          <br />
          <button className="wa">
            <i className="fab fa-telegram"></i> Telegram
          </button>
        </div>

        <div className="bottom-right">
          <h5 className="right-text-1">
            <AiOutlinePieChart size={30} /> Affordable Pricing
          </h5>
          <br />
          <p className="right-para-1">
            Kesavi Web Solutions is the most affordable WordPress website
            designing agency based in South Delhi, India. We offer the most
            cost-effective services depending on the specific requirements of
            each project and budget. Our services fit well in small pockets.
          </p>
          <h5 className="right-text 2">
            <i className="fas fa-thumbs-up"></i> Professional Design
          </h5>
          <br />
          <p className="right-para-2">
            Every project we work upon is a new challenge for us to create a new
            masterpiece. It is also an opportunity to know about the client’s
            ideas, values, and mission, audience, brand values, competition.
            This helps us shape the UI/UX accordingly and create a rich user
            experience with a professional design. <br />
            Kesavi Web Solutions strives to create a personalized website design
            that is in harmony with the ideas of the business.
          </p>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-text-wrappers">
          <div className="footer-text-items">
            <div className="footer text item-1">
              <h4>REGD.OFFICE</h4>
              <h6 className="bnd">
                {' '}
                <i className="fas fa-map-marker-alt fa-2x"></i> Badarpur, New
                Delhi,
                <br /> India 110044
              </h6>
              <h6>
                {' '}
                <i className="fas fa-phone fa-2x"></i> (+) 91 - 9717453904
              </h6>
              <h6>
                {' '}
                <FaEnvelopeOpenText size={30} className="fa" />{' '}
                info@kesaviweb.com
              </h6>
            </div>

            <div className="footer-text-item-2">
              <h4>FOR ROBOTS</h4>
              <h6>
                {' '}
                <FaWpforms size={30} className="fas" /> Privacy Policy
              </h6>
              <h6>
                {' '}
                <AiFillReconciliation size={30} className="ai" /> Terms &
                Conditions
              </h6>
              <h6>
                {' '}
                <FaMapSigns size={30} className="fa" /> Site Map
              </h6>
            </div>

            <div className="footer-text-item-3">
              <h4>FOR HUMANS</h4>
              <h6>Home</h6>
              <h6>Portfolio</h6>
              <h6>Free Online Quote</h6>
              <h6>Website Cost Estimation</h6>
            </div>

            <div className="footer-text-item-4">
              <img className="src " src="images/KWS_6693.png" alt="logo img" />
              <h6 className="ncr">
                Most Affordable Website Designing Company based in South Delhi,
                NCR, India.
              </h6>

              <h6 className="company">
                Built with ❤ <b>By K.W.S</b>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Retail
