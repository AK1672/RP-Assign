import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SubPlan from "./components/SubPlan";
import Payment from "./components/Payment";
import PlanStatus from "./components/PlanStatus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/SubPlan" element={<SubPlan />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
          <Route path="/PlanStatus" element={<PlanStatus />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
