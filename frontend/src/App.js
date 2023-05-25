
import './App.css';
import './report.css';
import './header_home.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
//import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateReport from './components/UpdateReport';
import DeleteReport from './components/DeleteReport';
import AddReport from './components/AddReport';
import AllReports from './components/AllReports';
import AddBloodReport from './components/AddBloodReports';
import AllBloodReports from './components/AllBloodReports';
import DeleteBloodReport from './components/DeleteBloodReport';
import UpdateBloodReport from './components/UpdateBloodReport';
import SearchReports from './components/SearchReports';
import ReportDetails from './components/ReportDetails';
import GenarateReport from './components/GenarateReport';
import LabMainPage from './components/LabMainPage';
import AddItems from './components/AddItems';
import AllItems from './components/AllItems';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';
import HeaderNew from './components/HeaderNew';

function App() {
  return (
    <Router>
      <div>
        {/*<Header />*/}
        <HeaderNew/>
        
        <Routes>
        <Route exact path="/main" element={<LabMainPage/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        
        <Route exact path="/update/:id" element={<UpdateReport/>} />
        <Route exact path="/delete/:id" element={<DeleteReport />} />
        <Route exact path="/" element={<AllReports/>} />
        <Route exact path="/add" element={<AddReport />} />

        <Route exact path="/addBlood" element={<AddBloodReport/>} /> 
        <Route exact path="/blood" element={<AllBloodReports/>}/>
        <Route exact path="/deleteBlood/:id" element={<DeleteBloodReport/>}/>
        <Route exact path="/updateBlood/:id" element={<UpdateBloodReport/>}/>
        <Route exact path="/get" element={<SearchReports/>}/>
        <Route exact path="/getSearch/:ID" element={<ReportDetails/>}/>
        <Route exact path="/genarateReport" element={<GenarateReport/>}/>

        <Route exact path="/addItem" element={<AddItems/>}/>
        <Route exact path="/item" element={<AllItems/>}/>
        <Route exact path="/updateItem/:id" element={<UpdateItem/>}/>
        <Route exact path="/deleteItem/:id" element={<DeleteItem/>}/>
        
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
