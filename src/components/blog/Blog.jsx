import React from 'react';
import './Blog.css';
import Image1 from '../../assets/1.png'
const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Peluncuran Proyek</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Launched</span></a>
                        <a href="#"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Website Kelas</h3>
                        <div className="blog__meta">
                            <span>09 February, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Bagus Argana</span>
                        </div>
                        <p className="blog__description">
                            Website Kelas RPLA Angkatan 61 adalah website yang dibuat untuk menampilkan data dan informasi dari kelas.
                        </p>
                        <a href="#portfolio" className="nav__link">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog