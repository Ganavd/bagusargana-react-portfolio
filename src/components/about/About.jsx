import React from 'react';
import './About.css';
import Image from '../../assets/avatar-1.1.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">
                Tentang Saya
            </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Halo! Saya Bagus Argana, dan saya tinggal di Ponorogo, Indonesia. Saya belajar di SMKN 1 Jenangan
                            di bidang Pengembangan Perangkat Lunak.<br /><br />
                            Saya bisa dengan jujur mengatakan bahwa perjalanan ini saya berharap bisa
                            berkembang lebih jauh sebagai Ahli Perangkat Lunak. Fokus saya saat ini adalah memperluas portofolio saya
                            dengan membangun lebih banyak proyek yang bisa saya tambahkan di sini, serta menjadi anggota tim yang baik di
                            peran saya saat ini.<br /><br />
                            Berikut beberapa teknologi yang baru-baru ini saya kerjakan:
                            <br />
                            Junior
                        </p>
                        <ul className="about__list">
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Postgres SQL</li>
                            <li>MySQL</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Unity</li>
                            <li>React</li>

                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About