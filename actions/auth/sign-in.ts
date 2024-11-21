"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

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
    const response = await axios(config);

    const cookie = await cookies();
    cookie.set({
      name: "token",
      value: response.data.token,
      httpOnly: true,
    });
    return { userId: response.data.userId, email: response.data.email };
  } catch (err: any) {
    throw new Error(err);
  }
}
