import { Link } from 'react-router-dom';
import { FileText, UserCheck, Calendar } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 bg-gray-800 text-white">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a2a50033-9db6-4e5f-9026-65b50e2bc2b8/admissions-feature-4xuxjli-1765113890404.webp"
          alt="Administrator helping a new student" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Join Our Community</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Begin your journey at Walgawo Senior Secondary School. We are excited to welcome new minds.</p>
        </div>
      </section>

      {/* Admissions Process Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How to Apply</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">Our admissions process is designed to be straightforward and transparent. Follow these steps to apply for a place at our school.</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <FileText size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">1. Submit Application</h3>
              <p className="text-gray-600 mt-2">Download the application form, fill it out, and submit it with the required documents, including previous academic records.</p>
            </div>
            <div className="p-6">
              <UserCheck size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">2. Entrance Assessment</h3>
              <p className="text-gray-600 mt-2">Prospective students will be invited to sit for an entrance assessment to evaluate their academic readiness.</p>
            </div>
            <div className="p-6">
              <Calendar size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">3. Admission Offer</h3>
              <p className="text-gray-600 mt-2">Successful candidates will receive an admission offer. We look forward to you joining the Walgawo family!</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Download Application Form
              </Link>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Important Dates</h2>
           <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <ul className="text-left space-y-4 text-gray-600">
                <li className="flex justify-between border-b pb-2"><strong>Application Deadline:</strong> <span>October 31st</span></li>
                <li className="flex justify-between border-b pb-2"><strong>Entrance Assessment Day:</strong> <span>November 15th</span></li>
                <li className="flex justify-between"><strong>Admission Offers Sent:</strong> <span>December 1st</span></li>
              </ul>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
