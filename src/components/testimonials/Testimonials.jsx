import React, { useState } from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Logo from "../../assets/logo.png";

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Argana",
			subtitle: "Founder @ Artificial Reasoning",
			comment: "Konsepnya bagus, mulai dari pengenalan, shortcut kontak di awal, dan fitur-fitur yang ada seperti filter proyek, mungkin bagian pesan perlu di tambahkan fitur look, agar group-cardnya bisa berhenti saat di baca!",
		},
		{
			id: 2,
			image: Image3,
			title: "Bhivam Augana",
			subtitle: "Salah satu tim dari @ Ganavd",
			comment: "I like the light and dark interaction desain, only the project part needs to be changed when in light mode the background card needs to be adjusted!",
		},
	];

	return (
		<section className="testimonials container section">
			<h2 className="section__title">Testimoni</h2>

			<div className="testimonial__wrapper">
				<Swiper className="testimonial__container grid"
					modules={[Pagination, Autoplay, Navigation]}
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					grabCursor={true}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					navigation={{
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					}}
					pagination={{ clickable: true }}>
					{data.map(({ id, image, title, subtitle, comment }) => {
						return (
							<SwiperSlide className="testimonial__item" key={id}>
								<div className="thumb">
									<img src={image} alt="" />
								</div>
								<h3 className="testimonial__title">{title}</h3>
								<span className="subtitle">{subtitle}</span>
								<div className="comment">{comment}</div>
							</SwiperSlide>
						)
					})}
				</Swiper>

				<div className="swiper-button-prev custom-nav">
					<HiChevronLeft />
				</div>
				<div className="swiper-button-next custom-nav">
					<HiChevronRight />
				</div>
			</div>
		</section>
	)
}

export default Testimonials