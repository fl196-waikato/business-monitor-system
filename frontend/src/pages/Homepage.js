
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';


function HomePage({username}){
    const [selectedPage, setSelectedPage] = useState('Summary');
    return(
        <div>
          <Header username={username} />
          <div>
            <div>
                <Sidebar onSelect={setSelectedPage} />
            </div>
            <div>
                <DashboardContent selectedItem={selectedPage} />
            </div>
          </div>
        </div>

    );
}

export default HomePage;