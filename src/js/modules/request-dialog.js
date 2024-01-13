import A11yDialog from 'a11y-dialog'

const requestDialogInit = () => {
   /* const showDialog = document.querySelector('.show-dialog-button');
    const dialogBox = document.querySelector('.dialog-box');
    const closeDialog = document.querySelector('.close-dialog-button');*/
    const container = document.querySelector('#dialog-request')

    if (!container) return

    const dialog = new A11yDialog(container)
}
/*showDialog.addEventListener('click', () => {
    dialogBox.showModal();
});
closeDialog.addEventListener('click', () => {
    dialogBox.close();
});*/

export default requestDialogInit