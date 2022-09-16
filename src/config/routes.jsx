//importar mis pages
import {AuthPage, ProfilePage, CalendarPage, JournalPage, JournalWritePage,HomePage, JournalDetailPage, QuotesPage, CountdownPage}  from '../pages'

const routes = (props)=>{
    //<Route path="/" element={componente} />
    return [
        {
            path: "/", //Homepage
            element:<HomePage {...props}/>
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
            path:"/journal/write",
            element:<JournalWritePage {...props}/>
        },
                {
            path:"/journal/:id",
            element:<JournalDetailPage {...props}/>
        },
                {
            path:"/quotes",
            element:<QuotesPage {...props}/>
        },
                        {
            path:"/countdown",
            element:<CountdownPage {...props}/>
        }
    ]
}

export default routes