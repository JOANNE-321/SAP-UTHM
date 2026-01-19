sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.Advising", {
        onInit: function () {
        },

        onDocumentPress: function (oEvent) {
            var sDocName = oEvent.getSource().getTitle();
            MessageToast.show("Opening document: " + sDocName);
        }
    });
});
