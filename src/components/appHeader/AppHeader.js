import './appHeader.scss';
import {Link, NavLink, useParams} from "react-router-dom";
import {ROUTES} from "../../constanta/Routes";

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to={ROUTES.characters}>
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink
                            style={({isActive}) => ({color:  isActive ? 'rgba(161,0,14,0.82)' : 'inherit'})}
                            to={ROUTES.characters}>
                            Characters
                        </NavLink>
                    </li>
                    /
                    <li>
                        <NavLink
                            style={({isActive}) => ({color:  isActive ? 'rgba(161,0,14,0.82)' : 'inherit'})}
                            to={ROUTES.comics}>
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;