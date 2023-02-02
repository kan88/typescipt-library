import { Link } from 'react-router-dom'
import classes from './nav.module.css'

export default function Nav() {
    return (
        <ul className={classes.nav__list}>
            <li>
                <Link className={classes.nav__item} to={`/`}>Template Page</Link>
                <Link className={classes.nav__item} to={`/fullscreen`}>Fullscreen API</Link>
                <Link className={classes.nav__item} to={`/geolocation`}>Geolocation API</Link>
            </li>
        </ul>
    )
}