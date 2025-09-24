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
          <b style={{ cursor: "pointer" }}>Foundations</b>
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
  "Career": Array.from({ length: 10 }, (_, i) => i),                  
  "Fulfillment": Array.from({ length: 10 }, (_, i) => i + 10),       
  "Hobbies": Array.from({ length: 10 }, (_, i) => i + 20),            
  "Mental": Array.from({ length: 10 }, (_, i) => i + 30),             
  "Trauma": Array.from({ length: 10 }, (_, i) => i + 40),            
  "Enjoyment": Array.from({ length: 10 }, (_, i) => i + 50),          
};

const questions = [
  // Career
  "How do I know if I'm on the right career path?",
  "What if I chose the wrong degree?",
  "How can I build confidence in networking?",
  "How do I stay motivated in a boring job?",
  "How do I handle constant rejection from job applications?",
  "Can side projects really help my career?",
  "How do I balance stability with ambition?",
  "What if I don't feel passionate about any career?",
  "How do I overcome fear of failure in my career?",
  "How do I keep growing once I've 'made it'?",

  // Fulfillment
  "How do I know what truly fulfills me?",
  "Can relationships provide fulfillment?",
  "How do I deal with feeling ungrateful even when I have 'enough'?",
  "Is fulfillment the same as happiness?",
  "Why does chasing success feel empty?",
  "Can helping others bring fulfillment?",
  "Is it possible to feel fulfilled without big achievements?",
  "How does gratitude affect fulfillment?",
  "Why do I feel restless even when life is good?",
  "Can fulfillment change over time?",

  // Hobbies
  "How do hobbies help me connect with others?",
  "Can hobbies turn into careers?",
  "Why do I lose interest in hobbies quickly?",
  "Are creative hobbies better than passive ones?",
  "How do I make time for hobbies with a busy schedule?",
  "Can a hobby reduce burnout?",
  "How do hobbies help with identity?",
  "What if I’m not 'good' at my hobby?",
  "Can I have too many hobbies?",
  "How do I find joy in old hobbies again?",

  // Mental
  "How do I stop negative self-talk?",
  "Why does motivation come in waves?",
  "How do I set boundaries without guilt?",
  "How does diet and exercise impact mental health?",
  "Why do I sabotage my own progress?",
  "Can meditation really help?",
  "How do I deal with loneliness?",
  "How do I recover from burnout?",
  "Why do I fear success?",
  "How do I build emotional resilience?",

  // Trauma
  "Why do I feel numb sometimes?",
  "Can trauma affect relationships?",
  "Why do I attract unhealthy dynamics?",
  "How do I deal with shame from trauma?",
  "Can creative expression help heal trauma?",
  "Why do I avoid thinking about the past?",
  "How do I explain trauma to loved ones?",
  "Is it normal to not remember parts of my childhood?",
  "How do I build trust again?",
  "Can trauma lead to growth?",

  // Enjoyment
  "How do I make time for fun as an adult?",
  "Why does fun feel 'childish' sometimes?",
  "Can I enjoy life without spending money?",
  "How do I enjoy the present instead of worrying about the future?",
  "Is it okay if my fun looks different than others?",
  "Why does planned fun sometimes feel less enjoyable?",
  "How do I enjoy alone time?",
  "Can fun be productive?",
  "Why do I feel anxious during downtime?",
  "How do I build a lifestyle filled with joy?",
];

