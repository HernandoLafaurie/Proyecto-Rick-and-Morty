import SearchBar from "../SearchBar/SearchBar"
import style from './NavBar.module.css'

const NavBar = ({onSearch}) => {
    return(
        <div className={style.NavContainer}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default NavBar