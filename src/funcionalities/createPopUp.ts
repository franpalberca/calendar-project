export function createPopUp(name: string, reminder: number){
    const alertMessage = document.createElement('div');
    alertMessage.innerHTML = `<div class="z-3 position-fixed bottom-0 end-0 alert alert-warning alert-dismissible fade show" role="alert">
    <strong><i class="fa-regular fa-bell"></i> Hey!</strong> Your event ${name} is in ${reminder} minutes.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    const mainContainer = document.querySelector('#mainContainer') as HTMLElement;
    mainContainer.prepend(alertMessage);
}
