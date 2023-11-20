import './footer.css';
import logo from './logo.svg';

let footer = ()=>{
    return(
        <div id='footer' className='w1440'>
            <div className='topFooter'>
                <h1>
                    <img src={logo} alt='footer logo'></img>
                </h1>
                <ul>
                    <li><a href='#'>I</a></li>
                    <li><a href='#'>F</a></li>
                    <li><a href='#'>Y</a></li>
                    <li><a href='#'>B</a></li>
                </ul>
            </div>
            <div className='botFooter'>
                <div>
                    <ul>
                        <li><a>문의하기</a> | </li>
                        <li><a>오시는 길</a> | </li>
                        <li><a>개인정보처리방침</a> | </li>
                        <li><a>쏘카 윤리강령</a> | </li>
                        <li><a>기업윤리 신고</a> | </li>
                    </ul>
                    <p>ⓒ 2023 SOCAR All rights reserved.</p>
                </div>
                <button>관련 사이트 <span> {'<'} </span></button>
            </div>
        </div>
    );
}

export default footer;