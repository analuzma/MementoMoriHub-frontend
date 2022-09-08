//importar mis pages
import {AuthPage}  from '../pages'

const routes = (props)=>{
console.log("props desde rutas", props)
    //<Route path="/" element={componente} />
    return [
        {
            path: "/", //Homepage
            element:<h1>Remember you will die</h1>
        },
        {
            path:"/signin",
            element:<AuthPage {...props}/>
        },
        {
            path:"/signup",
            element:<AuthPage {...props}/>
        },
        // {
        //     path:"/profile",
        //     element:<ProfilePage {...props}/>
        // }
    ]
}

export default routes