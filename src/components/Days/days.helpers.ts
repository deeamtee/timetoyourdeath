import { Unit } from "@shared/utils/types";

export function calculateDeathDate(birthDay: string, unit: Unit) {
  const birthDate = new Date(birthDay);
  const deathDate = new Date(birthDate);

  switch (unit) {
    case 'years':
      deathDate.setFullYear(birthDate.getFullYear() + 90);
      break;
    case 'months':
      deathDate.setMonth(birthDate.getMonth() + 90 * 12);
      break;
    case 'weeks':
      deathDate.setDate(birthDate.getDay() + 90 * 7);
      break;
    case 'days':
      deathDate.setDate(birthDate.getDay() + 90 * 365);
      break;
    default:
      deathDate.setDate(birthDate.getDate() + 90);
  }

  return deathDate;
}

export function generateDaysArray(birthDate: Date, deathDate: Date, unit: Unit) {
  const days = [];
  const currentDate = new Date();
  let currentDatePointer = new Date(birthDate);

  while (currentDatePointer < deathDate) {
    const isPast = currentDatePointer < currentDate;
    days.push({ past: isPast });

    switch (unit) {
      case 'years':
        currentDatePointer.setFullYear(currentDatePointer.getFullYear() + 1);
        break;
      case 'months':
        currentDatePointer.setMonth(currentDatePointer.getMonth() + 1);
        break;
      case 'weeks':
        currentDatePointer.setDate(currentDatePointer.getDate() + 7);
        break;
      case 'days':
        currentDatePointer.setDate(currentDatePointer.getDate() + 1);
        break;
      default:
        currentDatePointer.setDate(currentDatePointer.getDate() + 1);
    }
  }

  return days;
}