// //import {modal} '../../css/b'
// const howToDeleteEventsBtn = document.querySelector("#deleteEventsBtn") as HTMLButtonElement;
// const modalEventHowToCreate = document.querySelector("#createModalInfo") as HTMLDivElement;
// const modalEventHowToDetete = document.querySelector("#deleteModalInfo") as HTMLDivElement;
// const bodyContainer = document.querySelector("#bodyContainer") as HTMLBodyElement;
// const modalEventHowToCreate = new bootstrap.Modal('#createModalInfo',{
//   keyboard: true,
//   backdrop:'static'
// })

// export function howToCreateEvents(): void {
//   const howToCreateEventsBtn = document.querySelector("#createEventsBtn") as HTMLButtonElement;
//   if (howToCreateEventsBtn) {
//     howToCreateEventsBtn.addEventListener("click", () => {
      
//       // modalEventHowToCreate.style.display = "block";
//       // modalEventHowToCreate.classList.add("show");
//       // const divModalBackdrop = document.createElement("div") as HTMLDivElement;
//       // divModalBackdrop.setAttribute("class", "modal-backdrop fade show");
//       // bodyContainer.appendChild(divModalBackdrop);
//       const divModalHowtoCreate = document.createElement("div") as HTMLDivElement;
//       divModalHowtoCreate.setAttribute("class", "modal fade show");
//       divModalHowtoCreate.setAttribute("id", "createModalInfo");
//       divModalHowtoCreate.setAttribute("tabindex", "-1");
//       divModalHowtoCreate.setAttribute("aria-labelledby", "createModalInfo");
//       divModalHowtoCreate.setAttribute("aria-hidden", "true");
//       modalEventHowToCreate.appendChild(divModalHowtoCreate);

      

//       const modalDialogHowToCreate = document.createElement("div") as HTMLDivElement;
//       modalDialogHowToCreate.setAttribute("class", "modal-dialog");
//       divModalHowtoCreate.appendChild(modalDialogHowToCreate);

//       const modalContentHowToCreate = document.createElement("div") as HTMLDivElement;
//       modalContentHowToCreate.setAttribute("class", "modal-content");
//       modalDialogHowToCreate.appendChild(modalContentHowToCreate);

//       const modalHeaderHowToCreate = document.createElement("div") as HTMLDivElement;
//       modalHeaderHowToCreate.setAttribute("class", "modal-header");
//       modalContentHowToCreate.appendChild(modalHeaderHowToCreate);

//       const modalHeaderTitleHowToCreate = document.createElement("h5") as HTMLHeadingElement;
//       modalHeaderTitleHowToCreate.setAttribute("class", "modal-title");
//       modalHeaderTitleHowToCreate.textContent = "How to create an event";
//       modalHeaderHowToCreate.appendChild(modalHeaderTitleHowToCreate);

//       const modalHeaderBtnHowToCreate = document.createElement("button") as HTMLButtonElement;
//       modalHeaderBtnHowToCreate.setAttribute("type", "button");
//       modalHeaderBtnHowToCreate.setAttribute("class", "btn-close");
//       modalHeaderBtnHowToCreate.setAttribute("data-bs-dismiss", "modal");
//       modalHeaderBtnHowToCreate.setAttribute("aria-label", "Close");
//       modalHeaderHowToCreate.appendChild(modalHeaderBtnHowToCreate);

//       // modalHeaderBtnHowToCreate.addEventListener("click", () => {
//       //   modalEventHowToCreate.style.display = "none";
//       //   modalEventHowToCreate.classList.remove("show");})
//       //   divModalBackdrop.remove();

//       const modalBodyHowToCreate = document.createElement("div") as HTMLDivElement;
//       modalBodyHowToCreate.setAttribute("class", "modal-body");
//       modalContentHowToCreate.appendChild(modalBodyHowToCreate);

//       const modalBodyParagraphOneHowToCreate = document.createElement("p") as HTMLParagraphElement;
//       modalBodyParagraphOneHowToCreate.textContent =
//         'If you want to create an event, you have two different options. On one hand, you can click on the "+ Add Event" button and a modal will open to introduce all the information. On the other hand, in each calendar grid you will find a "+" button, which will open the same modal with the default start date of the event you want to add.';
//       modalBodyHowToCreate.appendChild(modalBodyParagraphOneHowToCreate);

