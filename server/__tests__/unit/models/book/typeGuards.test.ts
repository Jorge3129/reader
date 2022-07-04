import {isContainerSection, isTextSection} from "../../../../src/models/book/typeGuards";

describe('book type guards', () => {

    const textSection1 = {
        title: "TS",
        textContent: "ts"
    }

    const containerSection1 = {
        title: "CS1",
        children: [textSection1]
    }

    const containerSection2 = {
        title: "CS2",
        children: [textSection1, containerSection1]
    }

    describe('isTextSection type guard', () => {
        it('should return true for section with textContent of type string', () => {
            expect(isTextSection(textSection1)).toBe(true)
        })

        it('should return true for section without property textContent', () => {
            expect(isTextSection(containerSection1)).toBe(false)
        })
    })

    describe('isContainerSection type guard', () => {
        it('should return true for section with children of type Array<TextSection>', () => {
            expect(isContainerSection(containerSection1)).toBe(true)
        })

        it('should return true for section with children of type Array<TextSection | ContainerSection>', () => {
            expect(isContainerSection(containerSection2)).toBe(true)
        })

        it('should return true for section without property children', () => {
            expect(isContainerSection(textSection1)).toBe(false)
        })
    })
})