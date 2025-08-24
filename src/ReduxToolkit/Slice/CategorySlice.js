import { createSlice, nanoid } from "@reduxjs/toolkit";
const categories = [
    {
        id: 1,
        name: "Electronics",
        count: 15,
        description: "All electronic gadgets like mobile, laptop, and accessories.",
    },
    {
        id: 2,
        name: "Books",
        count: 40,
        description: "Educational, novels, storybooks, and reference materials.",
    },
    {
        id: 3,
        name: "Clothing",
        count: 25,
        description: "Men’s and women’s fashion including casual and formal wear.",
    },
    {
        id: 4,
        name: "Home Appliances",
        count: 10,
        description: "Kitchen tools, washing machines, and other home essentials.",
    },
    {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    }, {
        id: 5,
        name: "Sports",
        count: 18,
        description: "Sports equipment, gym accessories, and outdoor gear.",
    },
];
const initialState = {
    isCategory: false,
    categoryList: categories
}
const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const data = {
                id: nanoid(),
                ...action.payload
            }
            state.isCategory = true;
            state.categoryList.push(data);
        },
        removeCategory: (state, action) => {
            state.isCategory = false;
            state.categoryList = state.categoryList.filter((item) => item.id !== action.payload);
        },
        updateCategory: (state, action) => {
            const { id, name, count, description } = action.payload;
            const existingCategory = state.categoryList.find((item) => item.id === id)
            if (existingCategory) {
                existingCategory.name = name;
                existingCategory.count = count;
                existingCategory.description = description;
            }
        }
    }
})

export const { addCategory, removeCategory, updateCategory } = CategorySlice.actions
export default CategorySlice.reducer