/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import classes from './SideSummary.module.css';

const SideSummary = ({ todos, appointments, weatherInfo, loading }) => {
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
      <div>
        {loading ? (
          'Loading ....'
        ) : (
          <div className={classes.weatherInfo}>
            <div>
              {weatherInfo.city}, {weatherInfo.country}
            </div>
            <div>The temperature outside is</div>
            <h1>{weatherInfo.temperature}°C</h1>
            <img src={weatherInfo.icon} alt={weatherInfo.temperature} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SideSummary;
