import React from 'react';
import styles from '../styles/Home.module.css';

function Dropdown() {
  const handleDelete = () => {
    if (typeof window !== 'undefined') {
      // if (!JSON.parse(localStorage.getItem('note'))) {
      //   <p>There is no note to delete</p>
      // } else {
      //   localStorage.remove('note');
      // }
      localStorage.remove('note');
    }
  }
  return (
    <div className={styles.dropdownContent}>
       <p onClick={handleDelete}>Delete all notes</p>
    <p>Sort by modified time</p>
    <p>Sort by tabs</p>
    </div>
  )
}

export default Dropdown;