import {flattenBookContent} from "../book/book.utils";
import {BookSection} from "../book/books";

describe('flatten book content', () => {

    test('1 depth', () => {
        const book: BookSection[] = [
            {
                title: "Part 1",
                children: [
                    {title: "Chapter 1", textContent: "Chapter 1",},
                    {title: "Chapter 2", textContent: "Chapter 2",},
                    {title: "Chapter 3", textContent: "Chapter 3",},
                ]
            },
            {
                title: "Part 2",
                children: [
                    {title: "Chapter 4", textContent: "Chapter 4",},
                    {title: "Chapter 5", textContent: "Chapter 5",},
                    {title: "Chapter 6", textContent: "Chapter 6",},
                    {
                        title: "Part 2 Section 1", children: [
                            {title: "Chapter 7", textContent: "Chapter 7",},
                            {title: "Chapter 8", textContent: "Chapter 8",},
                            {title: "Chapter 9", textContent: "Chapter 9",},
                        ]
                    }
                ]
            },
        ]
        const result = new Array(9)
            .fill({})
            .map((_, i) => ({title: `Chapter ${i + 1}`, textContent: `Chapter ${i + 1}`}))

        expect(flattenBookContent(book)).toEqual(result)
    })
})

export {}