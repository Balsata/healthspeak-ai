import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../ui/components/pages/Home';
import Translation from '../ui/components/pages/Translation';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/translate" element={<Translation />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
