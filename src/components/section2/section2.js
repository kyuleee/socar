import './section2.css';

let section2 = (props)=>{
    return(
        <section className={`section2 ${props.bgimg}`}>
            <article className='w1440'>
                <p>{props.title}</p>
                <h2>{props.subtit}</h2>
                <div>{props.title}<span>{'〉'}</span></div>
            </article>
        </section>
    );
}

export default section2;