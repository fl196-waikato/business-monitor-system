import '../../css/Pages.css';

const Sidebar=({onSelect}) => {
    const list=[
        "Product Management",
        "Client Management", 
        "Product&Client Management", 
        "My Profile"
    ];

    return(
        <div className="sidebar">
            <ul className="list">
                {list.map((item)=>(
                    <li 
                        key={item} 
                        onClick={()=> onSelect(item)} 
                        className="selectedItem"
                    >
                        {item}
                    </li>

                ))}

            </ul>
        </div>

    );
};

export default Sidebar;