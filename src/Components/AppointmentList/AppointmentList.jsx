/* eslint-disable react/prop-types */
import sharedClasses from '../SharedCss.module.css';
import classes from './AppointmentList.module.css';

import { useEffect, useRef, useState } from 'react';

const AppointmentList = ({ appointments, setAppointments }) => {
  const [newAppointment, setNewAppointment] = useState(false);
  const inputRef = useRef(null);

  const [appointment, setAppointment] = useState({
    title: '',
    date: '',
    time: '',
  });

  function deleteAppointment(id) {
    setAppointments((items) => items.filter((item) => item.id != id));
  }

  useEffect(() => {
    if (newAppointment && inputRef.current) {
      inputRef.current.focus();
    }
  }, [newAppointment]);

  return (
    <div className={`container ${sharedClasses.container}`}>
      <div className={sharedClasses.header}>
        <h1>My Appointments</h1>
        <button
          onClick={() => {
            setAppointment({
              title: '',
              date: '',
              time: '',
            });
            setNewAppointment((oldval) => !oldval);
          }}
        >
          {newAppointment ? 'Cancel' : 'Add New'}
        </button>
      </div>

      <div className={classes.appointments}>
        {appointments.length > 0 &&
          appointments.map((appointment) => (
            <div className={classes.appointment} key={appointment.id}>
              <h1>{appointment.title}</h1>
              <div className={classes.datedetails}>
                <p>{appointment.date}</p>
                <p>{appointment.time}</p>
                <button onClick={() => deleteAppointment(appointment.id)}>
                  &times;
                </button>
              </div>
            </div>
          ))}
      </div>

      {newAppointment && (
        <form
          className={classes.form}
          onSubmit={(event) => {
            event.preventDefault();
            setAppointments((items) => [
              ...items,
              {
                id: Date.now(),
                ...appointment,
              },
            ]);
            setAppointment({
              title: '',
              date: '',
              time: '',
            });
            setNewAppointment(false);
          }}
        >
          <input
            ref={inputRef}
            type='text'
            value={appointment.title}
            onChange={(event) =>
              setAppointment((item) => ({
                ...item,
                title: event.target.value,
              }))
            }
          />
          <div className={classes.datetime}>
            <input
              type='date'
              value={appointment.date}
              onChange={(event) =>
                setAppointment((item) => ({
                  ...item,
                  date: event.target.value,
                }))
              }
            />
            <input
              type='time'
              value={appointment.time}
              onChange={(event) =>
                setAppointment((item) => ({
                  ...item,
                  time: event.target.value,
                }))
              }
            />
            <input type='submit' value='Create' />
          </div>
        </form>
      )}
    </div>
  );
};

export default AppointmentList;
