import { createSlice, nanoid } from "@reduxjs/toolkit";
import { addFeedback } from "./FeedbackSlice";

const initialState = {
    isGadtget: false,
   gadgetList: [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "Smartphone",
        description:
            "Apple's latest flagship smartphone with A17 Pro chip, titanium frame, and incredible camera performance."
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "Smartphone",
        description:
            "Samsung's premium smartphone featuring a 200MP camera, Snapdragon Gen 3 processor, and S-Pen support."
    },
    {
        id: 3,
        name: "MacBook Air M3",
        category: "Laptop",
        description:
            "Lightweight and powerful laptop with Apple's M3 chip, stunning Retina display, and all-day battery life."
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        category: "Headphones",
        description:
            "Premium noise-cancelling wireless headphones with excellent sound quality and 30-hour battery life."
    },
    {
        id: 5,
        name: "Apple Watch Ultra 2",
        category: "Smartwatch",
        description:
            "Rugged smartwatch with an aerospace-grade titanium case, advanced health tracking, and extreme performance."
    },
    {
        id: 6,
        name: "GoPro Hero 12",
        category: "Camera",
        description:
            "The latest action camera from GoPro, capable of shooting 5.3K video, HyperSmooth stabilization, and water resistance."
    },
    {
        id: 7,
        name: "OnePlus 12",
        category: "Smartphone",
        description:
            "Flagship killer smartphone powered by Snapdragon 8 Gen 3, AMOLED 120Hz display, and 100W fast charging."
    },
    {
        id: 8,
        name: "Asus ROG Zephyrus G16",
        category: "Laptop",
        description:
            "High-performance gaming laptop with Intel i9 14th Gen CPU, RTX 4080 GPU, and stunning QHD+ 240Hz display."
    }
]
}
const GadgetsSlice = createSlice({
    name: "Gadgets",
    initialState,
    reducers: {
        addGadgets: (state, action) => {
            console.log("state", state)
            console.log("action", action)
            const data = {
                id: nanoid(),
                ...action.payload
            }
            state.isGadtget = true
            state.gadgetList.push(data)
        },
        removeGadgets: (state, action) => {
            console.log("remove action", action)
            state.gadgetList = state.gadgetList.filter((item) => item.id !== action.payload)

        },
        updateGadgets: (state, action) => {
            const { id, name, description, category } = action.payload
            const existing = state.gadgetList.find((item) => item.id === id)
            if (existing) {
                existing.name = name;
                existing.description = description;
                existing.category = category;
            }
        }
    }
})
export const { addGadgets, removeGadgets, updateGadgets } = GadgetsSlice.actions
export default GadgetsSlice.reducer