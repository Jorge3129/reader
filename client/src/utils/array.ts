export const equal = (a: any[], b: any[]) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true;
}


export const createRange = (length: number) => {
    return new Array(length).fill(0).map((_, i) => i + 1)
}