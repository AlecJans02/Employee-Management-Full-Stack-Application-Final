import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage.js';
import About from './About.js';
import Help from './Help.js';
import ForgotPassword from './ForgotPassword.js';
import CreateAccount from './CreateAccount.js';
import Dashboard from './Dashboard.js';
import Tasks from './Tasks.js';
import Stores from './Stores.js';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route exact path="/Aboutpage" element={<About />} />
            <Route exact path="/Help" element={<Help />} />
            <Route exact path="/Reset-Password" element={<ForgotPassword />} />
            <Route exact path="/Create-Account" element={<CreateAccount />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/Tasks" element={<Tasks/>} />
            <Route exact path="/Stores" element={<Stores />} />
        </Routes>
    );
}

export default App;
