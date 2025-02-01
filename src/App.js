import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </>
  );
}

export default App;
