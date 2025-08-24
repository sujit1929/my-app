
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Slice/AuthSlice";
import FeedbackReducer from "../Slice/FeedbackSlice";
import ToolsReducer from "../Slice/ToolsSlice";
import PostReducer from "../Slice/PostSlice";
import productReducer from "../Slice/ProductSlice"
import gadgetsReducer from "../Slice/GadgetsSlice"
import CategoryReducer from "../Slice/CategorySlice"
const store = configureStore({
    reducer: {
        auth: AuthReducer,
        feedback: FeedbackReducer,
        tools: ToolsReducer,
        post: PostReducer,
        product: productReducer,
        gadget: gadgetsReducer,
        category : CategoryReducer
    }
})
export default store