
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  return (
    <section id="blog" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-heading">Latest Articles</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Thoughts, insights, and tutorials on machine learning, data science, and artificial intelligence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <Card key={post.id} className="overflow-hidden border-portfolio-200 hover:shadow-md transition-shadow duration-300">
              {post.image && (
                <div className="h-48 overflow-hidden bg-portfolio-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-display text-portfolio-800">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-portfolio-50 text-portfolio-700 hover:bg-portfolio-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-portfolio-700 hover:text-portfolio-800 hover:bg-portfolio-50 p-0">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            variant="outline" 
            className="border-portfolio-400 text-portfolio-700 hover:bg-portfolio-50"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
