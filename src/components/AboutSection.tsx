import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = [
    "Customer-Centric Approach",
    "Innovation & Excellence",
    "Transparent Communication",
    "Continuous Improvement",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
              <p className="text-gray-600 mb-6">
                We are a team of passionate IT professionals dedicated to helping businesses
                succeed through innovative technology solutions and strategic consulting.
              </p>
              <p className="text-gray-600">
                With years of experience in the industry, we've helped numerous
                organizations transform their digital presence and optimize their operations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary h-6 w-6" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;