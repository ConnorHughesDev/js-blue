import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from './concepts/FunctionalComponents/FunctionalComponentDemo';
import JSX from './concepts/JSX/JSX'
import State from './concepts/State';
import Effects from './Effects';
import PropsDemo from './concepts/PropsDemo';
import Hooks from './concepts/Hooks';
import TimePiecesApp from './concepts/apps/timer-apps/TimePiecesApp';
import NytApp from './concepts/apps/nyt-app/NytApp';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/jsx'>JSX</Link></li>
                    <li><Link to="/state">useState</Link></li>
                    <li><Link to='/effects'>Effects</Link></li>
                    <li><Link to="/propsdemo">PropsDemo</Link></li>
                    <li><Link to="/hooks">Hooks</Link></li>
                    <li><Link to="/timer">Timers</Link></li>
                    <li><Link to="/nyt">NYT</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/resources'><Resources /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/functionalcomponent'><FunctionalComponentDemo /></Route>
                    <Route exact path='/jsx'><JSX /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/effects'><Effects /></Route>
                    <Route exact path='/propsdemo'><PropsDemo/></Route>
                    <Route exact path='/hooks'><Hooks/></Route>
                    <Route exact path='/timer'><TimePiecesApp/></Route>
                    <Route exact path='/nyt'><NytApp/></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;