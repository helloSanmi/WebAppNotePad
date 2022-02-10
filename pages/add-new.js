import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { getCurrentDate } from '../components/utils';
import { useRouter } from "next/router";


function Addnew() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [jwt, setJwt] = useState(1);

  const handleSave = () => {
    const oldItems = JSON.parse(localStorage.getItem('note')) || [];
    setJwt(jwt+1);
    const newItems = {value, category: 'Uncategorized', date: getCurrentDate(), id: jwt};
    oldItems.push(newItems);
    localStorage.setItem('note', JSON.stringify(oldItems));
    setValue('');
  };

  const handleCancel = () => {
    setValue('');
    router.push('/');
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.header2} onClick={handleCancel}>Cancel</p>
        <p className={styles.header2} onClick={handleSave}>Save</p>
      </div>
      <div className={styles.inputBody}>
      <textarea type="text" placeholder="Type your note..." onChange={(e) => setValue(e.target.value)} value={value} />
      </div>
    </div>
  );
}

export default Addnew;
