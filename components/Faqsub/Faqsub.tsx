import React, { useState } from "react";
import styles from "./Faqsub.module.css";
import FaqArrow from "../../svgs/FaqArrow";

interface FAQ {
  question: string;
  answer: string;
}

const Faqsub: React.FC<FAQ> = ({ question, answer }) => {
  const [dropdown, toggleDropdown] = useState<boolean>(false);

  return (
    <article
      className={styles["FAQ_ITEM"]}
      onClick={() => toggleDropdown(!dropdown)}
    >
      <div>
        <span>{question}</span>
        <div className={dropdown ? styles["FAQ_SVG_TRIGGER"] : ""}>
          <FaqArrow />
        </div>
      </div>
      <p className={dropdown ? styles["FAQ_DROP"] : ""}>{answer}</p>
    </article>
  );
};

export default Faqsub;
