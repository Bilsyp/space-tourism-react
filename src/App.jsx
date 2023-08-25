import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className=''>
      <Nav />
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
