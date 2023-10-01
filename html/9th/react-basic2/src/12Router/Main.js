import { Link } from "react-router-dom"
export default function Main() {
    return(
        <>
            <Link to='/'>
                <h2>React Router Work</h2>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/student/Kdt' > 학생 KDT</Link>
                    </li>
                    <li>
                        <Link to='/student/CodingOn' > 코딩온</Link>
                    </li>
                    <li>
                        <Link to='/student/new?name=KDT9' > Search Params</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}