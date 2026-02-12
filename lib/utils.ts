import { FormData } from "@/components/contact";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      return (response.message);
    })
    .catch((err) => {
      return (err);
    });
}