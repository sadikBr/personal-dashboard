import SideSummary from './Components/SideSummary/SideSummary';
import ToDoList from './Components/ToDoList/ToDoList';
import AppointmentList from './Components/AppointmentList/AppointmentList';
import useLocalStorage from './hooks/useLocalStorage';

const PersonalDashboard = () => {
  const { items: todos, setItems: setTodos } = useLocalStorage('todos');
  const { items: appointments, setItems: setAppointments } =
    useLocalStorage('appointments');

  return (
    <div className='dashboard'>
      <SideSummary todos={todos} appointments={appointments} />
      <ToDoList todos={todos} setTodos={setTodos} />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </div>
  );
};

export default PersonalDashboard;
