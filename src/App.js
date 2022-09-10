import { useState} from "react";
import "./App.css";
//importar las rutas a utilizar
import routes from "./config/routes";
                                    //useNavigate
import { Routes, Route} from "react-router-dom";
import { Navbar} from "./components";
// import { logoutWs } from "./services/auth-ws";
import SnackbarCustom from "./components/SnackbarCustom/SnackbarCustom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  // const navigate = useNavigate()

  //user
  const [user, setUser] = useState(null);

    const authentication = async (user) => {
    setUser(user);
  };

const [stackSnackbar, setStackSnackBar]=useState({message:"demo",severity:"success", open:false})

const handleClose = () => {
  setStackSnackBar(prevState=>({...prevState, open:false}))
}
//personalizar el mensaje queda pendiente //checa el severity para color
function sendMessage(message, severity){
  setStackSnackBar({message, open:true, severity})
}

    const handleLogout = () => {
   sendMessage("You have logged out", "success")
  setUser(null);
  };


  return (
    <div className="App">
         <ThemeProvider theme={darkTheme}>
           <CssBaseline />
      <SnackbarCustom {...{...stackSnackbar, handleClose}}/>
          <Navbar
        user={user}
        handleLogout={handleLogout} 
      />
      <Routes>
        {/*(route,index)=> <Route key={path} path={path} element={element} />  */}

        {routes({ user, handleLogout, authentication, sendMessage }).map(
          ({ path, element }, index_route) => (
            <Route key={index_route} {...{ path, element }} />
          )
        )}
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;