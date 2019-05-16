import { BaseDemo } from '../../../Utils/BaseDemo/js/BaseDemo.js'

let baseDemo = new BaseDemo({
    iconFolder: '../../../../examples/data/icons',
    imageFolder: '../../../../examples/data/img'
});

baseDemo.appendTo(document.body);
baseDemo.loadConfigFile('./Config.json').then(() => {
    ////// REQUEST SERVICE
    const requestService = new udvcore.RequestService();

    ////// AUTHENTICATION MODULE
    const authenticationService =
        new udvcore.AuthenticationService(requestService, baseDemo.config);
    const authenticationView =
        new udvcore.AuthenticationView(authenticationService);
    baseDemo.addModuleView('authentication', authenticationView,
        {type: BaseDemo.AUTHENTICATION_MODULE});

    ////// DOCUMENTS MODULE
    const documents = new udvcore.DocumentController(baseDemo.view,
        baseDemo.controls, {temporal: baseDemo.temporal, active: false},
        baseDemo.config);
    baseDemo.addModuleView('documents', documents);

    ////// CONTRIBUTE EXTENSION
    const contributeController = new udvcore.ContributeController(documents,
        requestService);
});