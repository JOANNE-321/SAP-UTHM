sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("project1.controller.Upload", {
        onInit() { },

        onUploadPress: function () {
            var oView = this.getView();
            var oFileUploader = oView.byId("fileUploader");
            var sDocType = oView.byId("docTypeSelect").getSelectedItem().getText();
            var sSession = oView.byId("sessionSelect").getSelectedItem().getText();
            var sDescription = oView.byId("docDescription").getValue();

            if (!oFileUploader.getValue()) {
                MessageToast.show("Please select a file first.");
                return;
            }

            // Simulate Upload Logic
            var oModel = this.getOwnerComponent().getModel("mock");
            var aDocs = oModel.getProperty("/Documents") || [];

            var oNewDoc = {
                Name: oFileUploader.getValue(),
                Type: sDocType,
                Size: (Math.random() * 5 + 0.5).toFixed(1) + " MB",
                Date: new Date().toLocaleDateString(),
                Session: sSession === "No Session (General)" ? "None" : sSession,
                Status: "Success"
            };

            aDocs.unshift(oNewDoc);
            oModel.setProperty("/Documents", aDocs);

            MessageToast.show("Document uploaded successfully!");

            // Clear form
            oFileUploader.setValue("");
            oView.byId("docDescription").setValue("");
        },

        handleValueChange: function (oEvent) {
            MessageToast.show("File selected: " + oEvent.getParameter("newValue"));
        },

        handleFileSizeExceed: function (oEvent) {
            MessageBox.error("File size exceeds 10MB limit.");
        },

        handleTypeMissmatch: function (oEvent) {
            MessageBox.error("Invalid file format. Please use PDF, DOC, DOCX, JPG, or PNG.");
        }
    });
});
