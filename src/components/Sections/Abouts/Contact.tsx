import { Link } from "react-router-dom";
import contactImage from "../../../assets/images/About/contuct-1.jpg";

const ContactUs = () => {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between gap-5 w-full mx-auto   p-5">
      <div className="flex-1 lg:w-[45%]">
        <img
          className="w-full h-auto rounded-lg"
          src={contactImage}
          alt="Contact Us"
        />
      </div>
      <div className="flex-1 lg:w-[45%] space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
          CONTACT US
        </h2>
        <h2 className="text-3xl lg:text-5xl text-orange-500">TODAY</h2>
        <p className="text-gray-600">
          We'd love to hear from you! Reach out to us with any questions or
          feedback, and we'll get back to you as soon as possible.
        </p>
        <div className="flex items-center gap-4">
          <Link to="https://web.facebook.com/" className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-current text-gray-700 h-8 w-8"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </Link>
          <Link to="https://www.instagram.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700 h-8 w-8"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </Link>
          <Link to="https://www.youtube.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700 h-8 w-8"
              viewBox="0 0 576 512"
            >
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </Link>
          <Link to="https://x.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700 h-8 w-8"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Link>
          <Link to="https://www.linkedin.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700 h-8 w-8"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5s17.3-38.5 38.5-38.5 38.5 17.3 38.5 38.5-17.2 38.5-38.5 38.5zm282.5 243h-66.5V305.3c0-26.4-9.5-44.5-33.1-44.5-18 0-28.7 12.1-33.4 23.8-1.7 4.2-2.1 10.1-2.1 16V416h-66.5s.8-183.2 0-202.7h66.5v28.7c8.8-13.6 24.5-32.9 59.6-32.9 43.5 0 76.1 28.4 76.1 89.6V416z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
