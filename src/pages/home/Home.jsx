import './home.css';
import Topbar from '../../components/topBar/Topbar';
import Sidebar from '../../components/sideBar/Sidebar';
import Content from '../../components/content/Content';

function Home() {
    return (
        <>
        <div className='home'>
        <Topbar />
        <div>
        <Sidebar />
        <Content />
        </div>
        </div>
        </>
    )
}

export default Home
