import './section1.css';
import video from './main_video.mp4';

let section1 = ()=>{
    return(
        <div className='section1'>
            <video width='100%' autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <article className='w1440'>
                <h2>{'모든 사람이 자유롭고 행복하게 \n 이동하는 세상을 만듭니다'}</h2>
            </article>
        </div>
    );
}

export default section1;