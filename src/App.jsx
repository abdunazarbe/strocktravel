import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Detail from './pages/Detail'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Feedbacks from './pages/Feedbacks'
import Travel from './pages/Travel'
import Xarazm from './pages/Xarazm'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='hazratiImam' element={<Detail />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts/>} />
        <Route path="feedbacks" element={<Feedbacks />} />
        <Route path="travel" element={<Travel />} />
        <Route path="xarazm" element={<Xarazm />} />
      </Routes>
    </div>
  );
};

export default App;