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
            var oSessionItem = oView.byId("sessionSelect").getSelectedItem();
            var sSessionKey = oSessionItem.getKey();
            var sSessionText = oSessionItem.getText();
            var sDescription = oView.byId("docDescription").getValue();

            if (!oFileUploader.getValue()) {
                MessageToast.show("Please select a file first.");
                return;
            }

            // Simulate Upload Logic
            var oModel = this.getOwnerComponent().getModel("mock");
            var aDocs = oModel.getProperty("/Documents") || [];
            var aSessions = oModel.getProperty("/AdvisingSessions") || [];

            var oNewDoc = {
                Name: oFileUploader.getValue(),
                Type: sDocType,
                Size: (Math.random() * 5 + 0.5).toFixed(1) + " MB",
                Date: new Date().toLocaleDateString(),
                Session: sSessionKey === "None" ? "None" : sSessionText,
                Status: "Success"
            };

            // 1. Add to global Documents list
            aDocs.unshift(oNewDoc);
            oModel.setProperty("/Documents", aDocs);

            // 2. Link to specific Advising Session if selected
            if (sSessionKey !== "None") {
                var oSession = aSessions.find(s => s.ID === sSessionKey);
                if (oSession) {
                    if (!oSession.Documents) {
                        oSession.Documents = [];
                    }
                    oSession.Documents.push({
                        Name: oNewDoc.Name,
                        Type: oNewDoc.Type
                    });
                }
            }
            oModel.setProperty("/AdvisingSessions", aSessions);

            MessageToast.show("Document uploaded and linked successfully!");

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
