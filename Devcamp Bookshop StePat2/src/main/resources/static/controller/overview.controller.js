sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
   "sap/ui/core/UIComponent",

], function (Controller, JSONModel, UIComponent) {
   "use strict";
   return Controller.extend("com.sap.bookstoreTA.controller.overview", {
      
       onPressManager:  function(oEvent){
          
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("manager");
            },
           
    	onPressCustomer:  function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("bookstore");
            }
   });
});