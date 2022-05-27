export const stringify = (arr: Array<any>) =>
    `export const arr = [
    ${
        arr.map((section, i) =>
            `{
            id: ${i},
            title: "${section.title}",
            content: \`${section.content}\`
        }`).join(",\n")
    }
]`


// export const reduceLucr = ()

export const stringifyLucr = (content: string, ix: number) =>
    `{
    title: "${roman[ix]}",
    type: "Book",
    content: \`
    ${content}
    \`
},`

export const roman = [0, 'I', "II", "III", "IV", "V", "VI"]