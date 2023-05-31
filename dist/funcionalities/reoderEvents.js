export function reorderEvents() {
    const eventsContainers = document.querySelectorAll("[data-daynumber]");
    eventsContainers.forEach((element) => {
        const eventChildrens = Array.from(element.childNodes).filter((child) => child instanceof HTMLElement);
        console.log(eventChildrens);
        eventChildrens.sort((a, b) => {
            const hourA = parseInt(a.getAttribute("data-starthour").replace(":", ""), 10);
            console.log(hourA);
            const hourB = parseInt(b.getAttribute("data-starthour").replace(":", ""), 10);
            console.log(hourB);
            return hourA - hourB;
        });
        eventChildrens.forEach((child) => element.appendChild(child));
    });
}
//# sourceMappingURL=reoderEvents.js.map