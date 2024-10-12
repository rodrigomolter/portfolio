import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseURL(url = "") {
  return process.env.NODE_ENV === "production"
    ? `https://www.rodrigomolter.com${url}`
    : `http://localhost:3000${url}`
}
