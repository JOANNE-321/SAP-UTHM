sap.ui.define([
    "sap/ui/core/UIComponent",
    "project1/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("project1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the mock data model
            var oMockModel = new JSONModel(sap.ui.require.toUrl("project1/model/mockData.json"));
            this.setModel(oMockModel, "mock");

            // enable routing
            this.getRouter().initialize();
        }
    });
});