import { app } from "../firebase-config";
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions(app);

export function addAdminRole(email) {
  return httpsCallable(functions, "addAdminRole")({ email });
}

