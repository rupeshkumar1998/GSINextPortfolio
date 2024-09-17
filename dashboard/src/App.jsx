import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

import ManageAbouts from "./pages/ManageAbouts";
import ManageAwardRecognitions from "./pages/ManageAwardRecognitions";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/slices/userSlice";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { getAllAbouts } from "./store/slices/aboutSlice";
import { getAllAwardRecognitions } from "./store/slices/awardRecognitionSlice";

import { getAllMessages } from "./store/slices/messageSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  
    dispatch(getAllAbouts());
    dispatch(getAllAwardRecognitions());

    dispatch(getAllMessages());
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/manage/abouts" element={<ManageAbouts />} />
        <Route path="/manage/awardRecognitions" element={<ManageAwardRecognitions />} />

      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  );
}

export default App;
