import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const CareerSection = () => {
  const jobOpenings = [
    {
      id: "SI-2024-01",
      title: "Sales Intern",
      description: "Join our dynamic sales team as an intern and gain hands-on experience in B2B sales, lead generation, and client relationship management.",
      requirements: [
        "Currently pursuing a Bachelor's degree",
        "Strong communication skills",
        "Basic understanding of sales processes",
        "Proficiency in MS Office",
      ],
    },
    {
      id: "FD-2024-01",
      title: "Frontend Developer",
      description: "We're looking for a passionate Frontend Developer to create exceptional user experiences using modern web technologies.",
      requirements: [
        "2+ years of experience with React",
        "Strong proficiency in TypeScript",
        "Experience with modern CSS frameworks",
        "Understanding of responsive design principles",
      ],
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Join Our <span className="text-primary">Team</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Be part of our journey in revolutionizing the tech industry. We're always looking for talented individuals to join our team.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {jobOpenings.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{job.title}</CardTitle>
                <CardDescription>Job ID: {job.id}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{job.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <p className="text-sm text-gray-600">
                      Interested? Email us your resume at{" "}
                      <a href="mailto:contact@ampher.tech" className="text-primary font-semibold">
                        contact@ampher.tech
                      </a>{" "}
                      with the job ID in the subject line.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;