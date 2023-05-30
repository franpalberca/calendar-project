export function modifyCreatedEvent() {
 const modifyEventBtn = document.getElementById("modifyEventModal") as HTMLButtonElement;
 modifyEventBtn.addEventListener("click", (event)=> {
    

    
    // const addButton = document.createElement("button");
    //     addButton.classList.add("hover-button");
    //     addButton.setAttribute("data-today", toISODate);
    //     addButton.addEventListener("click", (event: MouseEvent) => {
    //       if (event.target) {
    //       const targetDay = event.currentTarget as HTMLElement;
    //       const dayData = targetDay.getAttribute('data-today') as string;
    //       const startDate = document.querySelector('#startDate') as HTMLInputElement;
    //       if (startDate){
    //       startDate.value = `${dayData}T12:00`;
    //     }
    //       }
    //     })
    //     addButtonDiv.appendChild(addButton);

    //     const addButtonSpan = document.createElement("span");
    //     addButtonSpan.classList.add("plus-icon");
    //     addButtonSpan.setAttribute("data-bs-toggle", "modal");
    //     addButtonSpan.setAttribute("data-bs-target", "#eventModal");
    //     addButtonSpan.textContent = "+";
    //     addButton.appendChild(addButtonSpan);
 } );
}
