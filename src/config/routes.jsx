//importar mis pages
import {AuthPage, ProfilePage, CalendarPage, JournalPage, QuotesPage, WisdomPage}  from '../pages'

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
        },
                {
            path:"/calendar",
            element:<CalendarPage {...props}/>
        },
                {
            path:"/journal",
            element:<JournalPage {...props}/>
        },
                {
            path:"/quotes",
            element:<QuotesPage {...props}/>
        },
                        {
            path:"/wisdom",
            element:<WisdomPage {...props}/>
        }
    ]
}

export default routes