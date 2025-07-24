export const logout = async () => {
  const res = await fetch("/api/logout", {
    method: "POST",
    credentials: "include",
  });
  const data = await res.json();
  return data;
};
