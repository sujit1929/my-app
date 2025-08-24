// FeedbackSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    isFeedback: false,
    feedBackList: []
}

const FeedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        addFeedback: (state, action) => {
            const data = {
                id: nanoid(),
                ...action.payload
            }
            state.isFeedback = true;
            state.feedBackList.push(data);
        },
        removeFeedback: (state, action) => {
            state.isFeedback = false;
            state.feedBackList = state.feedBackList.filter((item) => item.id !== action.payload);
        },
        editFeedback: (state, action) => {
            const { id, name, email, feedback } = action.payload;
            console.log("feedback ID", id);
            const feedbackItem = state.feedBackList.find((item) => item.id === id);
            if (feedbackItem) {
                feedbackItem.name = name;
                feedbackItem.email = email;
                feedbackItem.feedback = feedback;
            }
        },
    }
})

export const { addFeedback, removeFeedback, editFeedback } = FeedbackSlice.actions;
export default FeedbackSlice.reducer;
