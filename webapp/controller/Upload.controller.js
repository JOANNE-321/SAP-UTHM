sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("project1.controller.Upload", {
        onInit: function () {
        },

        onUploadPress: function () {
            var oFileUploader = this.byId("fileUploader");
            if (!oFileUploader.getValue()) {
                MessageToast.show("Please select a file first");
                return;
            }

            // Mock upload process
            MessageBox.success("Document uploaded successfully and linked to the session.", {
                title: "Success"
            });

            // Clear form
            oFileUploader.setValue("");
            this.byId("docDescription").setValue("");
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
