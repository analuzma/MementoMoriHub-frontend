import { useState, useEffect } from "react";
import "./App.css";
//importar las rutas a utilizar
import routes from "./config/routes";
import { Routes, Route,useNavigate } from "react-router-dom";
import { Navbar } from "./components";
import { logoutWs } from "./services/auth-ws";

//importar los componentes o funcion  que sean globales
function App() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate()

//   //funciones globales!
  // function authentication(user) {
  //   setUser(user);
  // }
  // function handleLogout() {
  //   Modal.confirm({
  //     title:"Cerrar sesión",
  //     content:"Estas seguro de lo que vas hacer?",
  //     onOk(){
  //       //ejeuctar el endpoint para hacer logout y borrar al usuario del state!
  //       logoutWs().then((res) => {
  //         const { data, status, errorMessage } = res;
    
  //         if (status) {
  //           Modal.success({
  //             content:data.successMessage,
  //           });
  //           navigate("/")
  //           setUser(null);
  //         } else {
  //           alert(errorMessage);
  //         }
  //       });
  //     }
  //   })

  // }
  return (
    <div className="App">
          <Navbar
        // user={user}
        // handleLogout={handleLogout} 
        
        /* {...{user,handleLogout}} */
      />
      <Routes>
        {/*(route,index)=> <Route key={path} path={path} element={element} />  */}

        {/* {routes({ user, handleLogout, authentication }).map( */}

        {routes({  }).map(
          ({ path, element }, index_route) => (
            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;