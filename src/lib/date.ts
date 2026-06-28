import type { TimelineItem } from "@/types";

export function calculateAge(birthdate: string): number {
  const birth = new Date(birthdate);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

const MONTH_MAP: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
  january: 0, february: 1, march: 2, april: 3, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
};

export function parseTimelineDate(dateStr: string): Date {
  const normalized = dateStr.trim().toLowerCase();
  if (normalized === "present") {
    return new Date();
  }

  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const monthStr = parts[1].toLowerCase().substring(0, 3);
    const year = parseInt(parts[2], 10);
    const month = MONTH_MAP[monthStr];
    if (month !== undefined && !isNaN(day) && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }

  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) {
    return parsed;
  }

  throw new Error(`Invalid date format: ${dateStr}`);
}

export function calculateTotalExperience(timeline: TimelineItem[]): number {
  let totalMs = 0;

  for (const item of timeline) {
    if (!item.period) continue;
    const parts = item.period.split("-").map(p => p.trim());
    if (parts.length === 2) {
      try {
        const start = parseTimelineDate(parts[0]);
        const end = parseTimelineDate(parts[1]);
        if (end.getTime() >= start.getTime()) {
          totalMs += (end.getTime() - start.getTime());
        }
      } catch (e) {
        console.error(`Failed to parse period: ${item.period}`, e);
      }
    }
  }

  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const totalYears = totalMs / msPerYear;
  return Math.floor(totalYears);
}

