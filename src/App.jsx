// src/App.jsx
import { useState } from 'react';

const faqSections = [
  {
    id: 'about',
    title: 'About EasyMy Learning',
    questions: [
      { q: 'What is EasyMy Learning?', a: 'EasyMy Learning is an online educational platform in Nepal providing comprehensive courses for SEE preparation, Bridge Courses (+2 entrance), and scholarship exams like Kathmandu Metro (KMC) and COMPEX, with live/recorded videos, notes, MCQs, and community support.' },
      { q: 'Who can enroll?', a: 'Students from Class 8 to +2 across Nepal, especially those preparing for SEE, Bridge Courses in Science/Management/Law/CTEVT, or scholarship entrances.' },
      { q: 'What courses are offered?', a: 'Main courses: Bridge Course + Bonus (Master All Courses) for NPR 3299, Kathmandu Metro Scholarship Preparation, with bonuses like top college MCQs, notes/books, and community access.' },
      { q: 'Are classes live or recorded?', a: 'Both — live interactive sessions and high-quality recorded videos for flexible learning (access typically 3 months).' },
      { q: 'Do you provide notes and books?', a: 'Yes, digital notes, books, and MCQs from top colleges are included in courses.' },
      { q: 'How do I join the community?', a: 'Premium members get access to Telegram/WhatsApp groups for real-time updates and support.' },
    ]
  },
  {
    id: 'see',
    title: 'SEE Preparation',
    questions: [
      { q: 'Do you offer SEE courses?', a: 'Yes, comprehensive preparation with expert teachers, model questions, past papers, and mock exams.' },
      { q: 'What subjects are covered?', a: 'All compulsory SEE subjects + optional ones, with chapter-wise practice and performance tracking.' },
      { q: 'Are there free resources?', a: 'Many free videos, tips, and materials available on YouTube and the platform.' },
    ]
  },
  {
    id: 'bridge',
    title: 'Bridge Course',
    questions: [
      { q: 'What is included in Bridge Course?', a: 'Preparation for +2 entrance in Science, Management, Law, CTEVT streams + Kathmandu Metro Scholarship, with live/recorded classes, MCQs, notes, and 3-month access.' },
      { q: 'Price and enrollment?', a: 'Bridge Course + Bonus package at NPR 3299 — enroll directly on easymylearning.in.' },
      { q: 'Bonuses?', a: 'Master all courses access, top college MCQs, community support, notes/books.' },
      { q: 'Duration?', a: 'Typically 3 months access, covering the post-SEE gap period.' },
    ]
  },
  {
    id: 'scholarship',
    title: 'Scholarships',
    questions: [
      { q: 'Which scholarships do you prepare for?', a: 'Kathmandu Metropolitan City (KMC) Scholarship, COMPEX-2025 (India Embassy), Mahatma Gandhi Scholarship, and other college/government entrances.' },
      { q: 'What support is provided?', a: 'Live/recorded classes, MCQs, past papers, document guidance, essay tips, interview prep, and real-time updates.' },
      { q: 'Are there dedicated courses?', a: 'Yes, specific preparation courses like Kathmandu Metro Scholarship Entrance.' },
      { q: 'Success rate?', a: 'Many students secure seats in top institutions with structured preparation and bonuses.' },
    ]
  }
];

