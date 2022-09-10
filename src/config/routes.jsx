//importar mis pages
import {AuthPage, ProfilePage}  from '../pages'

const routes = (props)=>{
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
        {
            path:"/profile",
            element:<ProfilePage {...props}/>
        }
    ]
}

export default routes