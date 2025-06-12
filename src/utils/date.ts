export const getDate = () : string => {
    const now = new Date();
    return now.toLocaleString();
}