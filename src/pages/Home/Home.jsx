import about from "../../assets/images/about.jpg"
import Header from "../../components/Header/Header";

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
      </main>

    </>

  );
}

export default Home;
