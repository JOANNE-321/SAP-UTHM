sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, MessageToast, MessageBox, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("project1.controller.Documents", {
        onInit: function () {
        },

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("query");
            var oTable = this.byId("docsTable");
            var oBinding = oTable.getBinding("items");
            var aFilters = [];

            if (sQuery) {
                aFilters.push(new Filter("Name", FilterOperator.Contains, sQuery));
            }
            oBinding.filter(aFilters);
        },

        onViewPress: function () {
            MessageToast.show("Opening document preview...");
        },

        onDownloadPress: function () {
            MessageToast.show("Starting download...");
        },

        onDeletePress: function () {
            MessageBox.confirm("Are you sure you want to delete this document?", {
                onClose: function (sAction) {
                    if (sAction === MessageBox.Action.OK) {
                        MessageToast.show("Document deleted");
                    }
                }
            });
        }
    });
});