//       const modalBodyParagraphTwoHowToCreate = document.createElement("p") as HTMLParagraphElement;
//       modalBodyParagraphTwoHowToCreate.textContent = `In addition, you must enter a title and a description for the event, as well as the option to enter an end date and a reminder. Finally, don't forget to select the type of event you are creating. By clicking the "Save changes" button you can save this event to your calendar.`;
//       modalBodyHowToCreate.appendChild(modalBodyParagraphTwoHowToCreate);

//       const modalFooterHowToCreate = document.createElement("div") as HTMLDivElement;
//       modalFooterHowToCreate.setAttribute("class", "modal-footer");
//       modalContentHowToCreate.appendChild(modalFooterHowToCreate);

//       const modalFooterBtnHowToCreate = document.createElement("button") as HTMLButtonElement;
//       modalFooterBtnHowToCreate.setAttribute("type", "button");
//       modalFooterBtnHowToCreate.setAttribute("class", "btn btn-primary");
//       modalFooterBtnHowToCreate.setAttribute("data-bs-dismiss", "modal");
//       modalFooterBtnHowToCreate.textContent = "Close";
//       modalFooterHowToCreate.appendChild(modalFooterBtnHowToCreate);
      
//     });
//   }
// }

// export function howToDeleteEvents(): void {
//   if (howToDeleteEventsBtn) {
//     howToDeleteEventsBtn.addEventListener("click", () => {
//       const modalDialogHowtoDelete = document.createElement("div") as HTMLDivElement;
//       modalDialogHowtoDelete.setAttribute("class", "modal-dialog");
//       modalEventHowToDetete.appendChild(modalDialogHowtoDelete);

//       const modalContentHowtoDelete = document.createElement("div") as HTMLDivElement;
//       modalContentHowtoDelete.setAttribute("class", "modal-content");
//       modalDialogHowtoDelete.appendChild(modalContentHowtoDelete);

//       const modalHeaderHowtoDelete = document.createElement("div") as HTMLDivElement;
//       modalHeaderHowtoDelete.setAttribute("class", "modal-header");
//       modalContentHowtoDelete.appendChild(modalHeaderHowtoDelete);

//       const modalTitleHowtoDelete = document.createElement("h5") as HTMLHeadingElement;
//       modalTitleHowtoDelete.setAttribute("class", "modal-title");
//       modalTitleHowtoDelete.textContent = "How to elete an event";
//       modalHeaderHowtoDelete.appendChild(modalTitleHowtoDelete);

//       const buttonCloseModal = document.createElement("button") as HTMLButtonElement;
//       buttonCloseModal.setAttribute("type", "button");
//       buttonCloseModal.setAttribute("class", "btn-close");
//       buttonCloseModal.setAttribute("data-bs-dismiss", "modal");
//       buttonCloseModal.setAttribute("aria-label", "Close");
//       modalHeaderHowtoDelete.appendChild(buttonCloseModal);

//       const modalBodyHowtoDelete = document.createElement("div") as HTMLDivElement;
//       modalBodyHowtoDelete.setAttribute("class", "modal-body");
//       modalContentHowtoDelete.appendChild(modalBodyHowtoDelete);
//       modalContentHowtoDelete.appendChild(modalBodyHowtoDelete);

//       const paragraphHowtoDelete1 = document.createElement("p") as HTMLParagraphElement;
//       paragraphHowtoDelete1.textContent = "Do you want to delete an event? Don't worry, it's easy! Just search for your event and once you have found it, hover your mouse over it.";
//       modalBodyHowtoDelete.appendChild(paragraphHowtoDelete1);

//       const paragraphHowtoDelete2 = document.createElement("p") as HTMLParagraphElement;
//       paragraphHowtoDelete2.textContent = `Once there, click on the event and a modal will open with all the information. Here you have the option to click on the "Delete Event" button, which will delete the event from your calendar (and also from your Local Storage)`;
//       modalBodyHowtoDelete.appendChild(paragraphHowtoDelete2);

//       const modalFooterHowtoDelete = document.createElement("div") as HTMLDivElement;
//       modalFooterHowtoDelete.setAttribute("class", "modal-footer");
//       modalContentHowtoDelete.appendChild(modalFooterHowtoDelete);

//       const buttonCloseModalBottom = document.createElement("button") as HTMLButtonElement;
//       buttonCloseModalBottom.setAttribute("type", "button");
//       buttonCloseModalBottom.setAttribute("class", "btn btn-primary");
//       buttonCloseModalBottom.setAttribute("data-bs-dismiss", "modal");
//       buttonCloseModalBottom.textContent = "Close";
//       modalFooterHowtoDelete.appendChild(buttonCloseModalBottom);
//     });
//   }
// }
