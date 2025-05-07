import'../../css/Pages.css';

const DashboardContent = ({selectedItem})=>{
    return(
        <div className="dashboard">
            <h2>{selectedItem}</h2>
            <p>content for: {selectedItem} </p>

        </div>

    );
};

export default DashboardContent;