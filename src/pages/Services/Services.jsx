import robot from "../../assets/images/robot.svg"
import staff from "../../assets/images/staff.svg"
import cyber from "../../assets/images/cyber.svg"
import cloud from "../../assets/images/cloud.svg"
import plan from "../../assets/images/plan.svg"
import risk from "../../assets/images/risk.svg"
import cost from "../../assets/images/cost.svg"
import employee from "../../assets/images/employee.svg"
import guidance from "../../assets/images/guidance.svg"
import training from "../../assets/images/training.svg"
import process from "../../assets/images/process.svg"
import decision from "../../assets/images/decision.svg"
import Header from "../../components/Header/Header";
import TestimonialSection from "../../components/Testimonial/Testimonial"
import ContinuousSlider from "../../components/ContinuousSlider/ContinuousSlider"
import Footer from "../../components/Footer/Footer"

function Home() {

  return (
    <>
      <Header />
      <main className="bg-[#f1f1f1]">
        <section className="services-section bg-cover bg-no-repeat bg-top h-[calc(100vh-80px)] flex items-center py-5">
          <div className="w-[90%] md:w-[60%] mx-auto">
            <h1 className="text-center text-3xl md:text-6xl font-bold text-white">
              Services
            </h1>
            <p className="text-base text-white md:text-xl text-center pt-4">
              Our consulting and staffing solutions are designed to help businesses overcome challenges and achieve long-term success. We specialize in key areas that drive business transformation.
            </p>
          </div>
        </section>


        <section className="unique-section py-8 md:py-13">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Smart IT Solutions</p>
              <h1 className="text-2xl md:text-4xl mt-1 mb-4 text-blue-550 font-bold">IT Consulting</h1>
              <p className="text-base text-gray-500">
                We help businesses leverage technology for innovation and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cloud} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">Digital Transformation & Cloud Strategy</p>
                  <p className="text-gray-500 text-base text-center">
                    Modernizing IT infrastructure for scalability and agility.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cyber} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">Cybersecurity & Risk Management</p>
                  <p className="text-gray-500 text-base text-center">
                    Protecting sensitive data and mitigating threats.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={robot} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">AI & Automation</p>
                  <p className="text-gray-500 text-base text-center">
                    Implementing intelligent automation solutions to enhance productivity.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={staff} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">IT Staffing</p>
                  <p className="text-gray-500 text-base text-center">
                    Providing skilled professionals for IT projects and long-term roles.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-center text-gray-500 mt-4 italic">"Collier&#39;s IT expertise helped us integrate AI into our operations, creating massive efficiency gains."
            </p>
            <p className="text-base text-center text-gray-500">
              David Thompson, CIO, Walmart</p>
          </div>
        </section>

        <section className="unique-section py-8 md:py-13">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Maximize Financial Success</p>
              <h1 className="text-2xl md:text-4xl mt-1 font-bold mb-4 text-blue-550">Finance Consulting</h1>
              <p className="text-base text-gray-500">
                We provide financial strategies that enhance stability and profitability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={plan} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Financial Planning & Forecasting
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Data-driven financial modeling for smarter decision-making.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={risk} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Risk & Compliance
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Ensuring businesses adhere to regulations and minimize risks.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={cost} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Cost Optimization & Investment Strategy
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Identifying cost-saving opportunities and investment growth.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={staff} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">Finance Staffing</p>
                  <p className="text-gray-500 text-base text-center">
                    Matching organizations with top-tier financial professionals.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-center text-gray-500 mt-4 italic">
              "Their insights into financial forecasting positioned us for long-term success."
            </p>
            <p className="text-base text-center text-gray-500">
              Jennifer Martinez, CFO, Johnson & Johnson
            </p>
          </div>
        </section>

        <section className="unique-section py-8 md:py-13">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Smart HR Solutions</p>
              <h1 className="text-2xl md:text-4xl mt-1 font-bold mb-4 text-blue-550">HR Consulting</h1>
              <p className="text-base text-gray-500">
                We help businesses build strong teams and improve workforce engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={plan} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Talent Acquisition & Recruitment
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Finding top talent for key roles.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={employee} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Employee Engagement & Retention Strategies
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Enhancing workplace culture and satisfaction.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={guidance} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Compliance & Labor Law Guidance
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Ensuring adherence to employment laws and best practices.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={training} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">Leadership Development & Training</p>
                  <p className="text-gray-500 text-base text-center">
                    Strengthening leadership skills across organizations.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-center text-gray-500 mt-4 italic">
              "Collier&#39;s HR solutions transformed our hiring and retention strategies."
            </p>
            <p className="text-base text-center text-gray-500">
              Robert Chang, Chief People Officer, General Motors
            </p>
          </div>
        </section>

        <section className="unique-section mb-11 py-8 md:py-13">
          <div className="wrapper">
            <div className="text-center">
              <p className="font-semibold text-sm text-gray-500 uppercase">Strategy Meets Execution</p>
              <h1 className="text-2xl md:text-4xl mt-1 font-bold mb-4 text-blue-550">Business Strategy & Operations</h1>
              <p className="text-base text-gray-500">
                We refine business processes for sustainable growth:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={process} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Process Optimization & Lean Six Sigma
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Reducing inefficiencies and boosting productivity.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={decision} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Data-Driven Decision-Making
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Using analytics to improve operational strategies.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={guidance} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Change Management & Business Transformation
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Helping businesses adapt to new market demands.
                  </p>
                </div>
              </div>

              <div className="grid-item rounded-lg p-4 shadow-custom bg-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-icon w-max rounded-full p-3 shadow-lg">
                    <img src={training} className="w-11" alt="Media" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    Executive Staffing
                  </p>
                  <p className="text-gray-500 text-base text-center">
                    Providing C-suite leadership solutions for businesses in transition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>

    </>

  );
}

export default Home;
