import'../../css/Pages.css';
import ClientManagement from '../ClientManagement'; 
import ProductManagement from '../ProductManagement';
import ProductClientManagement from '../ProductClientManagement';
import MyProfile from '../MyProfile';

const DashboardContent = ({selectedItem})=>{

    //渲染dashboard内容
    const renderContent = () => {
        switch(selectedItem) {
            case 'Product Management':
                return <ProductManagement />;
            case 'Client Management':
                return <ClientManagement />;
            case 'Product&Client Management':
                return <ProductClientManagement />;
            case 'My Profile':
                return <MyProfile />;
            default:
                return <ProductManagement />;
        }
    }
    return (
        <div className="dashboard-content">
            <h2>{selectedItem}</h2>
            {renderContent()}
        </div>
    );
};

export default DashboardContent;