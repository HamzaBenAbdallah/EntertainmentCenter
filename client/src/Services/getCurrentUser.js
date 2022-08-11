export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (!token) {
    return null;
  }
  return user;
};
