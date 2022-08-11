export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (!token) {
    return { user: null, token: null };
  }
  return { user, token };
};
