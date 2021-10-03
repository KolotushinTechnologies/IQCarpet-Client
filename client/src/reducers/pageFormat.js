import deviceType from "../utils/deviceType"

const initialState = "PC";

function pageFormatReducer(state = initialState, action) {
    const { type, content } = action;
    
    switch (type) {
        case "UPDATE_FORMAT":
            return deviceType();
        case "SET_FORMAT":
            return content;;
    }
    
    return state;
}

export default pageFormatReducer;