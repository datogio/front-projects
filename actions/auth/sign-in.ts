"use server";

import axios, { AxiosRequestConfig } from "axios";

export async function signIn(
  email: string,
  password: string
): Promise<{ userId: string; email: string }> {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `http://${process.env.API_URL}/api/auth/sign-in`,
    data: { email, password },
  };

  try {
    const reponse = await axios(config);
    return { userId: reponse.data.userId, email: reponse.data.email };
  } catch (err: any) {
    throw new Error(err);
  }
}
