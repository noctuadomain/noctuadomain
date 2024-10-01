/* eslint-disable indent */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validate = (
  minLengthValue: number,
  maxLengthValue: number,
  required: boolean = true
) => {
  return {
    required: required ? 'required' : false,
    maxLength: {
      value: maxLengthValue,
      message: `Maximum ${maxLengthValue} characters`
    },
    minLength: {
      value: minLengthValue,
      message: `Minimum ${minLengthValue} characters`
    }
  };
};

export const emailOptions = {
  required: 'required',
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: 'invalid email format'
  }
};

export const passwordOptions = {
  required: 'Required field',
  maxLength: {
    value: 32,
    message: 'Maximum 32 characters'
  },
  minLength: {
    value: 8,
    message: 'Minimum 8 characters'
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate: (value: any) => {
    if (!/[0-9]/.test(value)) {
      return 'Password must contain a number';
    }
    if (!/[a-z]/.test(value)) {
      return 'Password must contain a lowercase letter';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain an uppercase letter';
    }
    if (!/[^\w]/.test(value)) {
      return 'Password must contain a symbol';
    }
    return true;
  }
};

export function getVideoId(url: string): string {
  let ID = '';
  const urlParts = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

  if (urlParts[2] !== undefined) {
    const idParts = urlParts[2].split(/[^0-9a-z_\-]/i);
    ID = idParts[0];
  } else {
    ID = urlParts[0];
  }
  return ID;
}

export function getPreviewSrc(url: string) {
  const videoId = getVideoId(url);
  const videoPreviewSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return videoPreviewSrc;
}

export const tokenTimelineToMs = (timeline: string | undefined) => {
  const number = parseInt(timeline, 10);
  const dateTime = timeline.at(-1);

  switch (dateTime) {
    case 'ms':
      return number;
    case 's':
      return number * 1000;
    case 'm':
      return number * 1000 * 60;
    case 'h':
      return number * 1000 * 60 * 60;
    case 'd':
      return number * 1000 * 60 * 60 * 24;
    case 'w':
      return number * 1000 * 60 * 60 * 24 * 7;
    case 'y':
      return number * 1000 * 60 * 60 * 24 * 365;

    default:
      return number;
  }
};
