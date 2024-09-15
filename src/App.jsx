import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBottom from "./components/Socail/TopToBottom";
import SpeedDial from "./components/Socail/SpeedDial";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
      <TopBottom />
      <SpeedDial />
      <ToastContainer />
    </div>
  );
}

export default App;
