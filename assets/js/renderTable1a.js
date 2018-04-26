/**
 * @description RenderTable Singleton 
 */
(function () {
    var RenderTable = {};

    // Constants JSON object
    var CONSTANTS = {
        State: 'State',
        City: 'City',
        BuidlingName: 'Building_Name',
        BuildingAddress: 'Building_Address'
    };

    /**
     * @description Using an array of JSON objects  as data source
     */
    RenderTable.Version1 = function () {

        jQuery('#datatable').dataTable({
            "ajax": "data/public_facilities_v1.json",
            "columns": [{
                    "data": CONSTANTS.State
                },
                {
                    "data": CONSTANTS.City
                },
                {
                    "data": CONSTANTS.BuidlingName
                },
                {
                    "data": CONSTANTS.BuildingAddress
                }
            ],
            "sAjaxDataProp": ""
        });
    }
    
    /**
     * @description Using a JSON object containing an array of JSON objects as data source
     */
    RenderTable.Version2 = function () {
        jQuery('#datatable').DataTable({
            "ajax": "data/public_facilities_v2.json",
            "columns": [{
                    "data": CONSTANTS.State
                },
                {
                    "data": CONSTANTS.City
                },
                {
                    "data": CONSTANTS.BuidlingName
                },
                {
                    "data": CONSTANTS.BuildingAddress
                }
            ]
        });
    }

    /**
     * @description Custom data source property - Using a JSON object containing an array of arrays as data source
     */
    RenderTable.Version3 = function () {
        jQuery('#datatable').DataTable({
            "ajax": {
                "url": "data/public_facilities_v3.json",
                "dataSrc": "CustomName"
            }
        });
    }

    window.RenderTable = RenderTable;

    return RenderTable;
})();