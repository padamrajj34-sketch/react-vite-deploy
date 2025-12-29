// src/App.jsx
import { useState, useMemo } from 'react';

const faqSections = [
  {
    id: 'bridge-basic',
    title: 'A.Bridge Course Program for SEE Graduates (+2 Transition)',
    questions: [
      { q: 'What is the Bridge Course program offered by EasyMy Learning?', a: 'The Bridge Course is a structured, short-term preparation program designed for students who have passed the SEE (Secondary Education Examination) and are transitioning to +2 or equivalent programs. It strengthens academic foundations, revises core subjects, and prepares students for +2 coursework and entrance exams across Science, Management, Law, and CTEVT streams.' },
      { q: 'Who is eligible to enroll in the Bridge Course?', a: 'Any student who has successfully completed SEE (Grade 10) and plans to study +2 (Science, Management, Law, or CTEVT) is eligible. The course is especially beneficial for students who want strong conceptual clarity before entering Class 11.' },
      { q: 'What is the main purpose of the Bridge Course?', a: 'The main purpose is to bridge the academic gap between Grade 10 and +2 by strengthening fundamentals, improving problem-solving skills, and preparing students for entrance exams and scholarships.' },
      { q: 'Which academic streams does the Bridge Course cover?', a: 'The Bridge Course covers Science, Management, Law, and CTEVT/Technical streams.' },
      { q: 'What subjects are taught in the Science Bridge Course?', a: 'Physics, Chemistry, Biology, Mathematics, and English are taught according to the +2 syllabus foundation.' },
      { q: 'What subjects are taught in the Management Bridge Course?', a: 'Accountancy, Economics, Business Mathematics, Business Studies, and English are covered as foundational subjects.' },
      { q: 'What is the duration of the Bridge Course?', a: 'The Bridge Course runs for approximately three months.' },
      { q: 'When does the Bridge Course usually start and end?', a: 'The course generally starts soon after SEE results (around April) and ends before +2 admissions begin.' },
      { q: 'How often are Bridge Course classes conducted?', a: 'Classes are conducted daily with multiple live sessions to ensure complete syllabus coverage.' },
      { q: 'Where are the Bridge Course classes conducted?', a: 'All classes are conducted online via Zoom.' },
      { q: 'Are classes recorded for later viewing?', a: 'Yes. All live classes are recorded and made available 24×7 in the student dashboard.' },
      { q: 'What happens if a student misses a live class?', a: 'Students can watch the recorded lecture anytime without missing any content.' },
      { q: 'How many students are allowed in each batch?', a: 'Each batch is limited (approximately 500 students) to maintain teaching quality.' },
      { q: 'How can I enroll in the Bridge Course?', a: 'Enrollment is done online through the EasyMy Learning website using QR-based or online payment methods.' },
      { q: 'What study materials are provided?', a: 'Students receive PDF notes, Bridge Course books, solution manuals, and MCQ practice sets.' },
      { q: 'Are entrance exam MCQs included?', a: 'Yes. MCQs for top +2 colleges and scholarship exams are included.' },
      { q: 'Are tests conducted during the Bridge Course?', a: 'Yes. Weekly MCQ-based tests are conducted to track progress.' },
      { q: 'Are there prizes or rewards during the course?', a: 'Yes. Weekly top performers receive certificates, rewards, and recognition.' },
      { q: 'Will students receive a certificate after course completion?', a: 'Yes. A course completion certificate is provided.' },
      { q: 'What language is used to teach the Bridge Course?', a: 'Classes are primarily in English with Nepali explanations for clarity.' },
      { q: 'Is personal doubt-solving available?', a: 'Yes. Doubts are resolved during live classes and through WhatsApp/Telegram support groups.' },
      { q: 'Why should I choose EasyMy Learning’s Bridge Course?', a: 'Because it offers structured learning, expert teachers, recorded classes, scholarship preparation, career guidance, and exceptional value at an affordable cost.' },
    ]
  },
  {
    id: 'scholarships',
    title: 'B. Metro & National Scholarship FAQs',
    questions: [
      { q: 'What is the Kathmandu Metropolitan City (Metro) Scholarship?', a: 'It is a merit-based government scholarship that covers partial or full +2 education fees for eligible SEE graduates studying in Kathmandu.' },
      { q: 'Does EasyMy Learning help prepare for Metro Scholarships?', a: 'Yes. Metro Scholarship entrance preparation is integrated into the Bridge Course.' },
      { q: 'Who is eligible for the Metro Scholarship?', a: 'Eligibility depends on SEE GPA and residency/school criteria set by the Metropolitan City.' },
      { q: 'How do I apply for the Metro Scholarship?', a: 'Applications are submitted through the official Metro portal, with guided support from EasyMy Learning.' },
      { q: 'Is there an entrance exam for Metro Scholarships?', a: 'Yes. Selection is primarily based on an entrance exam.' },
      { q: 'Does EasyMy Learning provide mock tests for scholarship exams?', a: 'Yes. Topic-wise MCQs and weekly mock tests are provided.' },
      { q: 'Which other scholarships does EasyMy Learning support?', a: 'Lalitpur, Birgunj, Janakpur, Pokhara Metropolitan Scholarships, MGSS, and GJSS.' },
      { q: 'Are scholarship form-filling sessions conducted?', a: 'Yes. Step-by-step Zoom and WhatsApp-based form-filling sessions are organized.' },
      { q: 'Are scholarship applications free?', a: 'Yes. Scholarship applications themselves are free; EasyMy Learning charges only for training and guidance.' },
      { q: 'How do students receive scholarship updates?', a: 'Updates are shared via WhatsApp, Telegram, email, and social media.' },
    ]
  },
  {
    id: 'teaching',
    title: 'C. Teaching Team & Mentorship',
    questions: [
      { q: 'Who teaches at EasyMy Learning?', a: 'Courses are taught by the EML Teacher Team consisting of experienced subject experts.' },
      { q: 'What qualifications do the teachers have?', a: 'Teachers have strong academic backgrounds, subject specialization, and online teaching experience.' },
      { q: 'How do teachers interact with students?', a: 'Through live Zoom classes, WhatsApp doubt-solving, and personal mentoring.' },
      { q: 'Is one-on-one mentoring available?', a: 'Yes. Premium students receive lifetime personal guidance via WhatsApp.' },
      { q: 'Are guest lectures conducted?', a: 'Yes. Career guidance, AI, and skill-based guest sessions are conducted.' },
      { q: 'How is student performance evaluated?', a: 'Performance is tracked through weekly tests, quizzes, and continuous feedback.' },
    ]
  },
  {
    id: 'support',
    title: 'D. Student Support, Community & Technology',
    questions: [
      { q: 'Are WhatsApp or Telegram groups provided?', a: 'Yes. Dedicated student support groups are provided for every batch.' },
      { q: 'Can parents contact EasyMy Learning?', a: 'Yes. Parents can contact via official phone numbers, email, or support channels.' },
      { q: 'Is career counseling available?', a: 'Yes. Regular seminars and personal counseling sessions are conducted.' },
      { q: 'Are internships offered to students?', a: 'Yes. Internship opportunities are offered to top-performing students.' },
      { q: 'Is study-abroad guidance available?', a: 'Yes. Guidance for India and other countries is provided.' },
      { q: 'Are free learning resources available?', a: 'Yes. Free YouTube videos, podcasts, demo sessions, and articles are available.' },
    ]
  },
  {
    id: 'about',
    title: 'E. About EasyMy Learning (Organization & Trust)',
    questions: [
      { q: 'What is EasyMy Learning?', a: 'EasyMy Learning is a Nepal-based EdTech platform focused on quality education, scholarships, and career guidance.' },
      { q: 'Where is EasyMy Learning located?', a: 'Kalaiya, Bara, Nepal, with services delivered nationwide through online platforms.' },
      { q: 'How can I contact EasyMy Learning?', a: 'Via official phone numbers, website contact form, or social media channels.' },
      { q: 'Does EasyMy Learning have a mobile app?', a: 'Yes. Students can access all courses through both web and mobile applications.' },
      { q: 'Does EasyMy Learning offer scholarships or discounts?', a: 'Yes. Early-bird discounts, referral rewards, and merit-based scholarships are offered.' },
      { q: 'Why should parents and students trust EasyMy Learning?', a: 'Because of structured programs, transparent guidance, proven scholarship success, experienced teachers, and a strong student-support ecosystem.' },
    ]
  },
  {
    id: 'bridge-advanced',
    title: 'A. Bridge Course (Advanced & Practical)',
    questions: [
      { q: 'Is the Bridge Course suitable for average students?', a: 'Yes. The Bridge Course is specially designed for average and above-average students to strengthen weak concepts and build confidence before +2.' },
      { q: 'Is the Bridge Course helpful for top-ranking students?', a: 'Yes. High-performing students benefit from advanced problem-solving, competitive MCQs, and scholarship-focused preparation.' },
      { q: 'Does the Bridge Course follow the NEB +2 syllabus?', a: 'Yes. The content is aligned with the NEB +2 curriculum and entrance exam patterns.' },
      { q: 'Are entrance-oriented questions emphasized in teaching?', a: 'Yes. Teachers focus on concept-based and entrance-oriented questions throughout the course.' },
      { q: 'Does the Bridge Course help reduce Class 11 pressure?', a: 'Yes. Students enter +2 with prior knowledge, reducing stress and academic pressure.' },
      { q: 'Are revision sessions conducted during the course?', a: 'Yes. Regular revision and recap sessions are conducted before weekly tests.' },
      { q: 'Is time management taught in the Bridge Course?', a: 'Yes. Students learn exam-time management strategies and study planning.' },
      { q: 'Can students interact with classmates?', a: 'Yes. Students collaborate through WhatsApp/Telegram groups and live sessions.' },
      { q: 'Are real exam-level questions discussed in class?', a: 'Yes. Teachers solve previous entrance-style and model exam questions.' },
      { q: 'Does the Bridge Course help improve confidence?', a: 'Yes. Continuous practice, tests, and mentoring significantly boost student confidence.' },
    ]
  },
  {
    id: 'scholarships-advanced',
    title: 'B. Scholarships & Competitive Exams (Advanced)',
    questions: [
      { q: 'Does EasyMy Learning guide students for Lalitpur Metro Scholarship?', a: 'Yes. Guidance for Lalitpur Metropolitan City Scholarship is provided.' },
      { q: 'Are Birgunj and Pokhara Metro Scholarships covered?', a: 'Yes. Preparation and form-filling guidance for Birgunj and Pokhara scholarships are supported.' },
      { q: 'Are scholarship-specific syllabi explained separately?', a: 'Yes. Teachers explain scholarship-specific topics during preparation sessions.' },
      { q: 'Does EasyMy Learning help with scholarship document verification?', a: 'Yes. Students are guided on correct document submission and verification steps.' },
      { q: 'Are practice exams similar to actual scholarship exams?', a: 'Yes. MCQs are designed to closely match real exam difficulty and format.' },
      { q: 'What if scholarship rules change suddenly?', a: 'EasyMy Learning immediately updates students and adjusts guidance accordingly.' },
      { q: 'Does EasyMy Learning assist after scholarship results?', a: 'Yes. Guidance continues for admission confirmation and college reporting.' },
      { q: 'Can students prepare for multiple scholarships simultaneously?', a: 'Yes. The Bridge Course supports preparation for multiple scholarships together.' },
      { q: 'Are weaker students also supported for scholarships?', a: 'Yes. Extra guidance and revision support are provided for motivated students.' },
      { q: 'Does EasyMy Learning guarantee scholarships?', a: 'No. Scholarships depend on performance, but preparation significantly improves chances.' },
    ]
  },
  {
    id: 'teaching-quality',
    title: 'C. Teaching Quality & Learning Experience',
    questions: [
      { q: 'Are teachers trained for online teaching?', a: 'Yes. All teachers are trained in digital and interactive online instruction.' },
      { q: 'Do teachers use real-life examples?', a: 'Yes. Real-life and practical examples are used for better understanding.' },
      { q: 'Are doubt-clearing sessions scheduled separately?', a: 'Yes. Dedicated doubt-clearing slots are provided when required.' },
      { q: 'Do teachers track individual student progress?', a: 'Yes. Performance is monitored through tests and class participation.' },
      { q: 'Are students encouraged to ask questions freely?', a: 'Yes. A safe and interactive learning environment is maintained.' },
      { q: 'Is teaching more concept-based or exam-based?', a: 'Teaching is concept-based first, then exam-oriented.' },
      { q: 'Are shy students supported?', a: 'Yes. Teachers encourage shy students through personal follow-ups.' },
      { q: 'Do teachers provide motivation and mentoring?', a: 'Yes. Regular motivation and mentoring are part of the program.' },
      { q: 'Are classes suitable for rural students?', a: 'Yes. Language clarity and recorded classes support rural students well.' },
      { q: 'Is learning monitored beyond live classes?', a: 'Yes. Teachers monitor test results and group activity continuously.' },
    ]
  },
  {
    id: 'tech-advanced',
    title: 'D. Technology, Access & Support (Advanced)',
    questions: [
      { q: 'Is the learning platform easy to use?', a: 'Yes. The platform is student-friendly and accessible on mobile and desktop.' },
      { q: 'Can students learn using a mobile phone only?', a: 'Yes. A smartphone with internet is sufficient.' },
      { q: 'Is technical support available?', a: 'Yes. Dedicated support is available for login and access issues.' },
      { q: 'Are recorded classes downloadable?', a: 'Students can stream recordings anytime; downloads depend on platform policy.' },
      { q: 'What if internet connectivity is poor?', a: 'Recorded classes help students continue learning despite connectivity issues.' },
      { q: 'Are reminders sent for classes and tests?', a: 'Yes. Notifications are shared via WhatsApp and the platform.' },
      { q: 'Is attendance compulsory?', a: 'Live attendance is recommended but recordings allow flexibility.' },
      { q: 'Are parents informed about progress?', a: 'Parents can contact support for updates if needed.' },
      { q: 'Is student data secure?', a: 'Yes. Student data is handled securely and confidentially.' },
      { q: 'Is there lifetime access to materials?', a: 'Yes. Recorded lectures and notes remain accessible after course completion.' },
    ]
  },
  {
    id: 'outcomes',
    title: 'E. Outcomes, Trust & Future Pathways',
    questions: [
      { q: 'Does the Bridge Course help in college admissions?', a: 'Yes. Strong preparation improves entrance exam and admission performance.' },
      { q: 'Do students perform better in Class 11 after this course?', a: 'Yes. Most students report improved understanding and confidence.' },
      { q: 'Are success stories shared publicly?', a: 'Yes. Scholarship and admission achievements are regularly shared.' },
      { q: 'Can parents attend counseling sessions?', a: 'Yes. Parents are welcome in counseling and guidance sessions.' },
      { q: 'Does EasyMy Learning provide long-term guidance?', a: 'Yes. Mentorship continues even after course completion.' },
      { q: 'Are alumni connected with EasyMy Learning?', a: 'Yes. Alumni stay connected through community groups.' },
      { q: 'Can students rewatch classes during +2?', a: 'Yes. Recordings remain useful throughout Class 11 and 12.' },
      { q: 'Does the Bridge Course support career clarity?', a: 'Yes. Career guidance sessions help students choose the right stream.' },
      { q: 'Is EasyMy Learning suitable for parents’ trust?', a: 'Yes. Transparency, guidance, and results build strong parental trust.' },
      { q: 'What makes EasyMy Learning different from others?', a: 'Its structured Bridge Course, scholarship integration, expert teachers, continuous mentoring, and strong student community make it unique.' },
    ]
  },
  {
    id: 'fees-policies',
    title: 'F. Fees, Payments, Refunds & Policies',
    questions: [
      { q: 'Is the Bridge Course affordable for middle-income families?', a: 'Yes. The course is priced affordably with high value compared to private tuition.' },
      { q: 'Are installment payment options available?', a: 'Installment options may be announced during special enrollment periods.' },
      { q: 'Are hidden charges involved?', a: 'No. All fees are transparently communicated before enrollment.' },
      { q: 'Is GST or tax applicable on course fees?', a: 'Applicable taxes are included as per prevailing regulations.' },
      { q: 'Do students need to buy extra books?', a: 'No. All required study materials are provided digitally.' },
      { q: 'Is the course fee refundable?', a: 'Refunds are subject to EasyMy Learning’s official refund policy.' },
      { q: 'Can fees be transferred to another student?', a: 'No. Enrollment is non-transferable.' },
      { q: 'Are discounts available for siblings?', a: 'Sibling or group discounts may be offered during promotions.' },
      { q: 'Is financial assistance available?', a: 'Yes. Merit-based fee support may be provided.' },
      { q: 'Are receipts provided after payment?', a: 'Yes. Digital payment confirmation is provided.' },
      { q: 'What happens if payment fails?', a: 'Students can retry or contact support for assistance.' },
      { q: 'Can international students enroll?', a: 'Yes. Students outside Nepal can enroll in online batches.' },
      { q: 'Is currency conversion supported?', a: 'International payments depend on the payment gateway used.' },
      { q: 'Is late enrollment allowed?', a: 'Late enrollment may be allowed with access to recordings.' },
      { q: 'Are demo classes available before payment?', a: 'Yes. Demo or orientation sessions are occasionally conducted.' },
      { q: 'Is there a penalty for late joining?', a: 'No. Students can catch up via recordings.' },
      { q: 'Are fees the same every year?', a: 'Fees may vary depending on features and offers.' },
      { q: 'Are discounts announced publicly?', a: 'Yes. Discounts are announced via official channels.' },
      { q: 'Can schools sponsor student fees?', a: 'Yes, institutional sponsorships are welcomed.' },
      { q: 'Is a written invoice available for institutions?', a: 'Yes. Institutional invoices can be issued on request.' },
      { q: 'Are referral benefits available?', a: 'Yes. Students can earn referral rewards.' },
      { q: 'Is fee validity limited to one batch?', a: 'Yes. Fees apply to the enrolled batch only.' },
      { q: 'Are refunds allowed after course completion?', a: 'No. Refunds are not applicable after completion.' },
      { q: 'What if a student withdraws mid-course?', a: 'Access remains, but refunds depend on policy.' },
      { q: 'Is parental consent required for payment?', a: 'Parental approval is recommended for minors.' },
      { q: 'Can fees be paid by bank transfer?', a: 'Yes. QR and bank transfers are supported.' },
      { q: 'Are cash payments accepted?', a: 'Generally no; digital payments are preferred.' },
      { q: 'Are promotional prices time-limited?', a: 'Yes. Offers are valid for limited periods.' },
      { q: 'Can old students rejoin at a discount?', a: 'Yes. Alumni discounts may be offered.' },
      { q: 'Are course fees published on the website?', a: 'Yes. Official fees are published during enrollment.' },
      { q: 'Is there a price difference by stream?', a: 'Usually no; pricing is standardized.' },
      { q: 'Are fees negotiable?', a: 'Fees are fixed except during official offers.' },
      { q: 'Are scholarships adjustable against fees?', a: 'Yes. Internal scholarships reduce payable fees.' },
      { q: 'Are parents informed about payments?', a: 'Yes, confirmations can be shared with parents.' },
      { q: 'Is fee misuse possible?', a: 'No. Payments are securely tracked.' },
      { q: 'Can fees be refunded in emergencies?', a: 'Exceptional cases are reviewed individually.' },
      { q: 'Is there a written refund policy?', a: 'Yes. The policy is published on the website.' },
      { q: 'Who decides refund approvals?', a: 'The EasyMy Learning management team.' },
      { q: 'Are payment records stored securely?', a: 'Yes. All records are securely maintained.' },
      { q: 'Can students request payment history?', a: 'Yes. Payment history can be requested.' },
    ]
  },
  {
    id: 'parents-safety',
    title: 'G. Parents’ Concerns & Safety',
    questions: [
      { q: 'Is EasyMy Learning safe for minors?', a: 'Yes. All sessions are academic and supervised.' },
      { q: 'Are classes monitored?', a: 'Yes. Classes are monitored by coordinators.' },
      { q: 'Is student behavior moderated in groups?', a: 'Yes. Groups are strictly moderated.' },
      { q: 'Are parents allowed in sessions?', a: 'Yes. Parents may attend counseling sessions.' },
      { q: 'Is student data protected?', a: 'Yes. Data privacy is strictly maintained.' },
      { q: 'Are recordings shared publicly?', a: 'No. Recordings are restricted to enrolled students.' },
      { q: 'Is content age-appropriate?', a: 'Yes. Content is designed for SEE/+2 students.' },
      { q: 'Are teachers background-verified?', a: 'Yes. Teachers are vetted before onboarding.' },
      { q: 'Are complaints handled professionally?', a: 'Yes. Complaints follow a defined escalation process.' },
      { q: 'Can parents raise academic concerns?', a: 'Yes. Parents can contact support anytime.' },
      { q: 'Are attendance records maintained?', a: 'Yes. Attendance and participation are tracked.' },
      { q: 'Is screen time controlled?', a: 'Yes. Sessions are scheduled with breaks.' },
      { q: 'Are students pressured academically?', a: 'No. Supportive learning is emphasized.' },
      { q: 'Is there emotional support for students?', a: 'Yes. Mentors provide motivation and support.' },
      { q: 'Are rural students equally supported?', a: 'Yes. Language and recordings support them.' },
      { q: 'Is bullying tolerated?', a: 'No. Zero-tolerance policy applies.' },
      { q: 'Are parental meetings conducted?', a: 'Yes. When required.' },
      { q: 'Can parents verify teacher credentials?', a: 'Yes. Information can be shared on request.' },
      { q: 'Are holidays respected?', a: 'Yes. Academic calendars are followed.' },
      { q: 'Is there a grievance redressal system?', a: 'Yes. Formal grievance handling exists.' },
      { q: 'Are students encouraged ethically?', a: 'Yes. Integrity and honesty are promoted.' },
      { q: 'Are exams conducted fairly?', a: 'Yes. Exams follow standardized rules.' },
      { q: 'Are results manipulated?', a: 'No. Results are system-generated.' },
      { q: 'Can parents track progress?', a: 'Yes. Via updates and support requests.' },
      { q: 'Is there counseling for weak students?', a: 'Yes. Extra mentoring is provided.' },
      { q: 'Are success claims verified?', a: 'Yes. Achievements are documented.' },
      { q: 'Are fake promises made?', a: 'No. Transparent communication is followed.' },
      { q: 'Is EasyMy Learning legally registered?', a: 'Yes. It operates as a registered Pvt. Ltd.' },
      { q: 'Are terms and conditions clear?', a: 'Yes. They are published publicly.' },
      { q: 'Can parents opt out of groups?', a: 'Yes. On request.' },
      { q: 'Is student consent respected?', a: 'Yes. Ethical practices are followed.' },
      { q: 'Are recordings time-limited?', a: 'No. Access remains after completion.' },
      { q: 'Is parental guidance encouraged?', a: 'Yes. Parents are partners in learning.' },
      { q: 'Are students overburdened?', a: 'No. Balanced schedules are maintained.' },
      { q: 'Is feedback taken from parents?', a: 'Yes. Feedback is welcomed.' },
      { q: 'Are teachers approachable?', a: 'Yes. Teachers are student-friendly.' },
      { q: 'Is discipline maintained?', a: 'Yes. Academic discipline is enforced.' },
      { q: 'Are emergencies handled sensitively?', a: 'Yes. Flexibility is provided.' },
      { q: 'Is EasyMy Learning transparent?', a: 'Yes. Transparency is a core value.' },
      { q: 'Can parents recommend improvements?', a: 'Yes. Suggestions are encouraged.' },
    ]
  },
  {
    id: 'quality-vision',
    title: 'H. Quality, Trust & Long-Term Vision',
    questions: [
      { q: 'Does EasyMy Learning focus on quality or quantity?', a: 'Quality is the top priority.' },
      { q: 'Is the curriculum reviewed annually?', a: 'Yes. Content is updated every year.' },
      { q: 'Are student outcomes measured?', a: 'Yes. Through exams and scholarships.' },
      { q: 'Does EasyMy Learning adapt to syllabus changes?', a: 'Yes. Updates are immediate.' },
      { q: 'Are teachers evaluated regularly?', a: 'Yes. Performance reviews are conducted.' },
      { q: 'Is innovation encouraged?', a: 'Yes. New teaching tools are adopted.' },
      { q: 'Is AI used in learning?', a: 'Yes. AI tools are introduced responsibly.' },
      { q: 'Are students future-ready?', a: 'Yes. Skills beyond syllabus are taught.' },
      { q: 'Is EasyMy Learning scalable?', a: 'Yes. Online infrastructure supports growth.' },
      { q: 'Is the vision long-term?', a: 'Yes. Long-term student success is the goal.' },
      { q: 'Are ethical standards maintained?', a: 'Yes. Ethics guide all operations.' },
      { q: 'Does EasyMy Learning support underprivileged students?', a: 'Yes. Financial support initiatives exist.' },
      { q: 'Is teacher-student respect emphasized?', a: 'Yes. Mutual respect is core.' },
      { q: 'Are partnerships formed with colleges?', a: 'Yes. Academic collaborations are pursued.' },
      { q: 'Does EasyMy Learning publish results transparently?', a: 'Yes. Results are openly shared.' },
      { q: 'Is community impact considered?', a: 'Yes. Education impact is prioritized.' },
      { q: 'Does EasyMy Learning evolve yearly?', a: 'Yes. Continuous improvement is followed.' },
      { q: 'Is student feedback implemented?', a: 'Yes. Feedback drives changes.' },
      { q: 'Is EasyMy Learning student-centric?', a: 'Yes. Students are the focus.' },
      { q: 'Can EasyMy Learning be trusted long-term?', a: 'Yes. Trust is built through results.' },
    ]
  },
  {
    id: 'legal-operations',
    title: 'I. Advanced, Legal, Operations & Future Expansion',
    questions: [
      { q: 'Does EasyMy Learning comply with Nepal education laws?', a: 'Yes. EasyMy Learning operates in compliance with applicable Nepalese education and business regulations.' },
      { q: 'Is EasyMy Learning a legally registered company?', a: 'Yes. EasyMy Learning is registered as a Private Limited company in Nepal.' },
      { q: 'Are official agreements used for partnerships?', a: 'Yes. Formal agreements and MOUs are used for institutional partnerships.' },
      { q: 'Does EasyMy Learning collaborate with +2 colleges?', a: 'Yes. It collaborates with multiple colleges for guidance and admissions support.' },
      { q: 'Are government scholarship rules strictly followed?', a: 'Yes. All official scholarship rules are followed without manipulation.' },
      { q: 'Does EasyMy Learning influence scholarship results?', a: 'No. Scholarship results are entirely merit-based and decided by authorities.' },
      { q: 'Are fake claims or guarantees avoided?', a: 'Yes. EasyMy Learning maintains transparent and ethical communication.' },
      { q: 'Is EasyMy Learning suitable for rural Nepal students?', a: 'Yes. Online delivery and bilingual teaching support rural students.' },
      { q: 'Does EasyMy Learning provide low-bandwidth support?', a: 'Yes. Recorded classes and notes support low internet connectivity.' },
      { q: 'Are classes aligned with NEB changes each year?', a: 'Yes. Curriculum is updated annually based on NEB changes.' },
      { q: 'Does EasyMy Learning use AI responsibly?', a: 'Yes. AI tools are used ethically to support learning, not replace teaching.' },
      { q: 'Are AI tools mandatory for students?', a: 'No. AI tools are optional learning aids.' },
      { q: 'Is student consent required for recordings?', a: 'Yes. Recording policies follow consent and platform guidelines.' },
      { q: 'Are student images or data used for promotion?', a: 'Only with prior consent.' },
      { q: 'Is plagiarism discouraged?', a: 'Yes. Academic honesty is strictly enforced.' },
      { q: 'Does EasyMy Learning handle examination stress counseling?', a: 'Yes. Stress-management guidance is provided.' },
      { q: 'Are mock exams proctored?', a: 'They follow standardized fairness protocols.' },
      { q: 'Are certificates verifiable?', a: 'Yes. Certificates can be verified with EasyMy Learning.' },
      { q: 'Can institutions verify student participation?', a: 'Yes. Participation confirmation can be issued.' },
      { q: 'Does EasyMy Learning maintain audit records?', a: 'Yes. Operational and financial records are maintained.' },
      { q: 'Are instructors contractually bound?', a: 'Yes. Teachers operate under professional contracts.' },
      { q: 'Is teacher replacement arranged if required?', a: 'Yes. Backup faculty plans exist.' },
      { q: 'Does EasyMy Learning scale batches responsibly?', a: 'Yes. Quality control measures are applied.' },
      { q: 'Are internal audits conducted?', a: 'Yes. Periodic internal reviews are done.' },
      { q: 'Does EasyMy Learning have a code of conduct?', a: 'Yes. Staff and students follow a code of conduct.' },
      { q: 'Are disciplinary actions documented?', a: 'Yes. Actions follow documented procedures.' },
      { q: 'Is feedback anonymity respected?', a: 'Yes. Anonymous feedback is allowed.' },
      { q: 'Does EasyMy Learning publish annual reports?', a: 'Operational summaries may be shared publicly.' },
      { q: 'Are student success metrics tracked long-term?', a: 'Yes. Alumni outcomes are tracked where possible.' },
      { q: 'Does EasyMy Learning support career transitions?', a: 'Yes. Guidance continues beyond +2.' },
      { q: 'Are alumni mentoring programs planned?', a: 'Yes. Alumni mentoring initiatives are planned.' },
      { q: 'Does EasyMy Learning plan offline centers?', a: 'Future expansion may include hybrid centers.' },
      { q: 'Is international expansion planned?', a: 'Future expansion may include international services.' },
      { q: 'Are partnerships with universities planned?', a: 'Yes. Higher education collaborations are planned.' },
      { q: 'Does EasyMy Learning support technical skill pathways?', a: 'Yes. IT and skill-based courses are expanding.' },
      { q: 'Is EasyMy Learning sustainable long-term?', a: 'Yes. The model supports sustainable growth.' },
      { q: 'Does EasyMy Learning invest in teacher training?', a: 'Yes. Continuous teacher development is prioritized.' },
      { q: 'Are teaching methods reviewed yearly?', a: 'Yes. Pedagogy is regularly improved.' },
      { q: 'Does EasyMy Learning measure parent satisfaction?', a: 'Yes. Parent feedback is collected.' },
      { q: 'Are community outreach programs planned?', a: 'Yes. Education outreach initiatives are part of the mission.' },
      { q: 'Does EasyMy Learning address digital divide issues?', a: 'Yes. Flexible access models are used.' },
      { q: 'Are scholarship awareness drives conducted?', a: 'Yes. Awareness programs are regularly conducted.' },
      { q: 'Does EasyMy Learning support girls’ education?', a: 'Yes. Inclusive education is promoted.' },
      { q: 'Are differently-abled students supported?', a: 'Support is provided where feasible.' },
      { q: 'Does EasyMy Learning align with national education goals?', a: 'Yes. It aligns with Nepal’s education development goals.' },
      { q: 'Are dispute resolutions time-bound?', a: 'Yes. Defined timelines exist.' },
      { q: 'Is escalation matrix available?', a: 'Yes. Clear escalation channels are defined.' },
      { q: 'Does EasyMy Learning maintain service SLAs?', a: 'Yes. Support response standards are followed.' },
      { q: 'Is EasyMy Learning transparent about limitations?', a: 'Yes. No unrealistic promises are made.' },
      { q: 'Can policies change over time?', a: 'Yes. Policies evolve with updates.' },
      { q: 'Are students notified of policy changes?', a: 'Yes. Official notifications are sent.' },
      { q: 'Does EasyMy Learning accept regulatory audits?', a: 'Yes. Compliance audits are supported.' },
      { q: 'Is marketing ethical and factual?', a: 'Yes. Ethical marketing standards are followed.' },
      { q: 'Are testimonials verified?', a: 'Yes. Testimonials are authentic.' },
      { q: 'Does EasyMy Learning publish disclaimers?', a: 'Yes. Legal disclaimers are used where required.' },
      { q: 'Is content copyright protected?', a: 'Yes. All content is copyrighted.' },
      { q: 'Can students reuse content commercially?', a: 'No. Content is for personal learning only.' },
      { q: 'Are third-party tools licensed?', a: 'Yes. Licensed tools are used.' },
      { q: 'Does EasyMy Learning monitor platform uptime?', a: 'Yes. System reliability is monitored.' },
      { q: 'Are backups maintained?', a: 'Yes. Data backups are maintained.' },
      { q: 'Does EasyMy Learning have disaster recovery plans?', a: 'Yes. Business continuity planning exists.' },
      { q: 'Is customer support available year-round?', a: 'Yes. Support operates continuously.' },
      { q: 'Are FAQs updated regularly?', a: 'Yes. FAQ content is updated.' },
      { q: 'Can FAQs be customized for institutions?', a: 'Yes. Institutional versions can be created.' },
      { q: 'Does EasyMy Learning support multilingual content?', a: 'Yes. English and Nepali content is supported.' },
      { q: 'Are future courses announced publicly?', a: 'Yes. New courses are announced officially.' },
      { q: 'Does EasyMy Learning accept feedback publicly?', a: 'Yes. Feedback is encouraged.' },
      { q: 'Is EasyMy Learning open to third-party reviews?', a: 'Yes. Independent reviews are welcomed.' },
      { q: 'Does EasyMy Learning maintain a roadmap?', a: 'Yes. Strategic planning is ongoing.' },
      { q: 'Are investors or partners disclosed?', a: 'Disclosures follow legal requirements.' },
      { q: 'Does EasyMy Learning support CSR initiatives?', a: 'Yes. Education-focused CSR is supported.' },
      { q: 'Are scholarship funds audited?', a: 'Yes. Internal audits are conducted.' },
      { q: 'Does EasyMy Learning train counselors professionally?', a: 'Yes. Counselors are trained.' },
      { q: 'Is student counseling confidential?', a: 'Yes. Confidentiality is maintained.' },
      { q: 'Are grievance resolutions documented?', a: 'Yes. All cases are documented.' },
      { q: 'Does EasyMy Learning comply with data protection laws?', a: 'Yes. Data protection compliance is ensured.' },
      { q: 'Are cloud services secure?', a: 'Yes. Secure cloud infrastructure is used.' },
      { q: 'Does EasyMy Learning limit admin access?', a: 'Yes. Role-based access control is applied.' },
      { q: 'Are system logs monitored?', a: 'Yes. Logs are monitored for security.' },
      { q: 'Does EasyMy Learning have ethical review practices?', a: 'Yes. Ethics guide decisions.' },
      { q: 'Are academic results independently verifiable?', a: 'Yes. Records are maintained.' },
      { q: 'Does EasyMy Learning allow media verification?', a: 'Yes. Media queries are handled formally.' },
      { q: 'Are annual goals published?', a: 'Strategic goals may be shared.' },
      { q: 'Does EasyMy Learning benchmark competitors?', a: 'Yes. Continuous benchmarking is done.' },
      { q: 'Is continuous improvement institutionalized?', a: 'Yes. Improvement cycles exist.' },
      { q: 'Does EasyMy Learning support innovation labs?', a: 'Future innovation initiatives are planned.' },
      { q: 'Are students prepared for future careers?', a: 'Yes. Skill readiness is emphasized.' },
      { q: 'Does EasyMy Learning track dropout reasons?', a: 'Yes. Feedback is analyzed.' },
      { q: 'Are parents part of long-term planning?', a: 'Yes. Parent insights are valued.' },
      { q: 'Is EasyMy Learning adaptable to policy changes?', a: 'Yes. Flexibility is built-in.' },
      { q: 'Does EasyMy Learning publish transparency statements?', a: 'Yes. Transparency is core.' },
      { q: 'Are staff ethics trainings conducted?', a: 'Yes. Regular training is done.' },
      { q: 'Does EasyMy Learning support national education reforms?', a: 'Yes. Reforms are supported.' },
      { q: 'Are future scholarships planned?', a: 'Yes. New opportunities are explored.' },
      { q: 'Does EasyMy Learning aim for global standards?', a: 'Yes. International best practices are followed.' },
      { q: 'Is EasyMy Learning resilient to market changes?', a: 'Yes. Adaptive strategies exist.' },
      { q: 'Does EasyMy Learning value inclusivity?', a: 'Yes. Inclusive education is prioritized.' },
      { q: 'Are ethical complaints taken seriously?', a: 'Yes. All complaints are investigated.' },
      { q: 'Does EasyMy Learning plan continuous expansion?', a: 'Yes. Growth is planned responsibly.' },
      { q: 'What is EasyMy Learning’s long-term promise?', a: 'To provide trustworthy, accessible, and quality education while empowering Nepalese students for lifelong success.' },
    ]
  },
  {
    id: 'parent-psychology',
    title: 'J. Parent Psychology & Objection Handling',
    questions: [
      { q: 'My child is weak in studies. Will the Bridge Course help?', a: 'Yes. The Bridge Course is designed to strengthen basics and gradually build confidence for weak and average students.' },
      { q: 'What if my child is afraid to ask questions?', a: 'Teachers encourage participation and provide WhatsApp-based doubt support for shy students.' },
      { q: 'Will online classes distract my child?', a: 'No. Structured schedules and monitored sessions maintain discipline.' },
      { q: 'Can parents monitor student progress?', a: 'Yes. Parents may request updates and counseling support.' },
      { q: 'What if my child loses motivation midway?', a: 'Mentors provide continuous motivation and personal guidance.' },
      { q: 'Is online learning effective for SEE graduates?', a: 'Yes. Recorded classes and revision tools enhance learning effectiveness.' },
      { q: 'Will this increase study burden?', a: 'No. The course reduces pressure by preparing students early.' },
      { q: 'What if my child is slow learner?', a: 'Recorded classes and revision sessions support slow learners.' },
      { q: 'Can parents attend counseling sessions?', a: 'Yes. Parent participation is welcomed.' },
      { q: 'Will this clash with school tuition?', a: 'No. Classes are scheduled considering student availability.' },
      { q: 'Is discipline maintained in WhatsApp groups?', a: 'Yes. Groups are strictly moderated.' },
      { q: 'Will my child become over-dependent on teachers?', a: 'No. Self-study habits are encouraged.' },
      { q: 'Are marks the only focus?', a: 'No. Concept clarity and confidence are prioritized.' },
      { q: 'What if my child fails weekly tests?', a: 'Tests are diagnostic; failure helps identify weak areas.' },
      { q: 'Is there emotional support for students?', a: 'Yes. Mentors provide emotional and academic support.' },
      { q: 'Are girls equally supported?', a: 'Yes. Inclusive and safe learning environment is ensured.' },
      { q: 'What if parents disagree with teaching style?', a: 'Feedback is welcomed and addressed professionally.' },
      { q: 'Is my child compared with others?', a: 'No. Individual improvement is emphasized.' },
      { q: 'Will this help build long-term discipline?', a: 'Yes. Study routines and accountability are developed.' },
      { q: 'Is EasyMy Learning trustworthy for parents?', a: 'Yes. Transparency, results, and communication build trust.' },
    ]
  },
  {
    id: 'ai-future',
    title: 'AI, Automation & Future Learning',
    questions: [
      { q: 'Does EasyMy Learning use AI in teaching?', a: 'Yes. AI tools are used to support learning responsibly.' },
      { q: 'Is ChatGPT used in courses?', a: 'Yes. Students are guided on ethical academic use.' },
      { q: 'Will AI replace teachers?', a: 'No. AI complements teachers, not replaces them.' },
      { q: 'Are students taught AI skills?', a: 'Yes. Introductory AI and digital skills are included.' },
      { q: 'Is AI usage optional?', a: 'Yes. AI tools are optional learning aids.' },
      { q: 'Is AI safe for students?', a: 'Yes. Ethical and supervised usage is ensured.' },
      { q: 'Will AI-based exams be introduced?', a: 'Future assessment methods may evolve.' },
      { q: 'Can AI help identify weak students?', a: 'Yes. Analytics help track learning gaps.' },
      { q: 'Is data used to train AI models?', a: 'No. Student data is not used for external AI training.' },
      { q: 'Will future courses focus more on AI skills?', a: 'Yes. Future-ready skills are part of long-term vision.' },
    ]
  },
  {
    id: 'comparison',
    title: 'Comparison & Positioning',
    questions: [
      { q: 'How is EasyMy Learning different from coaching centers?', a: 'It offers structured online learning, mentoring, and recordings.' },
      { q: 'How is this better than private tuition?', a: 'It provides expert teachers, tests, and scalability at lower cost.' },
      { q: 'Why choose a Bridge Course instead of waiting for +2?', a: 'Early preparation reduces Class 11 stress.' },
      { q: 'Is EasyMy Learning affordable compared to others?', a: 'Yes. High value at reasonable pricing.' },
      { q: 'Are results better than traditional tuition?', a: 'Yes. Scholarship and admission success shows impact.' },
      { q: 'Is learning more flexible than offline coaching?', a: 'Yes. Recordings provide flexibility.' },
      { q: 'Do students save travel time and cost?', a: 'Yes. Online learning eliminates travel.' },
      { q: 'Is teaching more personalized?', a: 'Yes. Mentoring and analytics support personalization.' },
      { q: 'Does EasyMy Learning cover multiple goals together?', a: 'Yes. +2 prep, scholarships, and skills are integrated.' },
      { q: 'Is EasyMy Learning future-oriented?', a: 'Yes. Skills beyond syllabus are emphasized.' },
    ]
  },
  {
    id: 'edge-cases',
    title: 'Edge Cases & Emergency Handling',
    questions: [
      { q: 'What if SEE results are delayed?', a: 'Course timelines are adjusted accordingly.' },
      { q: 'What if scholarship exams are postponed?', a: 'Preparation continues with updated schedules.' },
      { q: 'What if internet issues persist?', a: 'Recorded content ensures continuity.' },
      { q: 'What if a teacher is unavailable?', a: 'Backup faculty arrangements exist.' },
      { q: 'What if Zoom classes fail?', a: 'Sessions are rescheduled or recorded alternatives provided.' },
      { q: 'Can students switch streams mid-course?', a: 'Stream change depends on policy and feasibility.' },
      { q: 'What if a student joins very late?', a: 'Recordings help cover missed content.' },
      { q: 'What if a student misses multiple weeks?', a: 'Catch-up plans are suggested.' },
      { q: 'Are emergencies handled empathetically?', a: 'Yes. Flexibility is provided.' },
      { q: 'What if parents raise urgent concerns?', a: 'Support responds promptly.' },
    ]
  },
  {
    id: 'alumni-expansion',
    title: 'Alumni, Government & Institutional Expansion',
    questions: [
      { q: 'Does EasyMy Learning track alumni success?', a: 'Yes. Alumni outcomes are monitored.' },
      { q: 'Are alumni involved in mentoring?', a: 'Yes. Alumni mentoring is encouraged.' },
      { q: 'Can government schools collaborate?', a: 'Yes. Institutional collaborations are welcomed.' },
      { q: 'Can municipalities partner for scholarships?', a: 'Yes. Awareness and training support is offered.' },
      { q: 'Can colleges officially recognize Bridge Course?', a: 'Discussions and partnerships are ongoing.' },
      { q: 'Are offline centers planned?', a: 'Hybrid expansion may be introduced.' },
      { q: 'Is national-level expansion planned?', a: 'Yes. Expansion across Nepal is planned.' },
      { q: 'Are international services planned?', a: 'Future global offerings are under evaluation.' },
      { q: 'Can EasyMy Learning support policy initiatives?', a: 'Yes. Education reform alignment is prioritized.' },
      { q: 'Does EasyMy Learning aim for long-term impact?', a: 'Yes. Lifelong student success is the mission.' },
    ]
  },
  {
    id: 'bonuses',
    title: 'K. Bridge Course (Detailed Features & Bonuses)',
    questions: [
      { q: 'What does “Overall benefits worth NRs. 75,000+” mean?', a: 'It refers to the combined value of live classes, recorded lectures, notes, tests, bonus courses, tools setup, guidance, workshops, competitions, and prizes included in the package.' },
      { q: 'Is the Bridge Course access limited to 3 months only?', a: 'Live Bridge Course access is for 3 months; however, many bonus courses have lifetime access.' },
      { q: 'Where can students see all enrolled courses?', a: 'All enrolled courses appear in the My Course tab.' },
      { q: 'How many Master Courses are included with the Bridge Course?', a: 'Ten Master Courses are included as bonus along with the Bridge Course.' },
      { q: 'Are live classes conducted every day?', a: 'Yes. Live classes are conducted daily as per the announced schedule.' },
      { q: 'How many live sessions are there per day?', a: 'There are four live sessions daily (morning and evening combined).' },
      { q: 'What happens if a student misses multiple live sessions?', a: 'All missed sessions can be covered through recorded videos.' },
      { q: 'How many MCQ sets are covered during the course?', a: 'More than 50 MCQ sets are covered, each containing around 100 questions.' },
      { q: 'Where can students access MCQs?', a: 'MCQs are available in the Quiz tab.' },
      { q: 'Are MCQs available for all streams?', a: 'Yes. MCQs are available for Science, Management, Law, and CTEVT streams.' },
      { q: 'What is the purpose of OMR Sheet access?', a: 'OMR sheets help students practice real exam-style answering methods.' },
      { q: 'Where can OMR sheets be found?', a: 'OMR sheets are available in the OMR Test tab.' },
      { q: 'How often are weekly tests conducted?', a: 'Weekly tests are conducted once every week.' },
      { q: 'How long are weekly tests active?', a: 'Weekly tests remain active for one hour.' },
      { q: 'How are weekly test results shared?', a: 'Scores and correct answers are shared in the My Notes tab after the test window closes.' },
      { q: 'How are cash prize winners announced?', a: 'Weekly winners are announced in the Weekly Awards section on the website.' },
      { q: 'How do students receive winner certificates?', a: 'Certificates are shared via WhatsApp or Telegram groups.' },
      { q: 'What is a surprise test?', a: 'A surprise test is an unannounced test conducted via WhatsApp if student enrollment exceeds a large threshold.' },
      { q: 'Who gets access to the EasyMy Learning Community?', a: 'Premium members receive access to the EasyMy Learning Community on Telegram.' },
      { q: 'What are Bonus Courses – Package 1?', a: 'Package 1 includes computer skills, MS Excel, Word, PowerPoint, and Prompt Engineering for AI.' },
      { q: 'Do Bonus Courses have lifetime access?', a: 'Yes. Bonus courses have lifetime access once unlocked.' },
      { q: 'When are Bonus Package 1 courses unlocked?', a: 'They are unlocked from the second week of May.' },
      { q: 'What are Bonus Courses – Package 2?', a: 'Package 2 includes Canva Graphic Design and programming courses (C, C++, HTML, CSS).' },
      { q: 'When are Bonus Package 2 courses unlocked?', a: 'They are unlocked from the second week of June.' },
      { q: 'Are programming courses suitable for beginners?', a: 'Yes. Courses start from basic and progress to advanced levels.' },
      { q: 'Who helps with software tool setup?', a: 'A dedicated EasyMy Learning team member assists with setup.' },
      { q: 'Is tool setup support time-limited?', a: 'Yes. Tool setup access is provided for three months.' },
      { q: 'Which tools are set up for students?', a: 'Canva, KineMaster, and ChatGPT are set up on student devices.' },
      { q: 'How is scholarship form filling handled?', a: 'Scholarship form filling is done through guided Zoom sessions and WhatsApp groups once forms open.' },
      { q: 'Which scholarships are supported in form filling?', a: 'Kathmandu, Lalitpur, Biratnagar, Janakpur, Pokhara Metro Scholarships, Sanima Bank Scholarship, and Mahatma Gandhi Scholarship.' },
      { q: 'Are seminars included in the Bridge Course?', a: 'Yes. Future-guidance seminars are conducted during live classes.' },
      { q: 'What is lifetime personal guidance?', a: 'Premium students receive ongoing guidance via WhatsApp even after course completion.' },
      { q: 'How are internships offered?', a: 'Internships are offered based on performance and activity participation.' },
      { q: 'What is the AI Workshop?', a: 'An AI-focused workshop is conducted toward the end of the course.' },
      { q: 'When is the programming competition held?', a: 'The programming competition is organized in the final month of the Bridge Course.' },
      { q: 'How is the laptop winner selected?', a: 'The student with the highest number of weekly wins receives the laptop.' },
      { q: 'What is the Refer & Earn program?', a: 'Students can earn up to NRs. 500 by referring others to the course.' },
      { q: 'Where can students access Refer & Earn?', a: 'The Refer & Earn feature is available in the Earn tab.' },
      { q: 'Is the referral reward transferable?', a: 'Referral rewards follow platform usage terms.' },
      { q: 'What is the enrollment process?', a: 'Students click Enroll Now and choose a payment method.' },
      { q: 'What payment methods are available?', a: 'Manual payment via scanner or online payment via application.' },
      { q: 'Are early-bird offers limited?', a: 'Yes. Offers are valid for the first 500 students only.' },
      { q: 'Can referral discounts be combined with offers?', a: 'This depends on active promotional rules.' },
      { q: 'Is enrollment confirmation instant?', a: 'Yes. Access is granted once payment is verified.' },
      { q: 'Are students notified about course updates?', a: 'Yes. Updates are shared via WhatsApp and the platform.' },
      { q: 'Can parents understand course benefits clearly?', a: 'Yes. Detailed FAQs and counseling support are available.' },
      { q: 'Does this structure repeat every year?', a: 'Core structure remains similar, with improvements each year.' },
      { q: 'Can features change in future batches?', a: 'Yes. Features may be enhanced or updated.' },
      { q: 'Is last year’s structure used as a benchmark?', a: 'Yes. Successful elements are retained and improved.' },
      { q: 'Why is EasyMy Learning transparent about features?', a: 'Transparency builds trust and ensures informed decisions.' },
    ]
  },
  {
    id: 'college-entrance',
    title: 'L. High-Stakes Entrance & College Specifics',
    questions: [
      { q: 'Does this course prepare students specifically for St. Xavier’s College entrance?', a: 'Yes. We have a dedicated module covering the unique logical reasoning and IQ patterns used in St. Xavier’s entrance exams.' },
      { q: 'Is there preparation for SOS and Budhanilkantha +2 entrance?', a: 'Yes. The syllabus covers the competitive requirements for SOS Hermann Gmeiner and Budhanilkantha School.' },
      { q: 'Do you provide St. Xavier’s past question papers?', a: 'St. Xavier’s does not officially release past papers, but we provide "memory-based" questions collected from past students.' },
      { q: 'Is the Bridge Course useful for A-Level preparation?', a: 'Yes. The English and Mathematics sections are highly relevant for students planning to pursue A-Levels.' },
      { q: 'Does EasyMy Learning help with the "Letter of Intent" or essays for college applications?', a: 'Yes. Our English sessions include guidance on writing strong personal statements for college admissions.' },
      { q: 'Are there specific mock interviews for colleges that require them?', a: 'Yes. We conduct mock interview sessions for students targeting colleges that have an interview phase.' },
      { q: 'Is the CTEVT course different from the Science course?', a: 'Yes. The CTEVT course focuses more on the technical entrance format required for diploma-level programs.' },
      { q: 'Can a Management student attempt the Science Bridge Course?', a: 'Yes, if they are undecided. However, we recommend sticking to the stream intended for +2 to maximize relevance.' },
      { q: 'Do you suggest top colleges based on my marks?', a: 'Yes. Our counselors analyze your weekly test scores and suggest colleges where you have the highest chance of admission.' },
      { q: 'Is there help for entrance exams outside the Kathmandu Valley?', a: 'Yes. The curriculum is national-level and applies to colleges in Chitwan, Pokhara, Butwal, and Itahari.' },
    ]
  },
  {
    id: 'technical',
    title: 'M. Technical Troubleshooting & Account Logistics',
    questions: [
      { q: 'What do I do if I forget my password?', a: 'You can reset it instantly using the "Forgot Password" link on the login screen via OTP.' },
      { q: 'Can I use the same account on two devices simultaneously?', a: 'No. For security reasons, logging in on a second device will automatically log you out of the first one.' },
      { q: 'I lost my registered phone number. How do I change it?', a: 'You must contact support with proof of identity and payment to request a number change.' },
      { q: 'Can I print the PDF notes?', a: 'Yes. Most PDF notes are downloadable and print-friendly for offline study.' },
      { q: 'Does the video player have speed control (1.5x, 2x)?', a: 'Yes. You can adjust the playback speed to watch recorded lectures faster.' },
      { q: 'How much mobile data does a 1-hour class consume?', a: 'On average, a live class consumes about 300MB–500MB depending on video quality settings.' },
      { q: 'Is there a "Data Saver" mode for rural areas?', a: 'Yes. The mobile app has a low-bandwidth mode to ensure smooth playback on slower networks.' },
      { q: 'Why is my account blocked?', a: 'Accounts are blocked if suspicious activity (sharing passwords or recording screens) is detected. Contact support for review.' },
      { q: 'Can I access the course from a Cyber Cafe?', a: 'Yes, you can log in via the web portal at a cyber cafe, but remember to log out afterwards.' },
      { q: 'Will the app work on an iPhone (iOS)?', a: 'Yes. The EasyMy Learning app is available on both Android and iOS platforms.' },
    ]
  },
  {
    id: 'refund-hard',
    title: 'N. Hardball Refund & Policy Questions',
    questions: [
      { q: 'If I don\'t get a scholarship, will you refund my fee?', a: 'No. We provide the training to get the scholarship, but the result depends on your exam performance.' },
      { q: 'If I change my mind after 2 days, can I get a refund?', a: 'Please refer to our specific Refund Policy page. Generally, a grace period applies only in valid technical failure cases.' },
      { q: 'Can I pay in two installments?', a: 'Installment plans are generally not available for short-term courses unless specified during a special offer.' },
      { q: 'If the teacher is sick, is the class cancelled?', a: 'No. We usually assign a substitute teacher or reschedule the class to a convenient time.' },
      { q: 'Do you promise that I will pass the entrance?', a: 'No ethical institute can promise a pass. We promise 100% syllabus coverage and the best possible preparation.' },
      { q: 'Is the "Laptop Prize" guaranteed or a lucky draw?', a: 'It is merit-based. The laptop is awarded to the student with the highest consistent academic performance, not by luck.' },
      { q: 'What happens if EasyMy Learning shuts down?', a: 'We are a registered Pvt. Ltd. company with years of operation. In the unlikely event of closure, pro-rata refunds would be processed.' },
      { q: 'Are the "Bonus Courses" really free?', a: 'Yes. If you enroll in the Bridge Course, the specified bonus courses (Excel, AI, etc.) are added to your dashboard at no extra cost.' },
      { q: 'Can I upgrade from Standard to Premium later?', a: 'Yes. You can pay the difference amount to upgrade your package at any time.' },
      { q: 'Will you sell my phone number to colleges?', a: 'No. We respect your privacy and do not sell student data to third-party colleges for marketing.' },
    ]
  }
];
// Calculate total questions once
const TOTAL_QUESTIONS = faqSections.reduce((sum, sec) => sum + sec.questions.length, 0);

