// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const animateOnScroll = (animation: string, queryName: any) => {
    window.addEventListener('scroll', () => {
        const item = document.querySelector(queryName);
        const topAnimationPoint = item?.offsetTop - item?.offsetHeight - 600;
        if (window.pageYOffset > topAnimationPoint) item.classList.add(animation);
        if (window.pageYOffset < topAnimationPoint) item.classList.remove(animation);
    })
}