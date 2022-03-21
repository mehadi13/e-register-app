import './App.css';
import { Routes, Route} from "react-router-dom"
import Auth from "./pages/auth/Auth";
import Layout from "./pages/layout/Layout";
import RegisterListView from "./components/registers/register/RegisterListView"
import Dashboard from "./components/dashboard/Dashboard";
import CreateRegister from "./components/registers/register/CreateRegister";
import NoMatch from "./pages/nomatch/NoMatch";
import {PATH} from "./constant/RoutingPath";

function App() {
  return (
    <Routes>
        <Route path={PATH.HOME} element={<Auth/>}/>

        <Route path={PATH.DASHBOARD} element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
        </Route>

        <Route path={PATH.REGISTERS} element={<Layout/>}>
            <Route index element={<RegisterListView/>}/>
            <Route path={PATH.CREATE} element={<CreateRegister/>}/>
        </Route>

        <Route path={PATH.OTHER} element={<NoMatch/>}/>
    </Routes>
  );
}

export default App;
