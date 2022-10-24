import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


const FORM_ENDPOINT = "https://public.herotofu.com/v1/a2caac00-4b33-11ed-8970-6943e4ac8982"; // TODO - fill on the later step


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const boxRef = useRef();
  const select = gsap.utils.selector(boxRef);
  const timeline = useRef();

  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .from(select("form"), 1, { y: 180, opacity: 0 })
  }, []);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className='thanks-contenair'>
        <h1>Merci !</h1>
        <h3>Nous serons en contact très bientôt.</h3>
        <button onClick={() => navigate("/")}>Retourner a l'accueil</button>
      </div>
    );
  }

  return (
    <>
      <Header title={"> " + window.location.pathname} />
      <div className='contact' ref={boxRef}>
        <p>Contactez-moi dès maintenant pour un <b>devis gratuit en moins de 24 heures</b> ou pour un quelquonque conseil, je serais heureux d'y répondre!</p>
        <form
          className='contact-form'
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea placeholder="Message" name="message" required />
          <button type="submit">Envoyer un message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;