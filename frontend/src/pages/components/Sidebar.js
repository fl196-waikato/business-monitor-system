import '../../css/Pages.css';

const Sidebar=({onSelect, selectedItem}) => {
    const list=[
        "Product Management",
        "Client Management", 
        "Product&Client Management", 
        "My Profile"
    ];

    return(
        <div className="flex flex-col w-64 bg-darkgray shadow-md p-4">
            <ul className="text-lg font-semibold">
                {list.map((item)=>(
                    <li 
                        key={item} 
                        onClick={()=> onSelect(item)} 
                        className={`mb-4 cursor-pointer text-blue-900 ${
                            selectedItem === item ? "font-bold text-xl italic" : ""
                        }`}
                    >
                        {item}
                    </li>

                ))}

            </ul>
        </div>

    );
};

export default Sidebar;