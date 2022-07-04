import {Book} from "../../models/book/book";

export const mockOdes: Book = {
    title: "Mock Odes",
    author: "Someone",
    language: "English",
    category: "classics",
    content: [
        {
            title: "I",
            type: "Book",
            textContent: "Book 1"
        },
        {
            title: "II",
            type: "Book",
            children: [
                {
                    title: "I",
                    type: "Section",
                    children: [
                        {
                            title: "I",
                            type: "Ode",
                            textContent: "Book 2 Section 1 Ode 1"
                        },
                        {
                            title: "II",
                            type: "Ode",
                            textContent: "Book 2 Section 1 Ode 2"
                        },
                    ]
                },
                {
                    title: "II",
                    type: "Section",
                    children: [
                        {
                            title: "I",
                            type: "Ode",
                            textContent: "Book 2 Section 2 Ode 1"
                        },
                        {
                            title: "II",
                            type: "Ode",
                            textContent: "Book 2 Section 2 Ode 2"
                        },
                    ]
                },
                {
                    title: "III",
                    type: "Section",
                    children: [
                        {
                            title: "I",
                            type: "Ode",
                            textContent: "Book 2 Section 3 Ode 1"
                        },
                        {
                            title: "II",
                            type: "Ode",
                            textContent: "Book 2 Section 3 Ode 2"
                        },
                    ]
                },
            ]
        },
        {
            title: "III",
            type: "Book",
            children: [
                {
                    title: "I",
                    type: "Section",
                    children: [
                        {
                            title: "I",
                            type: "Ode",
                            textContent: "Book 3 Section 1 Ode 1"
                        },
                        {
                            title: "II",
                            type: "Ode",
                            textContent: "Book 3 Section 1 Ode 2"
                        },
                    ]
                },
                {
                    title: "II",
                    type: "Section",
                    children: [
                        {
                            title: "I",
                            type: "Ode",
                            textContent: "Book 3 Section 2 Ode 1"
                        },
                        {
                            title: "II",
                            type: "Ode",
                            textContent: "Book 3 Section 2 Ode 2"
                        },
                    ]
                },
                {
                    title: "III",
                    type: "Section",
                    children: [
                        {
                            title: "I",
                            type: "Ode",
                            textContent: "Book 3 Section 3 Ode 1"
                        },
                        {
                            title: "II",
                            type: "Ode",
                            textContent: "Book 3 Section 3 Ode 2"
                        },
                    ]
                },
            ]
        },
    ]
}