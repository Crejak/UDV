import "./DocToValidateStyle.css"
import { DocToValidateSearchWindow } from "./DocToValidateSearchWindow";
import { DocToValidateBrowserWindow } from "./DocToValidateBrowserWindow";
import { DocToValidateCommentWindow } from "./DocToValidateCommentWindow"

export function DocToValidateView(docToValidateService) {

    this.docToValidateService = docToValidateService;
    this.searchWindow;
    this.browserWindow;
    this.commentWindow;

    this.onopen;
    this.onclose;

    this.initialize = function () {
        this.searchWindow = new DocToValidateSearchWindow(this, this.docToValidateService);
        this.browserWindow = new DocToValidateBrowserWindow(this, this.docToValidateService);
        this.commentWindow = new DocToValidateCommentWindow(this.docToValidateService);
    }

    this.appendToElement = function (htmlElement) {
        this.searchWindow.appendTo(htmlElement);
        this.browserWindow.appendTo(htmlElement);
        this.docToValidateService.search(new FormData());
        if (typeof this.onopen === 'function') {
            this.onopen();
        }
    }

    this.dispose = () => {
        this.searchWindow.dispose();
        this.browserWindow.dispose();
        this.commentWindow.dispose();
        if (typeof this.onclose === 'function') {
            this.onclose();
        }
    }

    this.isVisible = function () {
        return this.searchWindow.isVisible;
    }

    this.initialize();
};
