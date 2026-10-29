"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del && text === word) return setDel(true);
      if (del && text === "") { setDel(false); return setI(i + 1); }
      setText(word.slice(0, text.length + (del ? -1 : 1)));
    }, !del && text === word ? 1800 : del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return <span className="grad-text">{text}<span className="caret" /></span>;
}
