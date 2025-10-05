// src/components/Timeline.jsx
import React from 'react';
import { events } from '../data/timeline-data.js';

const Timeline = () => {
  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <span className="timeline-date">{event.date}</span>
            <h3 className="timeline-title">{event.title}</h3>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;