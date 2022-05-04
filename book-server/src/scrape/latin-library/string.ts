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


export const stringifyParagraphs = (arr: Array<any>) =>
    `export const arr = [
    ${
        arr.map((section, i) =>
            `{
            id: ${i},
            title: "${section.title}",
            paragraphs: [
                ${
                section.paragraphs.map((p: any) => `\`${p}\``).join(",\n")
            }   
            ]
        }`).join(",\n")
    }
]`
