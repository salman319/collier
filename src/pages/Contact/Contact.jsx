import start from "../../assets/images/start.jpg"
import a1 from "../../assets/images/a1.png"
import a2 from "../../assets/images/a2.png"
import a3 from "../../assets/images/a3.png"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import { AddressIcon, LocationIcon, PhoneIcon } from "../../assets"

function Contact() {

  return (
    <>
      <Header />
      <main>
        <section className="contact-section relative bg-[#000000a5] bg-cover bg-no-repeat bg-top h-[calc(100vh-80px)] flex items-center py-5">
          <div className="overlay"></div>
          <div className="w-[90%] md:w-[60%] mx-auto relative z-10">
            <h1 className="text-center text-3xl md:text-6xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-base text-white md:text-xl text-center pt-4">
              We'd love to hear from you! Whether you have questions about our services or need tailored consulting solutions, our team is ready to assist.
            </p>
          </div>
        </section>

        <section className="mt-11 md:mt-20">
          <div className="wrapper">
            <div>
              <p className="text-base text-center text-gray-500">We have operations across the world, with offices in the United States, UK, and Canada.</p>
            </div>
            <div className="mx-auto w-full md:w-1/2 flex gap-2 items-center flex-col mt-4">
              <PhoneIcon />
              <p className="text-black text-base font-semibold">Phone</p>
              <p className="text-gray-600 text-base mb-6 md:mb-0">+1 (469) 746 1037</p>
            </div>
            <hr className="border-mint-500 border-2 my-5" />
            <div className="">
              <div className="flex justify-center flex-col items-center">
                <AddressIcon />
                <p className="text-black text-base font-semibold">Address</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
                <div className="shadow-custom rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full flex items-center justify-center p-1 border border-mint-500">
                      <LocationIcon />
                    </div>
                    <div className="text-black font-semibold text-base">Global Headquarters</div>
                  </div>
                  <div className="grid grid-cols-2 mt-3 gap-5">
                    <p className="text-gray-600 text-base">8117 Preston Road, Suite 300, Dallas, TX 75225.</p>
                    <img src={a1} className="w-full aspect-video rounded-2xl" alt="Media" />
                  </div>
                </div>

                <div className="shadow-custom rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full flex items-center justify-center p-1 border border-mint-500">
                      <LocationIcon />
                    </div>
                    <div className="text-black font-semibold text-base">West Coast US Office</div>
                  </div>
                  <div className="grid grid-cols-2 mt-3 gap-5">
                    <p className="text-gray-600 text-base">11726 San Vicente Boulevard, Suite 550, Los Angeles, CA 90049.</p>
                    <img src={a2} className="w-full aspect-video rounded-2xl" alt="Media" />
                  </div>
                </div>

                <div className="shadow-custom rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full flex items-center justify-center p-1 border border-mint-500">
                      <LocationIcon />
                    </div>
                    <div className="text-black font-semibold text-base">East Coast US Office</div>
                  </div>
                  <div className="grid grid-cols-2 mt-3 gap-5">
                    <p className="text-gray-600 text-base">801 Brickell Avenue, Suite 900, Miami, FL 33131.</p>
                    <img src={a3} className="w-full aspect-video rounded-2xl" alt="Media" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="my-11 md:my-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="grid-item px-8">
              <div className="text-center mb-3">
                <p className="font-semibold text-sm text-gray-500 uppercase">Start Your Journey</p>
                <h1 className="text-2xl md:text-4xl mt-1 font-bold mb-4 text-blue-550">How to Get Started</h1>
              </div>
              <p className="text-base text-gray-600">
                We understand that every business challenge is unique, which is why we take a personalized approach to every consultation. Reach out to us today for a free initial consultation, where we will:
              </p>
              <ul className="text-base text-gray-600 list-disc ml-9 my-4">
                <li>
                  Assess your current business needs and challenges.
                </li>
                <li>
                  Provide insights into potential solutions tailored to your industry.
                </li>
                <li>
                  Discuss how our consulting and staffing services can support your goals.
                </li>
              </ul>
              <p className="text-base text-gray-600">
                Our dedicated team is available to answer any questions and help guide you through our offerings. Whether you're looking for short-term staffing support, long-term strategic consulting, or AI-powered business solutions, we have the expertise to make an impact.
              </p>
            </div>

            <div>
              <img src={start} className="w-full" alt="Media" />
            </div>
          </div>
        </section>

        {/* <section className="mt-11 md:mt-20 contact-section relative bg-[#000000a5] bg-cover bg-no-repeat bg-top flex items-center py-11 md:py-20">
          <div className="wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative z-10">
                <h1 className="text-center text-3xl md:text-5xl font-bold text-white">
                  Let's Connect
                </h1>
                <p className="text-base text-white md:text-xl text-center pt-4">
                  Fill out the form below, and we'll get back to you as soon as possible. Our experts are ready to collaborate and drive meaningful results for your business.
                  <br /><br />
                  At Collier Consulting & Staffing, we are committed to helping businesses succeed through expert consulting and staffing solutions. Contact us today to discover how we can support your growth and transformation.
                </p>
              </div>

              <div
                style={{ animation: "slideInFromLeft 1s ease-out" }}
                className="w-full relative bg-gradient-to-r from-mint-500 to-blue-550 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
              >
                <h2
                  style={{ animation: "appear 2s ease-out" }}
                  className="text-center text-4xl font-extrabold text-white"
                >
                  Contact Us
                </h2>
                <form method="POST" action="#" className="space-y-6">
                  <div className="relative">
                    <input
                      placeholder="Name"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-blue-800"
                      required=""
                      id="name"
                      name="name"
                      type="name"
                    />
                    <label
                      className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-550 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-800 peer-focus:text-sm"
                      htmlFor="name"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      placeholder="john@example.com"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-blue-800"
                      required=""
                      id="email"
                      name="email"
                      type="email"
                    />
                    <label
                      className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-550 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-800 peer-focus:text-sm"
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Write a message"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-blue-800"
                      required=""
                      rows={3}
                      id="message"
                      name="message"
                      type="message"
                    />
                    <label
                      className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-550 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-800 peer-focus:text-sm"
                      htmlFor="message"
                    >
                      Message
                    </label>
                  </div>

                  <button
                    className="w-full py-2 px-4 bg-blue-550 hover:bg-mint-500 cursor-pointer rounded-md shadow-lg text-white font-semibold transition duration-200"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>

              </div>
            </div>
          </div>
        </section> */}

        <Footer />
      </main>

    </>

  );
}

export default Contact;
