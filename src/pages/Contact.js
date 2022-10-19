import React, {useRef, useEffect, useState} from "react";
import gsap from "gsap";
import Header from '../components/Header';


const FORM_ENDPOINT = "https://public.herotofu.com/v1/a2caac00-4b33-11ed-8970-6943e4ac8982"; // TODO - fill on the later step


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const boxRef = useRef();
	const select = gsap.utils.selector(boxRef);
	const timeline = useRef();
  
	useEffect(() => {
	  timeline.current = gsap
		.timeline()
		.from(select("form"), 1, {opacity: 0 }, "0.2")
	}, []);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  
  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

	return (
		<>
			<Header title={"> " + window.location.pathname} />
			<div className='contact' ref={boxRef}>
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
            <button type="submit">Send a message</button>
        </form>
			</div>
		</>
	);
};

export default Contact;