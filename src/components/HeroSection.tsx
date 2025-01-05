import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/c54e0046-a56a-4d72-a434-bd9f07250710.png" 
              alt="Ampher Logo" 
              className="h-16"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Ideas into
            <span className="text-primary"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We deliver cutting-edge development solutions and strategic IT consultancy
            to help businesses thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Get Started
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;