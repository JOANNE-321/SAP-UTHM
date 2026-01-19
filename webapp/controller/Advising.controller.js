sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.Advising", {
        onInit: function () {
        },

        onDocumentPress: function (oEvent) {
            var oItem = oEvent.getSource();
            MessageToast.show("Viewing document: " + oItem.getTitle());
        }
    });
});
