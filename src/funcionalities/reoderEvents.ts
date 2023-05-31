export function reorderEvents() {
  const eventsContainers = document.querySelectorAll("[data-daynumber]");
  eventsContainers.forEach((element) => {
    const eventChildrens = Array.from(element.childNodes).filter((child): child is HTMLElement => child instanceof HTMLElement);

    eventChildrens.sort((a, b) => {
      const hourA = parseInt(a.getAttribute("data-starthour")!.replace(":", ""), 10);

      const hourB = parseInt(b.getAttribute("data-starthour")!.replace(":", ""), 10);

      return hourA - hourB;
    });

    eventChildrens.forEach((child) => element.appendChild(child));
  });
}
