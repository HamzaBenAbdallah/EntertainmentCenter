export const useLogout = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return { handleLogout };
};
