import React from 'react';
import styles from '../styles/Home.module.css';
import { backArrow } from '../components/svg';
import { useRouter } from 'next/router';

function Edit({ note }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{ display: 'flex', position: 'relative'}}>
        <div style={{ position: 'absolute', top: '28px'}} onClick={() => router.push('/')}>{backArrow}</div>
      <p className={styles.header3}>Reading</p>
        </div>
      </div>
      <div className={styles.inputBody}>
      <textarea type="text" defaultValue={note}  />
      </div>
      <div></div>
      </div>
  );
}

export default Edit;