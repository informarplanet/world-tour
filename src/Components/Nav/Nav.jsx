import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <ul>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </ul>
        </div>
    )
}