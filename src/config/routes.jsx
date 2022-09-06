//importar mis pages
import {SignInSide}  from '../pages'

const routes = (props)=>{

    //<Route path="/" element={componente} />
    return [
        {
            path: "/", //Homepage
            element:<h1>Este es el home</h1>
        },
        {
            path:"/login",
            element:<SignInSide {...props}/>
        },
        // {
        //     path:"/signup",
        //     element:<AuthPage {...props}/>
        // },
        // {
        //     path:"/profile",
        //     element:<ProfilePage {...props}/>
        // }
    ]
}

export default routes