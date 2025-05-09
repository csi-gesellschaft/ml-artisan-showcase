
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projectData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          A collection of machine learning and data science projects that showcase my technical skills and problem-solving approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-portfolio-200 hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden bg-portfolio-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-display text-portfolio-800">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-portfolio-50 text-portfolio-700 hover:bg-portfolio-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
                
                {project.demoUrl && (
                  <Button size="sm" className="bg-portfolio-700 hover:bg-portfolio-800" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {!showAll && projects.length > displayedProjects.length && (
          <div className="flex justify-center mt-10">
            <Button 
              variant="outline" 
              className="border-portfolio-400 text-portfolio-700 hover:bg-portfolio-50"
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
