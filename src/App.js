import { useState, useEffect } from "react";
import "./App.css";
//importar las rutas a utilizar
import routes from "./config/routes";
import { Routes, Route,useNavigate } from "react-router-dom";
import { Navbar} from "./components";
import { logoutWs } from "./services/auth-ws";
import SnackbarCustom from "./components/SnackbarCustom/SnackbarCustom"

//importar los componentes o funcion  que sean globales
function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

const [stackSnackbar, setStackSnackBar]=useState({message:"demo",severity:"success", open:false})

const handleClose = () => {
  setStackSnackBar(prevState=>({...prevState, open:false}))
}
//personalizar el mensaje queda pendiente //checa el severity para color
function sendMessage(message, severity){
  console.log("send message")
  setStackSnackBar({message, open:true, severity})
}
  function authentication(user) {
    setUser(user);
  }
  function handleLogout() {
      setStackSnackBar(prevState=>({...prevState, open:true}))
  }

  return (
    <div className="App">
      <SnackbarCustom {...{...stackSnackbar, handleClose}}/>
          <Navbar
        user={user}
        handleLogout={handleLogout} 
      />
      <Routes>
        {/*(route,index)=> <Route key={path} path={path} element={element} />  */}

        {routes({ user, handleLogout, authentication, sendMessage }).map(
          ({ path, element }, index_route) => (
            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;