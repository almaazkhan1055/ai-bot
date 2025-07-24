export const tokenCheck = async () => {
  const res = await fetch("/api/checkToken", {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data.tokenExists;
};
