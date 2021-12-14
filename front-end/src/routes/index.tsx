import {
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom';

import Signin from '../pages/Signin';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Signin />}/>
                <Route path={'/signup'} element={<SignUp />} />
                <Route path={'dashboard'} element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;