import Product from "./Product";
import React from 'react';
import './App.css';

import citroenen from './assets/citroenen.jpeg';
import limoenen from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';

function App() {
  return (
     <>
     <header>
     <h1> Fruit perfection </h1>
     <button type="button"> Shop nu </button>
     </header>
     <main>
        <Product
            image={citroenen}
            title="Citroen"
            description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten.
                Van citroen kun je het vruchtvlees, het sap en de schil gebruiken.
                Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
        />

         <Product
             image={limoenen}
             title="limoen"
             description="Limoen is familie van de citroen en de sinaasappel en behoort tot de
                citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen.
                De schil is dun, vrij glad en groen."
         />

         <Product
             image={ijsblokjes}
             title="ijsblokjes"
             description="Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje.
             Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."
         />
     </main>
     </>
  );
}


export default App;
