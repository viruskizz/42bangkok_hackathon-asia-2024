"use server";

export async function helloWorld() {
  const error = false;
  if (error) {
    return {
      data: null,
      error: "error",
    };
  }

  return {
    data: "hello",
    error: null,
  };
}
