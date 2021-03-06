
export const titleCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1)
}

export const strictTitleCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}