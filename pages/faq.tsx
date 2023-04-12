import React from "react";
import styles from "../styles/faq.module.css";
import Faqsub from "../components/Faqsub/Faqsub";

const faq = () => {
  return (
    <main className={styles["faq"]}>
      <h1>Frequently Asked Questions</h1>
      <h4>
        Flex is the only saas business platform that lets you run your business
        on one platform, seamlessly across all digital channels.
      </h4>
      <Faqsub
        question="How long does it take to ship my order?"
        answer="Orders are usually shipped within 1-2 business days after placing the order."
      />
      <Faqsub
        question="How long does it take to ship my order?"
        answer="Orders are usually shipped within 1-2 business days after placing the order."
      />
      <Faqsub
        question="How long does it take to ship my order?"
        answer="Orders are usually shipped within 1-2 business days after placing the order."
      />
      <Faqsub
        question="How long does it take to ship my order?"
        answer="Orders are usually shipped within 1-2 business days after placing the order."
      />
    </main>
  );
};

export default faq;
