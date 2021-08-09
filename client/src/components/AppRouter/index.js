import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countries from '../Countries';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Countries}/>
            </Switch>
        </Router>

    )
}
export default AppRouter;