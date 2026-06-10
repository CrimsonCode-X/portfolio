const portfolioData = {
  personalInfo: {
    name: "Aman Goswami",
    role: "Aspiring Software Developer, Data Analyst & AI Enthusiast",
    email: "aman.goswami_cs24@gla.ac.in",
    alternateEmail: "goswamiaman1112@gmail.com",
    phone: "+91 8868861056",
    location: "Mathura, Uttar Pradesh, India",
    github: "https://github.com/CrimsonCode-X",
    linkedin: "https://www.linkedin.com/in/aman-goswami-92a599338/",
  },

  skills: {
    programming: ["Java", "Python", "C", "JavaScript"],
    frameworks: ["React.js", "Pandas", "NumPy", "Scikit-Learn", "Flask", "SMOTE"],
    web: ["HTML5", "CSS3", "Vite"],
    tools: ["VS Code", "GitHub", "Tableau", "Excel", "Monaco Editor"],
    databases: ["SQL", "MongoDB"],
  },

  projects: [
    {
      title: "AI Code Reviewer",
      description:
        "AI-powered tool that analyzes code and provides optimization suggestions.",
      tech: ["React", "Flask", "AI"],
      github: "AI-Code-Reviewer",
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "ML pipeline using SMOTE for handling imbalanced datasets.",
      tech: ["Python", "Sklearn", "SMOTE"],
      github: "credit-card-fraud-detection",
    },
    {
      title: "Zomato Data Analysis",
      description:
        "EDA project extracting insights from restaurant datasets.",
      tech: ["Pandas", "NumPy"],
      github: "Zomato-Data-Analysis",
    },
    {
      title: "Weather App",
      description:
        "React app using OpenWeather API for real-time weather updates.",
      tech: ["React", "API"],
      github: "Weather-App",
    },
  ],
};

export default portfolioData;