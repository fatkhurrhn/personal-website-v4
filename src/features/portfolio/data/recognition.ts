import { compareDesc } from "date-fns"

import type { RecognitionEntry } from "../types/recognition"
import { AWARDS } from "./awards"
import { CERTIFICATIONS } from "./certifications"
import { INTELLECTUAL_PROPERTY } from "./intellectual-property"

export const RECOGNITION_PINNED_KEYS: string[] = []

function isBadge(title: string) {
  return title.startsWith("Badge — ")
}

function byDateDesc(a: RecognitionEntry, b: RecognitionEntry) {
  return compareDesc(new Date(a.date), new Date(b.date))
}

const AWARD_ENTRIES: RecognitionEntry[] = AWARDS.map((award) => ({
  kind: "award" as const,
  key: award.id,
  date: award.date,
  award,
}))

const CERTIFICATE_ENTRIES: RecognitionEntry[] = CERTIFICATIONS.map(
  (credential) => ({
    kind: "certificate" as const,
    key: `${credential.credentialURL}::${credential.issueDate}::${credential.title}`,
    date: credential.issueDate,
    credential,
  })
)

const IP_ENTRIES: RecognitionEntry[] = INTELLECTUAL_PROPERTY.map(
  (credential) => ({
    kind:
      credential.issuerIconName === "copyright"
        ? ("copyright" as const)
        : ("trademark" as const),
    key: `${credential.credentialURL}::${credential.issueDate}::${credential.title}`,
    date: credential.issueDate,
    credential,
  })
)

const CERTIFICATES_ONLY = CERTIFICATE_ENTRIES.filter(
  (entry) =>
    entry.kind === "certificate" && !isBadge(entry.credential.title)
).sort(byDateDesc)

const BADGES_ONLY = CERTIFICATE_ENTRIES.filter(
  (entry) =>
    entry.kind === "certificate" && isBadge(entry.credential.title)
).sort(byDateDesc)

export const RECOGNITION_BY_DATE: RecognitionEntry[] = [
  ...AWARD_ENTRIES.sort(byDateDesc),
  ...CERTIFICATES_ONLY,
  ...IP_ENTRIES.sort(byDateDesc),
  ...BADGES_ONLY,
]

export const RECOGNITION = RECOGNITION_BY_DATE