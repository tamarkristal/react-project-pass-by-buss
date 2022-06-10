import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Sender from './components/Sender/Sender'
import Transporter from './components/Transporter/Transporter'
export default function Routers(){
    return(
        <>
        <Routes>
            
            <Route path='' element={<Home/>}/>
            <Route path='/Sender' element={<Sender/>}/>
            <Route path='/Transporter' element={<Transporter/>}/>
        </Routes>
        </>
    )
}