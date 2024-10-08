import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import ClientContext from "../context/ClientContext";

const clients = useContext(ClientContext);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createErrorMessage = (error: any) => {
  // When Axios encounters an error during an HTTP request or response handling, it creates a specific Axios error object
  if (axios.isAxiosError(error)) {
    const apiError = error.response?.data;
    if (typeof apiError === "string" && (apiError as string).length > 0) {
      return apiError;
    }
    return apiError?.message || apiError?.error || error.message;
  }
  // Network errors
  // timeout errors
  // CORS errors
  if (error instanceof Error) {
    return error.message;
  }
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return "Generic error message";
};

export const getUser = (identifier: string) => {
  if (clients?.assignedUsers) {
    console.log(clients.assignedUsers)
    const filteredUser = clients?.assignedUsers.filter(
      (user: any) => user.Identifier === identifier
    );
    return filteredUser[0]
  }
};