export default function App() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (sectionId, index) => {
    const key = `${sectionId}-${index}`;
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root { height: 100%; width: 100%; }
        body { font-family: 'Poppins', sans-serif; }

        /* White page background, centered card */
        .app-wrapper {
          min-height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        /* Single Card with dark gradient */
        .faq-card {
          width: 100%;
          max-width: 800px;
  background: linear-gradient(to bottom,
  #1a0d00 0%,
  #331a03 8%,
  #441f05 16%,
  #552805 24%,
  #663300 32%,
  #773800 40%,

  /* lightest middle */
  #dd5600 50%,

  #773800 60%,
  #663300 68%,
  #552805 76%,
  #441f05 84%,
  #331a03 92%,
  #1a0d00 100%
  );
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(0,0,0,0.2);
          color: white;
        }

        /* Compact Hero */
        .hero {
          text-align: center;
          padding: 32px 24px 28px;
        }

        .hero h1 {
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .hero .highlight {
          background: linear-gradient(90deg, #ffcc80, #ffdab9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 0.8rem;
          margin-bottom: 20px;
          opacity: 0.9;
        }

        .nav-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }

        .nav-pill {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          padding: 5px 14px;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 500;
          text-decoration: none;
        }

        /* Very Compact FAQ Content */
        .faq-content {
          padding: 20px 28px 30px;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffdab9;
          margin-bottom: 12px;
        }

        .accordion {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 25px rgba(0,0,0,0.15);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .faq-item:last-child { border-bottom: none; }

        .faq-header {
          width: 100%;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .number-circle {
          width: 24px;
          height: 24px;
          background: #ffaa55;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.7rem;
          flex-shrink: 0;
        }

        .question-text {
          flex: 1;
          font-size: 0.8rem;
          font-weight: 500;
          color: #ffffff;
        }

        .plus-icon {
          font-size: 1.2rem;
          font-weight: 300;
          color: #ffddaa;
          transition: transform 0.4s ease, color 0.3s ease;
        }

        .faq-item.open .plus-icon {
          transform: rotate(45deg);
          color: #ffffff;
        }

        .answer-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, padding 0.5s ease, opacity 0.4s ease;
          opacity: 0;
        }

        .faq-item.open .answer-content {
          max-height: 300px;
          padding: 8px 18px 12px 54px;
          opacity: 1;
        }

        .answer-text {
          font-size: 0.75rem;
          line-height: 1.4;
          color: #ffddaa;
        }

        /* Super Compact CTA */
        .cta {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 24px 20px;
          text-align: center;
          border-radius: 12px;
          margin-top: 24px;
          box-shadow: 0 6px 25px rgba(0,0,0,0.15);
        }

        .cta h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .cta p {
          font-size: 0.8rem;
          color: #ffddaa;
          margin-bottom: 16px;
        }

        .cta-button {
          display: inline-block;
          background: #ffaa55;
          color: white;
          padding: 6px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .app-wrapper { padding: 12px; }
          .faq-card { border-radius: 16px; }
          .hero { padding: 28px 16px 24px; }
          .hero h1 { font-size: 1.7rem; }
          .nav-pill { padding: 5px 12px; font-size: 0.7rem; }
          .faq-content { padding: 16px 20px 24px; }
          .section-title { font-size: 1rem; margin-bottom: 10px; }
          .faq-header { padding: 8px 14px; gap: 8px; }
          .number-circle { width: 22px; height: 22px; font-size: 0.65rem; }
          .question-text { font-size: 0.75rem; }
          .faq-item.open .answer-content { padding-left: 48px; }
          .answer-text { font-size: 0.7rem; }
          .cta { padding: 20px 16px; margin-top: 20px; }
          .cta h3 { font-size: 1rem; }
          .cta p { font-size: 0.75rem; }
        }
      `}</style>

      <div className="app-wrapper">
        <div className="faq-card">
          <header className="hero">
            <div className="hero-content">
              <h1>Frequently Asked <span className="highlight">Questions</span></h1>
              <p>Everything you need to know about EasyMy Learning courses and programs</p>
              <div className="nav-pills">
                {faqSections.map(sec => (
                  <a key={sec.id} href={`#${sec.id}`} className="nav-pill">{sec.title}</a>
                ))}
              </div>
            </div>
          </header>

          <div className="faq-content">
            {faqSections.map(section => (
              <section key={section.id} id={section.id}>
                <h2 className="section-title">{section.title}</h2>
                <div className="accordion">
                  {section.questions.map((item, idx) => {
                    const key = `${section.id}-${idx}`;
                    const isOpen = openKey === key;

                    return (
                      <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                        <button className="faq-header" onClick={() => toggle(section.id, idx)}>
                          <span className="number-circle">{idx + 1}</span>
                          <span className="question-text">{item.q}</span>
                          <span className="plus-icon">+</span>
                        </button>
                        <div className="answer-content">
                          <div className="answer-text"><p>{item.a}</p></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}

            <div className="cta">
              <h3>Still have questions?</h3>
              <p>Contact our support team for help</p>
              <a href="https://easymylearning.in" target="_blank" rel="noopener" className="cta-button">
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}