export const useLogout = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location = "/";
    };

    return { handleLogout };
};
