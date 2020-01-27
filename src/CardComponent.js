import React from 'react'
import { Card } from 'react-onsenui';

function CardComponent(props) {
  const { title, content, imgSrc, country, tag, link, time } = props;
  return (

    <div >
      <Card>
        <div className='img'>
          <img src={`'${imgSrc}'`} alt="description"></img>
        </div>
        <div>
          <div className='title'>{title} </div>
          <div className='content'>{content}</div>
        </div>

      </Card>
      <div className='flexIcons'>
        <div className='icons'>
          <div className='flexColumn'>
            <div>
            <span className="lnr lnr-map-marker">{country}</span>
            <span className="lnr lnr-link">{link}</span></div>
          </div>
          <div><span className="lnr lnr-tag">{tag}</span></div>
          </div>
        {{ time } ? <span className="lnr lnr-clock time">{time}</span> : null}
      </div>


    </div>
  )
}

export default CardComponent



