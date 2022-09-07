
// import { FormItem } from "../components";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// //me traigo mis servicios!!! LoginWS SignupWS
// import { loginWs, signupWs } from "../services/auth-ws";
// /**
//  *
//  * @param {*} props
//  * @returns
//  */
// const AuthPage = (props) => {
//   //utilizo el hook useLocation
//   const location = useLocation();
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     if (
//       location.pathname === "/signup" &&
//       values.password !== values.confirmPassword
//     ) {
//       return Modal.error({
//         content: "hey que paso las contraseñas no coinciden",
//       });
//     }
//     //forma dinamica
//     const service =
//       location.pathname === "/signup" ? signupWs(values) : loginWs(values);

//     service.then((res) => {
//       const { data, status, errorMessage } = res;
//       if (status) {
//         props.authentication(data.user);
//         Modal.success({ content: "Todo chido ya pudiste entrar" });
//         navigate("/profile");
//         return;
//       } else {
//         //pueden guardar el errorMessage en un state para mostrarlo en el html
//         Modal.error({ content: errorMessage });
//       }
//     });
//   };

  


//   return <></>;
// };

// export default AuthPage;

