import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    isTools: false,
    toolsList: [
        {
            id: 1,
            name: "Visual Studio Code",
            category: "Editor",
            description: "A powerful open-source code editor developed by Microsoft."
        },
        {
            id: 2,
            name: "Postman",
            category: "API Testing",
            description: "API platform for building and testing RESTful APIs quickly."
        },
        {
            id: 3,
            name: "Figma",
            category: "Design",
            description: "Collaborative design tool for creating UI/UX wireframes and prototypes."
        },
        {
            id: 4,
            name: "GitHub",
            category: "Version Control",
            description: "Platform for hosting and managing code repositories."
        }
    ]

};
const ToolsSlice = createSlice({
    name: "tools",
    initialState,
    reducers: {
        addTools: (state, action) => {
            console.log("state", state);
            console.log("action", action);
            const data = {
                id: nanoid(),
                ...action.payload
            }
            state.isTools = true;
            state.toolsList.push(data);
        },
        editTools: (state, action) => {
            const { id, name, category, description } = action.payload;
            const isExist = state.toolsList.find((item) => item.id === id);
            if (isExist) {
                isExist.name = name;
                isExist.category = category;
                isExist.description = description;
            }
        },
        removeTools: (state, action) => {
            state.isTools = false;
            state.toolsList = state.toolsList.filter((item) => item.id !== action.payload);
        }
    }
})
export const { addTools, editTools, removeTools } = ToolsSlice.actions;
export default ToolsSlice.reducer;