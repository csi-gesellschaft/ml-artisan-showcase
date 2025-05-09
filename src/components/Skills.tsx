
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/skillsData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'domain' | 'soft'>('technical');
  
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const domainSkills = skills.filter(skill => skill.category === 'domain');
  const softSkills = skills.filter(skill => skill.category === 'soft');
  
  return (
    <section id="skills" className="section bg-gradient-to-br from-portfolio-800 to-portfolio-950">
      <div className="container-custom">
        <h2 className="section-heading text-white">Skills & Expertise</h2>
        <p className="text-lg text-portfolio-100 mb-10">
          My professional skill set spans technical proficiency, domain expertise, and essential soft skills.
        </p>
        
        <Tabs defaultValue="technical" className="w-full" onValueChange={(value) => setActiveTab(value as any)}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-portfolio-700">
              <TabsTrigger 
                value="technical"
                className={activeTab === 'technical' ? 'text-white bg-portfolio-600' : 'text-portfolio-200 hover:text-white'}
              >
                Technical Skills
              </TabsTrigger>
              <TabsTrigger 
                value="domain"
                className={activeTab === 'domain' ? 'text-white bg-portfolio-600' : 'text-portfolio-200 hover:text-white'}
              >
                Domain Expertise
              </TabsTrigger>
              <TabsTrigger 
                value="soft"
                className={activeTab === 'soft' ? 'text-white bg-portfolio-600' : 'text-portfolio-200 hover:text-white'}
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="technical" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="animate-fade-in">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-portfolio-200">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-portfolio-700" indicatorClassName="bg-accent-purple-500" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="domain" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
              {domainSkills.map((skill) => (
                <div key={skill.name} className="animate-fade-in">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-portfolio-200">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-portfolio-700" indicatorClassName="bg-accent-purple-500" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
              {softSkills.map((skill) => (
                <div key={skill.name} className="animate-fade-in">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-portfolio-200">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-portfolio-700" indicatorClassName="bg-accent-purple-500" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
