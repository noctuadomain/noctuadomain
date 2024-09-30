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
