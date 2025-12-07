import { BookOpen, Users, Award } from 'lucide-react';

const Academics = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 bg-gray-800 text-white">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a2a50033-9db6-4e5f-9026-65b50e2bc2b8/academics-feature-blplnv1-1765113882084.webp" 
          alt="Science class in session" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Academic Programs</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Fostering intellectual curiosity and a passion for lifelong learning.</p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Curriculum Excellence</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">Our curriculum is designed to challenge students and prepare them for success in higher education and beyond. We offer a balanced and rigorous program in both arts and sciences.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h3>Core Subjects</h3>
              <p>We provide a strong foundation in core subjects including Mathematics, English, Sciences (Physics, Chemistry, Biology), and Humanities (History, Geography, Religious Education).</p>
              <h3>Elective Programs</h3>
              <p>Students can explore their interests through a wide range of elective subjects such as Foreign Languages, Computer Science, Music, Art, and Business Studies.</p>
              <h3>Holistic Development</h3>
              <p>We emphasize critical thinking, problem-solving, and collaboration. Our teaching methods incorporate modern technology and project-based learning to create an engaging educational experience.</p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <BookOpen size={40} className="text-blue-600 mr-6 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Rich Curriculum</h4>
                  <p className="text-gray-600 mt-1">A diverse range of subjects to cater to individual talents and career aspirations.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <Users size={40} className="text-blue-600 mr-6 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Expert Faculty</h4>
                  <p className="text-gray-600 mt-1">Experienced and passionate educators dedicated to student growth.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                <Award size={40} className="text-blue-600 mr-6 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Proven Success</h4>
                  <p className="text-gray-600 mt-1">A strong track record of students achieving top results and gaining admission to leading universities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
