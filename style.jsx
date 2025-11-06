import React, { useMemo, useState, useEffect, useRef } from "react";

function useFredoka() {
  useEffect(() => {
    if (document.getElementById("gf-fredoka")) return;
    const link = document.createElement("link");
    link.id = "gf-fredoka";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

const theme = {
  bg: "bg-[#fff7f0]",
  pink: "#ff5fa2",
  yellow: "#ffd166",
  text: "#402a2c",
  soft: "#ffe8f1",
  ring: "#ffb3c7",
};