const answers = [
  // Career answers
  "Feeling stuck usually comes when stability and fulfillment don't align. A stable job can pay the bills, but if it doesn't challenge you or connect with your deeper values, it begins to feel like you're just existing. Instead of rushing, notice what energizes you and what drains you. Small steps—taking on new projects, building skills, or exploring side interests—can help you move toward growth without throwing everything away.",
  "Early in life, money builds stability and security, which is important. Passion sustains you long-term. The healthiest balance is to start with stability—cover your needs, save money—then gradually introduce passion. That way, you don't burden passion with survival pressure. Think of it like planting: first grow strong roots (security), then grow the tree (passion).",
  "Comparison is natural, but harmful if unchecked. You see someone's highlight reel, not their struggles. Instead of asking, 'Why am I behind?' ask, 'What can I learn from their journey?' Your timeline is not theirs. People peak at different ages, in different ways. If you keep watering your garden, it doesn't matter how quickly someone else's grows.",
  "Imposter syndrome happens when your self-image lags behind your reality. You've achieved something, but your brain hasn't updated its 'identity file.' Confidence doesn't come from forcing belief—it comes from evidence. Build small wins, track your progress, and let your self-image slowly catch up with the reality of your growth.",
  "Quitting isn't only about hating your job—it's noticing when your work no longer supports your growth. If you're constantly drained, see no opportunities ahead, and dread every Monday, that's your system asking for change. Quitting doesn't mean leaping into chaos—it can mean carefully planning, saving, learning, and transitioning into something new.",
  "Choosing the 'wrong' degree or field doesn't mean your time was wasted. Every path builds transferable skills—communication, problem solving, resilience—that can serve you in different careers. Many people pivot successfully later in life. The key is asking: 'What parts of this do I still enjoy, and what do I want to leave behind?'",
  "Family often projects their fears or dreams onto your career path. Their pressure usually comes from love, but it can weigh you down. The balance comes from listening respectfully, then taking ownership of your choices. Ultimately, you are the one who lives with the consequences, not them.",
  "Yes. Not everyone has a single 'dream job.' For many, career is just one aspect of life, not the core of identity. Some people find fulfillment in hobbies, relationships, or service. It's okay if work is simply 'good enough' while joy comes from other areas.",
  "Confidence grows from evidence, not just mindset shifts. Keep track of your progress—skills you've learned, challenges you've overcome, feedback you've received. Over time, reviewing that evidence builds a more solid belief in your own ability.",
  "Risk and safety aren't opposites—they're partners. Staying safe builds stability, while risk brings growth. The healthiest path is 'calculated risk'—taking opportunities where the downside is manageable, but the upside could open doors.",
  "Not knowing what career you want is more common than you think. Exploration is the solution, not certainty. Try internships, projects, or volunteering. Treat it like testing different doors until you find the one that feels right.",
  "Career setbacks feel personal, but they're often circumstantial. Healing requires separating your self-worth from external events. Reflection, upskilling, and reframing setbacks as redirection can turn them into stepping stones rather than failures.",
  "Networking isn't about schmoozing—it's about building genuine connections. Approach it with curiosity, not desperation. Ask about people's stories, interests, and challenges. Real relationships create opportunities far more than forced ones.",
  "Feeling behind comes from comparing your internal struggles with others’ external highlights. People peak at different times. Focus on your trajectory and daily improvements. Life isn't a race—it's a marathon with multiple paths.",
  "Ambition drives growth, but unchecked ambition leads to burnout. Balance comes from sustainable effort: working hard in seasons, then resting. Remember, long-term success is built on cycles of growth and recovery.",

  // Fulfillment
  "Achievements give a temporary high, like sugar—it fades quickly. Fulfillment comes from alignment, not trophies. If you're chasing goals for validation, they won't satisfy you. Ask: 'Do I truly want this, or do I feel I'm supposed to?' Fulfillment begins when your goals reflect your inner values, not just external pressure.",
  "Yes. Fulfillment often hides in the ordinary. A quiet coffee, journaling, or helping a friend can give deep satisfaction. The mind undervalues small joys because it's wired to chase 'big wins.' But learning to savor the small builds a steady foundation of contentment.",
  "If achievements feel empty, it usually means they're extrinsic (money, status) instead of intrinsic (growth, curiosity). That emptiness isn't failure—it's feedback. It's your system saying, 'This isn't the nourishment I need.' Begin setting goals that excite you, even if they don't impress others.",
  "Purpose isn't found like treasure—it's built through curiosity. Start with small things that spark interest. Over time, those threads connect into something meaningful. Waiting for clarity keeps you stuck. Taking action—even small steps—creates purpose as you move forward.",
  "Fulfillment fades because humans adapt. The new car smell, the promotion, even relationships—all lose intensity. Fulfillment isn't about chasing new highs but deepening what you already have. Learn more about your partner, explore hobbies further, or bring creativity to daily routines.",
  "Separating your worth from achievements takes reframing. Instead of saying 'I am my success,' remind yourself 'I am someone who tries, learns, and grows.' When worth is based on effort, not outcome, fulfillment becomes more stable.",
  "Yes. Many people feel unfulfilled despite 'having it all.' It's a sign that external markers don't always satisfy inner needs. Fulfillment comes when what you value internally is expressed externally.",
  "Relationships deeply impact fulfillment. Humans are wired for connection. Even the best personal achievements feel hollow if we have no one to share them with. Fulfillment grows through giving and receiving love, trust, and support.",
  "Helping others often deepens fulfillment because it connects you to something bigger than yourself. Service provides meaning beyond personal gain. However, fulfillment can also come from creating, learning, or exploring—it's not limited to altruism.",
  "Yes. Fulfillment doesn't require a career. It can come from art, family, travel, or growth. The key is aligning your time with your values, not necessarily your paycheck.",
  "Long-term fulfillment requires sustainability. That means consistent practices like gratitude, reflection, curiosity, and presence. It's less about big wins and more about steady nourishment of your inner world.",
  "Feeling like something is missing is often your mind pointing toward unmet needs—emotional, spiritual, or creative. Listening to that feeling rather than suppressing it often guides you toward growth.",
  "Gratitude and fulfillment are deeply connected. Gratitude helps you savor what you have rather than constantly reaching for more. Fulfillment without gratitude feels like a treadmill—you keep running but never arrive.",
  "Fulfillment evolves with age. In youth, it often comes from exploration and achievement. Later, it comes from depth—relationships, wisdom, legacy. What fulfills you now may not fulfill you in 20 years, and that's natural.",
  "Chasing the next big thing is exhausting because the finish line keeps moving. Learning to pause, celebrate progress, and enjoy the journey is what allows fulfillment to catch up to achievement.",

  // Hobbies
  "Hobbies aren't a waste—they're a recharge station. They give your brain a break from performance mode, spark creativity, and reduce stress. Even if they don't earn money, they add meaning. A life full of only 'productive' work leads to burnout, while hobbies keep balance.",
  "Treat finding hobbies like experiments. Try painting, cooking, coding, hiking—without the pressure of mastery. Most hobbies feel awkward at first, but joy grows with familiarity. Exploration matters more than perfection.",
  "Guilt comes from productivity culture—the belief that every minute must produce value. But hobbies are maintenance for your mind. Without them, you're like a machine running nonstop—you burn out. Choosing joy now protects your ability to work tomorrow.",
  "Hobbies create flow states—moments where stress disappears because you're fully absorbed. They also build identity beyond work or struggles. For many, a hobby is the doorway to reconnecting with joy and self-worth.",
  "Yes—if done intentionally. Gaming can build community, relaxation, and problem-solving. But if it's only an escape from pain, it can become unhealthy. Ask yourself: 'Am I playing because I enjoy it, or to avoid something?' That reflection makes the difference.",
  "Making time for hobbies requires treating them as important appointments, not extras. Even 20 minutes a week can be enough to keep the flame alive. Small, consistent doses matter more than rare marathons.",
  "It's normal to lose interest in hobbies over time. Interests evolve. Instead of forcing old hobbies, treat it as an invitation to explore new ones. Growth often requires fresh curiosity.",
  "Turning hobbies into careers can be rewarding but risky. When money enters, pressure can replace joy. Some people thrive on it, others feel suffocated. The key is balance—protecting some hobbies just for play.",
  "Comparison kills joy in hobbies. Remember, the purpose isn't to be 'the best' but to enjoy the process. Progress is measured by your growth, not someone else's performance.",
  "Hobbies may feel childish because culture glorifies productivity. But play is vital at every age. Adults need unstructured joy too—it keeps imagination alive.",
  "Hobbies are powerful tools for building community. Joining clubs, classes, or online groups can connect you with people who share your passions, expanding both skill and friendship.",
  "Yes, hobbies buffer against burnout. They refill your energy and remind you that life has meaning outside work. They're not distractions—they're fuel.",
  "Learning new hobbies boosts confidence because it shows your brain you're capable of growth. Every new skill rewires you to believe, 'I can figure things out.'",
  "Unproductive hobbies are still valuable because they provide joy, presence, and relaxation. Productivity isn't the only metric of worth. Pleasure and curiosity are enough.",
  "Reconnecting with old hobbies requires lowering expectations. Approach them with curiosity, not pressure. Even if you're rusty, the joy of rediscovery can be powerful.",

  // ===== Mental =====
  "Procrastination isn't laziness—it's usually emotional resistance. Fear of failure, perfectionism, or overwhelm make tasks feel heavier than they are. Break goals into small, clear steps and celebrate progress. Addressing the emotions underneath works better than forcing productivity.",
  "You can't stop thoughts, but you can stop attaching to them. Mindfulness and journaling help you observe without judgment. Instead of fighting thoughts, try labeling them: 'That's just a thought, not a fact.' This creates distance and reduces overthinking.",
  "The first step is awareness. Track sleep, mood, diet, and stress levels. Recognizing patterns makes it easier to know what's helping or hurting. Small consistent changes—like better rest, hydration, or exercise—create a strong foundation for mental health.",
  "Self-care and discipline work together, not against each other. True discipline—like sleeping on time, exercising, or eating well—is self-care. When discipline is rooted in kindness instead of criticism, it becomes sustainable and nourishing.",
  "Therapy isn't necessary for everyone, but reflection is. Some people heal through writing, meditation, or community, while others need professional help for deeper wounds. The important part is having a consistent practice of self-awareness and healing.",
  "Motivation struggles often come from expecting inspiration first. In reality, action creates motivation. Start with tiny, achievable steps. Success sparks energy, which builds momentum. Don't wait to feel ready—start small and let readiness catch up.",
  "Stress management comes from creating outlets before stress piles up. Breathing exercises, exercise, creative hobbies, or journaling help release pressure. Also, setting boundaries and saying no protects you from overload in the first place.",
  "Future anxiety comes from trying to control the uncontrollable. Focus on what you can influence today. Ground yourself in present routines—like exercise, gratitude, or planning tomorrow's tasks. The more present you feel, the less overwhelming the future becomes.",
  "Sleep is the foundation of mental health. Poor sleep affects mood, focus, memory, and even anxiety. Protect sleep by having consistent routines, limiting screens before bed, and treating rest as non-negotiable. Good sleep makes other habits easier to maintain.",
  "Rebuilding after burnout requires slowing down before speeding up. Rest first, then reintroduce structure gently. Reflect on what caused burnout—overcommitment, lack of boundaries, or ignoring needs—and adjust. Recovery is gradual, not instant.",
  "Self-sabotage often comes from fear of success, fear of failure, or low self-worth. Part of you may believe you don't deserve good things. Recognize those patterns, replace harsh self-talk with compassionate reminders, and reward small wins to rebuild trust in yourself.",
  "Yes, journaling can help by giving your thoughts a safe place to land. Writing slows down racing thoughts, reveals hidden patterns, and creates perspective. It doesn't need to be formal—just consistent and honest.",
  "Negative self-talk comes from internalized criticism. Notice the voice, question it, and replace it with kinder alternatives. Ask: 'Would I say this to a friend?' Training your brain to respond with compassion gradually rewires those patterns.",
  "Loneliness deeply impacts mental health because humans are wired for connection. Without support, stress feels heavier and joy feels muted. Building even small, meaningful connections—like a hobby group, volunteering, or reaching out to a friend—makes a big difference.",
  "Daily habits build resilience more than big, rare actions. Practices like gratitude, movement, sleep, deep breathing, and connecting with others add up. Think of them as mental push-ups—small reps that build long-term strength.",

  // ===== Trauma =====
  "Unresolved trauma shows up when past pain leaks into the present. Strong emotional reactions to small triggers, repeating unhealthy patterns, or shutting down under stress can all be signs. Trauma isn't only about big events—it's also about how your body holds old wounds.",
  "Yes, some trauma can heal through mindfulness, safe relationships, journaling, and body practices like yoga. But therapy helps for deeper pain because a guide can hold space when it's overwhelming to go alone.",
  "Triggers happen when something today reminds your body of past pain. The nervous system reacts as if the old danger is still happening. Recognizing triggers is the first step to separating past from present.",
  "Start with safety. Build grounding routines—breathing, journaling, moving your body. Only once you feel stable should you slowly explore painful memories. Healing is step-by-step, not rushing back into the wound.",
  "Trauma leaves an imprint, like a scar. It may never fully disappear, but it doesn't have to define you. With healing, the pain softens and becomes part of your story, often giving you resilience and empathy.",
  "Talking about trauma with family requires safety. Choose people who are open to listening, not dismissing. Share only what feels comfortable, and set boundaries if needed. Remember, healing doesn't depend on their full understanding—it depends on your self-expression.",
  "Yes, trauma affects physical health. Chronic stress can impact sleep, digestion, immune system, and even increase risk of illness. The mind and body aren't separate—healing trauma often improves physical health too.",
  "It's normal not to remember trauma clearly. Memory often fragments as a protective mechanism. What matters isn't perfect recall, but the impact it has today. Healing can focus on present patterns, not only the past story.",
  "Guilt tied to trauma often comes from blaming yourself for what happened. This is a survival response—your brain tries to make sense of chaos by assigning fault. Healing means reminding yourself: 'What happened was not my fault.'",
  "Feeling unsafe even in safe situations is common with trauma. Your nervous system stays on high alert, always scanning for danger. Grounding, therapy, and repeated safe experiences retrain your body to relax again.",
  "Trauma affects relationships by shaping how safe or unsafe connection feels. It can lead to fear of intimacy, trust issues, or codependency. Awareness, communication, and therapy can help break these cycles.",
  "Yes, it's normal to avoid thinking about trauma. Avoidance is a defense mechanism to prevent overwhelm. The goal isn't to force memories, but to build enough safety that your mind can face them without shutting down.",
  "Mindfulness helps by grounding you in the present when trauma pulls you into the past. Observing sensations and breathing creates distance between 'then' and 'now,' reducing emotional overwhelm.",
  "Yes, trauma can create strengths. Survivors often develop resilience, empathy, creativity, and awareness. While trauma isn't something anyone chooses, healing can transform it into a source of wisdom and compassion.",
  "Supporting someone with trauma means listening without judgment, respecting boundaries, and not rushing their process. Offer presence, not solutions. Encouragement, patience, and reminding them they're not alone makes a huge difference.",

  // ===== Enjoyment =====
  "Losing enjoyment is called anhedonia—it's common in depression or burnout. Your brain's reward system gets numbed. Instead of forcing joy, look for small sparks and build slowly. Even 5% enjoyment is progress.",
  "Balance comes from treating enjoyment like a priority, not an afterthought. Schedule fun the same way you schedule work. Rest fuels productivity and prevents burnout.",
  "Seeking pleasure isn't bad—it's part of being human. It only becomes harmful if it's your only coping tool. Healthy pleasure is intentional, balanced, and meaningful.",
  "Guilt for fun often comes from cultural or family conditioning that equated rest with laziness. Joy isn't selfish—it recharges you, making you more patient, creative, and effective.",
  "Rediscover joy as an adult by revisiting childhood interests, saying yes to small adventures, and letting go of the pressure to be perfect. Playfulness opens the door to joy.",
  "Enjoyment can be cultivated. It's not only natural—it grows with practice. Gratitude, mindfulness, and slowing down help you notice joy in everyday life.",
  "Fun can feel meaningless when it's used only as escape. True enjoyment connects with values, curiosity, and presence. Ask: 'Am I doing this for joy or just distraction?'",
  "Everyday life becomes more enjoyable when you slow down, add creativity, and savor small rituals—like coffee, music, or walks. Joy hides in ordinary details when you're present.",
  "Responsibilities and fun can mix—by making tasks playful, involving others, or rewarding yourself with enjoyable breaks. Blending both prevents life from feeling one-sided.",
  "Feeling disconnected even during fun is common in burnout. Your nervous system is still stuck in stress. Recovery takes time—keep engaging in joy, even if it feels flat at first, and slowly your capacity to feel will return.",
  "Play helps adults as much as kids—it lowers stress, sparks creativity, and strengthens relationships. Adults who play often report higher resilience and happiness.",
  "Yes, it's okay to prioritize enjoyment. Joy isn't a luxury—it's fuel. A life with only work and no play eventually collapses into burnout.",
  "Chasing pleasure without satisfaction happens when you seek surface-level highs (scrolling, bingeing) instead of deeper joys. Try focusing on meaningful experiences that connect you with yourself or others.",
  "Creativity fuels enjoyment by adding novelty and expression. Cooking a new dish, painting, writing, or even rearranging your space injects fun into daily life.",
  "Yes—enjoyment supports healing. Joy reduces stress hormones, builds resilience, and reminds you that life can hold goodness even during difficulty.",
];

function getQuestion(index) {
  return questions[index];
}

function getAnswer(index) {
  return answers[index];
}
