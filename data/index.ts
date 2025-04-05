export const gridItems = [
  {
    id:1, 
    title: "MonxKeiy", 
    headline: "Freelance Full Stack", 
    description: `Hi, I’m Fajrur Rohman
Full-Stack Developer | System Engineer | Cybersecurity Enthusiast

Based in Madura, Indonesia, I specialize in building responsive, secure, and scalable web applications. With strong experience in both front-end and back-end development, I work across the full stack using modern technologies to deliver clean and efficient solutions.

Tech Stack:
HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, PHP (Laravel), Python (Django), Go
MySQL, PostgreSQL, MongoDB, Redis
Docker, Git, CI/CD, Linux Server, Nginx, Apache
Security: OWASP, Penetration Testing, Secure Coding, Burp Suite, Wireshark

I’m passionate about solving problems through code, optimizing performance, and ensuring system security.
Let’s build something great together.`, 
    className:'text-2xl flex', 
    img:'/fotome.png',
    stylemain:'flex flex-col sm:flex-row justify-center gap-4 pl-5',
    style1:'w-full sm:w-[25%] flex justify-center items-center -mt-6',
    style2:'w-full sm:w-[75%]'
  },
  {
    id:2,
    title: "My Tech Stack", 
    description: "Currently using",
    stylemain: "flex flex-col justify-center gap-4 pl-5 w-full",
    style1 : "hidden",
    style2 : "w-full px-6",
  },
  {
    id:3,
    title: "Connect with me on:", 
    style1: "hidden",
    style2: "w-full px-6",
  },
  {
    id: 4,
    title: "My Approach: I create functional, visually appealing designs with clean, scalable code, ensuring efficient performance across platforms.", 
    stylemain: 'flex flex-col justify-end gap-4 pl-5',
    style1: 'hidden',
    style2: 'w-full px-6',
    className: "bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
  }

]

export const techStack = [
  "nextjs", 
  "typescript", 
  "tailwindcss", 
  "react", 
  "mongo", 
  "express", 
  "node",
  "laravel",
  "php",
  "python",
  "mysql",
  "postman",
  "html",
  "css",
  "git"
]


export const services = [
  {
    id: 2,
    title: "Full-Stack Development",
    description: "Building secure, scalable, and high-performance web applications using modern front-end and back-end technologies.",
    icon: "⚙️"
  },
  {
    id: 3,
    title: "System Engineering",
    description: "Managing server infrastructure, automation, CI/CD pipelines, and deployment using Linux, Docker, Nginx, and more.",
    icon: "🖥️"
  },
  {
    id: 4,
    title: "Cybersecurity Solutions",
    description: "Implementing secure coding practices, penetration testing, and system hardening based on OWASP and industry standards.",
    icon: "🛡️"
  }
];



export const projects = [
  { 
    id:8,
    title: "Personal Finance - SaldaQ", 
    description: " SaldaQ is a simple app designed for students to manage income, expenses, and categories. It tracks transactions and visualizes balance efficiently",
    img: "/finance.png", 
    tech: ["react", "typescript", "mongo", "express","node","tailwindcss"],
    linkGithub: "https://github.com/monxkeiy/personal-finance-frontend", 
  }, 
  { 
    id:7,
    title: "WellEat", 
    description: "Welleat is a platform focused on providing healthy recipes, helping users discover nutritious meals and make better food choices for a healthier lifestyle.",
    img: "/welleat.png", 
    tech: ["react", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/monxkeiy/welleat", 
  }, 
  { 
    id:1,
    title: "Klinik Smartphone", 
    description: "Klinik Smartphone is an interactive landing page showcasing smartphone repair services, featuring service types, customer testimonials, and easy contact options for customer support.",
    img: "/project-1.png", 
    tech: ["nextjs", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/monxkeiy/klinik-smartphone", 
  }, 
  { 
    id:2,
    title: "Duriat Food", 
    description: "Duriat Food is a catering business landing page offering a user-friendly way for customers to browse diverse menu options and select dishes for their events.",
    img: "/project-2.png", 
    tech: ["react", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/monxkeiy/duriat-food", 
  }, 
  { 
    id:3,
    title: "Enigma Laundry", 
    description: "Enigma Laundry is an admin dashboard designed for a laundry business. Admins can manage products and customers.",
    img: "/laundry.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/monxkeiy/challenge-react-laundry", 
  }, 
  { 
    id:4,
    title: "Sarah Shop", 
    description: "Sarah Shop is a landing page created for an online store, offering a sleek and user-friendly interface for customers to browse products.",
    img: "/shop.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/monxkeiy/olshop-react", 
  }, 
  { 
    id:5,
    title: "Ryn Movie", 
    description: "Ryn Movie is a platform featuring a landing page that showcases an extensive library of films and seamless navigation for an enhanced viewing experience.",
    img: "/movie.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/monxkeiy/ryn-movies-react", 
  }, 
  { 
    id:6,
    title: "Ryn Recipes", 
    description: "Ryn Recipes is a platform with a landing page that offers a diverse collection of recipes, helping users explore and discover dishes for any occasion.",
    img: "/recipes.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/monxkeiy/ryn-recipes", 
  }, 
]
