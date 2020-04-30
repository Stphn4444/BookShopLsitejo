sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",

], function (Controller, History, UIComponent, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.bookstoreTA.controller.managerDetail", {
		onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("managerDetail").attachPatternMatched(this._onObjectMatched, this);
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
				oRouter.navTo("manager", {}, true);
			}
		},
		
		onDeleteButton: function(oEvent){
            var oSource = oEvent.getSource();
            var oListItemData = oSource.getBindingContext().getObject();
            //MessageToast.show(oListItemData.Uuid);
            var oBookModel = new JSONModel();
            sap.ui.getCore().setModel(oBookModel);   
            jQuery.ajax({
                    url : "/api/v1/deleteBook/"+oListItemData[0].uuid,
                    async : false,
                    type : "DELETE",
                    contentType : "application/json",
                    dataType : "json",
                   // data : JSON.stringify(oBookModel.getData())
                });
            window.location.reload();
            onCloseDialog();
        }

		
	});
});