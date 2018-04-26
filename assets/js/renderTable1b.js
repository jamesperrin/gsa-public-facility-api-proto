/**
 * @description Service IIFE that accesses Google Sheets
 * @see: https://developers.google.com/sheets/api/limits
 */
(function () {
    var AppServices = {};
    AppServices.GetGoogleSheet = function () {
        var spreadsheetID = '1RcH0_HmT9gc3kpqSO9_sD_S_PXRStbgM9Pw_QegBFwY';
        var worksheetID = 'od6';
        var url = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/' + worksheetID + '/public/values?alt=json';
        return $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/jsoon; charset=utf-8',
            dataType: 'json',
            cache: false
        });
    }
    window.AppServices = AppServices;
    return AppServices;
})();

/**
 * @description Processes and formats data from Google Sheets
 */
function processData(data) {
    // Data container
    var buildingData = [];

    $.each(data.feed.entry, function (i, val) {
        // Column names are State, City, Building_Name and Building_Address.
        var state = val.gsx$state.$t;
        var city = val.gsx$city.$t;
        var buildingname = val.gsx$buildingname.$t;
        var buildingaddress = val.gsx$buildingaddress.$t;

        buildingData.push({
            "State": state,
            "City": city,
            "Building_Name": buildingname,
            "Building_Address": buildingaddress
        });
    });

    //DEBUGGING CODE
    //console.log(buildingData);

    return buildingData;
};

/**
 * @description Renders Datatable
 */
function renderDatatable(data) {
    // Datatable surpresses error alert dialog
    $.fn.dataTable.ext.errMode = 'throw';

    jQuery('#datatable').dataTable({
        data: data,
        columns: [{
                data: 'State'
            },
            {
                data: 'City'
            },
            {
                data: 'Building_Name'
            },
            {
                data: 'Building_Address'
            }
        ]
    });
}

/**
 * @description Calling AppServices.GetGoogleSheet()
 */
AppServices.GetGoogleSheet()
    .done(function (data) {
        // Processing data
        getData = processData(data);

        // Rending datatable
        renderDatatable(getData);
    })
    .fail(function (request, errorType, errorMessage) {
        var message = 'Error: ' + errorType + '\n Messagae: ' + errorMessage + '\n Request: ' + JSON.stringify(request, null, 2);
        console.error(message);
    });