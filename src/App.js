import React from 'react';
import { Page, Toolbar, Button, BottomToolbar, Carousel, CarouselItem, Card, Switch } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';

const data = {
  element1: {
    imgSrc: 'zadanie/3.jpg',
    content: 'Zagrożenie: Zatrucie. Wyrób nie spełnia wymagań § 5 ust. 1 rozporządzenia Ministra Rozwoju i Finansów z dnia 20 października 2016 r. w sprawie wymagań dla zabawek (Dz.U. z 2019, poz. 1816) oraz pkt 3 ,,Wymagania w zakresie właściwości chemicznych’’ ppkt 3.1.1 i ppkt 3.1.2 załącznika nr 1 do rozporządzenia, z uwagi na obecność w wyrobie ftalanu bis (2-etyloheksylu) (DEHP) w ilości (27,2% ± 4,4%) - dopuszczalna ilość nie może przekraczać 0,1%. Cztery miękkie, żółte kaczuszki różnej wielkości, wykonane z PCV',
    title: 'Kaczuszki do kąpieli żółte'
  },
  element2: {
    imgSrc: 'zadanie/3.jpg',
    content: 'Zagrożenie: Zatrucie. Wyrób nie spełnia wymagań § 5 ust. 1 rozporządzenia Ministra Rozwoju i Finansów z dnia 20 października 2016 r. w sprawie wymagań dla zabawek (Dz.U. z 2019, poz. 1816) oraz pkt 3 ,,Wymagania w zakresie właściwości chemicznych’’ ppkt 3.1.1 i ppkt 3.1.2 załącznika nr 1 do rozporządzenia, z uwagi na obecność w wyrobie ftalanu bis (2-etyloheksylu) (DEHP) w ilości (27,2% ± 4,4%) - dopuszczalna ilość nie może przekraczać 0,1%. Cztery miękkie, żółte kaczuszki różnej wielkości, wykonane z PCV',
    title: 'Kaczuszki do kąpieli żółte'
  },
  element3: {
    imgSrc: 'zadanie/3.jpg',
    content: 'Zagrożenie: Zatrucie. Wyrób nie spełnia wymagań § 5 ust. 1 rozporządzenia Ministra Rozwoju i Finansów z dnia 20 października 2016 r. w sprawie wymagań dla zabawek (Dz.U. z 2019, poz. 1816) oraz pkt 3 ,,Wymagania w zakresie właściwości chemicznych’’ ppkt 3.1.1 i ppkt 3.1.2 załącznika nr 1 do rozporządzenia, z uwagi na obecność w wyrobie ftalanu bis (2-etyloheksylu) (DEHP) w ilości (27,2% ± 4,4%) - dopuszczalna ilość nie może przekraczać 0,1%. Cztery miękkie, żółte kaczuszki różnej wielkości, wykonane z PCV',
    title: 'Kaczuszki do kąpieli żółte'
  }
}

function App() {

  return (
    <div className="App">
      <Page>
        <Toolbar>
          <div className='center'>Monite</div></Toolbar>
          <Switch checked={'checked'} onChange={() => {}}></Switch>} />
        <Card>
          <div className='img'>
            <img src="zadanie/27283-2.jpg" alt="desc"></img>

          </div>
          <div>
            <div className='title'>Kaczuszki do kąpieli żółte</div>
            <div className='content'>Zagrożenie: Zatrucie. Wyrób nie spełnia wymagań § 5 ust. 1 rozporządzenia Ministra Rozwoju i Finansów z dnia 20 października 2016 r. w sprawie wymagań dla zabawek (Dz.U. z 2019, poz. 1816) oraz pkt 3 ,,Wymagania w zakresie właściwości chemicznych’’ ppkt 3.1.1 i ppkt 3.1.2 załącznika nr 1 do rozporządzenia, z uwagi na obecność w wyrobie ftalanu bis (2-etyloheksylu) (DEHP) w ilości (27,2% ± 4,4%) - dopuszczalna ilość nie może przekraczać 0,1%. Cztery miękkie, żółte kaczuszki różnej wielkości, wykonane z PCV</div>
          </div>
          
        </Card>
        <div className='icons'>
          <div className='flexColumn'>
          <span class="lnr lnr-map-marker">Polska</span>
        <span class="lnr lnr-tag">Zabawki</span>
          </div>
        
        <span class="lnr lnr-link">UOKiK</span></div>
        

        <BottomToolbar className='carouselContainer'>
          <Carousel fullscreen swipeable itemWidth={1200} animationOptions={"duration: 0.2, delay: 0.4, timing: 'ease-in'"} >
            <CarouselItem swipeable>
              <Button className='center buttons carousel' modifier='outline' >Wszystkie</Button>
              <Button className='center buttons carousel' modifier='outline' >Sprzęt elektroniczny</Button>
              <Button className='center buttons carousel' modifier='outline' >Zabawki</Button>
              <Button className='center buttons carousel' modifier='outline' >Motoryzacja</Button>
              <Button className='center buttons carousel' modifier='outline' >Żywność</Button>
              <Button className='center buttons carousel' modifier='outline' >Nieżywność</Button>

            </CarouselItem>


          </Carousel>
        </BottomToolbar>
      </Page>
    </div>
  );
}

export default App;
