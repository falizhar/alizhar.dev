import React from 'react';
import { Information } from '../../components/index';
import './workExperience.css';

const workData = [
  {
    title: 'SwipeRx',
    job: 'Jr. Fullstack Developer',
    tenure: 'Nov 2021 - Now',
    text: [
      { p: 'Assigned to both SwipeRx Belanja and Procurement Dashboard projects to develop features for front-end and back-end, also do bug-fixing, maintain legacy code. \n'
          + 'Participated in code reviews with DRY/SRP/KISS/YAGNI principles in Agile/Scrum environment. \n'
          + 'Gained feedback from senior engineers and directly reported to the Sr. Engineering Manager. \n' },
      { p: 'Technology used:' },
      { ul: 'Nest.js, Express.js, React.js, Lodash' },
      { ul: 'MySQL, Redis, MongoDB, Sequelize ORM.' },
      { ul: 'TypeScript, JavaScript (ES6+), Node.js, SQL, HTML/CSS.' },
      { ul: 'Azure DevOps/VSTS for deployment, Google Cloud Scheduler, Google Pub/Sub.' },
      { ul: 'Git (Bitbucket), Jira, NPM, Yarn, Docker, Prettier, ESLint (AirBnB style), REST API using Swagger, Trello, Keycloak, Docker (local).' },
    ],
  },
  {
    title: 'SwipeRx',
    job: 'Technical Recruiter',
    tenure: 'Apr 2020 - Apr 2021',
    text: [
      { p: 'Take ownership of the entire recruitment process for the tech, data, and product; from salary market research, sourcing, job-posting, HR interview & coding test, salary & offer management, until onboarding.\n' },
      { p: 'Related contributions:' },
      { ol: 'Conducted research about the technologies that are being used by the company, and generated related technical questions to filter candidates in the HR Interview process.\n' },
      { ol: 'Learned how to conduct live coding tests, supervise the candidates’ results and report to CTO. \n' },
    ],
  },
  {
    title: 'Glints',
    job: 'Associate Consultant',
    tenure: 'Oct 2019 - Apr 2020',
    text: [
      { p: 'Provided recruitment services to multiple clients and was responsible for understanding their recruitment needs and earning their trust. Sourced potential talents and understood their career needs. Dedicated for Software Engineering positions with various tech-stacks requirements. \n' },
    ],
  },
];

const WorkExperience = () => (
  <div className="features section__padding" id="experience">
    <div className="features-heading">
      <h1 className="gradient__text">Work Experience</h1>
    </div>
    <div className="features-container">
      {workData.map((item, index) => (
        <Information title={item.title} text={item.text} job={item.job} tenure={item.tenure} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default WorkExperience;
