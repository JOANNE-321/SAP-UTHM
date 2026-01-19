sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, Filter, FilterOperator, MessageBox, MessageToast) {
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
                aFilters.push(new Filter({
                    filters: [
                        new Filter("Name", FilterOperator.Contains, sQuery),
                        new Filter("Type", FilterOperator.Contains, sQuery)
                    ],
                    and: false
                }));
            }
            oBinding.filter(aFilters);
        },

        onDeletePress: function (oEvent) {
            var oItem = oEvent.getSource().getParent().getParent();
            var oModel = this.getView().getModel("mock");
            var sPath = oItem.getBindingContextPath();
            var iIndex = parseInt(sPath.split("/").pop());
            var aDocs = oModel.getProperty("/Documents");

            MessageBox.confirm("Are you sure you want to delete this document?", {
                onClose: function (sAction) {
                    if (sAction === MessageBox.Action.OK) {
                        aDocs.splice(iIndex, 1);
                        oModel.setProperty("/Documents", aDocs);
                        MessageToast.show("Document deleted.");
                    }
                }
            });
        },

        onViewPress: function () {
            MessageToast.show("Opening document viewer...");
        },

        onDownloadPress: function () {
            MessageToast.show("Starting download...");
        }
    });
});
