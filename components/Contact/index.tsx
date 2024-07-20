import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <h1 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Contact Us
        </h1>
        <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md dark:bg-black">
          <div className="space-y-4">
            <div className="flex items-center">
              {/* <svg
                className="dark:text-yellow-500 mr-2 h-6 w-6 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4v16c0 .553.447 1 1 1h16c.553 0 1-.447 1-1V4c0-.553-.447-1-1-1H4c-.553 0-1 .447-1 1zm2 0h16v16H5V4z"
                />
              </svg> */}
              <a
                href="tel:+971566688874"
                className="dark:text-yellow-500 text-primary hover:underline"
              >
                Call: +971 56 668 8874
              </a>
            </div>
            <div className="flex items-center">
              {/* <svg
                className="dark:text-yellow-500 mr-2 h-6 w-6 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.003 12.335A9.973 9.973 0 0012 21c5.523 0 10-4.477 10-10S17.523 1 12 1 2 5.477 2 11c0 1.357.226 2.679.65 3.87L4 12l.75 1.688A8.973 8.973 0 002 12.335z"
                />
              </svg> */}
              <a
                href="https://web.whatsapp.com/send/?phone=971566688874"
                className="dark:text-yellow-500 text-primary hover:underline"
              >
                WhatsApp: +971 56 668 8874
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                {/* <svg
                  className="dark:text-yellow-500 mr-2 h-6 w-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12h-6v6H8v-6H2l10-10 10 10z"
                  />
                </svg> */}
                <a
                  href="mailto:Info@stopswash.com"
                  className="dark:text-yellow-500 text-primary hover:underline"
                >
                  Email: Info@stopswash.com
                </a>
              </div>
              <div className="flex items-center">
                {/* <svg
                  className="dark:text-yellow-500 mr-2 h-6 w-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12h-6v6H8v-6H2l10-10 10 10z"
                  />
                </svg> */}
                <a
                  href="mailto:Sales@stopswash.com"
                  className="dark:text-yellow-500 text-primary hover:underline"
                >
                  Email: Sales@stopswash.com
                </a>
              </div>
              <div className="flex items-center">
                {/* <svg
                  className="dark:text-yellow-500 mr-2 h-6 w-6 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12h-6v6H8v-6H2l10-10 10 10z"
                  />
                </svg> */}
                <a
                  href="mailto:Account@stopswash.com"
                  className="dark:text-yellow-500 text-primary hover:underline"
                >
                  Email: Account@stopswash.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
