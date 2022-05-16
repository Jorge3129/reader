import {flattenDeepBookContent} from "../entities/book.utils";

describe('flatten book content', () => {

    test('1 depth', () => {
        const book = [
            {
                title: "Part 1",
                content: [
                    {title: "Chapter 1", content: "Chapter 1",},
                    {title: "Chapter 2", content: "Chapter 2",},
                    {title: "Chapter 3", content: "Chapter 3",},
                ]
            },
            {
                title: "Part 2",
                content: [
                    {title: "Chapter 4", content: "Chapter 4",},
                    {title: "Chapter 5", content: "Chapter 5",},
                    {title: "Chapter 6", content: "Chapter 6",},
                    {
                        title: "Part 2 Section 1", content: [
                            {title: "Chapter 7", content: "Chapter 7",},
                            {title: "Chapter 8", content: "Chapter 8",},
                            {title: "Chapter 9", content: "Chapter 9",},
                        ]
                    }
                ]
            },
        ]
        const result = new Array(9)
            .fill({})
            .map((_, i) => ({title: `Chapter ${i + 1}`, content: `Chapter ${i + 1}` }))

        expect(flattenDeepBookContent(book)).toEqual(result)
    })
})

export {}