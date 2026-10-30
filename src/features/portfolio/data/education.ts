import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "stt-nurul-fikri",
    school: "STT Nurul Fikri",
    schoolUrl: "https://nurulfikri.ac.id/",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Information Systems",
    period: {
      start: "09.2022",
      end: "09.2026",
    },
    description: `- Currently pursuing a Bachelor's degree in Information Systems with a GPA of 3.70.
- Favorite course: Web Programming, which sparked a long-standing passion for coding.
- Active as an Assistant Lecturer for Web Programming, Fullstack Web Development, and Big Data courses.
- Participated in Bangkit Academy 2024 as a Cloud Computing Cohort.`,
    skills: [
      "Web Programming",
      "Fullstack Development",
      "Cloud Computing",
      "React.js",
      "MySQL",
    ],
  },
  {
    id: "smk-thursina",
    school: "SMK Thursina YBM PLN",
    schoolUrl: "https://ponpesthursina.id/",
    fieldOfStudy: "Software Engineering",
    period: {
      start: "06.2019",
      end: "07.2022",
    },
    description: `- Majored in Software Engineering (Rekayasa Perangkat Lunak).
- Recognized as the best student for 3 consecutive years.
- Built a strong foundation in programming, web development, and software design.`,
    skills: [
      "Programming",
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
  },
]