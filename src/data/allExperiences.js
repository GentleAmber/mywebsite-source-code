const allExperiences = [
  // Use [n] to create new line in property description.
  {
    id: 1,
    attr: 'WORK',
    experiences: [
      {
        id: 1,
        period: 'Apr 2025 - now',
        position: 'Shop Assistant (part-time)',
        company: 'Starlight Chinese Supermarket',
        location: 'Edinburgh, UK',
        description: `Provide friendly customer service. Assist customers with checkout and inquiries. 
        [n]Input information for new items and monitor price label mismatch, ensuring accurate and timely updates both online and in-store.`
      },
      {
        id: 2,
        period: 'Jan 2024 - Sep 2024',
        position: 'Game Designer',
        company: 'Lingxi Games, Alibaba Group',
        location: 'Guangzhou, CN',
        description: `Designed a battle pass system and other in-game features. Analysed over 480,000 player data entries to ensure balanced and fair difficulty curves for the battle pass system.
        [n]Produced detailed, pseudocode-style documentations for every design to eliminate misunderstanding between developers.
        [n]Collaborated closely with programmers, UX designers, game testers to ensure smooth development and alignment with design documentation.
        [n]Maintained and updated game data for every game season. Automated data entry with customed formulas in Excel, reducing manual workload for all the designers.`
      },
      {
        id: 3,
        period: 'Aug 2023 - Nov 2023',
        position: 'Game Designer (Intern)',
        company: 'Lingxi Games, Alibaba Group',
        location: 'Guangzhou, CN',
        description: `Designed and implemented a game level with Unity.
        [n]Designed several minor features that were released in the game, including side gameplay and UI enhancements.`
      },
    ]
  }, 
  
  // Edu
  {
    id: 2,
    attr: 'EDUCATION',
    experiences: [
      {
        id: 1,
        period: 'Dec 2024 - now',
        position: 'Programming',
        company: 'Self-study',
        location: '/',
        description: `Developed strong proficiency in Java and full-stack web development, 
        including HTML, CSS, and JavaScript, as well as modern frameworks and tools such as Express, 
        EJS, React, Next.js, and Vite. [n]Built multiple projects applying concepts in networking, 
        multithreading, database management, and event-driven systems. `
      },
      {
        id: 2,
        period: 'Sep 2022 - Dec 2023',
        position: 'MA, Illustration',
        company: 'The University of Edinburgh',
        location: 'Edinburgh, UK',
        description: `Developed good aesthetic taste.`
      },
      {
        id: 3,
        period: 'Sep 2016 - Jul 2020',
        position: 'BE, Traffic Engineering',
        company: 'Tongji University',
        location: 'Shanghai, CN',
        description: `Won a uni-level schoolarship. Graduated with the grade 84.56/100.
        [n]Courses included: Advanced Mathematics, C/C++ Programming, Foundation of Database, 
        Probability and Mathematical Statistics, Linear Algebra.`
      },
    ]
  }
]

export default allExperiences