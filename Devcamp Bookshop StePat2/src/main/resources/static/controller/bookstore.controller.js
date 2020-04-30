sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("com.sap.bookstoreTA.controller.bookstore", {
		onInit: function () {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("bookstore").attachMatched(
									this._onRouteMatched, this
			);

		},
		_onRouteMatched : function(oEvent){
			this._loadModel();
		},
		_loadModel : function(){
           
                var oBookModel = new JSONModel();
                oBookModel.loadData("/api/v1/book/customer");
                this.getView().setModel(oBookModel);
            
        },

		onItemPress : function(oEvent)
		{
			var oSource = oEvent.getSource(),
			oListItemData = oSource.getBindingContext().getObject();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail",{
				"isbn":oListItemData.isbn
			});
			//MessageToast.show("Book: " + oListItemData.Isbn + "Has been pressed")
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