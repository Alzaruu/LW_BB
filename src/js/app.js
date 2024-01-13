import initSlider from "./modules/_slider";
import requestDialogInit from "./modules/request-dialog";
import requestCatalogInit from "./modules/menu";

const init = () => {
    initSlider()
    requestDialogInit()
    requestCatalogInit()
}

init()