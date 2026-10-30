export type Education = {
  id: string
  school: string
  schoolUrl?: string
  degree?: string
  fieldOfStudy?: string
  period: {
    start: string
    end: string
  }
  description?: string
  skills?: string[]
}