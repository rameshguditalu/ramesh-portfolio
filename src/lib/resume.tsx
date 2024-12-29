import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ramesh Guditalu",
  initials: "RG",
  url: "https://github.com/rameshguditalu",
  location: "Bengaluru, India",
  locationLink: "https://maps.app.goo.gl/KzgLawMtoiYJMSV5A",
  description:
    "Software Developer focused in Frontend. Self-taught and always eager to learn new technologies.",
  summary:
    "I'm a passionate and dedicated **software developer**, constantly seeking to enhance my skills and tackle new technological challenges. Started my career as a **Mobile Developer** focused in _Android_ and now I'm a **Frontend Developer** focused in creating responsive and modern web applications using _React_.",
  avatarUrl: "/ramesh.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Tailwind",
    "Vite",
    "Node.js",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Prisma",
    "WebSocket",
    "WebRTC",
    "Azure",
    "CI/CD",
    "Java",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rameshsw17@gmail.com",
    tel: "+91 8310723797",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rameshguditalu",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ramesh-guditalu-0a39ab217/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Rameshsw17G",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@rameshsw17",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:rameshsw17@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Infosys Ltd",
      href: "https://www.infosys.com/",
      badges: ["React", "TypeScript", "GIT"],
      location: "Bengaluru, India",
      title: "Software Engineer",
      logoUrl: "/memoji.jpeg",
      start: "April 2022",
      end: "Present",
      description:
        "• Led front-end development of web applications, involving in technical analysis, UX discussions, API design discussions, and collaboration with the backend team to develop integrations that are both secure and performant.|• Implemented robust security frameworks, including JWT and caching techniques, leading to a 20% reduction in application loading time and significantly enhancing user experience across 10000+ active users.|• Adhere to Test Driven Development practices, writing unit tests using Jest framework and helping define the overall testing strategy to achieve 100% code coverage.|• Demonstrated exceptional teamwork and mentorship, receiving an internal award for guiding team members.|• Thrived in Agile development driving successful project outcomes through active participation in daily standups, sprint planning, code reviews and effective collaboration",
    },
    {
      company: "Open Source",
      badges: ["React", "NextJs", "TypeScript", "GIT"],
      href: "https://github.com/rameshguditalu",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/github-mark.png",
      start: "August 2023",
      end: "Present",
      description: "• Contributed to various open source projects.",
    },
  ],
  education: [
    {
      school: "Bosscoder Academy",
      href: "https://www.bosscoderacademy.com/",
      degree: "Full Stack Software Development",
      logoUrl: "/bosscoder_colored_logo.2b39d282.svg",
      start: "March 2023",
      end: "Present",
    },
    {
      school: "Bapuji Institute of Engineering and Technology",
      href: "/",
      degree: "Bachelor of Engineering",
      logoUrl: "/biet.jpg",
      start: "Aug 2017",
      end: "Aug 2021",
    },
  ],
  projects: [
    {
      title: "Miro Whiteboard",
      href: "https://miro-whiteboard.vercel.app",
      dates: "September 2023",
      active: true,
      description:
        "Developed a whiteboard web application from scratch using Next.js 14, Convex, Tailwind CSS, and ShadcnUI; integrated user authentication, authorization, and data encryption, ensuring 80% application security compliance. Facilitated a 15% boost in efficiency with the integration of keyboard shortcuts, streamlining user interactions and ensuring a seamless experience across various devices and platforms.",
      technologies: [
        "Next.js 14",
        "Typescript",
        "TailwindCSS",
        "Convex",
        "ShadcnUI",
        "NodeJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://miro-whiteboard.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rameshguditalu/miro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/miro-whiteboard.png",
      video: "",
    },
    {
      title: "Blogger",
      href: "https://blogger-net.vercel.app",
      dates: "Febraury 2024",
      active: true,
      description:
        "Blogger Application built using MERN stack where people can post, edit and see other posts.",
      technologies: ["React", "ExpressJs", "MongoDB", "Node.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://blogger-net.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rameshguditalu/blog-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blogger.png",
      video: "",
    },
    {
      title: "Portfolio",
      href: "",
      dates: "December 2024",
      active: true,
      description:
        "Developed an amazing Portfolio to showase my work to potentiol recruiters. I used latest web desiging techniques like [TailwindCSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) to make it look good and [Next.js](https://nextjs.org/) to make it fast.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "SIH Hackathon",
      dates: "September 2024 - Present",
      location: "Kolkata, India",
      description:
        "Developed a web application that helps in ships re-routing using cuttinf edge traffic and optimizing the time taken to reach the destination.",
      image: "Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/DevHrithik",
        },
      ],
    },
  ],
} as const;
