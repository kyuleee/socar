import './header.css';
import logo from './logo-w.svg';

let header = ()=>{
    let gnb='gnb';
    return(
        <div id='header'>
            <div className='header_wrap w1440'>
                <h1>
                    <img src={logo} alt='socar logo'></img>
                </h1>
                <nav>
                    <ul className = {gnb}>
                        <li><a href='#'>ABOUT</a></li>
                        <li><a href='#'>SOCAR UNIVERSE</a></li>
                        <li><a href='#'>MOBILITY TECH</a></li>
                        <li><a href='#'>CAREERS</a></li>
                        <li><a href='#'>IR</a></li>
                        <li><a href='#'>NEWS</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default header;