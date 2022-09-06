                //useEffect
import { useState } from "react";
import "./App.css";
//import routes
import routes from "./config/routes";
                            //useNavigate
import { Routes, Route } from "react-router-dom";


//import global components or functions
function App() {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate()

  //global functions
  function authentication(user) {
    setUser(user);
  }

  return (
    <div className="App">
      <Routes>
        {/*(route,index)=> <Route key={path} path={path} element={element} />  */}
        
        {/* removed handleLogout👇 */}
        {routes({ user, authentication }).map(
          ({ path, element }, index_route) => (
            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;
