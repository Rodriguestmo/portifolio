"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on first visit per session
    if (!sessionStorage.getItem("preloaderShown")) {
      setShow(true);
    }
  }, []);

  if (!show) return null;
  return <Preloader onComplete={() => setShow(false)} />;
}
