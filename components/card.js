import React, { useState } from 'react';
import styles from '../styles/Card.module.css'
import { useRouter } from 'next/router';

function Card({ note, category, date, id }) {
  const router = useRouter();
  const [edit, setEdit] = useState('')
const handleEdit = (id) => {
  router.push('/edit');
}
  return (
    <div className={styles.box} style={ category === 'Uncategorized' ? {borderLeft: '4px solid turquoise'} : {borderLeft: '4px solid blue'}} onClick={() => handleEdit(id)} >
      <p className={styles.note}>{note}</p>
      <div className={styles.textbox}>
        <p style={ category === 'Uncategorized' ? { color:'turquoise'} : {color : 'blue'} }>{category}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  )
}

export default Card;