export default function App() {
  const [openKey, setOpenKey] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggle = (sectionId, index) => {
    const key = `${sectionId}-${index}`;
    setOpenKey(openKey === key ? null : key);
  };

  // Filter FAQs based on search term (searches both question and answer)
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return faqSections;

    const lowerSearch = searchTerm.toLowerCase();

    return faqSections
      .map(section => ({
        ...section,
        questions: section.questions.filter(
          item =>
            item.q.toLowerCase().includes(lowerSearch) ||
            item.a.toLowerCase().includes(lowerSearch)
        )
      }))
      .filter(section => section.questions.length > 0);
  }, [searchTerm]);

  const resultsCount = filteredSections.reduce((sum, sec) => sum + sec.questions.length, 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root { height: 100%; width: 100%; }
        body { font-family: 'Poppins', sans-serif; background: #f8f9fa; }

        .app-wrapper {
          min-height: 200vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: linear-gradient(to bottom, #d4d1cea3, #9f9696ff);
        }

        .faq-card {
          width: 100%;
          max-width: 9000px;
          background: linear-gradient(to bottom,
            #1a0d00 0%, #331a03 8%, #441f05 16%, #552805 24%, #663300 32%, #773800 40%,
            #dd5600 50%,
            #773800 60%, #663300 68%, #552805 76%, #441f05 84%, #331a03 92%, #1a0d00 100%
          );
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          color: white;
        }

        /* === SEARCH SECTION === */
        .search-section {
          text-align: center;
          padding: 50px 30px 40px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }

        .search-section h2 {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .search-section p {
          font-size: 1.05rem;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .search-container {
          position: relative;
          max-width: 700px;
          margin: 0 auto 25px;
        }

        .search-icon {
          position: absolute;
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.4rem;
          color: #ffaa55;
        }

        #searchInput {
          width: 100%;
          padding: 18px 24px 18px 70px;
          font-size: 1.1rem;
          border: none;
          border-radius: 50px;
          background: rgba(255,255,255,0.15);
          color: white;
          outline: none;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        #searchInput::placeholder {
          color: rgba(255,255,255,0.7);
        }

        .search-stats {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 0.95rem;
        }

        .search-stats span {
          background: rgba(255,255,255,0.15);
          padding: 8px 18px;
          border-radius: 30px;
          backdrop-filter: blur(5px);
        }

        /* === HERO & NAV === */
        .hero {
          text-align: center;
          padding: 20px 24px;
        }

        .hero h1 {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .hero .highlight {
          background: linear-gradient(90deg, #ffcc80, #ffdab9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .nav-pill {
          background: rgba(255,255,255,0.15);
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
        }

        .nav-pill:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }

        /* === FAQ CONTENT === */
        .faq-content {
          padding: 30px 40px 40px;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffdab9;
          margin: 35px 0 15px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255,221,170,0.3);
        }

        .accordion {
          background: rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }

        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .faq-item:last-child { border-bottom: none; }

        .faq-header {
          width: 100%;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          background: transparent;
          border: none;
          text-align: left;
          transition: background 0.3s;
        }

        .faq-header:hover {
          background: rgba(255,255,255,0.05);
        }

        .number-circle {
          width: 28px;
          height: 28px;
          background: #ffaa55;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .question-text {
          flex: 1;
          font-size: 0.95rem;
          font-weight: 500;
          color: #ffffff;
        }

        .plus-icon {
          font-size: 1.5rem;
          font-weight: 300;
          color: #ffddaa;
          transition: transform 0.4s ease;
        }

        .faq-item.open .plus-icon {
          transform: rotate(45deg);
          color: #ffffff;
        }

        .answer-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s ease, padding 0.6s ease;
        }

        .faq-item.open .answer-content {
          max-height: 600px;
          padding: 12px 24px 20px 68px;
        }

        .answer-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #ffddaa;
        }

        .answer-text p {
          margin: 0;
        }

        /* No results message */
        .no-results {
          text-align: center;
          padding: 60px 20px;
          font-size: 1.1rem;
          opacity: 0.8;
        }

        /* CTA */
        .cta {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 30px;
          text-align: center;
          border-radius: 16px;
          margin-top: 40px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }

        .cta h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
        }

        .cta p {
          font-size: 0.95rem;
          opacity: 0.9;
          margin-bottom: 20px;
        }

        .cta-button {
          display: inline-block;
          background: #ffaa55;
          color: white;
          padding: 12px 30px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .cta-button:hover {
          background: #ff9500;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(255,165,0,0.3);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .app-wrapper { padding: 12px; }
          .faq-card { border-radius: 20px; }
          .search-section { padding: 40px 20px; }
          .search-section h2 { font-size: 1.8rem; }
          .search-container { margin: 0 10px 25px; }
          #searchInput { padding: 16px 20px 16px 60px; font-size: 1rem; }
          .faq-content { padding: 20px; }
          .section-title { font-size: 1.2rem; }
          .faq-header { padding: 14px 18px; gap: 10px; }
          .number-circle { width: 24px; height: 24px; font-size: 0.7rem; }
          .question-text { font-size: 0.9rem; }
          .faq-item.open .answer-content { padding-left: 58px; }
          .answer-text { font-size: 0.85rem; }
          .cta { padding: 25px; margin-top: 30px; }
        }
      `}</style>

      <div className="app-wrapper">
        <div className="faq-card">
          {/* === SEARCH SECTION === */}
          <section className="search-section">
            <h2>Find Answers Quickly</h2>
            <p>Search through all {TOTAL_QUESTIONS} frequently asked questions about EasyMy Learning programs and services.</p>

            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                id="searchInput"
                placeholder="Type your question or keyword here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="search-stats">
              <span id="resultsCount">
                {resultsCount} {resultsCount === 1 ? 'question' : 'questions'} found
              </span>
              <span id="searchStatus">
                {searchTerm ? `for "${searchTerm}"` : 'All questions shown'}
              </span>
            </div>
          </section>

          {/* === HERO WITH NAV === */}
          <header className="hero">
            <h1>Frequently Asked <span className="highlight">Questions</span></h1>
            <div className="nav-pills">
              {faqSections.map(sec => (
                <a key={sec.id} href={`#${sec.id}`} className="nav-pill">
                  {sec.title}
                </a>
              ))}
            </div>
          </header>

          {/* === FAQ CONTENT === */}
          <div className="faq-content">
            {resultsCount === 0 ? (
              <div className="no-results">
                <p>No questions found for "<strong>{searchTerm}</strong>".</p>
                <p>Try different keywords or clear the search.</p>
              </div>
            ) : (
              filteredSections.map(section => (
                <section key={section.id} id={section.id}>
                  <h2 className="section-title">{section.title}</h2>
                  <div className="accordion">
                    {section.questions.map((item, idx) => {
                      const key = `${section.id}-${idx}`;
                      const isOpen = openKey === key;

                      return (
                        <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                          <button
                            className="faq-header"
                            onClick={() => toggle(section.id, idx)}
                          >
                            <span className="number-circle">{idx + 1}</span>
                            <span className="question-text">{item.q}</span>
                            <span className="tick-icon">^</span>
                          </button>
                          <div className="answer-content">
                            <div className="answer-text">
                              <p>{item.a}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))
            )}

            {/* === CTA === */}
            <div className="cta">
              <h3>Still have questions?</h3>
              <p>Our support team is here to help you anytime</p>
              <a
                href="https://easymylearning.in"
                target="_blank"
                rel="noopener"
                className="cta-button"
              >
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}