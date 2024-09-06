"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { LuShare2 } from "react-icons/lu";

import styles from "@/module/ShareButton.module.css";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href); //faghat adr moghe load kar mikone mesle useEffect
  }, []);

  return (
    /*CopyToClipboard zatan onclick dar khodesh dar pas bayad use-client bashe */
    <CopyToClipboard text={url}> 
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
