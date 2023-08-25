import "./style.scss";
import Header from '../Header'
import Intro from './Intro'
import Second from './Second'
import Karousel from './Karousel'
import Texts from './Texts'
import Xkarousel from '../Xkarousel'
import Footer from "../Footer"
const index = () => {
    return (
        <main>
            <Header />
            <Intro />
            <Second />
            <Karousel />
            <Texts/>
            <Xkarousel/>
            <Footer/>
        </main>
    );
};

export default index;
