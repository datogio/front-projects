"use server";

import axios, { AxiosRequestConfig } from "axios";

export async function signIn(
  email: string,
  password: string
): Promise<{ userId: string; email: string }> {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `http://host.docker.internal:3001/api/auth/sign-in`,
    data: { email, password },
  };

  try {
    const reponse = await axios(config);
    return { userId: reponse.data.userId, email: reponse.data.email };
  } catch (err: any) {
    throw new Error(err);
  }
}
