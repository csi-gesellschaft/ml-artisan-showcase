
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="section bg-portfolio-50">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 mb-6">
              Hello! I'm a <span className="font-semibold text-portfolio-800">Machine Learning Engineer and Data Scientist</span> with 5+ years of experience developing AI-powered solutions for complex business problems. My background in mathematics and computer science drives my passion for creating elegant, efficient algorithms that extract meaningful insights from data.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in deep learning, natural language processing, and computer vision, with a particular focus on developing production-ready ML systems that deliver real business value. My experience spans from early-stage startups to large enterprises across healthcare, finance, and retail sectors.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not training models, you can find me contributing to open-source ML libraries, writing technical articles, or speaking at data science conferences. I'm currently exploring reinforcement learning techniques and their applications in autonomous systems.
            </p>
          </div>
          
          <div>
            <Card className="mb-6 border-portfolio-200 bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-100 p-3 rounded-full text-portfolio-700">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-portfolio-800 mb-1">Education</h3>
                    <p className="text-sm text-gray-600">M.S. in Computer Science, Stanford University</p>
                    <p className="text-sm text-gray-600">B.S. in Mathematics, MIT</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6 border-portfolio-200 bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-100 p-3 rounded-full text-portfolio-700">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-portfolio-800 mb-1">Experience</h3>
                    <p className="text-sm text-gray-600">Senior ML Engineer, TechCorp</p>
                    <p className="text-sm text-gray-600">Data Scientist, AI Innovations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6 border-portfolio-200 bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-100 p-3 rounded-full text-portfolio-700">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-portfolio-800 mb-1">Certifications</h3>
                    <p className="text-sm text-gray-600">TensorFlow Developer Certification</p>
                    <p className="text-sm text-gray-600">AWS Machine Learning Specialty</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-portfolio-200 bg-white/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-100 p-3 rounded-full text-portfolio-700">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-portfolio-800 mb-1">Publications</h3>
                    <p className="text-sm text-gray-600">3 research papers in top ML conferences</p>
                    <p className="text-sm text-gray-600">Co-author of "Advanced Deep Learning" book</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
