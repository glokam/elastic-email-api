var _request = require('request'),
    baseURL = 'https://api.elasticemail.com',
    path1 = '/v2',
    apikey;

function _getParameters (obj, hideApiKey) {
    
    var paramObj = Object.assign({apikey: apikey}, obj),
        str = "";
    
    if (hideApiKey) delete paramObj.apikey
    
    for (var prop in paramObj) {
        str += "&" + prop + "=" + encodeURIComponent(paramObj[prop]);
    }
    return "?" + str.slice(1);  
};

module.exports = {
    setApiKey: function (str) {
        apikey = str;
        return this;
    },
    request: function (optionObj) {

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

        _request({uri: eepath, method: 'POST'}, function (err, res, body) {

                if (optionObj.callback) optionObj.callback({
                    error: err,
                    response: body,
                    path: eepath
                })
            });
        
         return this;
    },
    //API methods
    Account: {
        AddSubAccount: function (obj, callback) { 
            return module.exports.request({
                 path: '/account/addsubaccount',
                 params: obj,
                 callback: callback 
             });
        },
        AddSubAccountCredits: function (obj, callback) {
             return module.exports.request({
                 path: '/account/addsubaccountcredits',
                 params: obj,
                 callback: callback 
             });
        },
        ChangeEmail: function (obj, callback) {
             return module.exports.request({
                 path: '/account/changeemail',
                 params: obj,
                 callback: callback 
             });
        },
        ChangePassword: function (obj, callback) {
             return module.exports.request({
                 path: '/account/changepassword',
                 params: obj,
                 callback: callback 
             });
        },
        DeleteSubAccount: function (obj, callback) {
             return module.exports.request({
                 path: '/account/deletesubaccount',
                 params: obj,
                 callback: callback 
             });
        },
        GetSubAccountApiKey: function (obj, callback) {
             return module.exports.request({
                 path: '/account/getsubaccountapikey',
                 params: obj,
                 callback: callback 
             });
        },        
        GetSubAccountList: function (obj, callback) {
             return module.exports.request({
                 path: '/account/getsubaccountlist',
                 params: obj,
                 callback: callback 
             });
        }, 
        Load: function (obj, callback) {
             return module.exports.request({
                 path: '/account/load',
                 params: obj,
                 callback: callback 
             });
        }, 
        LoadAdvancedOptions: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadadvancedoptions',
                 params: obj,
                 callback: callback 
             });
        },
        LoadEmailCreditsHistory: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loademailcreditshistory',
                 params: obj,
                 callback: callback 
             });
        },
        LoadLitmusCreditsHistory: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadlitmuscreditshistory',
                 params: obj,
                 callback: callback 
             });
        },
        LoadNotificationQueue: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadnotificationqueue',
                 params: obj,
                 callback: callback 
             });
        },
        LoadPaymentHistory: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadpaymenthistory',
                 params: obj,
                 callback: callback 
             });
        },        
        LoadPayoutHistory: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadpayouthistory',
                 params: obj,
                 callback: callback 
             });
        },        
        LoadReferralDetails: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadreferraldetails',
                 params: obj,
                 callback: callback 
             });
        },        
        LoadReputationHistory: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadreputationhistory',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadReputationImpact: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadreputationimpact',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadSpamCheck: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadspamcheck',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadSubAccountsEmailCreditsHistory: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadsubaccountsemailcreditshistory',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadSubAccountSettings: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadsubaccountsettings',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadSubAccountsLitmusCreditsHistory: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadsubaccountslitmuscreditshistory',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadUsage: function (obj, callback) {
             return module.exports.request({
                 path: '/account/loadusage',
                 params: obj,
                 callback: callback 
             });
        },       
        ManageApiKeys: function (obj, callback) {
             return module.exports.request({
                 path: '/account/manageapikeys',
                 params: obj,
                 callback: callback 
             });
        },       
        Overview: function (obj, callback) {
             return module.exports.request({
                 path: '/account/overview',
                 params: obj,
                 callback: callback 
             });
        },       
        PurchasePrivateIP: function (obj, callback) {
             return module.exports.request({
                 path: '/account/purchaseprivateip',
                 params: obj,
                 callback: callback 
             });
        },       
        RemoveSubAccountCredits: function (obj, callback) {
             return module.exports.request({
                 path: '/account/removesubaccountcredits',
                 params: obj,
                 callback: callback 
             });
        },       
        RequestPrivateIP: function (obj, callback) {
             return module.exports.request({
                 path: '/account/requestprivateip',
                 params: obj,
                 callback: callback 
             });
        },       
        UpdateAdvancedOptions: function (obj, callback) {
             return module.exports.request({
                 path: '/account/updateadvancedoptions',
                 params: obj,
                 callback: callback 
             });
        },       
        UpdateCustomBranding: function (obj, callback) {
             return module.exports.request({
                 path: '/account/updatecustombranding',
                 params: obj,
                 callback: callback 
             });
        },       
        UpdateHttpNotification: function (obj, callback) {
             return module.exports.request({
                 path: '/account/updatehttpnotification',
                 params: obj,
                 callback: callback 
             });
        },
        UpdateProfile: function (obj, callback) {
             return module.exports.request({
                 path: '/account/updateprofile',
                 params: obj,
                 callback: callback 
             });
        },
        UpdateSubAccountSettings: function (obj, callback) {
             return module.exports.request({
                 path: '/account/updatesubaccountsettings',
                 params: obj,
                 callback: callback 
             });
        }  
    },
    Attachment: {
        Delete: function (obj, callback) {
            return module.exports.request({
                 path: '/attachment/delete',
                 params: obj,
                 callback: callback 
             });
        }, 
        Get: function (obj, callback) {
            return module.exports.request({
                 path: '/attachment/get',
                 params: obj,
                 callback: callback 
             });
        },  
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/attachment/list',
                 params: obj,
                 callback: callback 
             });
        },   
        Remove: function (obj, callback) {
            return module.exports.request({
                 path: '/attachment/remove',
                 params: obj,
                 callback: callback 
             });
        },    
        Upload: function (obj, callback) {
            return module.exports.request({
                 path: '/attachment/upload',
                 params: obj,
                 callback: callback 
             });
        }  
    },
    Campaign: {
        Add: function (obj, callback) {
             return module.exports.request({
                 path: '/campaign/add',
                 params: obj,
                 callback: callback 
             });
        }, 
        Copy: function (obj, callback) {
             return module.exports.request({
                 path: '/campaign/copy',
                 params: obj,
                 callback: callback 
             });
        },  
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/campaign/delete',
                 params: obj,
                 callback: callback 
             });
        },   
        Export: function (obj, callback) {
             return module.exports.request({
                 path: '/campaign/export',
                 params: obj,
                 callback: callback 
             });
        },    
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/campaign/list',
                 params: obj,
                 callback: callback 
             });
        },     
        Update: function (obj, callback) {
             return module.exports.request({
                 path: '/campaign/update',
                 params: obj,
                 callback: callback 
             });
        } 
    },
    Channel: {
        Add: function (obj, callback) {
             return module.exports.request({
                 path: '/channel/add',
                 params: obj,
                 callback: callback 
             });
        },  
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/channel/delete',
                 params: obj,
                 callback: callback 
             });
        },   
        ExportCsv: function (obj, callback) {
             return module.exports.request({
                 path: '/channel/exportcsv',
                 params: obj,
                 callback: callback 
             });
        },     
        ExportJson: function (obj, callback) {
             return module.exports.request({
                 path: '/channel/exportjson',
                 params: obj,
                 callback: callback 
             });
        },       
        ExportXml: function (obj, callback) {
             return module.exports.request({
                 path: '/channel/exportxml',
                 params: obj,
                 callback: callback 
             });
        },       
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/channel/list',
                 params: obj,
                 callback: callback 
             });
        },       
        Update: function (obj, callback) {
             return module.exports.request({
                 path: '/channel/update',
                 params: obj,
                 callback: callback 
             });
        }
    },
    Contact: {
        ActivateBlocked: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/activateblocked',
                 params: obj,
                 callback: callback 
             });
        },
        Add: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/add',
                 params: obj,
                 callback: callback 
             });
        },
        AddBlocked: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/addblocked',
                 params: obj,
                 callback: callback 
             });
            
        },
        ChangeProperty: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/changeproperty',
                 params: obj,
                 callback: callback 
             });
            
        },
        ChangeStatus: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/changestatus',
                 params: obj,
                 callback: callback 
             });
        },
        CountByStatus: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/countbystatus',
                 params: obj,
                 callback: callback 
             });
        },
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/delete',
                 params: obj,
                 callback: callback 
             });
        },
        Export: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/export',
                 params: obj,
                 callback: callback 
             });
        },
        FindContact: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/findcontact',
                 params: obj,
                 callback: callback 
             });
        },
        GetContactsByList: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/getcontactsbylist',
                 params: obj,
                 callback: callback 
             });
        },
        GetContactsBySegment: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/getcontactsbysegment',
                 params: obj,
                 callback: callback 
             });
        },
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/list',
                 params: obj,
                 callback: callback 
             });
        },
        LoadBlocked: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/loadblocked',
                 params: obj,
                 callback: callback 
             });
        },
        LoadContact: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/loadcontact',
                 params: obj,
                 callback: callback 
             });
        },
        LoadHistory: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/loadhistory',
                 params: obj,
                 callback: callback 
             });
        },
        QuickAdd: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/quickadd',
                 params: obj,
                 callback: callback 
             });
        },
        Update: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/update',
                 params: obj,
                 callback: callback 
             });
        },
        Upload: function (obj, callback) {
             return module.exports.request({
                 path: '/contact/upload',
                 params: obj,
                 callback: callback 
             });
        }
    },
    Domain: {
        Add: function (obj, callback) {
             return module.exports.request({
                 path: '/domain/add',
                 params: obj,
                 callback: callback 
             });
        },
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/domain/delete',
                 params: obj,
                 callback: callback 
             });
        },
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/domain/list',
                 params: obj,
                 callback: callback 
             });
        },
        SetDefault: function (obj, callback) {
             return module.exports.request({
                 path: '/domain/setdefault',
                 params: obj,
                 callback: callback 
             });
        },
        VerifyDkim: function (obj, callback) {
             return module.exports.request({
                 path: '/domain/verifydkim',
                 params: obj,
                 callback: callback 
             });
        },
        VerifyMX: function (obj, callback) {
             return module.exports.request({
                 path: '/domain/verifymx',
                 params: obj,
                 callback: callback 
             });
        },
        VerifySpf: function (obj, callback) {
             return module.exports.request({
                 path: '/domain/verifyspf',
                 params: obj,
                 callback: callback 
             });
        },
        VerifyTracking: function (obj, callback) {
             return module.exports.request({
                 path: '/domain/verifytracking',
                 params: obj,
                 callback: callback 
             });
        }
    },
    Email: {
        GetStatus: function (obj, callback) {
             return module.exports.request({
                 path: '/email/getstatus',
                 params: obj,
                 callback: callback 
             });
        },  
        Send: function (obj, callback) {
             return module.exports.request({
                 path: '/email/send',
                 params: obj,
                 callback: callback 
             });
        },  
        Status: function (obj, callback) {
             return module.exports.request({
                 path: '/email/status',
                 params: obj,
                 callback: callback 
             });
        },  
        View: function (obj, callback) {
             return module.exports.request({
                 path: '/email/view',
                 params: obj,
                 callback: callback 
             });
        }      
    },
    Export: {   
        CheckStatus: function (obj, callback) {
             return module.exports.request({
                 path: '/export/checkstatus',
                 params: obj,
                 callback: callback 
             });
        },    
        CountByType: function (obj, callback) {
             return module.exports.request({
                 path: '/export/countbytype',
                 params: obj,
                 callback: callback 
             });
        },    
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/export/delete',
                 params: obj,
                 callback: callback 
             });
        },    
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/export/list',
                 params: obj,
                 callback: callback 
             });
        }   
    },
    List: {
        Add: function (obj, callback) {
             return module.exports.request({
                 path: '/list/add',
                 params: obj,
                 callback: callback 
             });
        },   
        AddContacts: function (obj, callback) {
             return module.exports.request({
                 path: '/list/addcontacts',
                 params: obj,
                 callback: callback 
             });
        },   
        CreateNthSelectionLists: function (obj, callback) {
             return module.exports.request({
                 path: '/list/createnthselectionlists',
                 params: obj,
                 callback: callback 
             });
        },   
        CreateRandomList: function (obj, callback) {
             return module.exports.request({
                 path: '/list/createrandomlist',
                 params: obj,
                 callback: callback 
             });
        },   
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/list/delete',
                 params: obj,
                 callback: callback 
             });

        },   
        Export: function (obj, callback) {
             return module.exports.request({
                 path: '/list/export',
                 params: obj,
                 callback: callback 
             });
        },   
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/list/list',
                 params: obj,
                 callback: callback 
             });
        },        
        Load: function (obj, callback) {
             return module.exports.request({
                 path: '/list/load',
                 params: obj,
                 callback: callback 
             });
        },        
        RemoveContacts: function (obj, callback) {
             return module.exports.request({
                 path: '/list/removecontacts',
                 params: obj,
                 callback: callback 
             });
        },        
        Update: function (obj, callback) {
             return module.exports.request({
                 path: '/list/update',
                 params: obj,
                 callback: callback 
             });
        }       
    },
    Log: {      
        CancelInProgress: function (obj, callback) {
             return module.exports.request({
                 path: '/log/cancelinprogress',
                 params: obj,
                 callback: callback 
             });
        },       
        LinkTracking: function (obj, callback) {
             return module.exports.request({
                 path: '/log/linktracking',
                 params: obj,
                 callback: callback 
             });
        },       
        Load: function (obj, callback) {
             return module.exports.request({
                 path: '/log/load',
                 params: obj,
                 callback: callback 
             });
        },       
        RetryNow: function (obj, callback) {
             return module.exports.request({
                 path: '/log/retrynow',
                 params: obj,
                 callback: callback 
             });
        },       
        Summary: function (obj, callback) {
             return module.exports.request({
                 path: '/log/summary',
                 params: obj,
                 callback: callback 
             });
        }  
    },
    Segment: {
        Add: function (obj, callback) {
             return module.exports.request({
                 path: '/segment/add',
                 params: obj,
                 callback: callback 
             });
        },  
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/segment/delete',
                 params: obj,
                 callback: callback 
             });
        },  
        Export: function (obj, callback) {
             return module.exports.request({
                 path: '/segment/export',
                 params: obj,
                 callback: callback 
             });
        },  
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/segment/list',
                 params: obj,
                 callback: callback 
             });
        },  
        Update: function (obj, callback) {
             return module.exports.request({
                 path: '/segment/update',
                 params: obj,
                 callback: callback 
             });
        }          
    },
    SMS: {
        Send: function (obj, callback) {
             return module.exports.request({
                 path: '/sms/send',
                 params: obj,
                 callback: callback 
             });
        }           
    },
    Survey: {
        Add: function (obj, callback) {
             return module.exports.request({
                 path: '/survey/add',
                 params: obj,
                 callback: callback 
             });
        },     
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/survey/delete',
                 params: obj,
                 callback: callback 
             });
        },     
        Export: function (obj, callback) {
             return module.exports.request({
                 path: '/survey/export',
                 params: obj,
                 callback: callback 
             });
        },     
        List: function (obj, callback) {
             return module.exports.request({
                 path: '/survey/list',
                 params: obj,
                 callback: callback 
             });
        },     
        LoadResponseList: function (obj, callback) {
             return module.exports.request({
                 path: '/survey/loadresponselist',
                 params: obj,
                 callback: callback 
             });
        },     
        LoadResults: function (obj, callback) {
             return module.exports.request({
                 path: '/survey/loadresults',
                 params: obj,
                 callback: callback 
             });
        },     
        Update: function (obj, callback) {
             return module.exports.request({
                 path: '/survey/update',
                 params: obj,
                 callback: callback 
             });
        }      
    },
    Template: {
        Add: function (obj, callback) {
             return module.exports.request({
                 path: '/template/add',
                 params: obj,
                 callback: callback 
             });
        },  
        CheckUsage: function (obj, callback) {
             return module.exports.request({
                 path: '/template/checkusage',
                 params: obj,
                 callback: callback 
             });
        },  
        Copy: function (obj, callback) {
             return module.exports.request({
                 path: '/template/copy',
                 params: obj,
                 callback: callback 
             });
        },  
        Delete: function (obj, callback) {
             return module.exports.request({
                 path: '/template/delete',
                 params: obj,
                 callback: callback 
             });
        },  
        GetEmbeddedHtml: function (obj, callback) {
            return module.exports.request({
                 path: '/template/getembeddedhtml',
                 params: obj,
                 callback: callback 
             });
        },  
        GetList: function (obj, callback) {
             return module.exports.request({
                 path: '/template/getlist',
                 params: obj,
                 callback: callback 
             });
        },  
        LoadTemplate: function (obj, callback) {
             return module.exports.request({
                 path: '/template/loadtemplate',
                 params: obj,
                 callback: callback 
             });
        },  
        RemoveScreenshot: function (obj, callback) {
             return module.exports.request({
                 path: '/template/removescreenshot',
                 params: obj,
                 callback: callback 
             });
        },  
        SaveScreenshot: function (obj, callback) {
             return module.exports.request({
                 path: '/template/savescreenshot',
                 params: obj,
                 callback: callback 
             });
        },  
        Update: function (obj, callback) {
             return module.exports.request({
                 path: '/template/update',
                 params: obj,
                 callback: callback 
             });
        },         
    }
}