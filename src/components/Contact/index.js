import { BiLogInCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import './styles.scss';
import contactMeImg from '../../assets/img/contact_me_imgs.png';
import Spinner from '../Spinner';

const Contact = ({ isDark }) => {
  const url = 'https://formspree.io/f/xjvddwoe';
  const [pvalue, setPvalue] = useState(0);
  const [userMsg, setUserMsg] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toastOptions = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark',
  };
  const handleInputs = (event) => {
    setUserMsg({ ...userMsg, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { name, email, message } = userMsg;

    if (message.length < 5) {
      toast.error('Message is required', toastOptions);
      return false;
    } if (name === '') {
      toast.error('Enter your name here.', toastOptions);
      return false;
    } if (name.length < 2) {
      toast.error('Enter your full name', toastOptions);
      return false;
    } if (email === '') {
      toast.error('Email is required', toastOptions);
      return false;
    }
    return true;
  };
  const operator = async (e) => {
    e.preventDefault();
    const { name, email, message } = userMsg;
    const requestOptions = {
      name,
      email,
      message,
    };
    console.log(requestOptions);

    if (handleValidation()) {
      setPvalue(1);
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestOptions),
      });

      const data = await res.json();

      if (data) {
        setPvalue(0);
        setUserMsg({
          name: '',
          email: '',
          message: '',
        });
      }
      console.log(data);
      toast.error(data.error, toastOptions);
      toast.success(data.message, toastOptions);
    }
  };

  return (
    <section className={`contact_page_section ${isDark ? 'dark-mode' : ''}`} id="contact_page">
      <div className="contact_section">
        <div className="contact_container">
          <div className={`form_container_left ${isDark ? 'dark-mode' : ''}`}>
            <div className="user_form">
              <ToastContainer />
              <form
                action={url}
                className="user_message_form"
                method="POST"
                onSubmit={operator}
              >
                <h3>
                  Get in <span> Touch </span>
                </h3>
                <p>I'll get back to you as soon as i can</p>
                <div className="name_val">
                  <label htmlFor="name">
                    Name
                    <input
                      type="text"
                      name="name"
                      value={userMsg.name}
                      onChange={handleInputs}
                      autoComplete="off"
                    />
                  </label>
                </div>
                <div className="username_val">
                  <label htmlFor="name">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={userMsg.email}
                      onChange={handleInputs}
                      autoComplete="off"
                    />
                  </label>
                </div>
                <div className="user_msg">
                  <label htmlFor="msg">
                    Message
                    <textarea
                      type="text"
                      name="message"
                      id="user_text_area"
                      cols="30"
                      rows="6"
                      value={userMsg.message}
                      onChange={handleInputs}
                    />
                  </label>
                </div>
                <div className="user_send_msg_button">
                  <button
                    type="submit"
                    className="submit_msg"
                    id="user_msg_btn"
                    disabled={pvalue !== 0}
                    style={{
                      background: pvalue !== 0 ? '#d2b3e5' : '',
                      border: pvalue !== 0 ? '#d2b3e5' : '',
                    }}
                  >
                    {pvalue ? (
                      <Spinner
                        id="your_spinner_d"
                        style={pvalue ? 'flex' : 'none'}
                      />
                    ) : (
                      <BiLogInCircle />
                    )}
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <img
            src={contactMeImg}
            className="form_container_right"
            alt="contact images"
          />
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
export default Contact;
