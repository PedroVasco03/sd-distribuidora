import style from './hero.module.css';
import Image from 'next/image';
import i1 from '../../assets/images/hero.png'

const Hero = () =>{
    return(
        <>
            <div className={style.container}>
                <section className={style.section1}>
                    <Image alt='água' src={i1} className={style.img}/>
                </section>
                <section className={style.section2}>
                    <div className={style.content}>
                        <h2 className={style.h2}>Bem-vindo a SD<span style={{ color: 'rgba(0, 0, 0, 0.607)', fontSize:'0.9rem', letterSpacing:'4px'}}>distribiudora</span></h2>
                        <p className={style.p}><a href="#">Clique aqui</a> e conheça nosso sistema que surge para facilitar a distribuição de água potável no nosso país.</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero