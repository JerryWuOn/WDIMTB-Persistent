"use client";
import React, { useState, useEffect } from "react";
import styles from './information.module.css';

export default function Information() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = "Jerry's Thoughts";
  }, []);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setTimeout(() => {
      const element = document.getElementById(`content-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <div className={styles.information}>
      <main className={styles.main}>
        <b>My Personal Thoughts</b>
        <ul className={styles.list}>
          {[...Array(11)].map((_, index) => (
            <li 
              key={index} 
              className={styles.listItem} 
              onClick={() => toggleCollapse(index)}
              aria-expanded={openIndex === index ? "true" : "false"}
              aria-controls={`content-${index}`}
            >
              <div className={styles.question}>{getQuestion(index)}</div>
              {openIndex === index && (
                <div id={`content-${index}`} className={styles.content}>
                  <p>{getAnswer(index)}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/jerry-on-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jerry On
        </a>
      </footer>
    </div>
  );
}

function getQuestion(index) {
  const questions = [
    "I don't know what career path I want to go to",
    "Everyone has their own problems, and you are the same. Do not feel sorry for yourself",
    "Self-awareness",
    "Fear of Missing Out",
    "It’s not about revenge.",
    "Proving to yourself",
    "Jumping into opportunities and not feeling embarrassed",
    "Is schooling worth it?",
    "Nobody cares about your resume if you can’t show proof of skills",
    "Why do I think more than I actually do?",
    "What does it mean to be persistent?"
  ];
  return questions[index];
}

function getAnswer(index) {
  const answers = [
    "It's completely normal to feel uncertain about your career path. Take time to explore different options and learn about the fields that interest you. Often, your true calling comes through experience and trying new things. Don't rush the process—clarity comes with exploration and reflection. Trust that with time, you'll find a path that aligns with your strengths and passions.",
      "It’s easy to get caught up in our own struggles, but remember that everyone faces challenges. You're not alone in feeling overwhelmed, and it's important to recognize that others have their own battles. Instead of dwelling on your problems, focus on how you can solve them and grow from the experience. Compassion for yourself and others can create a healthier mindset and help you navigate difficult moments without feeling sorry for yourself.",
      "Self-awareness is the foundation of personal growth. It involves understanding your own emotions, thoughts, and actions, and how they affect your life. When you know yourself, you’re able to make better decisions and align your actions with your true values. Developing self-awareness takes time and effort, but it’s a powerful tool for building confidence and resilience in the face of challenges.",
      "The fear of missing out (FOMO) is often a delusion fueled by comparisons. It’s easy to think you're missing out on something important, but the truth is that you're exactly where you're supposed to be. Focus on what truly matters to you and trust that your journey is unique. Others' paths may seem appealing, but they don’t have the same context or meaning for you. Embrace your own journey and stop worrying about what you might be missing.",
      "Revenge may feel like a way to regain control, but it only keeps you trapped in negative emotions. Instead of seeking revenge, focus on your own growth and success. Let go of grudges and channel your energy into building a better future for yourself. Revenge is temporary, but the peace you gain from moving forward is lasting and empowering.",
      "Proving yourself is not about impressing others; it’s about challenging your own limits. The most important victories are the ones you win for yourself. Every time you push yourself beyond what you thought possible, you gain confidence and resilience. Let your actions speak for your capabilities, and trust that your growth will be the most rewarding part of the journey.",
      "Opportunities are meant to be seized, and hesitation often leads to missed chances. Don’t let embarrassment hold you back—everyone starts somewhere. Jumping into new opportunities builds experience and resilience, and any discomfort will fade with time. The more you take chances, the more you grow, so embrace those moments of vulnerability as part of your journey.",
      "Schooling can be a valuable tool for gaining knowledge, but it's not the only path to success. It provides structure, discipline, and foundational learning, but true growth comes from hands-on experience and continuous self-improvement. Assess what you need—whether it’s formal education or real-world learning—and make decisions based on your goals. Ultimately, education is what you make of it, and there’s always room to grow outside of traditional schooling.",
      "Your resume can only get you so far; employers want to see your abilities in action. It’s important to have skills that you can demonstrate, whether through projects, a portfolio, or hands-on experience. The world values what you can do, not just what’s listed on paper. Focus on developing skills that are relevant to your field, and let your work speak for itself.",
      "Overthinking often leads to inaction. It’s easy to get caught up in analysis and miss the opportunity to act. The more you focus on thoughts without following through, the more you delay your progress. Stop letting perfectionism paralyze you—take action, learn from your mistakes, and keep moving forward. Your future is built on what you do, not just what you think about.",
      "Persistence is the quality of continuing to pursue something despite challenges, setbacks, or obstacles. It’s about staying committed to your goals and pushing through difficult times, even when things seem tough. Being persistent requires resilience and a willingness to adapt and learn from failures. It’s not about rushing the process, but rather maintaining focus and consistently working toward your objectives, no matter the difficulties that arise along the way."
  ];
  return answers[index];
}
