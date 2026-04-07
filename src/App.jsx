import './App.css'

function App() {
  return (
    <div className="page">
      <div className="checker" role="presentation" aria-hidden="true" />
      <header className="header">
        <div className="container headerInner">
          <a className="brandName" href="#top" aria-label="Fastburger home">
            <img
              className="brandMark"
              src="/images/logo.png"
              alt="Fastburger logo"
              width="40"
              height="40"
            />
          </a>
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero container" aria-label="Fastburger">
          <div className="heroPoster">
            <div className="heroPhoto">
              <img
                className="heroPhotoImg"
                src="/images/burger.jpg"
                alt="A Fastburger burger close-up"
                loading="eager"
              />
            </div>
            <div className="heroBar">
              <div className="heroBrand">
                <img
                  className="heroLogo"
                  src="/images/logo.png"
                  alt="Fastburger character logo"
                  width="86"
                  height="86"
                  loading="eager"
                />
                <h1 className="heroTitle">FASTBURGER</h1>
              </div>
              <a className="button primary" href="#visit">
                Find us
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="section container">
          <h2 className="sectionTitle">Menu highlights</h2>
          <div className="menuGrid" role="list">
            <div className="menuItem" role="listitem">
              <div className="menuTop">
                <div className="menuName">THE FAST</div>
                <div className="menuPrice">$9</div>
              </div>
              <div className="menuDesc">
                Double smash, American cheese, fast sauce, pickles, white onion
              </div>
            </div>
            <div className="menuItem" role="listitem">
              <div className="menuTop">
                <div className="menuName">SINGLE</div>
                <div className="menuPrice">$6</div>
              </div>
              <div className="menuDesc">
                Smash patty, American cheese, pickles, mustard, ketchup
              </div>
            </div>
            <div className="menuItem" role="listitem">
              <div className="menuTop">
                <div className="menuName">CALI</div>
                <div className="menuPrice">$11</div>
              </div>
              <div className="menuDesc">
                Double smash, pepper jack, avocado, pickled jalapeño, chipotle
                mayo
              </div>
            </div>
            <div className="menuItem" role="listitem">
              <div className="menuTop">
                <div className="menuName">FAST FRIES</div>
                <div className="menuPrice">$5</div>
              </div>
              <div className="menuDesc">
                American cheese, fast sauce, grilled white onion
              </div>
            </div>
            <div className="menuItem" role="listitem">
              <div className="menuTop">
                <div className="menuName">SWIRL</div>
                <div className="menuPrice">$6</div>
              </div>
              <div className="menuDesc">Vanilla + chocolate swirl</div>
            </div>
            <div className="menuItem" role="listitem">
              <div className="menuTop">
                <div className="menuName">MALT</div>
                <div className="menuPrice">$5</div>
              </div>
              <div className="menuDesc">Classic vanilla malt</div>
            </div>
          </div>
        </section>

        <section id="photos" className="section container">
          <h2 className="sectionTitle">Burgers in focus</h2>
          <div className="photoGrid">
            <img
              className="photo"
              src="/images/burger.jpg"
              alt="Burger photo 1"
              loading="lazy"
            />
            <img
              className="photo"
              src="/images/burger2.jpg"
              alt="Burger photo 2"
              loading="lazy"
            />
            <img
              className="photo"
              src="/images/burger3.jpg"
              alt="Burger photo 3"
              loading="lazy"
            />
          </div>
        </section>

        <section id="visit" className="section container">
          <h2 className="sectionTitle">Visit fast</h2>
          <div className="visitCard">
            <div className="visitCol">
              <div className="visitLabel">Hours</div>
              <div className="visitValue">
                Daily 11am–10pm
                <br />
                Late nights Fri–Sat
              </div>
            </div>
            <div className="visitCol">
              <div className="visitLabel">Location</div>
              <div className="visitValue">
                Pop-up today
                <br />
                Follow for drops
              </div>
            </div>
            <div className="visitCol">
              <div className="visitLabel">Order</div>
              <div className="visitValue">
                Walk-up window
                <br />
                Takeout friendly
              </div>
            </div>
          </div>
          <div className="visitMap" aria-label="Ventura map">
            <div className="visitMapTag">VENTURA, CA • PIER BOARDWALK</div>
            <iframe
              title="Map to Ventura Pier, Ventura, CA"
              src="https://www.google.com/maps?q=Ventura%20Pier%2C%20Ventura%2C%20CA&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">FASTBURGER</div>
          <div className="footerNote">© {new Date().getFullYear()}</div>
        </div>
      </footer>
      <div className="checker" role="presentation" aria-hidden="true" />
    </div>
  )
}

export default App
