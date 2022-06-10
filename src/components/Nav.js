import {Link} from 'react-router-dom'
export default function Nav(){
return(
    <>
    <nav>
        <Link to='Sender'>שולח</Link>
        <Link to='Transporter'> מעביר</Link>
    </nav>
    </>
)
}