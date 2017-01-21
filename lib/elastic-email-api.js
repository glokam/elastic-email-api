const _request = require('request');
const querystring = require('querystring');

var baseURL = 'https://api.elasticemail.com',
    path1 = '/v2',
    apikey;

function _getParameters (obj, hideApiKey) {
    
    var paramObj = Object.assign({apikey: apikey}, obj);
    
    if (hideApiKey) delete paramObj.apikey
    
    return "?" + querystring.stringify(paramObj);
};

module.exports = {
    setApiKey (str) {
        apikey = str;
        return this;
    },
    request (optionObj, file) {

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
        
        _request({uri: eepath, method: 'POST', formData: file}, function (err, res, body) {

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
        AddSubAccount (obj, callback) { 
            return module.exports.request({
                 path: '/account/addsubaccount',
                 params: obj,
                 callback: callback 
             });
        },
        AddSubAccountCredits (obj, callback) {
             return module.exports.request({
                 path: '/account/addsubaccountcredits',
                 params: obj,
                 callback: callback 
             });
        },
        ChangeEmail (obj, callback) {
             return module.exports.request({
                 path: '/account/changeemail',
                 params: obj,
                 callback: callback 
             });
        },
        ChangePassword (obj, callback) {
             return module.exports.request({
                 path: '/account/changepassword',
                 params: obj,
                 callback: callback 
             });
        },
        DeleteSubAccount (obj, callback) {
             return module.exports.request({
                 path: '/account/deletesubaccount',
                 params: obj,
                 callback: callback 
             });
        },
        GetSubAccountApiKey (obj, callback) {
             return module.exports.request({
                 path: '/account/getsubaccountapikey',
                 params: obj,
                 callback: callback 
             });
        },        
        GetSubAccountList (obj, callback) {
             return module.exports.request({
                 path: '/account/getsubaccountlist',
                 params: obj,
                 callback: callback 
             });
        }, 
        Load (obj, callback) {
             return module.exports.request({
                 path: '/account/load',
                 params: obj,
                 callback: callback 
             });
        }, 
        LoadAdvancedOptions (obj, callback) {
             return module.exports.request({
                 path: '/account/loadadvancedoptions',
                 params: obj,
                 callback: callback 
             });
        },
        LoadEmailCreditsHistory (obj, callback) {
             return module.exports.request({
                 path: '/account/loademailcreditshistory',
                 params: obj,
                 callback: callback 
             });
        },
        LoadLitmusCreditsHistory (obj, callback) {
             return module.exports.request({
                 path: '/account/loadlitmuscreditshistory',
                 params: obj,
                 callback: callback 
             });
        },
        LoadNotificationQueue (obj, callback) {
             return module.exports.request({
                 path: '/account/loadnotificationqueue',
                 params: obj,
                 callback: callback 
             });
        },
        LoadPaymentHistory (obj, callback) {
             return module.exports.request({
                 path: '/account/loadpaymenthistory',
                 params: obj,
                 callback: callback 
             });
        },        
        LoadPayoutHistory (obj, callback) {
             return module.exports.request({
                 path: '/account/loadpayouthistory',
                 params: obj,
                 callback: callback 
             });
        },        
        LoadReferralDetails (obj, callback) {
             return module.exports.request({
                 path: '/account/loadreferraldetails',
                 params: obj,
                 callback: callback 
             });
        },        
        LoadReputationHistory (obj, callback) {
             return module.exports.request({
                 path: '/account/loadreputationhistory',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadReputationImpact (obj, callback) {
             return module.exports.request({
                 path: '/account/loadreputationimpact',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadSpamCheck (obj, callback) {
             return module.exports.request({
                 path: '/account/loadspamcheck',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadSubAccountsEmailCreditsHistory (obj, callback) {
             return module.exports.request({
                 path: '/account/loadsubaccountsemailcreditshistory',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadSubAccountSettings (obj, callback) {
             return module.exports.request({
                 path: '/account/loadsubaccountsettings',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadSubAccountsLitmusCreditsHistory (obj, callback) {
             return module.exports.request({
                 path: '/account/loadsubaccountslitmuscreditshistory',
                 params: obj,
                 callback: callback 
             });
        },       
        LoadUsage (obj, callback) {
             return module.exports.request({
                 path: '/account/loadusage',
                 params: obj,
                 callback: callback 
             });
        },       
        ManageApiKeys (obj, callback) {
             return module.exports.request({
                 path: '/account/manageapikeys',
                 params: obj,
                 callback: callback 
             });
        },       
        Overview (obj, callback) {
             return module.exports.request({
                 path: '/account/overview',
                 params: obj,
                 callback: callback 
             });
        },       
        PurchasePrivateIP (obj, callback) {
             return module.exports.request({
                 path: '/account/purchaseprivateip',
                 params: obj,
                 callback: callback 
             });
        },       
        RemoveSubAccountCredits (obj, callback) {
             return module.exports.request({
                 path: '/account/removesubaccountcredits',
                 params: obj,
                 callback: callback 
             });
        },       
        RequestPrivateIP (obj, callback) {
             return module.exports.request({
                 path: '/account/requestprivateip',
                 params: obj,
                 callback: callback 
             });
        },       
        UpdateAdvancedOptions (obj, callback) {
             return module.exports.request({
                 path: '/account/updateadvancedoptions',
                 params: obj,
                 callback: callback 
             });
        },       
        UpdateCustomBranding (obj, callback) {
             return module.exports.request({
                 path: '/account/updatecustombranding',
                 params: obj,
                 callback: callback 
             });
        },       
        UpdateHttpNotification (obj, callback) {
             return module.exports.request({
                 path: '/account/updatehttpnotification',
                 params: obj,
                 callback: callback 
             });
        },
        UpdateProfile (obj, callback) {
             return module.exports.request({
                 path: '/account/updateprofile',
                 params: obj,
                 callback: callback 
             });
        },
        UpdateSubAccountSettings (obj, callback) {
             return module.exports.request({
                 path: '/account/updatesubaccountsettings',
                 params: obj,
                 callback: callback 
             });
        }  
    },
    Attachment: {
        Delete (obj, callback) {
            return module.exports.request({
                 path: '/attachment/delete',
                 params: obj,
                 callback: callback 
             });
        }, 
        Get (obj, callback) {
            return module.exports.request({
                 path: '/attachment/get',
                 params: obj,
                 callback: callback 
             });
        },  
        List (obj, callback) {
             return module.exports.request({
                 path: '/attachment/list',
                 params: obj,
                 callback: callback 
             });
        },   
        Remove (obj, callback) {
            return module.exports.request({
                 path: '/attachment/remove',
                 params: obj,
                 callback: callback 
             });
        },    
        Upload (obj, callback, file) {
            return module.exports.request({
                 path: '/attachment/upload',
                 params: obj,
                 callback: callback 
             }, file);
        }  
    },
    Campaign: {
        Add (obj, callback) {
             return module.exports.request({
                 path: '/campaign/add',
                 params: obj,
                 callback: callback 
             });
        }, 
        Copy (obj, callback) {
             return module.exports.request({
                 path: '/campaign/copy',
                 params: obj,
                 callback: callback 
             });
        },  
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/campaign/delete',
                 params: obj,
                 callback: callback 
             });
        },   
        Export (obj, callback) {
             return module.exports.request({
                 path: '/campaign/export',
                 params: obj,
                 callback: callback 
             });
        },    
        List (obj, callback) {
             return module.exports.request({
                 path: '/campaign/list',
                 params: obj,
                 callback: callback 
             });
        },     
        Update (obj, callback) {
             return module.exports.request({
                 path: '/campaign/update',
                 params: obj,
                 callback: callback 
             });
        } 
    },
    Channel: {
        Add (obj, callback) {
             return module.exports.request({
                 path: '/channel/add',
                 params: obj,
                 callback: callback 
             });
        },  
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/channel/delete',
                 params: obj,
                 callback: callback 
             });
        },   
        ExportCsv (obj, callback) {
             return module.exports.request({
                 path: '/channel/exportcsv',
                 params: obj,
                 callback: callback 
             });
        },     
        ExportJson (obj, callback) {
             return module.exports.request({
                 path: '/channel/exportjson',
                 params: obj,
                 callback: callback 
             });
        },       
        ExportXml (obj, callback) {
             return module.exports.request({
                 path: '/channel/exportxml',
                 params: obj,
                 callback: callback 
             });
        },       
        List (obj, callback) {
             return module.exports.request({
                 path: '/channel/list',
                 params: obj,
                 callback: callback 
             });
        },       
        Update (obj, callback) {
             return module.exports.request({
                 path: '/channel/update',
                 params: obj,
                 callback: callback 
             });
        }
    },
    Contact: {
        ActivateBlocked (obj, callback) {
             return module.exports.request({
                 path: '/contact/activateblocked',
                 params: obj,
                 callback: callback 
             });
        },
        Add (obj, callback) {
             return module.exports.request({
                 path: '/contact/add',
                 params: obj,
                 callback: callback 
             });
        },
        AddBlocked (obj, callback) {
             return module.exports.request({
                 path: '/contact/addblocked',
                 params: obj,
                 callback: callback 
             });
            
        },
        ChangeProperty (obj, callback) {
             return module.exports.request({
                 path: '/contact/changeproperty',
                 params: obj,
                 callback: callback 
             });
            
        },
        ChangeStatus (obj, callback) {
             return module.exports.request({
                 path: '/contact/changestatus',
                 params: obj,
                 callback: callback 
             });
        },
        CountByStatus (obj, callback) {
             return module.exports.request({
                 path: '/contact/countbystatus',
                 params: obj,
                 callback: callback 
             });
        },
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/contact/delete',
                 params: obj,
                 callback: callback 
             });
        },
        Export (obj, callback) {
             return module.exports.request({
                 path: '/contact/export',
                 params: obj,
                 callback: callback 
             });
        },
        FindContact (obj, callback) {
             return module.exports.request({
                 path: '/contact/findcontact',
                 params: obj,
                 callback: callback 
             });
        },
        GetContactsByList (obj, callback) {
             return module.exports.request({
                 path: '/contact/getcontactsbylist',
                 params: obj,
                 callback: callback 
             });
        },
        GetContactsBySegment (obj, callback) {
             return module.exports.request({
                 path: '/contact/getcontactsbysegment',
                 params: obj,
                 callback: callback 
             });
        },
        List (obj, callback) {
             return module.exports.request({
                 path: '/contact/list',
                 params: obj,
                 callback: callback 
             });
        },
        LoadBlocked (obj, callback) {
             return module.exports.request({
                 path: '/contact/loadblocked',
                 params: obj,
                 callback: callback 
             });
        },
        LoadContact (obj, callback) {
             return module.exports.request({
                 path: '/contact/loadcontact',
                 params: obj,
                 callback: callback 
             });
        },
        LoadHistory (obj, callback) {
             return module.exports.request({
                 path: '/contact/loadhistory',
                 params: obj,
                 callback: callback 
             });
        },
        QuickAdd (obj, callback) {
             return module.exports.request({
                 path: '/contact/quickadd',
                 params: obj,
                 callback: callback 
             });
        },
        Update (obj, callback) {
             return module.exports.request({
                 path: '/contact/update',
                 params: obj,
                 callback: callback 
             });
        },
        Upload (obj, callback) {
             return module.exports.request({
                 path: '/contact/upload',
                 params: obj,
                 callback: callback 
             });
        }
    },
    Domain: {
        Add (obj, callback) {
             return module.exports.request({
                 path: '/domain/add',
                 params: obj,
                 callback: callback 
             });
        },
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/domain/delete',
                 params: obj,
                 callback: callback 
             });
        },
        List (obj, callback) {
             return module.exports.request({
                 path: '/domain/list',
                 params: obj,
                 callback: callback 
             });
        },
        SetDefault (obj, callback) {
             return module.exports.request({
                 path: '/domain/setdefault',
                 params: obj,
                 callback: callback 
             });
        },
        VerifyDkim (obj, callback) {
             return module.exports.request({
                 path: '/domain/verifydkim',
                 params: obj,
                 callback: callback 
             });
        },
        VerifyMX (obj, callback) {
             return module.exports.request({
                 path: '/domain/verifymx',
                 params: obj,
                 callback: callback 
             });
        },
        VerifySpf (obj, callback) {
             return module.exports.request({
                 path: '/domain/verifyspf',
                 params: obj,
                 callback: callback 
             });
        },
        VerifyTracking (obj, callback) {
             return module.exports.request({
                 path: '/domain/verifytracking',
                 params: obj,
                 callback: callback 
             });
        }
    },
    Email: {
        GetStatus (obj, callback) {
             return module.exports.request({
                 path: '/email/getstatus',
                 params: obj,
                 callback: callback 
             });
        },  
        Send (obj, callback) {
             return module.exports.request({
                 path: '/email/send',
                 params: obj,
                 callback: callback 
             });
        },  
        Status (obj, callback) {
             return module.exports.request({
                 path: '/email/status',
                 params: obj,
                 callback: callback 
             });
        },  
        View (obj, callback) {
             return module.exports.request({
                 path: '/email/view',
                 params: obj,
                 callback: callback 
             });
        }      
    },
    Export: {   
        CheckStatus (obj, callback) {
             return module.exports.request({
                 path: '/export/checkstatus',
                 params: obj,
                 callback: callback 
             });
        },    
        CountByType (obj, callback) {
             return module.exports.request({
                 path: '/export/countbytype',
                 params: obj,
                 callback: callback 
             });
        },    
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/export/delete',
                 params: obj,
                 callback: callback 
             });
        },    
        List (obj, callback) {
             return module.exports.request({
                 path: '/export/list',
                 params: obj,
                 callback: callback 
             });
        }   
    },
    List: {
        Add (obj, callback) {
             return module.exports.request({
                 path: '/list/add',
                 params: obj,
                 callback: callback 
             });
        },   
        AddContacts (obj, callback) {
             return module.exports.request({
                 path: '/list/addcontacts',
                 params: obj,
                 callback: callback 
             });
        },   
        CreateNthSelectionLists (obj, callback) {
             return module.exports.request({
                 path: '/list/createnthselectionlists',
                 params: obj,
                 callback: callback 
             });
        },   
        CreateRandomList (obj, callback) {
             return module.exports.request({
                 path: '/list/createrandomlist',
                 params: obj,
                 callback: callback 
             });
        },   
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/list/delete',
                 params: obj,
                 callback: callback 
             });

        },   
        Export (obj, callback) {
             return module.exports.request({
                 path: '/list/export',
                 params: obj,
                 callback: callback 
             });
        },   
        List (obj, callback) {
             return module.exports.request({
                 path: '/list/list',
                 params: obj,
                 callback: callback 
             });
        },        
        Load (obj, callback) {
             return module.exports.request({
                 path: '/list/load',
                 params: obj,
                 callback: callback 
             });
        },        
        RemoveContacts (obj, callback) {
             return module.exports.request({
                 path: '/list/removecontacts',
                 params: obj,
                 callback: callback 
             });
        },        
        Update (obj, callback) {
             return module.exports.request({
                 path: '/list/update',
                 params: obj,
                 callback: callback 
             });
        }       
    },
    Log: {      
        CancelInProgress (obj, callback) {
             return module.exports.request({
                 path: '/log/cancelinprogress',
                 params: obj,
                 callback: callback 
             });
        },       
        LinkTracking (obj, callback) {
             return module.exports.request({
                 path: '/log/linktracking',
                 params: obj,
                 callback: callback 
             });
        },       
        Load (obj, callback) {
             return module.exports.request({
                 path: '/log/load',
                 params: obj,
                 callback: callback 
             });
        },       
        RetryNow (obj, callback) {
             return module.exports.request({
                 path: '/log/retrynow',
                 params: obj,
                 callback: callback 
             });
        },       
        Summary (obj, callback) {
             return module.exports.request({
                 path: '/log/summary',
                 params: obj,
                 callback: callback 
             });
        }  
    },
    Segment: {
        Add (obj, callback) {
             return module.exports.request({
                 path: '/segment/add',
                 params: obj,
                 callback: callback 
             });
        },  
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/segment/delete',
                 params: obj,
                 callback: callback 
             });
        },  
        Export (obj, callback) {
             return module.exports.request({
                 path: '/segment/export',
                 params: obj,
                 callback: callback 
             });
        },  
        List (obj, callback) {
             return module.exports.request({
                 path: '/segment/list',
                 params: obj,
                 callback: callback 
             });
        },  
        Update (obj, callback) {
             return module.exports.request({
                 path: '/segment/update',
                 params: obj,
                 callback: callback 
             });
        }          
    },
    SMS: {
        Send (obj, callback) {
             return module.exports.request({
                 path: '/sms/send',
                 params: obj,
                 callback: callback 
             });
        }           
    },
    Survey: {
        Add (obj, callback) {
             return module.exports.request({
                 path: '/survey/add',
                 params: obj,
                 callback: callback 
             });
        },     
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/survey/delete',
                 params: obj,
                 callback: callback 
             });
        },     
        Export (obj, callback) {
             return module.exports.request({
                 path: '/survey/export',
                 params: obj,
                 callback: callback 
             });
        },     
        List (obj, callback) {
             return module.exports.request({
                 path: '/survey/list',
                 params: obj,
                 callback: callback 
             });
        },     
        LoadResponseList (obj, callback) {
             return module.exports.request({
                 path: '/survey/loadresponselist',
                 params: obj,
                 callback: callback 
             });
        },     
        LoadResults (obj, callback) {
             return module.exports.request({
                 path: '/survey/loadresults',
                 params: obj,
                 callback: callback 
             });
        },     
        Update (obj, callback) {
             return module.exports.request({
                 path: '/survey/update',
                 params: obj,
                 callback: callback 
             });
        }      
    },
    Template: {
        Add (obj, callback) {
             return module.exports.request({
                 path: '/template/add',
                 params: obj,
                 callback: callback 
             });
        },  
        CheckUsage (obj, callback) {
             return module.exports.request({
                 path: '/template/checkusage',
                 params: obj,
                 callback: callback 
             });
        },  
        Copy (obj, callback) {
             return module.exports.request({
                 path: '/template/copy',
                 params: obj,
                 callback: callback 
             });
        },  
        Delete (obj, callback) {
             return module.exports.request({
                 path: '/template/delete',
                 params: obj,
                 callback: callback 
             });
        },  
        GetEmbeddedHtml (obj, callback) {
            return module.exports.request({
                 path: '/template/getembeddedhtml',
                 params: obj,
                 callback: callback 
             });
        },  
        GetList (obj, callback) {
             return module.exports.request({
                 path: '/template/getlist',
                 params: obj,
                 callback: callback 
             });
        },  
        LoadTemplate (obj, callback) {
             return module.exports.request({
                 path: '/template/loadtemplate',
                 params: obj,
                 callback: callback 
             });
        },  
        RemoveScreenshot (obj, callback) {
             return module.exports.request({
                 path: '/template/removescreenshot',
                 params: obj,
                 callback: callback 
             });
        },  
        SaveScreenshot (obj, callback) {
             return module.exports.request({
                 path: '/template/savescreenshot',
                 params: obj,
                 callback: callback 
             });
        },  
        Update (obj, callback) {
             return module.exports.request({
                 path: '/template/update',
                 params: obj,
                 callback: callback 
             });
        }  
    }
}