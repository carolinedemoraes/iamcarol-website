import { SocialMedia } from "../components/SocialMedia";
import { Tech } from "../components/Tech";
import './styles/Contact.scss';

export function Contact() {
    return (

        <section className="contact">
            <div className="contact__top">
                <Tech />
                <SocialMedia />
            </div>

            <div className="contact__content">
                <h1 className="contact__title">Let's Work Together!</h1>
                <p className="contact__text">
                    I am a dedicated and responsible professional who is always learning.<br />
                    Shall we work together?!<br />
                    <strong>Contact me here:</strong>
                </p>

                <div className="contact__info">
                    <p>📞 +351 927 018 251</p>
                    <p>✉️ <a href="mailto:caroliineedemoraes@gmail.com">caroliineedemoraes@gmail.com</a></p>
                </div>
            </div>
        </section>
    );
}
