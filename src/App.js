import React, { useState } from 'react';
import { Page, Toolbar, Button, BottomToolbar, Carousel, CarouselItem, Switch } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';
import CardComponent from './CardComponent'

const data = [
  {
    imgSrc: "'./zadanie/27283-2.jpg'",
    content: 'Zagrożenie: Zatrucie. Wyrób nie spełnia wymagań § 5 ust. 1 rozporządzenia Ministra Rozwoju i Finansów z dnia 20 października 2016 r. w sprawie wymagań dla zabawek (Dz.U. z 2019, poz. 1816) oraz pkt 3 ,,Wymagania w zakresie właściwości chemicznych’’ ppkt 3.1.1 i ppkt 3.1.2 załącznika nr 1 do rozporządzenia, z uwagi na obecność w wyrobie ftalanu bis (2-etyloheksylu) (DEHP) w ilości (27,2% ± 4,4%) - dopuszczalna ilość nie może przekraczać 0,1%. Cztery miękkie, żółte kaczuszki różnej wielkości, wykonane z PCV',
    title: 'Kaczuszki do kąpieli żółte',
    country: 'Polska',
    tag: 'Zabawki',
    link: 'UOKiK',
    hiddenTag: 'all'
  },
  {
    imgSrc: "'./zadanie/27320-1.jpg'",
    content: 'Zagrożenie: Uduszenie. Wyrób nie spełnia wymagań § 5 ust. 1 i ust. 2 rozporządzenia Ministra Rozwoju i Finansów z dnia 20 października 2016 r. w sprawie wymagań dla zabawek (Dz.U. poz. 1730) oraz w związku z ppkt 1.4.2 i ppkt 1.4.3 załącznika nr 1 pkt 1 „Wymagania w zakresie właściwości fizycznych i mechanicznych” do rozporządzenia, z uwagi na odłączenie od zabawki przyssawki z linką, która jest jednocześnie małym elementem. Ponadto na wyrobie nie umieszczono oznakowania CE',
    title: 'Kot maskotka miękka wypchana',
    country: 'Polska',
    tag: 'Sprzęt elektroniczny',
    link: 'UOKiK',
    time: '1 godz.',
    hiddenTag: 'all'
  },
  {
    imgSrc: "'./zadanie/3.jpg'",
    content: 'Przedsiębiorca ALMOT Mikołaj Sibora Sp.k. powiadomił Prezesa Urzędu Ochrony Konkurencji i Konsumentów, że wyposażenie akcesoryjne - Asystent Zmiany Biegów Triumph (A9930469), dopasowane do motocykli marki Triumph, modele: SPEED TRIPLE Z SERI NN5 i NN6, może wywołać nieprawidłowe wzajemne położenie elementów mechanizmu zmiany biegów. Jeśli ten stan wystąpi i pozostanie niewykryty, może to prowadzić do niedokładnej zmiany biegów (tylko zmiana biegu na wyższy – nie dotyczy zmiany biegów na niższy), co prowadzi do sporadycznych, fałszywych wskazań biegu neutralnego, co z kolei zwiększa ryzyko dla bezpieczeństwa kierującego.',
    title: 'Wyposażenie akcesoryjne Asystent Zmiany Biegów Triumph',
    country: 'Polska',
    tag: 'Zabawki',
    link: 'UOKiK',
    hiddenTag: 'all'
  }
]


function App() {
  const [current, setCurrent] = useState('Wszystkie')
  let filteredData;
  const [filtered, setFiltered] = useState(data)


  return (
    <div className="App">
      <Page>
        <Toolbar>
          <div className='center'>Monite</div>
        </Toolbar>
        <div className='flex'>
          <h1>Najnowsze alerty</h1>
          <Switch checked={false} onChange={() => { }}>
          </Switch>
        </div>
        {filtered.map(data =>
          <CardComponent title={data.title} content={data.content} imgSrc={data.imgSrc} country={data.country} tag={data.tag} link={data.link} time={data.time} />)}
        <BottomToolbar className='carouselContainer'>
          <Carousel fullscreen swipeable itemWidth={1200} >
            <CarouselItem swipeable>
              <Button  modifier='outline' className={'Wszystkie' === current ? 'active2 center buttons carousel' : 'notActive center buttons carousel'} onClick={() => {
                filteredData = data.filter(data => data.tag === 'Wszystkie')
                setFiltered(data)
                setCurrent('Wszystkie')
              }}  >Wszystkie</Button>
              <Button  modifier='outline' className={'Sprzęt elektroniczny' === current ? 'active2 center buttons carousel' : 'notActive center buttons carousel'} onClick={() => {
                filteredData = data.filter(data => data.tag === 'Sprzęt elektroniczny')
                setFiltered(filteredData)
                setCurrent('Sprzęt elektroniczny')
              }}  >Sprzęt elektroniczny</Button>
              <Button className={'Zabawki' === current ? 'active2 center buttons carousel' : 'notActive center buttons carousel'} modifier='outline' onClick={() => {
                filteredData = data.filter(data => data.tag === 'Zabawki')
                setFiltered(filteredData)
                setCurrent('Zabawki')
              }} >Zabawki</Button>
              <Button  className={'Motoryzacja' === current ? 'active2 center buttons carousel' : 'notActive center buttons carousel'} modifier='outline' onClick={() => {
                filteredData = data.filter(data => data.tag === 'Motoryzacja')
                setFiltered(filteredData)
                setCurrent('Motoryzacja')
              }} >Motoryzacja</Button>
              <Button  modifier='outline' className={'Żywność' === current ? 'active2 center buttons carousel' : 'notActive center buttons carousel'} onClick={() => {
                filteredData = data.filter(data => data.tag === 'Żywność')
                setFiltered(filteredData)
                setCurrent('Żywność')
              }} >Żywność</Button>
              <Button modifier='outline' className={'Nieżwyność' === current ? 'active2 center buttons carousel' : 'notActive center buttons carousel'} onClick={() => {
                filteredData = data.filter(data => data.tag === 'Nieżywność')
                setFiltered(filteredData)
                setCurrent('Nieżywność')
              }} >Nieżywność</Button>

            </CarouselItem>
          </Carousel>
        </BottomToolbar>
      </Page>
    </div>
  );
}

export default App;
