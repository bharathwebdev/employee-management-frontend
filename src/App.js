import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';
import { Input } from '@mui/material';
import SearchAppBar from './components/Nav';

function App() {
  return (
    <div className="">
      <SearchAppBar/>
       <EmployeeList/>
    </div>
  );
}

export default App;
