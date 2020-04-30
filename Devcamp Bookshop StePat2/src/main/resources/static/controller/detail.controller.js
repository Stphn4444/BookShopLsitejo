sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",

], function (Controller, History, UIComponent, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.bookstoreTA.controller.detail", {
		onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched : function(oEvent){
            var sIsbn = oEvent.getParameter("arguments").isbn;
            this._loadModel(sIsbn);
        },
       
        _loadModel : function(sIsbn){
            if(sIsbn){
                var oBookModel = new JSONModel();
                oBookModel.loadData("/api/v1/book/"+sIsbn);
                this.getView().setModel(oBookModel);
            }
        },

		onNavBack: function () {
			
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			
			} else {
				//this.getOwnerComponent().getRouter().navTo("app" ,null, true);
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("app", {}, true);
			}
		}
	});
});