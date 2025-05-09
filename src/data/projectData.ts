
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Network Image Classifier",
    description: "A deep learning model that classifies images with high accuracy using convolutional neural networks and transfer learning techniques.",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    githubUrl: "https://github.com/yourusername/neural-network-image-classifier",
    demoUrl: "https://demo-url.com/image-classifier",
    featured: true
  },
  {
    id: 2,
    title: "Natural Language Processing Chatbot",
    description: "An intelligent chatbot that uses NLP to understand and respond to user queries with context-aware responses.",
    technologies: ["Python", "PyTorch", "NLTK", "Transformers"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    githubUrl: "https://github.com/yourusername/nlp-chatbot",
    featured: true
  },
  {
    id: 3,
    title: "Time Series Forecasting Tool",
    description: "A forecasting tool that predicts future values based on historical time series data using advanced statistical models.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Prophet", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    githubUrl: "https://github.com/yourusername/time-series-forecasting",
    demoUrl: "https://demo-url.com/forecasting-tool",
    featured: true
  },
  {
    id: 4,
    title: "Recommendation Engine",
    description: "A collaborative filtering-based recommendation system that suggests items based on user preferences and behavior.",
    technologies: ["Python", "Spark", "MLlib", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    githubUrl: "https://github.com/yourusername/recommendation-engine",
    featured: false
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard that visualizes complex datasets with customizable charts and filters.",
    technologies: ["JavaScript", "D3.js", "React", "Express"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    githubUrl: "https://github.com/yourusername/data-viz-dashboard",
    demoUrl: "https://demo-url.com/viz-dashboard",
    featured: true
  }
];
