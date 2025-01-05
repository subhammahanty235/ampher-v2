import { Code, LineChart, Laptop, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your specific business needs",
      icon: Code,
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance to optimize your business operations",
      icon: LineChart,
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive solutions to modernize your business processes",
      icon: Laptop,
    },
    {
      title: "Team Augmentation",
      description: "Skilled professionals to strengthen your existing team",
      icon: Users,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600">
                  <li>24/7 Support</li>
                  <li>Expert Team</li>
                  <li>Quick Delivery</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;