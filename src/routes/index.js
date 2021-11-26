import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from "../pages/Home/Home.js"
import {Error404} from "../pages/Error404/Error404.js"
import {News} from "../pages/News/News.js"
import {Contact} from "../pages/Contact/Contact.js"
import Navbar from '../components/Navbar/Navbar.js'
const Routes = () =>{
    return(
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route path="*" component={Error404}/>                    
                </Switch>
            </Router>
        </>
    )
}
export default Routes;