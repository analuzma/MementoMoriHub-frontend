// import {  Form,Modal  } from "antd";
// import { FormItem } from "../components";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// //me traigo mis servicios!!! LoginWS SignupWS
// import { loginWs, signupWs } from '../services/auth-ws'
// /**
//  * 
//  * @param {*} props 
//  * @returns 
//  */
// const AuthPage = (props) => {
//   //utilizo el hook useLocation
//   const location = useLocation()
//   const navigate = useNavigate()

//   const onFinish = (values) => {
//     if(location.pathname === "/signup" && values.password !== values.confirmPassword){
//       return Modal.error({content:"hey que paso las contraseñas no coinciden"})
//     }
//     //forma dinamica 
//     const service = location.pathname === "/signup" ? signupWs(values) : loginWs(values)


//     service.then(res=>{
//       const {data,status,errorMessage} = res;
//       if(status){
       
//         props.authentication(data.user)
//         Modal.success({content: "Todo chido ya pudiste entrar"})
//         navigate("/profile")
//         return;
//       }else{
//         //pueden guardar el errorMessage en un state para mostrarlo en el html 
//         Modal.error({content: errorMessage})
//       }
//     })
   
//   };

//   const onFinishAsync = async(values) => {
//     if(values.password !== values.confirmPassword){
//       return alert("hey que paso las contraseñas no coinciden")
//     }
//     try{
//       const {data} = await signupWs(values)
//       alert("Todo chido ya pudiste entrar")
//     }catch(error){
//       console.log(error)
//       alert("No se puede registrar")
//     }
//   }

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };




//   return (
//     <Form
//       name="basic"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       {/* con mas de dos elementos */}
//       {location.pathname === "/signup" ?
//       <>
//         <FormItem
//           label="Nombre"
//           name="firstName"
//           type="text"
//         />
//         <FormItem
//           label="Apellido(s)"
//           name="lastName"
//           type="text"
//         /> 
//       </> : null}
//       {/* {location.pathname === "/signup" &&} */}
//       <FormItem
//         label="Correo"
//         name="email"
//         type="text"
//         rules={[
//           {
//             required: true,
//             message: "Coloca tu correo!",
//           },
//         ]}
//       />
//       <FormItem
//         label="Contraseña"
//         name="password"
//         type="password"
//         rules={[
//           {
//             required: true,
//             message: "Por favor ingresa tu contraseña!",
//           },
//         ]}
//       />
//       {/* && */}
//       {location.pathname === "/signup" && <FormItem
//         label="Confirma tu contraseña"
//         name="confirmPassword"
//         type="password"
//         rules={[
//           {
//             required: true,
//             message: "Por favor ingresa tu confirmacion de contraseña!",
//           },
//         ]}
//       />
//       }
//       <FormItem
//         button_text="enviar"
//         type="button"
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
       
//       />
//       {location.pathname === "/signup" ?
//         <p> Si ya tienes cuenta <Link to="/login">ingresa!</Link></p>
//        :
//        <p> Si aun no tienes cuenta <Link to="/signup">registrate!</Link></p>
//        }
      
//     </Form>
//   );
// };

// export default AuthPage;