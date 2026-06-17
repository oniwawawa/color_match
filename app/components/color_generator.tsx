export function ColorGenerator() : string {
    const chars = "0123456789ABCDEF";
    let result = "#";

    for (let i =0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}