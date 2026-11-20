import { message } from "antd";

// Premium Alert/Notification Toast configuration
export const showToast = (type, content) => {
    message.open({
        type: type, // 'success' | 'error' | 'warning' | 'info'
        content: content,
        duration: 3,
        style: {
            marginTop: '4vh',
        },
    });
};

// App wide constants
export const APP_NAME = "Premium Task Manager";