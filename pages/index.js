import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { action, plus } from "../components/svg";
import CardTemp from "../components/cardTemp";
import { useRouter } from "next/router";
import Dropdown from "../components/dropdown";

function Home() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const addNewnote = () => {
    router.push("/add-new");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Notepad</p>
        <div className={styles.action} onClick={() => setShow(true)}>
          <span style={{ cursor: "pointer" }}>{action}</span>
          {show && <Dropdown />}
        </div>
      </div>
      <div>
        <CardTemp />
      </div>
      <div className={styles.footer}>
        <div className={styles.round} onClick={addNewnote}>
          {plus}
        </div>
      </div>
    </div>
  );
}

export default Home;
