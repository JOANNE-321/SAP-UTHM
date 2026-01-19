sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], (BaseController, UIComponent) => {
  "use strict";

  return BaseController.extend("project1.controller.App", {
    onInit() {
    },

    onSideNavButtonPress: function () {
      var oToolPage = this.byId("toolPage");
      var bSideExpanded = oToolPage.getSideExpanded();

      oToolPage.setSideExpanded(!bSideExpanded);
    },

    onItemSelect: function (oEvent) {
      var oItem = oEvent.getParameter("item");
      var sKey = oItem.getKey();

      if (sKey) {
        UIComponent.getRouterFor(this).navTo(sKey);
      }
    }
  });
});