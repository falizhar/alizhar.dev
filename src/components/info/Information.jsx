import React from 'react';
import './information.css';
import { map } from 'lodash';

const Information = ({ title, text, job, tenure }) => {
  const isTextArray = Array.isArray(text) && text.length > 0;

  const paragraphText = isTextArray ? map(text.filter((item) => item.p), 'p') : '';
  const unorderedItems = isTextArray ? map(text.filter((item) => item.ul), 'ul') : '';
  const orderedItems = isTextArray ? map(text.filter((item) => item.ol), 'ol') : '';

  const unorderedList = isTextArray ? unorderedItems.map((message) => <li>{message}</li>) : '';
  const orderedList = isTextArray ? orderedItems.map((message) => <li>{message}</li>) : '';

  return (
    <>
      <div className="features-container__feature">
        <div className="features-container__feature-title">
          <div />
          <h1>{title}</h1>
          <h2>{job}</h2>
          <p>{tenure}</p>
        </div>
        <div className="features-container_feature-text">
          { isTextArray
            ? (
              <div>
                <p>{paragraphText}</p>
                <ul>
                  {unorderedList}
                </ul>
                <ol>
                  {orderedList}
                </ol>
              </div>
            )
            : <p>{text}</p>}
        </div>
      </div>
    </>
  );
};

export default Information;
