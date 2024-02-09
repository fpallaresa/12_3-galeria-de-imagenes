import ChangeTemplate from "../ChangeTemplate/ChangeTemplate";
import Search from "../Search/Search";
import "./Header.css"

const Header = () => {

  return (
    
    <div className="header">
      <Search></Search>
      <ChangeTemplate></ChangeTemplate>
    </div>

    );

}

export default Header;