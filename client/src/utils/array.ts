export const equal = (a: any[], b: any[]) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true;
}


export const createRange = (start: number, end: number) => {
    try {
        const length = end - start + 1;
        console.log(length)
        return new Array(end - start + 1).fill(0).map((_, i) => i + start)
    } catch (e) {
        return []
    }
}