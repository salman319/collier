import about from "../../assets/images/about.jpg"
import industry from "../../assets/images/industry.svg"
import approach from "../../assets/images/approach.svg"
import record from "../../assets/images/record.svg"
import client from "../../assets/images/client.svg"
import ai from "../../assets/images/ai.jpg"
import Header from "../../components/Header/Header";
import TestimonialSection from "../../components/Testimonial/Testimonial"
import ContinuousSlider from "../../components/ContinuousSlider/ContinuousSlider"

function Home() {

  return (
    <>
      <Header />
      <main>
        <section className="hero-section flex items-center py-5">
          <div className="w-[90%] md:w-[60%] mx-auto">
            <h1 className="text-center text-2xl md:text-5xl font-bold text-white">Welcome to Collier Consulting & Staffing</h1>
            <p className="text-sm text-white md:text-base text-center pt-4">
              At Collier Consulting & Staffing, we help businesses navigate complex challenges and unlock their full potential. With expertise spanning IT, finance, HR, and other key business areas, we provide tailored solutions that drive growth, efficiency, and innovation.
            </p>
          </div>
        </section>

        <section className="about-section my-16 md:my-24 py-11 md:py-16 bg-dim">
          <div className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
              <div>
                <img src={about} className="w-full rounded-3xl" alt="Media" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-sm text-gray-500 uppercase">About Collier Consulting & Staffing</p>
                <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-blue-550">Your Competitive Advantage</h1>
                <p className="text-base text-gray-500">
                  At Collier Consulting & Staffing, we don't just offer consulting and staffing services—we deliver strategic solutions that empower businesses to excel in an ever-changing landscape. With decades of combined industry experience, our expert consultants bring a results-driven approach to every engagement, helping clients achieve sustainable success.
                </p>
              </div>
            </div>
          </div>

        </section>

        <section className="unique-section mb-16 md:mb-24 py-11 md:py-16">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Excellence Through Innovation</p>
              <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-blue-550">What Makes Us Unique</h1>
              <p className="text-base text-gray-500">
                Unlike many consulting firms that offer one-size-fits-all solutions, we take the time to deeply understand your organization&#39;s unique challenges and opportunities. Our commitment to customization ensures that every strategy we develop is tailored to your specific business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={industry} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">Industry-Specific Expertise</p>
                  <p className="text-gray-500 text-base text-center">
                    Our consultants have deep experience across multiple industries, allowing us to offer insights and solutions that are both innovative and practical.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={approach} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">Integrated Approach</p>
                  <p className="text-gray-500 text-base text-center">
                    We bridge the gap between consulting and staffing, ensuring that not only are the right strategies implemented, but also the right people are in place to execute them.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={record} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">Proven Track Record</p>
                  <p className="text-gray-500 text-base text-center">
                    We have successfully partnered with Fortune 100 companies, mid-sized firms, and startups to drive measurable improvements in efficiency, revenue, and workforce engagement.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={client} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700">Client-Centric Philosophy</p>
                  <p className="text-gray-500 text-base text-center">
                    Our priority is your success. We take pride in forming long-term partnerships built on trust, transparency, and a shared vision for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="consulting-section mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <img src={ai} className="w-full" alt="Media" />
            </div>
            <div>
              <div className="p-5 md:p-8">
                <p className="font-semibold text-sm text-gray-500 uppercase">AI-Powered Business Growth</p>
                <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-blue-550">AI-Driven Consulting for the Future</h1>
                <p className="text-base text-gray-500">
                  Collier Consulting & Staffing leverages its deep understanding of artificial intelligence to enhance consulting solutions across industries. We use AI-powered analytics, predictive modeling, and process automation to help businesses optimize operations, forecast trends, and make data-driven decisions. Whether it's implementing intelligent automation in IT, enhancing financial forecasting, or improving workforce planning with AI-driven insights, we ensure our clients stay ahead in a rapidly evolving business environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="executive-section mb-16 md:mb-24 py-11 md:py-16">
          <TestimonialSection />
        </section>

        <section className="unique-section mb-16 md:mb-24 py-11 md:py-16 bg-dim">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Partners in Growth</p>
              <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-blue-550">Who We Work With</h1>
              <p className="text-base text-gray-500">
                At Collier Consulting & Staffing, we collaborate with leading Fortune 500 companies across diverse industries, including technology, finance, healthcare, manufacturing, retail, and logistics. Our clients rely on us for cutting-edge consulting and staffing solutions designed to meet their unique business challenges. With deep industry expertise, we develop strategic frameworks that enhance efficiency, foster innovation, and drive sustainable growth.
                <br /><br />
                We take pride in partnering with industry leaders that set the benchmark for excellence. Some of the Fortune 500 companies we have worked with include Microsoft, JPMorgan Chase, General Motors, IBM, Walmart, Johnson & Johnson, Google, Amazon, Boeing, and Pfizer. Our reputation for delivering high-impact consulting and staffing solutions makes us the trusted partner for organizations seeking transformative growth and workforce success.

              </p>
            </div>
            <ContinuousSlider />
          </div>
        </section>
      </main>

    </>

  );
}

export default Home;
