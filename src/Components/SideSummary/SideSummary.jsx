/* eslint-disable react/prop-types */
import classes from './SideSummary.module.css';

import { useMemo } from 'react';

const SideSummary = ({ todos, appointments }) => {
  const numberOf = useMemo(
    () => ({
      todos:
        todos.length === 0
          ? 'There are no task for today'
          : `You have ${todos.length} task${todos.length > 1 ? 's' : ''} to do
        today`,
      appointments:
        appointments.length === 0
          ? 'There are no appointments planned for today'
          : `You have ${appointments.length} appointment
        ${appointments.length > 1 ? 's' : ''} planned today`,
    }),
    [todos, appointments]
  );

  function getDay() {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return days[new Date().getDay()];
  }

  function getDate() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date();

    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }

  return (
    <div className={`container ${classes.summary}`}>
      <div>{numberOf.todos}</div>
      <div>{numberOf.appointments}</div>
      <div>
        <h1>{getDay()}</h1>
        <p>{getDate()}</p>
      </div>
      <div>Placeholder | Will contain whether information</div>
    </div>
  );
};

export default SideSummary;
