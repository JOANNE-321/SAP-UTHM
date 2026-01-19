sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller, UIComponent) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },

        onNavToUpload: function () {
            UIComponent.getRouterFor(this).navTo("Upload");
        },

        onNavToDocuments: function () {
            UIComponent.getRouterFor(this).navTo("Documents");
        },

        onNavToAdvising: function () {
            UIComponent.getRouterFor(this).navTo("Advising");
        }
    });
});