"use client";
import React, { useState, useEffect } from "react";
import styles from "./information.module.css";
import Link from "next/link";


export default function Information() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = "Jerry's Thoughts";
  }, []);

  const closePopup = () => setOpenIndex(null);

  return (
    <div className={styles.information}>
      {/* Header (fixed at top) */}
      <header className={styles.header}>
        <Link href="/" passHref>
          <b style={{ cursor: "pointer" }}>My Quarter Life Crisis</b>
        </Link>
      </header>

      {/* Scrollable content */}
      <main className={styles.main}>
        {/* Categories list */}
        <ul className={styles.list}>
          {Object.keys(categories).map((cat, i) => (
            <li
              key={i}
              className={`${styles.listItem} ${openCategory === cat ? styles.active : ""}`}
              onClick={() => setOpenCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Show questions for selected category */}
        {openCategory && (
          <ul className={styles.subList}>
            {categories[openCategory].map((qIndex) => (
              <li
                key={qIndex}
                className={styles.listItem}
                onClick={() => setOpenIndex(qIndex)}
              >
                {getQuestion(qIndex)}
              </li>
            ))}
          </ul>
        )}

        {/* Popup for answers */}
        {openIndex !== null && (
          <div className={styles.overlay}>
            <div className={styles.popup}>
              <div className={styles.popupHeader}>
                <h2>{getQuestion(openIndex)}</h2>
                <button onClick={closePopup} className={styles.backButton}>
                  Back
                </button>
              </div>
              <div className={styles.popupContent}>
                <p>{getAnswer(openIndex)}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer (fixed at bottom) */}
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/jerry-on-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b style={{ cursor: "pointer" }}>Jerry On</b>
        </a>
      </footer>
    </div>
  );
}

const categories = {
  "Career": [0, 1, 2, 3, 4],
  "Fulfillment": [5, 6, 7, 8, 9],
  "Hobbies": [10, 11, 12, 13, 14],
  "Mental": [15, 16, 17, 18, 19],
  "Trauma": [20, 21, 22, 23, 24],
  "Enjoyment": [25, 26, 27, 28, 29],
};

const questions = [
  // Career
  "Why do I feel stuck in my career?",
  "Should I follow passion or money?",
  "How do I deal with career comparison?",
  "I feel like an imposter at work. What do I do?",
  "How do I know when it's time to quit my job?",

  // Fulfillment
  "Why don't achievements feel fulfilling?",
  "Can fulfillment come from small things?",
  "I achieve goals but feel empty—why?",
  "How do I find my purpose?",
  "Why does fulfillment fade?",

  // Hobbies
  "Are hobbies a waste of time?",
  "How do I find a hobby if I don't know what I like?",
  "I feel guilty spending time on hobbies.",
  "How do hobbies improve mental health?",
  "Can gaming count as a hobby?",

  // Mental
  "Why do I procrastinate even when I know what to do?",
  "How do I stop overthinking?",
  "What's the first step to improving mental health?",
  "How do I balance self-care and discipline?",
  "Is therapy necessary for everyone?",

  // Trauma
  "How do I know if I have unresolved trauma?",
  "Can trauma heal without therapy?",
  "Why do small things trigger me?",
  "How do I start healing trauma?",
  "Will trauma always affect me?",

  // Enjoyment
  "Why can't I enjoy things like I used to?",
  "How do I balance enjoyment with responsibilities?",
  "Is seeking pleasure bad?",
  "Why do I feel guilty for having fun?",
  "How do I rediscover joy as an adult?",
];

const answers = [
  // Career
  "Feeling stuck usually comes when stability and fulfillment don't align. A stable job can pay the bills, but if it doesn't challenge you or connect with your deeper values, it begins to feel like you're just existing. Instead of rushing, notice what energizes you and what drains you. Small steps—taking on new projects, building skills, or exploring side interests—can help you move toward growth without throwing everything away.",
  "Early in life, money builds stability and security, which is important. Passion sustains you long-term. The healthiest balance is to start with stability—cover your needs, save money—then gradually introduce passion. That way, you don't burden passion with survival pressure. Think of it like planting: first grow strong roots (security), then grow the tree (passion).",
  "Comparison is natural, but harmful if unchecked. You see someone's highlight reel, not their struggles. Instead of asking, 'Why am I behind?' ask, 'What can I learn from their journey?' Your timeline is not theirs. People peak at different ages, in different ways. If you keep watering your garden, it doesn't matter how quickly someone else's grows.",
  "Imposter syndrome happens when your self-image lags behind your reality. You've achieved something, but your brain hasn't updated its 'identity file.' Confidence doesn't come from forcing belief—it comes from evidence. Build small wins, track your progress, and let your self-image slowly catch up with the reality of your growth.",
  "Quitting isn't only about hating your job—it's noticing when your work no longer supports your growth. If you're constantly drained, see no opportunities ahead, and dread every Monday, that's your system asking for change. Quitting doesn't mean leaping into chaos—it can mean carefully planning, saving, learning, and transitioning into something new.",

  // Fulfillment
  "Achievements give a temporary high, like sugar—it fades quickly. Fulfillment comes from alignment, not trophies. If you're chasing goals for validation, they won't satisfy you. Ask: 'Do I truly want this, or do I feel I'm supposed to?' Fulfillment begins when your goals reflect your inner values, not just external pressure.",
  "Yes. Fulfillment often hides in the ordinary. A quiet coffee, journaling, or helping a friend can give deep satisfaction. The mind undervalues small joys because it's wired to chase 'big wins.' But learning to savor the small builds a steady foundation of contentment.",
  "If achievements feel empty, it usually means they're extrinsic (money, status) instead of intrinsic (growth, curiosity). That emptiness isn't failure—it's feedback. It's your system saying, 'This isn't the nourishment I need.' Begin setting goals that excite *you*, even if they don't impress others.",
  "Purpose isn't found like treasure—it's built through curiosity. Start with small things that spark interest. Over time, those threads connect into something meaningful. Waiting for clarity keeps you stuck. Taking action—even small steps—creates purpose as you move forward.",
  "Fulfillment fades because humans adapt. The new car smell, the promotion, even relationships—all lose intensity. Fulfillment isn't about chasing new highs but deepening what you already have. Learn more about your partner, explore hobbies further, or bring creativity to daily routines.",

  // Hobbies
  "Hobbies aren't a waste—they're a recharge station. They give your brain a break from performance mode, spark creativity, and reduce stress. Even if they don't earn money, they add meaning. A life full of only 'productive' work leads to burnout, while hobbies keep balance.",
  "Treat finding hobbies like experiments. Try painting, cooking, coding, hiking—without the pressure of mastery. Most hobbies feel awkward at first, but joy grows with familiarity. Exploration matters more than perfection.",
  "Guilt comes from productivity culture—the belief that every minute must produce value. But hobbies are maintenance for your mind. Without them, you're like a machine running nonstop—you burn out. Choosing joy now protects your ability to work tomorrow.",
  "Hobbies create flow states—moments where stress disappears because you're fully absorbed. They also build identity beyond work or struggles. For many, a hobby is the doorway to reconnecting with joy and self-worth.",
  "Yes—if done intentionally. Gaming can build community, relaxation, and problem-solving. But if it's only an escape from pain, it can become unhealthy. Ask yourself: 'Am I playing because I enjoy it, or to avoid something?' That reflection makes the difference.",

  // Mental
  "Procrastination isn't laziness—it's emotional resistance. Often fear of failure, perfectionism, or overwhelm. Break tasks into tiny, doable steps and celebrate progress. Address the emotion underneath instead of fighting yourself with willpower.",
  "You can't 'stop' overthinking—thoughts will always come. What you *can* do is change your relationship to them. Mindfulness teaches you to observe thoughts without attaching. Instead of wrestling with them, say, 'There's a thought—I don't need to believe it.'",
  "The first step is awareness. Track sleep, mood, stress, diet. Many try fixing themselves without noticing patterns. Once you see patterns, you can make targeted changes—like better sleep or less caffeine—that ripple into bigger improvements.",
  "Discipline and self-care aren't opposites—discipline *is* self-care when rooted in compassion. Eating well, sleeping on time, exercising aren't punishments—they're gifts to your future self. Harsh discipline becomes criticism, but kind discipline sustains growth.",
  "Not everyone needs therapy, but everyone needs reflection. Some heal through meditation, journaling, or supportive communities. Others need therapy for deeper wounds. The key is not the tool, but whether you're actively working on yourself.",

  // Trauma
  "Trauma isn't just about 'big' events. If small things trigger strong emotions, if patterns repeat in relationships, or if you shut down easily—it may be unresolved trauma. Your nervous system replays old pain in the present.",
  "Yes, healing can happen through safe relationships, mindfulness, journaling, and body practices like yoga. But therapy helps because a guide can safely walk you through what's overwhelming to face alone.",
  "Triggers happen when present experiences poke at old wounds. Your body doesn't know the difference—it reacts like the danger is still happening. Recognizing a trigger isn't weakness—it's the first step to healing.",
  "Start with safety. Build routines, breathing practices, grounding habits. Your nervous system must feel stable before processing pain. Only once safety exists can you unpack memories without being overwhelmed.",
  "Trauma leaves an imprint, like a scar. It never disappears, but it doesn't have to define you. With healing, it loses its pain and becomes part of your story. Many transform trauma into resilience and wisdom.",

  // Enjoyment
  "Losing enjoyment is called anhedonia, common in depression or burnout. Your reward system is numbed. The way back isn't forcing joy but aiming for small sparks. Even 5% joy is progress—grow it slowly over time.",
  "Balance comes from treating fun as an appointment, not a leftover. Schedule enjoyment the same way you schedule work. Rest fuels productivity. Burnout comes when enjoyment is always last priority.",
  "Pleasure isn't bad—it's part of being human. It becomes harmful only when it's the *only* way you cope, like endless scrolling or drinking. Healthy pleasure is intentional and balanced.",
  "Guilt for fun often comes from conditioning—families or cultures that equated play with laziness. But joy isn't selfish—it recharges you, making you kinder, more patient, and more effective in life.",
  "Adults forget play. Rediscover it by revisiting childhood joys, saying yes to spontaneity, or surrounding yourself with playful people. Joy reappears when you give yourself permission to be curious and imperfect again.",
];

function getQuestion(index) {
  return questions[index];
}

function getAnswer(index) {
  return answers[index];
}
