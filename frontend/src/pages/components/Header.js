import '../../css/Pages.css';

const Header = ({username})=>{
    //const date=new Date().toLocaleDateString();
    const dateTime=new Date().toLocaleString();
    const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' }); // 星期几
     // 假设天气为静态文本，实际可用API获取
    const weather = "☀️ Sunny 28°C";
    
    return(
        <div className="flex justify-between items-center px-5 py-2 bg-blue-200 text-white text-lg italic font-bold h-15">
            <div>
                Welcome, {username}
            </div>
            <div className="flex flex-row items-end">
                <span className="mx-2">{dateTime}</span>
                <span className="mx-2">{weekday}</span>
                <span className="mx-2">{weather}</span>
            </div>
        </div>

    );
};

export default Header;