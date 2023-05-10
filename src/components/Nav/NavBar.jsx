import SearchBar from "../SearchBar/SearchBar"
import style from './NavBar.module.css'
import { Link } from "react-router-dom"

const NavBar = ({onSearch}) => {
    return(
        <div className={style.NavContainer}>
            <SearchBar onSearch={onSearch}/>

            <div className={style.ButtonContainer} >
                <Link to='/home'>
                    <button>Home</button>
                </Link>

                <Link to='/about'>
                    <button>About</button>
                </Link>
            </div>

        </div>
    )
}

export default NavBar