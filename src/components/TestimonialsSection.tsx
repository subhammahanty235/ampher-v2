import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Steve Bolf",
      role: "CEO",
      content: "Working with this team has transformed our business operations. Their expertise in IT consulting is unmatched.",
    },
    // {
    //   name: "Sarah Johnson",
    //   role: "CTO, Innovation Labs",
    //   content: "The development team delivered our project ahead of schedule and exceeded all expectations. Highly recommended!",
    // },
    // {
    //   name: "Michael Brown",
    //   role: "Director, Digital First",
    //   content: "Their strategic guidance helped us navigate our digital transformation successfully. A truly valuable partner.",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Client <span className="text-primary">Testimonials</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-12">
              <div className="relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-primary opacity-20" />
                <div className="text-center px-8 pb-8">
                  <p className="text-lg text-gray-600 mb-6">{testimonials[currentIndex].content}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
