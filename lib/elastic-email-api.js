var _request = require('request'),
    hasOwn = Object.prototype.hasOwnProperty,
    baseURL = 'https://api.elasticemail.com',
    path1 = '/v2',
    apikey;

function extend(target, obj){
    for(var key in obj)
        if(hasOwn.call(obj, key)) target[key] = obj[key];
    return target;
}


function _getParameters (obj, hideApiKey) {
    var paramObj = extend({apikey: apikey}, obj),
        str = "";
    
    if (hideApiKey) delete paramObj.apikey
    
    for (var prop in paramObj) {
        str += "&" + prop + "=" + paramObj[prop]
    }
    
    return "?" + str.slice(1);  
};
function _eerequest(optionObj) {
    
    var eepath;
    
    if (typeof optionObj !== "object") {
        console.log('FAILED! Request Method: input typeof is "' + typeof optionObj + '" but should be: "object"!');
        return;
    };  
    if (optionObj && typeof optionObj.path !== 'string') {
       console.log('FAILED! Request Method: input.path property typeof is "' +  typeof optionObj.path + '" but should be: "string"!');
       return;        
    }  
    
    var eepath = baseURL + path1 + optionObj.path + _getParameters(optionObj.params, optionObj.hideApiKey);
   
    _request(eepath, function (err, res, body) {
            
            if (optionObj.callback) optionObj.callback({
                error: err,
                response: body,
                path: eepath
            })
        });
};

