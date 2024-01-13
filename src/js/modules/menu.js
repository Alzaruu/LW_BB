import A11yDialog from 'a11y-dialog'

const requestCatalogInit = () => {
    const container1 = document.querySelector('#category-request')

    if (!container1) return

    const dialog1 = new A11yDialog(container1)
}

export default requestCatalogInit