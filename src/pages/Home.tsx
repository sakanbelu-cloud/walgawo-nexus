import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a2a50033-9db6-4e5f-9026-65b50e2bc2b8/hero-banner-wk03cru-1765113874722.webp" alt="Walgawo Senior Secondary School Campus" className="w-full h-[60vh] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Welcome to Walgawo S.S.S.</h1>
          <p className="text-lg md:text-xl max-w-3xl">Nurturing minds and building futures with a tradition of academic excellence and strong community values.</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Place to Learn, Grow, and Excel</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At Walgawo, we are dedicated to providing a supportive and challenging environment that encourages students to reach their full potential. Explore our programs and discover what makes our school special.
          </p>
        </div>
      </section>

      {/* Key Sections Links */}
      <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Academics Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Academics</h3>
              <p className="text-gray-600 mb-6">Discover our rigorous curriculum and the dedicated faculty who guide our students to success.</p>
              <Link to="/academics" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                Explore Programs <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            {/* Admissions Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Admissions</h3>
              <p className="text-gray-600 mb-6">Find out how to join the Walgawo family and begin your journey with us.</p>
              <Link to="/admissions" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                Apply Now <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            {/* Contact Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">Have questions? Get in touch with our team. We are here to help.</p>
              <Link to="/contact" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                Get in Touch <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
