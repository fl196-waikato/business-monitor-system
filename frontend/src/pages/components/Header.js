import '../../css/Pages.css';

const Header = ({username})=>{
    const date=new Date().toLocaleDateString();
    
    return(
        <div className="Header">
            <div>
                Welcome, {username}
            </div>
            <div>
                {date}
            </div>
        </div>

    );
};

export default Header;