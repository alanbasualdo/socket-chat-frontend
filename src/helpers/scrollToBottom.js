import { animateScroll } from "react-scroll";

export const scrollToBottom = (id) => {
    setTimeout(() => {
        animateScroll.scrollToBottom({
            container: id,
            duration: 0
        });
    }, 10)
}

export const scrollToBottomAnimated = (id) => {
    setTimeout(() => {
        animateScroll.scrollToBottom({
            container: id,
            duration: 250
        });
    }, 10)
}