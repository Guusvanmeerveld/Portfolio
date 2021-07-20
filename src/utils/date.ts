import { DateTime } from 'luxon';

export const stringToTime = (date: string): string => DateTime.fromISO(date).toFormat('T');
