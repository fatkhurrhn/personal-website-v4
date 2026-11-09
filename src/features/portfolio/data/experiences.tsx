import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  SmartphoneIcon,
} from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
    {
    id: "aethera",
    companyName: "PT Aethera Digital Agency",
    companyLogo: "",
    companyWebsite: "",
    location: "Tangerang Banten, Indonesia",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Web Developer",
        employmentPeriod: {
          start: "08.2026",
          end: "10.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Develop and maintain websites based on client needs, including registration pages, forms, dashboards, and other features.
- Manage and organize incoming system data to ensure it is displayed correctly and meets requirements.
- Perform maintenance, troubleshooting, and bug fixing for issues such as downtime, errors, and data input problems.
- Handle backups, security, and data stability, and coordinate with the team on feature requirements.
- Continuously update and optimize the website.`,
        skills: ["Web Development", "IT Support", "Troubleshooting", "Maintenance"],
        isExpanded: true,
      },
    ],
    // isCurrentEmployer: true,
  },
  {
    id: "lbh-semendawai",
    companyName: "LBH Semendawai",
    companyLogo: "",
    companyWebsite: "",
    location: "Bogor, West Java, Indonesia",
    locationType: "On-site",
    positions: [
      {
        id: "2",
        title: "Website Administrator & System Maintainer",
        employmentPeriod: {
          start: "08.2026",
          end: "08.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Managing and maintaining the legal aid management system, including regular content updates, blog management, and proactive system performance monitoring.
- Executing technical maintenance, security checks, and bug fixes to ensure application stability for ongoing operational needs.`,
        skills: ["Web Administration", "System Maintenance", "Security"],
      },
      {
        id: "1",
        title: "Mobile & Web Developer",
        employmentPeriod: {
          start: "05.2026",
          end: "07.2026",
        },
        employmentType: "Full-time",
        icon: <SmartphoneIcon />,
        description: `- Architected a legal aid management system featuring case tracking and document management.
- Implemented secure authentication and data storage using Firebase, utilizing Flutter for mobile and a responsive interface for web.`,
        skills: ["Flutter", "Firebase", "Web Development"],
      },
    ],
  },
  {
    id: "petani-global",
    companyName: "Petani Global",
    companyLogo: "",
    companyWebsite: "",
    location: "South Jakarta, Indonesia",
    locationType: "Hybrid",
    positions: [
      {
        id: "2",
        title: "Mobile App Developer",
        employmentPeriod: {
          start: "04.2026",
          end: "07.2026",
        },
        employmentType: "Full-time",
        icon: <SmartphoneIcon />,
        description: `- Collaborated in a cross-functional team to build an agricultural ecosystem, taking ownership of the mobile development track using Flutter and Firebase.
- Developed mobile features for farmer attendance tracking and harvest management, ensuring seamless integration with the web-based backend system.`,
        skills: ["Flutter", "Firebase", "Mobile Development"],
      },
      {
        id: "1",
        title: "Web Developer (Freelance)",
        employmentPeriod: {
          start: "01.2024",
          end: "02.2024",
        },
        employmentType: "Freelance",
        icon: <CodeXmlIcon />,
        description: `- Developed and maintained websites according to provided specifications and client needs.
- Implemented responsive design principles to optimize user experience across multiple devices.`,
        skills: ["Web Development", "Responsive Design"],
      },
    ],
  },
  {
    id: "stt-nurul-fikri",
    companyName: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    companyLogo: "",
    companyWebsite: "https://nurulfikri.ac.id/",
    location: "South Jakarta, Indonesia",
    locationType: "On-site",
    positions: [
      {
        id: "3",
        title: "Assistant Lecturer — Fullstack Web Development",
        employmentPeriod: {
          start: "03.2026",
          end: "07.2026",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description: `- Mentored students in building fullstack web applications using React.js and Express.js.
- Taught MySQL database design and RESTful API integration.`,
        skills: ["React.js", "Express.js", "MySQL", "REST API", "Teaching"],
      },
      {
        id: "2",
        title: "Assistant Lecturer — Web Programming",
        employmentPeriod: {
          start: "09.2025",
          end: "01.2026",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description: `- Facilitated lab sessions, guiding students through front-end development fundamentals and back-end connectivity.
- Prepared and reviewed programming assignments.`,
        skills: ["Web Programming", "HTML", "CSS", "JavaScript", "Teaching"],
      },
      {
        id: "1",
        title: "Assistant Lecturer — Big Data",
        employmentPeriod: {
          start: "08.2024",
          end: "12.2024",
        },
        employmentType: "Part-time",
        icon: <DraftingCompassIcon />,
        description: `- Supported class activities and evaluated complex student projects on Big Data concepts and analytics.`,
        skills: ["Big Data", "Analytics", "Teaching"],
      },
    ],
  },
  {
    id: "bangkit-academy",
    companyName: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    companyLogo: "",
    companyWebsite: "",
    location: "Indonesia",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Cloud Computing Cohort",
        employmentPeriod: {
          start: "09.2024",
          end: "01.2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Experienced in designing and implementing cloud solutions using Google Cloud.
- Proficient in developing interactive UI/UX and ensuring seamless front-end and back-end integration.`,
        skills: ["Google Cloud", "Cloud Computing", "UI/UX"],
      },
    ],
  },
  {
    id: "lintasarta",
    companyName: "Lintasarta",
    companyLogo: "",
    companyWebsite: "",
    location: "Jakarta, Indonesia",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Capstone Project — Cloud Computing Cohort",
        employmentPeriod: {
          start: "10.2024",
          end: "12.2024",
        },
        employmentType: "Project",
        icon: <CodeXmlIcon />,
        description: `- Designed a responsive HRD management platform utilizing React.js and cloud infrastructure.
- Collaborated in an Agile team to deliver a scalable, functional solution within strict industry requirements.`,
        skills: ["React.js", "Tailwind CSS", "Cloud Infrastructure", "Agile"],
      },
    ],
  },
    {
    id: "gyro-visual-lab",
    companyName: "Gyro Visual Lab",
    companyLogo: "",
    companyWebsite: "",
    location: "Depok, Indonesia",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Computer Vision Intern",
        employmentPeriod: {
          start: "07.2023",
          end: "09.2023",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Focused on data preparation and annotation to support the training and optimization of object detection models.
- Collaborated with the machine learning team to deliver well-structured datasets for YOLO-based license plate detection models.`,
        skills: [
          "Computer Vision",
          "Data Annotation",
          "YOLO",
          "Object Detection",
          "Machine Learning",
        ],
      },
    ],
  },
]