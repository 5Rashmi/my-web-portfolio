const getUserId = () => {
    let id = localStorage.getItem("user-id");
    if(!id) {
        id = crypto.randomUUID();
        localStorage.setItem("user-id", id);
    }
    return id;
}
export default getUserId;