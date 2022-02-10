import React from 'react';
import Card from './card';
import Welcome from './welcome';

function CardTemp() {

  return (
    <>
    {typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('note')).map((item) => {
      const { value, date, category, id } = item
      return (
        <>
        <Card note={value} category={category} date={date} key={value} id={id} />
    </>
      )
    }) : ''}

{/* {typeof window !== 'undefined' ?  (JSON.parse(localStorage.getItem('note')) === null || [] ? <Welcome /> : JSON.parse(localStorage.getItem('note')).map((item) => {
      const { value, date, category } = item
      return (
        <>
        <Card note={value} category={category} date={date} key={value} id={id} />
    </>
      )
    })): ''} */}
    </>
  )
}

export default CardTemp;