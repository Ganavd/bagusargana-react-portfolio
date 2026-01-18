import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../assets/logo.png";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            return toast.error("Tolong lengkapi form di atas");
        }

        setLoading(true);

        const serviceID = "service_vshz1m2";
        const templateID = "template_u70kv3v";
        const userID = "user_v9p8v9p8v9p8v9p8v";

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then(
                (result) => {
                    setLoading(false);
                    toast.success(`Email berhasil terkirim.`);
                },
                (error) => {
                    setLoading(false);
                    toast.error(`Gagal mengirim email. ${error.text}`);
                }
            );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Hubungi Saya</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Email</h3>
                    <p className="contact__details">
                        Bisa berbagi dengan saya melalui email.
                    </p>
                </div>

                <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Masukan Nama"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Masukan Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder="Masukan Subjek"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Masukan Pesan"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        {loading ? "Sending..." : "Kirim Pesan"}
                    </button>
                </form>
                <ToastContainer position="bottom-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;
