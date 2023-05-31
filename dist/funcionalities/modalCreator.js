import { Modal } from 'bootstrap';
export function createModal(modalId, title, content) {
    const modalElement = document.createElement("div");
    modalElement.className = "modal fade";
    modalElement.id = modalId;
    modalElement.tabIndex = -1;
    modalElement.setAttribute("aria-labelledby", `${modalId}-title`);
    modalElement.setAttribute("aria-hidden", "true");
    const modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog";
    modalElement.appendChild(modalDialog);
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalDialog.appendChild(modalContent);
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalContent.appendChild(modalHeader);
    const modalTitle = document.createElement("h5");
    modalTitle.className = "modal-title";
    modalTitle.id = `${modalId}-title`;
    modalTitle.textContent = title;
    modalHeader.appendChild(modalTitle);
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");
    modalHeader.appendChild(closeButton);
    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.textContent = content;
    modalContent.appendChild(modalBody);
    document.body.appendChild(modalElement);
    const bootstrapModal = new Modal(modalElement);
    return bootstrapModal;
}
//# sourceMappingURL=modalCreator.js.map