module.exports = {
    setApiKey: function (str) {
        apikey = str;
        return this;
    },
    request: function (path, obj, callback, hideApiKey) {
        if (typeof path === 'string') {
        var eepath = baseURL + path1 + path + _getParameters(obj, hideApiKey);
        
       _request(eepath, function (err, res, body) {
            
            if (callback) callback({
                error: err,
                response: JSON.parse(body),
                path: eepath
            })
        }); } else {
            _eerequest(path);
        }
        
         return this;
    },
    //API methods
    Account: {
        AddSubAccount: function (obj, callback) { 
            return module.exports.request('/account/addsubaccount', obj, callback);
        },
        AddSubAccountCredits: function (obj, callback) {
             return module.exports.request('/account/addsubaccountcredits', obj, callback);
        },
        ChangeEmail: function (obj, callback) {
             return module.exports.request('/account/changeemail', obj, callback);
        },
        ChangePassword: function (obj, callback) {
             return module.exports.request('/account/changepassword', obj, callback);
        },
        DeleteSubAccount: function (obj, callback) {
             return module.exports.request('/account/deletesubaccount', obj, callback);
        },
        GetSubAccountApiKey: function (obj, callback) {
             return module.exports.request('/account/getsubaccountapikey', obj, callback);
        },        
        GetSubAccountList: function (obj, callback) {
             return module.exports.request({
                 path: '/account/getsubaccountlist',
                 params: obj,
                 callback: callback 
             });
        }, 
        Load: function (obj, callback) {
             return module.exports.request('/account/load', obj, callback);
        }, 
        LoadAdvancedOptions: function (obj, callback) {
             return module.exports.request('/account/loadadvancedoptions', obj, callback);
        },
        LoadEmailCreditsHistory: function (obj, callback) {
             return module.exports.request('/account/loademailcreditshistory', obj, callback);
        },
        LoadLitmusCreditsHistory: function (obj, callback) {
             return module.exports.request('/account/loadlitmuscreditshistory', obj, callback);
        },
        LoadNotificationQueue: function (obj, callback) {
             return module.exports.request('/account/loadnotificationqueue', obj, callback);
        },
        LoadPaymentHistory: function (obj, callback) {
             return module.exports.request('/account/loadpaymenthistory', obj, callback);
        },        
        LoadPayoutHistory: function (obj, callback) {
             return module.exports.request('/account/loadpayouthistory', obj, callback);
        },        
        LoadReferralDetails: function (obj, callback) {
             return module.exports.request('/account/loadreferraldetails', obj, callback);
        },        
        LoadReputationHistory: function (obj, callback) {
             return module.exports.request('/account/loadreputationhistory', obj, callback);
        },       
        LoadReputationImpact: function (obj, callback) {
             return module.exports.request('/account/loadreputationimpact', obj, callback);
        },       
        LoadSpamCheck: function (obj, callback) {
             return module.exports.request('/account/loadspamcheck', obj, callback);
        },       
        LoadSubAccountsEmailCreditsHistory: function (obj, callback) {
             return module.exports.request('/account/loadsubaccountsemailcreditshistory', obj, callback);
        },       
        LoadSubAccountSettings: function (obj, callback) {
             return module.exports.request('/account/loadsubaccountsettings', obj, callback);
        },       
        LoadSubAccountsLitmusCreditsHistory: function (obj, callback) {
             return module.exports.request('/account/loadsubaccountslitmuscreditshistory', obj, callback);
        },       
        LoadUsage: function (obj, callback) {
             return module.exports.request('/account/loadusage', obj, callback);
        },       
        ManageApiKeys: function (obj, callback) {
             return module.exports.request('/account/manageapikeys', obj, callback);
        },       
        Overview: function (obj, callback) {
             return module.exports.request('/account/overview', obj, callback);
        },       
        PurchasePrivateIP: function (obj, callback) {
             return module.exports.request('/account/purchaseprivateip', obj, callback);
        },       
        RemoveSubAccountCredits: function (obj, callback) {
             return module.exports.request('/account/removesubaccountcredits', obj, callback);
        },       
        RequestPrivateIP: function (obj, callback) {
             return module.exports.request('/account/requestprivateip', obj, callback);
        },       
        UpdateAdvancedOptions: function (obj, callback) {
             return module.exports.request('/account/updateadvancedoptions', obj, callback);
        },       
        UpdateCustomBranding: function (obj, callback) {
             return module.exports.request('/account/updatecustombranding', obj, callback);
        },       
        UpdateHttpNotification: function (obj, callback) {
             return module.exports.request('/account/updatehttpnotification', obj, callback);
        },
        UpdateProfile: function (obj, callback) {
             return module.exports.request('/account/updateprofile', obj, callback);
        },
        UpdateSubAccountSettings: function (obj, callback) {
             return module.exports.request('/account/updatesubaccountsettings', obj, callback);
        }  
    },
    Attachment: {
        Delete: function (obj, callback) {
             return module.exports.request('/attachment/delete', obj, callback);
        }, 
        Get: function (obj, callback) {
             return module.exports.request('/attachment/get', obj, callback);
        },  
        List: function (obj, callback) {
             return module.exports.request('/attachment/list', obj, callback);
        },   
        Remove: function (obj, callback) {
             return module.exports.request('/attachment/remove', obj, callback);
        },    
        Upload: function (obj, callback) {
             return module.exports.request('/attachment/upload', obj, callback);
        }  
    },
    Campaign: {
        Add: function (obj, callback) {
             return module.exports.request('/campaign/add', obj, callback);
        }, 
        Copy: function (obj, callback) {
             return module.exports.request('/campaign/copy', obj, callback);
        },  
        Delete: function (obj, callback) {
             return module.exports.request('/campaign/delete', obj, callback);
        },   
        Export: function (obj, callback) {
             return module.exports.request('/campaign/export', obj, callback);
        },    
        List: function (obj, callback) {
             return module.exports.request('/campaign/list', obj, callback);
        },     
        Update: function (obj, callback) {
             return module.exports.request('/campaign/update', obj, callback);
        } 
    },
    Channel: {
        Add: function (obj, callback) {
             return module.exports.request('/channel/add', obj, callback);
        },  
        Delete: function (obj, callback) {
             return module.exports.request('/channel/delete', obj, callback);
        },   
        ExportCsv: function (obj, callback) {
             return module.exports.request('/channel/exportcsv', obj, callback);
        },     
        ExportJson: function (obj, callback) {
             return module.exports.request('/channel/exportjson', obj, callback);
        },       
        ExportXml: function (obj, callback) {
             return module.exports.request('/channel/exportxml', obj, callback);
        },       
        List: function (obj, callback) {
             return module.exports.request('/channel/list', obj, callback);
        },       
        Update: function (obj, callback) {
             return module.exports.request('/channel/update', obj, callback);
        }
    },
    Contact: {
        ActivateBlocked: function (obj, callback) {
             return module.exports.request('/contact/activateblocked', obj, callback);
        },
        Add: function (obj, callback) {
             return module.exports.request('/contact/add', obj, callback, true);
        },
        AddBlocked: function (obj, callback) {
             return module.exports.request('/contact/addblocked', obj, callback);
        },
        ChangeProperty: function (obj, callback) {
             return module.exports.request('/contact/changeproperty', obj, callback);
        },
        ChangeStatus: function (obj, callback) {
             return module.exports.request('/contact/changestatus', obj, callback);
        },
        CountByStatus: function (obj, callback) {
             return module.exports.request('/contact/countbystatus', obj, callback);
        },
        Delete: function (obj, callback) {
             return module.exports.request('/contact/delete', obj, callback);
        },
        Export: function (obj, callback) {
             return module.exports.request('/contact/export', obj, callback);
        },
        FindContact: function (obj, callback) {
             return module.exports.request('/contact/findcontact', obj, callback);
        },
        GetContactsByList: function (obj, callback) {
             return module.exports.request('/contact/getcontactsbylist', obj, callback);
        },
        GetContactsBySegment: function (obj, callback) {
             return module.exports.request('/contact/getcontactsbysegment', obj, callback);
        },
        List: function (obj, callback) {
             return module.exports.request('/contact/list', obj, callback);
        },
        LoadBlocked: function (obj, callback) {
             return module.exports.request('/contact/loadblocked', obj, callback);
        },
        LoadContact: function (obj, callback) {
             return module.exports.request('/contact/loadcontact', obj, callback);
        },
        LoadHistory: function (obj, callback) {
             return module.exports.request('/contact/loadhistory', obj, callback);
        },
        QuickAdd: function (obj, callback) {
             return module.exports.request('/contact/quickadd', obj, callback);
        },
        Update: function (obj, callback) {
             return module.exports.request('/contact/update', obj, callback);
        },
        Upload: function (obj, callback) {
             return module.exports.request('/contact/upload', obj, callback);
        }
    },
    Domain: {
        Add: function (obj, callback) {
             return module.exports.request('/domain/add', obj, callback);
        },
        Delete: function (obj, callback) {
             return module.exports.request('/domain/delete', obj, callback);
        },
        List: function (obj, callback) {
             return module.exports.request('/domain/list', obj, callback);
        },
        SetDefault: function (obj, callback) {
             return module.exports.request('/domain/setdefault', obj, callback);
        },
        VerifyDkim: function (obj, callback) {
             return module.exports.request('/domain/verifydkim', obj, callback);
        },
        VerifyMX: function (obj, callback) {
             return module.exports.request('/domain/verifymx', obj, callback);
        },
        VerifySpf: function (obj, callback) {
             return module.exports.request('/domain/verifyspf', obj, callback);
        },
        VerifyTracking: function (obj, callback) {
             return module.exports.request('/domain/verifytracking', obj, callback);
        }
    },
    Email: {
        GetStatus: function (obj, callback) {
             return module.exports.request('/email/getstatus', obj, callback);
        },  
        Send: function (obj, callback) {
             return module.exports.request('/email/send', obj, callback);
        },  
        Status: function (obj, callback) {
             return module.exports.request('/email/status', obj, callback);
        },  
        View: function (obj, callback) {
             return module.exports.request('/email/view', obj, callback);
        }      
    },
    Export: {   
        CheckStatus: function (obj, callback) {
             return module.exports.request('/export/checkstatus', obj, callback);
        },    
        CountByType: function (obj, callback) {
             return module.exports.request('/export/countbytype', obj, callback);
        },    
        Delete: function (obj, callback) {
             return module.exports.request('/export/delete', obj, callback);
        },    
        List: function (obj, callback) {
             return module.exports.request('/export/list', obj, callback);
        }   
    },
    List: {
        Add: function (obj, callback) {
             return module.exports.request('/list/add', obj, callback);
        },   
        AddContacts: function (obj, callback) {
             return module.exports.request('/list/addcontacts', obj, callback);
        },   
        CreateNthSelectionLists: function (obj, callback) {
             return module.exports.request('/list/createnthselectionlists', obj, callback);
        },   
        CreateRandomList: function (obj, callback) {
             return module.exports.request('/list/createrandomlist', obj, callback);
        },   
        Delete: function (obj, callback) {
             return module.exports.request('/list/delete', obj, callback);
        },   
        Export: function (obj, callback) {
             return module.exports.request('/list/export', obj, callback);
        },   
        List: function (obj, callback) {
             return module.exports.request('/list/list', obj, callback);
        },        
        Load: function (obj, callback) {
             return module.exports.request('/list/load', obj, callback);
        },        
        RemoveContacts: function (obj, callback) {
             return module.exports.request('/list/removecontacts', obj, callback);
        },        
        Update: function (obj, callback) {
             return module.exports.request('/list/update', obj, callback);
        }       
    },
    Log: {      
        CancelInProgress: function (obj, callback) {
             return module.exports.request('/log/cancelinprogress', obj, callback);
        },       
        LinkTracking: function (obj, callback) {
             return module.exports.request('/log/linktracking', obj, callback);
        },       
        Load: function (obj, callback) {
             return module.exports.request('/log/load', obj, callback);
        },       
        RetryNow: function (obj, callback) {
             return module.exports.request('/log/retrynow', obj, callback);
        },       
        Summary: function (obj, callback) {
             return module.exports.request('/log/summary', obj, callback);
        }  
    },
    Segment: {
        Add: function (obj, callback) {
             return module.exports.request('/segment/add', obj, callback);
        },  
        Delete: function (obj, callback) {
             return module.exports.request('/segment/delete', obj, callback);
        },  
        Export: function (obj, callback) {
             return module.exports.request('/segment/export', obj, callback);
        },  
        List: function (obj, callback) {
             return module.exports.request('/segment/list', obj, callback);
        },  
        Update: function (obj, callback) {
             return module.exports.request('/segment/update', obj, callback);
        }          
    },
    SMS: {
        Send: function (obj, callback) {
             return module.exports.request('/sms/send', obj, callback);
        }           
    },
    Survey: {
        Add: function (obj, callback) {
             return module.exports.request('/survey/add', obj, callback);
        },     
        Delete: function (obj, callback) {
             return module.exports.request('/survey/delete', obj, callback);
        },     
        Export: function (obj, callback) {
             return module.exports.request('/survey/export', obj, callback);
        },     
        List: function (obj, callback) {
             return module.exports.request('/survey/list', obj, callback);
        },     
        LoadResponseList: function (obj, callback) {
             return module.exports.request('/survey/loadresponselist', obj, callback);
        },     
        LoadResults: function (obj, callback) {
             return module.exports.request('/survey/loadresults', obj, callback);
        },     
        Update: function (obj, callback) {
             return module.exports.request('/survey/update', obj, callback);
        }      
    },
    Template: {
        Add: function (obj, callback) {
             return module.exports.request('/template/add', obj, callback);
        },  
        CheckUsage: function (obj, callback) {
             return module.exports.request('/template/checkusage', obj, callback);
        },  
        Copy: function (obj, callback) {
             return module.exports.request('/template/copy', obj, callback);
        },  
        Delete: function (obj, callback) {
             return module.exports.request('/template/delete', obj, callback);
        },  
        GetEmbeddedHtml: function (obj, callback) {
             return module.exports.request('/template/getembeddedhtml', obj, callback);
        },  
        GetList: function (obj, callback) {
             return module.exports.request('/template/getlist', obj, callback);
        },  
        LoadTemplate: function (obj, callback) {
             return module.exports.request('/template/loadtemplate', obj, callback);
        },  
        RemoveScreenshot: function (obj, callback) {
             return module.exports.request('/template/removescreenshot', obj, callback);
        },  
        SaveScreenshot: function (obj, callback) {
             return module.exports.request('/template/savescreenshot', obj, callback);
        },  
        Update: function (obj, callback) {
             return module.exports.request('/template/update', obj, callback);
        },         
    }
}