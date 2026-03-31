import { useState } from "react";
import "../App.css";

export default function App() {
  const [activeDrink, setActiveDrink] = useState("koktelok");
  return (
    <div className="page">
      {/*home resz*/}
      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-right">
            <a href="https://www.facebook.com/profile.php?id=61580745553845&locale=hu_HU" target="blank">
              <span>Facebook</span>
            </a>
          </div>
          <h1 className="title">KisKacsa</h1>
        </div>

        <nav className="main-nav">
          <a href="#etlap">ÉTLAP</a>
          <a href="#itallap">ITALLAP</a>
          <a href="#ajanlatok">AJANLATOK</a>
          <a href="#kapcsolat">KAPCSOLAT</a>
          <a href="#ertekeles">ÉRTÉKELÉS</a>
        </nav>
      </header>

      {/* kartya infok */}
      <section className="info-section">
        <div className="info-card">
          <div className="icon">📍</div>
          <div className="card-title">Címünk:</div>
          <p>
            4024 Debrecen,
            <br />
            Kossuth utca 21.
          </p>
        </div>

        <div className="info-card">
          <div className="icon">📅</div>
          <div className="card-title">Asztalfoglalás:</div>
          <p>
            06-52/410-802
            <br />
            kiskacsarendeles@gmail.com
          </p>
        </div>

        <div className="info-card">
          <div className="icon">🕒</div>
          <div className="card-title">Nyitva tartás:</div>
          <p>
            Minden nap
            <br />
            12.00 – 23.00
          </p>
        </div>
      </section>

      {/* menu */}
      <section id="etlap" className="menu-wrapper">
        <div className="menu-box">
          <h2>Étlap</h2>
        </div>
      </section>

      {/*etel legordulo*/}
      <section className="featured">
        <div className="featured-left">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000"
            alt="étel"
          />
          <div className="plate-overlay" />
        </div>

        <div className="featured-middle">
          <h3>PIRÍTOTT SERTÉSSZŰZ</h3>
          <p>
            Pestós kemencében sült házi kenyérrel
          </p>
          <div className="price">3590 Ft</div>
        </div>

        <div className="featured-right">
          {[
            { name: "Koronázási saláta", price: "3590 FT" },
            { name: "Csirkeszárnyak", price: "3490 FT" },
            { name: "Pirított sertésszűz", price: "3590 FT" },
            { name: "Mexikói tortilla", price: "3990 FT" },
            { name: "Baconös csusza", price: "3590 FT" },
            { name: "Csirkemell gyümölccsel", price: "5190 FT" },
          ].map((item, i) => (
            <div className="mini-item" key={i}>
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200" />
              <div className="mini-text">
                <span>{item.name}</span>
                <b>{item.price}</b>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/*itallap*/}
      <section id="itallap" className="menu-wrapper">
        <div className="menu-box">
          <h2>Itallap</h2>
          <div className="menu-line" />

          <div className="menu-categories">
            <span onClick={() => setActiveDrink("koktelok")}>Koktélok</span>
            <span onClick={() => setActiveDrink("uditok")}>Üdítők</span>
            <span onClick={() => setActiveDrink("rovid")}>Rövid italok</span>
            <span onClick={() => setActiveDrink("sorok")}>Sörök</span>
            <span onClick={() => setActiveDrink("pezsgok")}>Pezsgők</span>
            <span onClick={() => setActiveDrink("forro")}>Forró italok</span>
          </div>
        </div>
      </section>


      {/*koktel lista*/}
      <section className="drink-list">
        <div className="drink-columns">

          {activeDrink === "koktelok" && (
            <>
              <div className="drink-col">
                <h4>APERITIF KOKTÉLOK</h4>
                <p>Aperol Spritz – 2000 Ft</p>
                <p>Hugo – 2000 Ft</p>
                <p>Limoncello Spritz – 2000 Ft</p>
              </div>

              <div className="drink-col">
                <h4>KLASSZIKUS KOKTÉLOK</h4>
                <p>Cosmopolitan – 1600 Ft</p>
                <p>Mojito – 1600 Ft</p>
                <p>Moscow Mule – 2500 Ft</p>
                <p>William Fitz – 3200 Ft</p>
                <p>Tequila Sunrise – 1900 Ft</p>
                <p>Strawberry Colada – 2500 Ft</p>
                <p>Negroni – 2600 Ft</p>
              </div>

              <div className="drink-col">
                <h4>ALKOHOLMENTES KOKTÉLOK</h4>
                <p>Virgin Pina Colada – 1800 Ft</p>
                <p>Smurf Attack – 1600 Ft</p>
                <p>Virgin Mojito – 1000 Ft</p>
                <p>Strawberry Colada – 1600 Ft</p>
                <p>Shirley Temple – 1600 Ft</p>
                <p>Cazuela – 1600 Ft</p>
              </div>
            </>
          )}

          {activeDrink === "uditok" && (
            <>
              <div className="drink-col">
                <h4>ÜDÍTŐK</h4>
                <p>Coca-Cola – 800 Ft</p>
                <p>Fanta – 800 Ft</p>
                <p>Sprite – 800 Ft</p>
                <p>Kinley – 850 Ft</p>
                <p>Hell – 500 Ft</p>
                <p>Naturaqua – 400 Ft</p>
              </div>

              <div className="drink-col">
                <h4>HÁZI SZÖRPÖK</h4>
                <p>Kékáfonya – 1200 Ft</p>
                <p>Bodza – 1200  Ft</p>
                <p>Fekete Ribizli – 1200  Ft</p>
                <p>Málna – 1200  Ft</p>
                <p>Eper – 1200  Ft</p>
                <p>Mangó – 1200  Ft</p>
              </div>

              <div className="drink-col">
                <h4>GYÜMÖLCSFRÖCCSÖK</h4>
                <p>Málna Tokaji Furmintból – 1300 Ft</p>
                <p>Bodzavirág Furmintból – 1300 Ft</p>
                <p>Mangó Furmintból – 1300 Ft</p>
                <p>Áfonya Furmintból – 1300 Ft</p>
              </div>
            </>
          )}

          {activeDrink === "rovid" && (
            <>
              <div className="drink-col">
                <h4>PÁLINKÁK</h4>
                <p>
                  Győmbér – 1200 Ft</p>
                <p>Kajszibarack – 1700 Ft</p>
                <p>Szatmári szilva – 1100 Ft</p>
                <p>Bársonybirs – 1230 Ft</p>
                <p>Árpád pálinkák
                  cigánymeggy – 1900 Ft</p>
              </div>

              <div className="drink-col">
                <h4>TEQUILA</h4>
                <p>Sierra Silver  – 1200 Ft</p>
                <p>Patrón silver – 1500 Ft</p>
                <p>Cenote Blanco – 1300 Ft</p>
                <p>Cenote Anejo – 1700 Ft</p>
                <p>Macallan – 1900 Ft</p>
              </div>

              <div className="drink-col">
                <h4>VODKA</h4>
                <p>Stolichnaya – 1546 Ft</p>
                <p>Finlandia – 1213 Ft</p>
                <p>Beluga – 1120 Ft</p>
                <p>Greay Goose – 1700 Ft</p>
              </div>
            </>
          )}

          {activeDrink === "sorok" && (
            <>
              <div className="drink-col">
                <h4>TEQUILA</h4>
                <p>Dreher – 900 Ft</p>
                <p>Soproni – 900 Ft</p>
                <p>Heineken – 900 Ft</p>
                <p>Soproni Démon – 900 Ft</p>
              </div>

              <div className="drink-col">
                <h4>CSAPOLT SÖRÖK</h4>
                <p>Edelweiss – 1200 Ft</p>
                <p>Soproni – 1200 Ft</p>
              </div>

              <div className="drink-col">
                <h4>CSAPOLT SÖRÖK</h4>
                <p>Edelweiss – 1200 Ft</p>
                <p>Soproni – 1200 Ft</p>
                <p>Edelweiss – 1200 Ft</p>
                <p>Soproni – 1200 Ft</p>
              </div>
            </>
          )}

          {activeDrink === "pezsgok" && (
            <>
              <div className="drink-col">
                <h4>Pezsgők</h4>
                <p>Törley – 4000 Ft</p>
                <p>Hungária – 4500 Ft</p>
              </div>

              <div className="drink-col">
                <h4>Pezsgők</h4>
                <p>Dissegna – 5000 Ft</p>
                <p>Pago de Tharsys – 5500 Ft</p>
              </div>
            </>
          )}

          {activeDrink === "forro" && (
            <>
              <div className="drink-col">
                <h4>FORRÓ ITALOK</h4>
                <p>Kávé – 660 Ft</p>
                <p>Tea – 520 Ft</p>
                <p>Cappucino– 890 Ft</p>
                <p>Latte Machiato– 420 Ft</p>
                <p>Jeges Kávé– 760 Ft</p>
              </div>

              <div className="drink-col">
                <h4>TEÁK</h4>
                <p>English Bland – 600 Ft</p>
                <p>Red Fruit – 1540 Ft</p>
                <p>Earl Grey – 230 Ft</p>
                <p>Pepper Mint– 450 Ft</p>
              </div>

              <div className="drink-col">
                <h4>Különlegességek</h4>
                <p>Jasmine – 690 Ft</p>
                <p>Influsion– 120 Ft</p>
                <p>Roiboss– 1200 Ft</p>
                <p>Dark Jelling– 1400 Ft</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/*nagy kep*/}
      <section className="food-banner">
        <img
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1600"
          alt="sertés étel"
        />
      </section>

      {/*rendezvenyek*/}
      <section id="ajanlatok" className="events">
        <div className="events-title">
          <h2>Rendezvények konferenciára</h2>
        </div>

        <div className="events-menus">

          <div className="event-card">
            <h3>MENÜAJÁNLATUNK I.</h3>

            <h4>Főételek:</h4>
            <p>– Érett préselt libamáj fahéjas alma chutney-val</p>
            <p>– Hóison malacsűz tejszínes-kapribogyós mártással</p>

            <h4>Desszert:</h4>
            <p>Somlói galuska újszerűen</p>

            <div className="price">12500 Ft/fő</div>
          </div>

          <div className="event-card">
            <h3>MENÜAJÁNLATUNK II.</h3>

            <h4>Főételek:</h4>
            <p>– Sült vargánya krémleves</p>
            <p>– Csirkemell csíkok ropogós pankó morzsában</p>

            <h4>Desszert:</h4>
            <p>A „mi” házi krémesünk</p>

            <div className="price">10000 Ft/fő</div>
          </div>

          <div className="event-card">
            <h3>MENÜAJÁNLATUNK III.</h3>

            <h4>Főételek:</h4>
            <p>– Tapasok</p>
            <p>– Fetával és jalapenoval töltött csirkemell</p>

            <h4>Desszert:</h4>
            <p>Kardamomos rózsaborsos csokoládé pite</p>

            <div className="price">10000 Ft/fő</div>
          </div>
        </div>
      </section>

      {/*menuajanlat*/}
      <section className="menu4">
        <h2 className="menu4-title">MENÜAJÁNLATUNK IV.</h2>

        <div className="menu4-columns">

          {/*bal oszlop*/}
          <div className="menu4-col">
            <h4>Állófogadásra választható</h4>

            <h5>Előételek</h5>
            <p>– Tatár variációk – 4990 Ft</p>
            <p>– Libacarpaccio karamellizált körtével – 3500 Ft</p>
            <p>– Érett préselt libamáj alma chutney-val – 6490 Ft</p>

            <h5>Levesek</h5>
            <p>– Marhahúsleves zöldségekkel – 3200 Ft</p>
            <p>– Újházy tyúkhúsleves – 3500 Ft</p>
            <p>– Sült vargányakrémleves – 2800 Ft</p>

            <h5>Főételek</h5>
            <p>– Cézár saláta csirkemellel – 4900 Ft</p>
            <p>– Zöldséges paella – 3500 Ft</p>
            <p>– Rakott túrós csusza – 3600 Ft</p>
          </div>

          {/*kozepso oszlop*/}
          <div className="menu4-col">
            <h4>Szárnyas</h4>

            <p>– Tanyasi csirkemell filé pankó morzsában – 4600 Ft</p>
            <p>– Csirkemell polpettó – 4750 Ft</p>
            <p>– Chilis fekete lencsével töltött burgonya – 4690 Ft</p>
            <p>– Fatasaláta jalapenóval – 4990 Ft</p>
            <p>– Füstölt tanyasi tyúkmell – 4600 Ft</p>

            <h4>Sertés</h4>

            <p>– Kemencében sült BBQ sertéstarja – 4890 Ft</p>
            <p>– Marhapofa körömpörkölt szarvashússal – 5190 Ft</p>
            <p>– Sertés borsos bundában – 4990 Ft</p>
            <p>– Manglica pecsenye – 4990 Ft</p>
            <p>– Sous-vide malac vargányával – 4990 Ft</p>
          </div>

          {/*jobb oszlop*/}
          <div className="menu4-col">
            <h4>Marha</h4>

            <p>– Marha ragu mustárral – 5300 Ft</p>
            <p>– Vörösboros marhapofa – 5300 Ft</p>
            <p>– Bivalypofa füstös pisztácia kéregben – 5300 Ft</p>
            <p>– Érett hátszín – 5300 Ft</p>

            <h4>Halak</h4>

            <p>– Bőrén sült fogas – 4600 Ft</p>
            <p>– Rostos fogas vargányával – 4600 Ft</p>
            <p>– Lazac steak – 5890 Ft</p>

            <h4>Köretek</h4>

            <p>– Sült marinált zöldségek</p>
            <p>– Libatepertős burgonyapüré</p>
            <p>– Zöldséges bulgur</p>
            <p>– Sáfrányos jázminrizs</p>
            <p>– Hajdinás burgonyagombóc</p>
          </div>
        </div>
      </section>

      {/*etterem bemutato*/}
      <section id="kapcsolat" className="about">
        <div className="about-box">
          <h2>KISKACSA ÉTTEREM</h2>

          <p>
            KisKacsa Étterem segít abban, hogy otthonában is élvezhesse éttermünk
            csodálatos ízeit.
          </p>

          <p>
            Étlapunk kínálatából rendelve az otthoni megszokott kényelmében
            fogyaszthatják el ebédjüket, családi vacsorájukat.
          </p>

          <p>Adagonként 300 Ft doboz díjat számolunk fel.</p>

          <p>
            A számla végösszegéhez 12% szervizdíjat számolunk fel éttermi
            kiszolgálás esetén.
          </p>

          <p>Minden behozott torta után 300 Ft/fő szervizdíjat számolunk fel.</p>

          <p>
            Teltház esetén az ételek elkészítésének várakozási ideje
            meghosszabbodhat, ezért köszönjük szíves türelmüket és megértésüket.
          </p>

          <div className="divider"></div>

          <p className="phone">
            TELEFONSZÁM: 06-90/670-354
          </p>

          <div className="divider"></div>

          <p>
            4300 Nyírbátor, Rózsa utca 15.
            <br />
            kiskacsaetterem@gmail.com
          </p>
        </div>
      </section>

      {/*hirlevel*/}
      <section className="newsletter">

        <h2>IRATKOZZON FEL HÍRLEVELÜNKRE!</h2>

        <form className="newsletter-form">

          <div className="form-group">
            <label>Vezetéknév*</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Keresztnév*</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Születésnap*</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>E-mail*</label>
            <input type="email" required />
          </div>

          <button type="submit">Küldés</button>
        </form>
      </section>

      {/*footer*/}
      <footer className="footer">
        <div className="footer-top">

          <div className="footer-box">
            <strong>Wifi név: kiskacsa</strong>
            <p>Jelszó: kiskacsa2026</p>
          </div>

          <div className="footer-box">
            <strong>+36-52/410-802</strong>
            <p>kiskacsaerendeles@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          Minden jog fenntartva! © KisKacsa Étterem – Nyírbátor
        </div>
      </footer>
    </div>
  );
}