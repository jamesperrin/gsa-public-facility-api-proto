/**
 * @description Renders Datatable
 */
function renderDatatable(data) {
    $.fn.dataTable.ext.errMode = 'throw';

    // DEBUGGING CODE
    //console.log(data);
    //console.log(JSON.stringify(data));

    // Using an array of JSON objects  as data source
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
 *  @description Using Tabletop.js library to call Google Sheets and process data
 * @see: https://github.com/jsoma/tabletop
 * @see: https://developers.google.com/sheets/api/limits
 */
function init() {
    Tabletop.init({
        key: '1RcH0_HmT9gc3kpqSO9_sD_S_PXRStbgM9Pw_QegBFwY',
        callback: function (data, tabletop) {
            //console.log(data);
            //console.log(JSON.stringify(data));

            // Rending Datatable
            renderDatatable(data);
        },
        simpleSheet: true
    })
}

// 
/**
 * @description Tabletop.js init function is called when the initial HTML document has been completely loaded and parsed.
 * @see: https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
 */
window.addEventListener('DOMContentLoaded', init);