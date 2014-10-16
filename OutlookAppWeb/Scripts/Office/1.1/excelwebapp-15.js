/* Excel web application specific API library */
/* Version: 15.0.4514.1000 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

OSF.OUtil.setNamespace("XLS",OSF.DDA);OSF.OUtil.augmentList(Microsoft.Office.WebExtension.FilterType,{OnlyVisible:"onlyVisible"});OSF.OUtil.augmentList(Microsoft.Office.WebExtension.EventType,{SettingsChanged:"settingsChanged"});OSF.DDA.XLS.UniqueArguments={Data:"Data",Properties:"Properties",BindingRequest:"DdaBindingsMethod",BindingResponse:"Bindings",SingleBindingResponse:"singleBindingResponse",GetData:"DdaGetBindingData",AddRowsColumns:"DdaAddRowsColumns",SetData:"DdaSetBindingData",SettingsRequest:"DdaSettingsMethod",BindingEventSource:"ddaBinding"};OSF.DDA.XLS.SettingsTranslator=function(){var b=0,a=1;return {read:function(f){var c={},d=f.Settings;for(var g in d){var e=d[g];c[e[b]]=e[a]}return c},write:function(d){var e=[];for(var f in d){var c=[];c[b]=f;c[a]=d[f];e.push(c)}return e}}}();OSF.OUtil.setNamespace("Delegate",OSF.DDA.XLS);OSF.DDA.DispIdHost.getXLSDelegateMethods=function(){var a={};a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=OSF.DDA.XLS.Delegate.executeAsync;a[OSF.DDA.DispIdHost.Delegates.RegisterEventAsync]=OSF.DDA.XLS.Delegate.registerEventAsync;a[OSF.DDA.DispIdHost.Delegates.UnregisterEventAsync]=OSF.DDA.XLS.Delegate.unregisterEventAsync;return a};OSF.DDA.XLS.Delegate.SpecialProcessor=function(){var b=[OSF.DDA.PropertyDescriptors.BindingProperties,OSF.DDA.XLS.UniqueArguments.SingleBindingResponse,OSF.DDA.XLS.UniqueArguments.BindingRequest,OSF.DDA.XLS.UniqueArguments.BindingResponse,OSF.DDA.XLS.UniqueArguments.GetData,OSF.DDA.XLS.UniqueArguments.AddRowsColumns,OSF.DDA.XLS.UniqueArguments.SetData,OSF.DDA.XLS.UniqueArguments.SettingsRequest,OSF.DDA.XLS.UniqueArguments.BindingEventSource,OSF.DDA.EventDescriptors.BindingSelectionChangedEvent],a={};a[Microsoft.Office.WebExtension.Parameters.Data]=function(){var a="Rows",b="Headers";return {toHost:function(c){if(typeof c!="string"&&c[OSF.DDA.TableDataProperties.TableRows]!==undefined){var d={};d[a]=c[OSF.DDA.TableDataProperties.TableRows];d[b]=c[OSF.DDA.TableDataProperties.TableHeaders];c=d}else if(OSF.DDA.DataCoercion.determineCoercionType(c)==Microsoft.Office.WebExtension.CoercionType.Text)c=[[c]];return c},fromHost:function(d){var c;if(d[a]!=undefined){c={};c[OSF.DDA.TableDataProperties.TableRows]=d[a];c[OSF.DDA.TableDataProperties.TableHeaders]=d[b]}else c=d;return c}}}();a[OSF.DDA.SettingsManager.SerializedSettings]={toHost:OSF.DDA.XLS.SettingsTranslator.write,fromHost:OSF.DDA.XLS.SettingsTranslator.read};OSF.DDA.XLS.Delegate.SpecialProcessor.uber.constructor.call(this,b,a);this.pack=function(c,d){var b;if(this.isDynamicType(c))b=a[c].toHost(d);else b=d;return b};this.unpack=function(c,d){var b;if(this.isDynamicType(c))b=a[c].fromHost(d);else b=d;return b}};OSF.OUtil.extend(OSF.DDA.XLS.Delegate.SpecialProcessor,OSF.DDA.SpecialProcessor);OSF.DDA.XLS.Delegate.ParameterMap=function(){var j="ColCount",i="RowCount",h="StartCol",g="StartRow",m="CoerceType",l="BindingType",e="BindingId",f=new OSF.DDA.HostParameterMap(new OSF.DDA.XLS.Delegate.SpecialProcessor),a,d=f.self;function k(a){var c=null;if(a){c={};for(var d=a.length,b=0;b<d;b++)c[a[b].name]=a[b].value}return c}function b(b){var a={},c=k(b.toHost);if(b.invertible)a.map=c;else if(b.canonical)a.toHost=a.fromHost=c;else{a.toHost=c;a.fromHost=k(b.fromHost)}f.setMapping(b.type,a)}a=Microsoft.Office.WebExtension.Parameters;b({type:OSF.DDA.XLS.UniqueArguments.BindingRequest,toHost:[{name:a.ItemName,value:"ItemName"},{name:a.Id,value:e},{name:a.BindingType,value:l},{name:a.PromptText,value:"PromptText"},{name:a.FailOnCollision,value:"FailOnCollision"}]});b({type:OSF.DDA.XLS.UniqueArguments.GetData,toHost:[{name:a.Id,value:e},{name:a.CoercionType,value:m},{name:a.ValueFormat,value:"ValueFormat"},{name:a.FilterType,value:"FilterType"},{name:a.StartRow,value:g},{name:a.StartColumn,value:h},{name:a.RowCount,value:i},{name:a.ColumnCount,value:j}]});b({type:OSF.DDA.XLS.UniqueArguments.SetData,toHost:[{name:a.Id,value:e},{name:a.CoercionType,value:m},{name:a.Data,value:OSF.DDA.XLS.UniqueArguments.Data},{name:a.StartRow,value:g},{name:a.StartColumn,value:h}]});b({type:OSF.DDA.XLS.UniqueArguments.AddRowsColumns,toHost:[{name:a.Id,value:e},{name:a.Data,value:OSF.DDA.XLS.UniqueArguments.Data}]});b({type:OSF.DDA.XLS.UniqueArguments.SettingsRequest,toHost:[{name:a.OverwriteIfStale,value:"OverwriteIfStale"},{name:OSF.DDA.SettingsManager.SerializedSettings,value:OSF.DDA.XLS.UniqueArguments.Properties}],invertible:true});a=Microsoft.Office.WebExtension.BindingType;b({type:Microsoft.Office.WebExtension.Parameters.BindingType,toHost:[{name:a.Text,value:2},{name:a.Matrix,value:3},{name:a.Table,value:1}],invertible:true});a=OSF.DDA.BindingProperties;b({type:OSF.DDA.PropertyDescriptors.BindingProperties,fromHost:[{name:a.Id,value:"Name"},{name:a.Type,value:l},{name:a.RowCount,value:i},{name:a.ColumnCount,value:j},{name:a.HasHeaders,value:"HasHeaders"}]});b({type:OSF.DDA.XLS.UniqueArguments.SingleBindingResponse,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:0}]});b({type:OSF.DDA.PropertyDescriptors.Subset,fromHost:[{name:a.StartRow,value:g},{name:a.StartColumn,value:h},{name:a.RowCount,value:i},{name:a.ColumnCount,value:j}]});a=Microsoft.Office.WebExtension.AsyncResultStatus;b({type:OSF.DDA.PropertyDescriptors.AsyncResultStatus,fromHost:[{name:a.Succeeded,value:0},{name:a.Failed,value:1}]});b({type:OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:OSF.DDA.XLS.UniqueArguments.BindingEventSource},{name:OSF.DDA.PropertyDescriptors.Subset,value:OSF.DDA.PropertyDescriptors.Subset}]});a=OSF.DDA.XLS.UniqueArguments;var c=OSF.DDA.MethodDispId;b({type:c.dispidGetSelectedDataMethod,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.Data,value:a.Data}],toHost:[{name:a.GetData,value:d}]});b({type:c.dispidSetSelectedDataMethod,toHost:[{name:a.SetData,value:d}]});b({type:c.dispidAddBindingFromSelectionMethod,fromHost:[{name:OSF.DDA.XLS.UniqueArguments.SingleBindingResponse,value:OSF.DDA.XLS.UniqueArguments.BindingResponse}],toHost:[{name:a.BindingRequest,value:d}]});b({type:c.dispidAddBindingFromPromptMethod,fromHost:[{name:OSF.DDA.XLS.UniqueArguments.SingleBindingResponse,value:OSF.DDA.XLS.UniqueArguments.BindingResponse}],toHost:[{name:a.BindingRequest,value:d}]});b({type:c.dispidAddBindingFromNamedItemMethod,fromHost:[{name:OSF.DDA.XLS.UniqueArguments.SingleBindingResponse,value:OSF.DDA.XLS.UniqueArguments.BindingResponse}],toHost:[{name:a.BindingRequest,value:d}]});b({type:c.dispidReleaseBindingMethod,toHost:[{name:a.BindingRequest,value:d}]});b({type:c.dispidGetBindingMethod,fromHost:[{name:OSF.DDA.XLS.UniqueArguments.SingleBindingResponse,value:OSF.DDA.XLS.UniqueArguments.BindingResponse}],toHost:[{name:a.BindingRequest,value:d}]});b({type:c.dispidGetAllBindingsMethod,fromHost:[{name:OSF.DDA.ListDescriptors.BindingList,value:OSF.DDA.XLS.UniqueArguments.BindingResponse}]});b({type:c.dispidGetBindingDataMethod,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.Data,value:a.Data}],toHost:[{name:a.GetData,value:d}]});b({type:c.dispidSetBindingDataMethod,toHost:[{name:a.SetData,value:d}]});b({type:c.dispidAddRowsMethod,toHost:[{name:a.AddRowsColumns,value:d}]});b({type:c.dispidAddColumnsMethod,toHost:[{name:a.AddRowsColumns,value:d}]});b({type:c.dispidClearAllRowsMethod,toHost:[{name:a.BindingRequest,value:d}]});b({type:c.dispidLoadSettingsMethod,fromHost:[{name:OSF.DDA.SettingsManager.SerializedSettings,value:a.Properties}]});b({type:c.dispidSaveSettingsMethod,toHost:[{name:a.SettingsRequest,value:d}]});c=OSF.DDA.EventDispId;b({type:c.dispidDocumentSelectionChangedEvent});b({type:c.dispidBindingSelectionChangedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,value:d}]});b({type:c.dispidBindingDataChangedEvent,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:a.BindingEventSource}]});b({type:c.dispidSettingsChangedEvent});return f}();OSF.DDA.XLS.Delegate.version=1;OSF.DDA.XLS.Delegate.executeAsync=function(a){if(!a.hostCallArgs)a.hostCallArgs={};a.hostCallArgs["DdaMethod"]={ControlId:OSF._OfficeAppFactory.getId(),Version:OSF.DDA.XLS.Delegate.version,DispatchId:a.dispId};a.onCalling&&a.onCalling();OSF._OfficeAppFactory.getClientEndPoint().invoke("executeMethod",function(d,c){a.onReceiving&&a.onReceiving();var b;if(d==Microsoft.Office.Common.InvokeResultCode.noError){OSF.DDA.XLS.Delegate.version=c["Version"];b=c["Error"]}else switch(d){case Microsoft.Office.Common.InvokeResultCode.errorHandlingRequestAccessDenied:b=OSF.DDA.ErrorCodeManager.errorCodes.ooeNoCapability;break;default:b=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError}a.onComplete&&a.onComplete(b,c)},a.hostCallArgs)};OSF.DDA.XLS.Delegate.registerEventAsync=function(a){a.onCalling&&a.onCalling();OSF._OfficeAppFactory.getClientEndPoint().registerForEvent(OSF.DDA.getXdmEventName(a.targetId,a.eventType),function(b){a.onEvent&&a.onEvent(b)},function(c,d){a.onReceiving&&a.onReceiving();var b;if(c!=Microsoft.Office.Common.InvokeResultCode.noError)switch(c){case Microsoft.Office.Common.InvokeResultCode.errorHandlingRequestAccessDenied:b=OSF.DDA.ErrorCodeManager.errorCodes.ooeNoCapability;break;default:b=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError}else b=d?OSF.DDA.ErrorCodeManager.errorCodes.ooeSuccess:OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError;a.onComplete&&a.onComplete(b)},{controlId:OSF._OfficeAppFactory.getId(),eventDispId:a.dispId,targetId:a.targetId})};OSF.DDA.XLS.Delegate.unregisterEventAsync=function(a){a.onCalling&&a.onCalling();OSF._OfficeAppFactory.getClientEndPoint().unregisterForEvent(OSF.DDA.getXdmEventName(a.targetId,a.eventType),function(c,d){a.onReceiving&&a.onReceiving();var b;if(c!=Microsoft.Office.Common.InvokeResultCode.noError)switch(c){case Microsoft.Office.Common.InvokeResultCode.errorHandlingRequestAccessDenied:b=OSF.DDA.ErrorCodeManager.errorCodes.ooeNoCapability;break;default:b=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError}else b=d?OSF.DDA.ErrorCodeManager.errorCodes.ooeSuccess:OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError;a.onComplete&&a.onComplete(b)},{controlId:OSF._OfficeAppFactory.getId(),eventDispId:a.dispId,targetId:a.targetId})};OSF.DDA.ExcelWebAppDocument=function(c,d){var a=this,b=new OSF.DDA.BindingFacade(a);OSF.DDA.DispIdHost.addAsyncMethods(b,[OSF.DDA.AsyncMethodNames.AddFromPromptAsync]);OSF.DDA.ExcelWebAppDocument.uber.constructor.call(a,c,b,d);if(a.mode==OSF.ClientMode.ReadOnly)a.url=document.URL;OSF.OUtil.finalizeProperties(a)};OSF.OUtil.extend(OSF.DDA.ExcelWebAppDocument,OSF.DDA.JsomDocument)