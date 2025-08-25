'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./page.module.scss";
import code_script_0 from "../images/code_scriptable.png"
import code_script_1 from "../images/code_scriptable_1.png"
import code_function from "../images/code_1.png"
import ui_base from "../images/ui_base.png"

const Home = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  const handleClose = () => {
    setSelectedSection(null);
  };

  const sections = [
    {
      title: "What is this project about?",
      content: (
        <span className={styles.body}>
          An engaging and interactive training game designed specifically to assist Cathay Pacific staff in mastering the complexities of Airport SkyPier operations. <br/><br/>
          This comprehensive simulation provides a hands-on learning experience, allowing employees to navigate various scenarios, <br/><br/>
          enhance their operational knowledge, and develop essential skills needed to effectively guide and assist passengers during their transit experience.
        <br/>
        Here's the result of the project (Main Game):<br/>
        <iframe
            src="https://www.youtube.com/embed/jrh_tXSNXpo"
            title="Game Demo"
            allowFullScreen
            width="500"
            height="300"
          ></iframe>
        </span >
      )
    },
    {
      title: "My Area of Development",
      content: (
        <span className={styles.body}>
          The supervisor separated 5 main areas for our teammates to develop:
            <li>
              Interface Design
            </li>
            <li>
              360 Moving System
            </li>
            <li>
              Map Design
            </li>
            <li>
              Localization (Language Selection)
            </li>
            <li>
              Quiz System
            </li>
          <br/>
          In my part, I decided to take part in the Quiz System, since at the time, it is something that I have never done.
          <br/>
          To Start with, I created a storage system for the quiz, that can get all questions and answers from the quiz
          <br/>
          <Image src={code_script_0} alt='s' width={400} height={200} />
          <br/>
          And this is the storage system that is used to edit data
          <br/>
          <Image src={code_script_1} alt='s' width={340} height={850} />
          <br/>
          After that, I created the main quiz system to get the target data, and load them if needed. To do that, I created Base Objects of the UIs like Panels, Question & Answers etc.
          <br/>
          <Image src={ui_base} alt='s' width={600} height={300} />
          <br/>
          And Make a script that spawn them in corresponding area with the data I got.
          <br/>
          Lastly, the code are reviewed by my supervisor and improves the code.
        </span>
      )
    },
    {
      title: "Video Demonstration - Quiz",
      content: (
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/xXzwPU1Csis"
            title="Quiz Demo"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    {
      title: "Tools We Used",
      content: (
        <span className={styles.body}>
          <li> Trello: Progress Tracking </li>
          <li> Unity: Game Development (C-Sharp)</li>
          <li> Coding Environment: Visual Studio</li>
          <li> Interface Development: Figma</li>
        </span>
      )
    },
    {
      title: "Reflections & Learning",
      content: (
        <span className={styles.body}>
          This project strengthened my ability to build interactive UI components and work collaboratively in a team. I learned a lot about accessibility, data handling, and code organization (Although I still need improvements).
        </span> 
        
      )
    }
  ];

  return (
    <div className={styles.container}>
      <p className={styles.bg} style={{ display: selectedSection !== null ? 'block' : 'none' }}></p>
      <h1 className={styles.title}>Cathay Pacific<br />Hong Kong International Airport (HKIA)<br />Air / Sea Transit Familiarisation</h1>

      {
        sections.map((section, index) => (
          <div key={index} className={styles.section} onClick={() => handleButtonClick(index)}>
            <h2>{section.title}</h2>
          </div>
        ))
      }

      {selectedSection !== null && (
        <div className={styles.enlargedSection}>
          <button className={styles.closeButton} onClick={handleClose}>✖</button>
          <h2>{sections[selectedSection].title}</h2>
          {sections[selectedSection].content}
        </div>
      )}
    </div>
  );
};

export default Home;