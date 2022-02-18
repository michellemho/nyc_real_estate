// HACK!: Making a global variable so it can be updated later.
var weights = {};
var filters = {'lotarea':{'mc':{'left':"0",'right':"1000000"},'resi':{'left':"3000",'right':"1000000"}},
               'manufacturing': true,
               'commercial': false,
               'remove-ibz': true};
var X = 30
var dataQuery = ""

//////////////////
////// TABS //////
//////////////////
$('.menu .item')
  .tab()


//////////////////
////// MAP ///////
//////////////////
//
// var map = new mapboxgl.Map({
//     container: 'map', // container id
//     style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
//     center: [-73.935242,40.730610], // starting position [lng, lat]
//     zoom: 12 // starting zoom
// });

var map = L.map('map', {zoomControl: false})
           .setView([40.730610,-73.935242],12);
// map.addControl(new MapboxGeocoder({accessToken: mapboxgl.accessToken}), 'bottom-left');
//
// map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');



new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);
// Set the kind of basemap

var carto_dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

var carto_lite = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
        maxZoom: 19
      })


var baseMaps = {
    "CARTO Dark Basemap": carto_dark,
    "CARTO Light Basemap": carto_lite,
};

///////////
// CREDS //
///////////

var creds = new accountCreds({
  apiKey: 'PHsQtZNax59etW7QI9WtRg',
  username: 'cartourbandemo',
  map: map
});

var client = new carto.Client({
  apiKey: 'PHsQtZNax59etW7QI9WtRg',
  username: 'cartourbandemo'
});


var API_KEY = 'PHsQtZNax59etW7QI9WtRg'
var USER_NAME = 'cartourbandemo',
SQL_CLIENT = axios.create({
    method: 'get',
    url: 'https://' + USER_NAME + '.carto.com/api/v2/sql?',
    params: {
        api_key: API_KEY
    }
});


////////////////////
//// MAIN LAYER ////
////////////////////


var selected_layer = 'allplutonew_m_c'

var taxLotsQuery = 'SELECT * FROM '+ selected_layer;
var taxLotsSQLSource = new carto.source.SQL(taxLotsQuery);
var taxLotsStyle = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: #f3cbd3;
    polygon-opacity: 0.9;
  }
`);
var calculateScoreStyle = `
  #layer {
    polygon-fill: ramp([score], (#d73027, #fc8d59, #fee08b, #ffffbf, #d9ef8b, #91cf60, #1a9850), quantiles);
  }
  #layer::outline {
    line-width: .15;
    line-color: #FFFFFF;
    line-opacity: 0.15;
}
`

var taxLotLayer = new carto.layer.Layer(taxLotsSQLSource, taxLotsStyle, {featureOverColumns: ['bbl','score']});
// var taxLotHighlightsLayer = new carto.layer.Layer(taxLotsHighlightsSQLSource, taxLotsHighlightStyle, {featureOverColumns: ['score']});

client.addLayers([ taxLotLayer]);
client.getLeafletLayer().addTo(map);
var taxlots = client.getLeafletLayer()
var overlayMaps = {
    "Tax Lots": taxlots
};

L.control.layers(baseMaps,overlayMaps, {position: 'bottomleft'}).addTo(map);




////////////
// POP UP //
////////////
var popup = L.popup({ closeButton: false });
taxLotLayer.on('featureOver', featureEvent => {
  popup.setLatLng(featureEvent.latLng);
  popup.setContent(`BBL: ${Math.round(featureEvent.data.bbl)} <br> SCORE: ${featureEvent.data.score}`);
  popup.openOn(map);
});

taxLotLayer.on('featureOut', featureEvent => {
  popup.removeFrom(map);
});

//////////////
// ON CLICK //
//////////////

var selected_lot = new L.geoJson();
selected_lot.addTo(map);

taxLotLayer.on('featureClicked',featureEvent => {
    map.setView(featureEvent.latLng,16,true);
    console.log(`feature clicked! ${featureEvent.data.cartodb_id}`);

    if (selected_lot){
      selected_lot.clearLayers()
    }

    var sidebar = new sidebarInfo({
                content: makeSidebar(featureEvent)
                  });

    $.ajax({
    dataType: "json",
    url: "https://cartourbandemo.carto.com/api/v2/sql?format=GeoJSON&q=" + "select * from " + selected_layer + " where cartodb_id = " + featureEvent.data.cartodb_id + "&api_key=PHsQtZNax59etW7QI9WtRg",
    success: function(data) {
        $(data.features).each(function(key, data) {
            selected_lot.addData(data);
        });
    }
    }).error(function() {});
    });

////////////
//DROPDOWN//
////////////
// var selected_layer;
// $('select.dropdown')
//   .dropdown('set selected', 'Manufacturing')
//   .dropdown({onChange: function(val){
//       if(val.length>0){
//       selected_layer = val;
//       taxLotsQuery = 'SELECT * FROM' + selected_layer + 'WHERE zonedist1 like %M%';
//       taxLotsSQLSource.setQuery(taxLotsQuery);}
// }})
// ;

////////////////////
////// INFO PANEL /////
////////////////////

// ADD FeatureClickColumns to access on FEATURE_CLICKED
// Is there a better way to do this?




taxLotLayer.on(carto.layer.events.FEATURE_CLICKED, d => {

// check if the value for land_to_building_ratio is numeric
// console.log($.isNumeric(`${d.data.land_to_building_ratio}`));
// if($.isNumeric(`${d.data.land_to_building_ratio}`)){
//   var land_to_building_ratio = `${d.data.land_to_building_ratio.toFixed(2)}`
//   console.log(land_to_building_ratio)
// } else {
//   var land_to_building_ratio = 'NULL'
// };

        // console.log(d);
        var sidebar = new sidebarInfo({
                    content: makeSidebar(d)
                      });
})

// var checker3 = addCheckbox({column:'non_ibz', title:'Non-IBZ'});
var checkerBoth = addRadioCheckbox({column:'both', title:'Both', checked: true});
var checker = addRadioCheckbox({column:'manufacturing', title:'Manufacturing'});
var checker2 = addRadioCheckbox({column:'commercial', title:'Commercial'});

var ibz_checker = `<input type="checkbox" checked="checked" name="m_c_option" id="remove-ibz"> Remove IBZ zones (except Gas Stations)<br><br>`

$('.filters').after((ibz_checker));

$("#remove-ibz").on('change',function(){
  console.log('remove-ibz', this.checked);
  filters['remove-ibz'] = this.checked

})


var contextual_mih_vih = addRegularCheckbox({column:'contextual_mih_vih', title:'Contextual Districts with MIH or VIH option', checked: true});
var noncontextual_qh = addRegularCheckbox({column:'noncontextual_qh', title:'Non-contextual Districts with Quality Housing option', checked: true});
var noncontextual_hf_t = addRegularCheckbox({column:'noncontextual_hf_t', title:'Non-contextual Districts with Height Factor or Tower option', checked: true});

////////////////////
////// WEIGHTS /////
////////////////////
var range_mc = rangeInput({
  query: taxLotsSQLSource,
  column: 'lotarea',
  name: 'lotarea',
  title: 'Lot Area (sf)',
  credentials: creds,
  tab:'mc',
  min_init:'0',
  max_init:'1000000'
})

var range_resi = rangeInput({
  query: taxLotsSQLSource,
  column: 'lotarea',
  name: 'lotarea',
  title: 'Lot Area (sf)',
  credentials: creds,
  tab:'resi',
  min_init:'3000',
  max_init:'100000'
})

// This is some spaghetti code...

client.on('success', function () {
 console.log('Client reloaded');
 $('.ui.dimmer').removeClass('active');
});

$(document).ready(function(){

calcUpdateMap();

$('input.number').keyup(function(event) {
  console.log('key pressed!');
  // skip for arrow keys
  if(event.which >= 37 && event.which <= 40) return;

  // format number
  $(this).val(function(index, value) {
    return value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    ;
    });
  });
taxLotLayer.setFeatureClickColumns(['zonedist1', 'ownertype',
'ownername',
'lotarea',
'yearbuilt',
'yearalter1',
'bldgclass',
'numbldgs',
'numfloors',
'bldgarea',
'unitstotal',
'unitsres',
'condono',
'borocode',
'block',
'lot',
'borocode',
'borough',
'block',
'lot',
'residfar',
'commfar',
'facilfar',
'address',
'bldg_land_ratio',
'next_election',
'council_neighborhood',
'council_rep_name',
'council',
'cd',
'libraries_distance',
'police_station_distance',
'schools_distance',
'healthcare_distance',
'child_care_prek_distance',
'fire_station_distance',
'median_hh_income',
'pop_density_change',
'misdemeanors_400m',
'felonies_400m',
'nearest_subway_yoy2015_2016',
'son_issue_1',
'son_issue_2',
'son_issue_3',
'al',
'nb',
'dm',
'fo',
'libraries_distance_rank',
'police_station_distance_rank',
'schools_distance_rank',
'healthcare_distance_rank',
'child_care_prek_distance_rank',
'fire_station_distance_rank',
'median_hh_income_rank',
'pop_density_change_rank',
'misdemeanors_400m_rank',
'felonies_400m_rank',
'nearest_subway_yoy2015_2016_rank',
'al_rank',
'nb_rank',
'dm_rank',
'fo_rank',
'mih_vote',
'center_x',
'center_y'
])
});

var slider1 =  addSlider({
  column: 'no_parking_required',
  title: 'No Parking Required',
  layer: taxLotLayer,
  initval: 20,
  tab: 'mc'
})


var slider2 =  addSlider({
  column: 'bldg_land_ratio',
  title: 'Building-to-land ratio',
  initval: 30,
  tab: 'mc'

})


var slider3 =  addSlider({
  column: 'wide_street',
  title: 'Wide Street',
  initval: 40,
  tab: 'mc'
})


var slider4 =  addSlider({
  column: 'near_open_space',
  title: 'Near Open Space',
  initval: 50,
  tab: 'mc'
})

var slider5 =  addSlider({
  column: 'near_transportation',
  title: 'Near Transportation',
  initval: 60,
  tab: 'mc'
})

var slider6 =  addSlider({
  column: 'near_r_zone',
  title: 'Near Residential Zone',
  initval: 70,
  tab: 'mc'
})

var slider7 =  addSlider({
  column: 'next_to_r_zone',
  title: 'Adjacent to Residential Zone',
  initval: 80,
  tab: 'mc'
})


var slider1_res =  addSlider({
  column: 'no_parking_required',
  title: 'No Parking Required',
  layer: taxLotLayer,
  initval: 20,
  tab: 'resi'
})


var slider2_res =  addSlider({
  column: 'bldg_land_ratio',
  title: 'Building-to-land ratio',
  initval: 30,
  tab: 'resi'

})


var slider3_res =  addSlider({
  column: 'wide_street',
  title: 'Wide Street',
  initval: 40,
  tab: 'resi'
})


var slider4_res =  addSlider({
  column: 'near_open_space',
  title: 'Near Open Space',
  initval: 50,
  tab: 'resi'
})

var slider5_res =  addSlider({
  column: 'near_transportation',
  title: 'Near Transportation',
  initval: 60,
  tab: 'resi'
})

var slider6_res =  addSlider({
  column: 'near_r_zone',
  title: 'Near Residential Zone',
  initval: 70,
  tab: 'resi'
})

var slider7_res =  addSlider({
  column: 'next_to_r_zone',
  title: 'Adjacent to Residential Zone',
  initval: 80,
  tab: 'resi'
})

//////////////////
// RANGE FILTER //
//////////////////


// var range1 =  addRangeFilter({
//   title: 'Lot Area (sq. ft.)',
//   credentials: creds,
//   name: 'lotarea',
//   column: 'lotarea',
//   query: taxLotsSQLSource
// })


////////////////
// EVAL METRIC//
////////////////

var calcButton_resi = calcButton({
  // buttonName:'Calculate',
  buttonID:'calc',
  tab_id: 'resi'
});

var calcButton_mc = calcButton({
  // buttonName:'Calculate',
  buttonID:'calc',
  tab_id: 'mc'
})

/////////////
// TOP TEN //
/////////////

var topTen ;


// When any of the slider buttons are clicked update the weights
$('.thumb').click(function(){
    $.each(weights,function(k,v){
      weights[k]=parseInt($('#'+k+'>.inner >.track-fill').css('width').replace('px',''));
      // console.log(weights[k]);
    })
  })

// Update the SQL query
$('#calc_mc').click(function(){

    calcUpdateMap();

    // GET TOP X
    X = $("#topLots").val()
    console.log("value ",X)
    centroidQuery = ', ST_AsGeoJSON(the_geom) as geojson'
    dataQuery = scoreQuery + centroidQuery +
                filter_base + ' order by score desc, cartodb_id limit ' + X;
    // console.log(dataQuery);

    SQL_CLIENT.request({
      url:'https://' + USER_NAME + '.carto.com/api/v2/sql?',
        params: {
            q: dataQuery
        },
    }).then(function (response) {
        if (response && response.data) {
          // remove all previous rows
            $("#topTen td").remove()
            topTen= response.data['rows'];
          // Populate the top ten lots list

          result_list = []
          console.log('top places: ', topTen)
          topTen.forEach(function(result,index){
            var geojsonfeature = JSON.parse(result['geojson']);
            result_list.push(geojsonfeature);
            tr = $("<tr>")
            td_score = $("<td>").text(result['score'])
            td_addy = $("<td>").text(result['address'])
            $(tr).attr('id','top'+index);
            $(tr).attr('value',result['center_x']+", "+result['center_y']);
            $(tr).append(td_score)
            $(tr).append(td_addy)

            // Zoom to clicked row and highlight...
            $(tr).click(function(){
                map.setView({'lat':result['center_y'],'lng':result['center_x']},16,true);

                if (selected_lot){
                  selected_lot.clearLayers()
                }

                $.ajax({
                dataType: "json",
                url: "https://cartourbandemo.carto.com/api/v2/sql?format=GeoJSON&q=" + "select * from " + selected_layer + " where cartodb_id = " + result['cartodb_id'] + "&api_key=PHsQtZNax59etW7QI9WtRg",
                success: function(data) {
                    $(data.features).each(function(key, data) {
                        selected_lot.addData(data);
                    });
                }
                });

              });
            $("#topTen").append($(tr))
          });
          selected_lot.addData(result_list);
        }
      })

      var csvExport = fileExport({
      name: "EXPORT CSV",
       filename: "tax_lot_report",
       credentials: creds,
       query: dataQuery,
       format: "CSV",
       section: "mc"
     });
console.log('DataQuery: ' + dataQuery);
return(dataQuery)})


//////////////////////
//// OTHER LAYERS ////
//////////////////////

////////////////
// CHECKBOXES //
////////////////

//zoning context//

var ibzZone = new addExtraLayer({
  title: 'IBZ Zones',
  type: 'polygon',
  color: '#4292c6',
  // colorCSS: '#0017ff',
  name: 'nyc_ibz_all',
  checkbox_id: 'ibz',
  checked: false,
  conditional: false,
  section: 'zoning_context'
})

var pending_amendments = new addExtraLayer2({
  title: 'Pending Zoning Amendments',
  type: 'polygon',
  color:'#C9DB74',
  query: `SELECT * from nyzma where status = 'Certified'`,
  name: 'nyzma',
  checkbox_id: 'nyzma',
  checked: false,
  popupElements:['project_name', 'lucats'],
  popupheader:['Project Name', 'LUCATS/ULURP'],
  featureClick: true,
  section: 'zoning_context'
})

var existingMIH = new addExtraLayer({
  title: 'Current MIH Regions',
  type: 'polygon',
  color: '#B497E7',
  // colorCSS: '#ff00ef',
  name: 'nycmih_20171121',
  checkbox_id: 'existingMIH',
  checked: false,
  conditional: false,
  section: 'zoning_context'
})


var tranzitZones = new addExtraLayer({
  title: 'Transit Zones',
  type: 'polygon',
  color: '#2e96f2',
  colorCSS: `#layer{line-color: #2e96f2; polygon-opacity:0.5; polygon-fill: #2e96f2}`,
  name: 'nyctransitzones_201601',
  checkbox_id: 'nyctransitzones_201601',
  checked: false,
  conditional: false,
  section: 'zoning_context',
})


var floodZones = new addExtraLayer2({
  title: 'Hurricane Flood Zones',
  type: 'polygon',
  query: `SELECT * from nyhez`,
  color: '#3c3e71',
  colorCSS: `#layer {
    polygon-fill: ramp([hurricane_], (#3c3e71, #8e0707, #cc7930, #F2B701, #c9ff34, #72b149, #2e9627, #0e716a), ("0", "1", "2", "3", "4", "5", "6", "X"), "=");
    polygon-opacity:0.6;
  }`,
  name: 'nyhez',
  checkbox_id: 'nyhez',
  checked: false,
  conditional: false,
  section: 'zoning_context',
  popupElements:['hurricane_'],
  popupheader: ['Evacuation Level']
})

//tax lot context//


var adjacentOwners = new addExtraLayer({
  title: 'Adjacent Same Owner M/C',
  type: 'polygon',
  color: '#ff0000',
  colorCSS: `#layer {
  polygon-opacity: 0;
}
#layer::outline {
  line-width: 2;
  line-color: #ff0000;
  line-opacity: 1;
}`,
  name: 'adjacent_m_c',
  checkbox_id: 'adjacent_m_c',
  checked: false,
  conditional: false,
  section: 'tax_lot_context',
  legend_style: 'fill:none; stroke:#ff0000; stroke-width:2.5px;'
})

var adjacentOwnersR = new addExtraLayer({
  title: 'Adjacent Same Owner Residential',
  type: 'polygon',
  color: '#74f931',
  colorCSS: `#layer {
  polygon-opacity: 0;
}
#layer::outline {
  line-width: 2;
  line-color: #74f931;
  line-opacity: 1;
}`,
  name: 'adjacent_lots_r',
  checkbox_id: 'adjacent_lots_r',
  checked: false,
  conditional: false,
  section: 'tax_lot_context',
  legend_style: 'fill:none; stroke:#74f931; stroke-width:2.5px;'
})


var building_permits = new addExtraLayer2({
  title: 'Building Permits (DM, FO, NB, AL) since 2017',
  type: 'point',
  color:'#f4d942',
  query: `SELECT cartodb_id, permit_type, job_start_date, job_type, DATE(issuance_date)::text issue_date, issuance_date, filing_date, expiration_date, CDB_LatLng(gis_latitude, gis_longitude)as the_geom,  ST_Transform(CDB_LatLng(gis_latitude, gis_longitude), 3857) as the_geom_webmercator FROM cartourbandemo.table_83x8_shf7 where extract(year from issuance_date) > 2016`,
  name: 'table_83x8_shf7',
  checkbox_id: 'table_83x8_shf7',
  checked: false,
  popupElements:['permit_type', 'issue_date'],
  popupheader: ['Permit Type', 'Issuance Date'],
  section: 'tax_lot_context'
})

var resi = new addExtraLayer({
  title: 'Residential',
  type: 'polygon',
  // colorCSS:'gray',
  color:'gray',
  name: 'allplutonew_r',
  checkbox_id: 'resi',
  checked: false,
  conditional: false,
  section: 'tax_lot_context'
})

//neighborhood context//

var subwayEntrances = new addExtraLayer({
  title: 'Subway Entrances',
  type: 'point',
  color: '#000000',
  // colorCSS: '#000000',
  name: 'subway_entrances_may2016',
  checkbox_id: 'subway',
  checked: false,
  conditional: false,
  section: 'neighborhood_context'
})

var landmarks = new addExtraLayer({
  title: 'Landmarks',
  type: 'point',
  color: '#7F3C8D',
  // colorCSS: '#000000',
  name: 'individual_landmarks',
  checkbox_id: 'landmarks',
  checked: false,
  conditional: false,
  popupElements:['lm_name'],
  section: 'neighborhood_context'
})
//
var historicDistricts = new addExtraLayer({
  title: 'Historic Districts',
  type: 'polygon',
  color: '#E68310',
  // colorCSS: '#ff00ef',
  name: 'historic_districts',
  checkbox_id: 'historicDistricts',
  checked: false,
  conditional: false,
  popupElements:['area_name'],
  section: 'neighborhood_context'
})

var popDensity = new addExtraLayer({
  title: 'Population Density',
  type: 'polygon',
  color: '#89c0b6',
  colorCSS: `#layer {
  polygon-fill: ramp([pop_density_sq_mile], (#e4f1e1, #b4d9cc, #89c0b6, #63a6a0, #448c8a, #287274, #0d585f), quantiles);
  polygon-opacity: .4;
}`,
  name: 'block_groups_2015_5year_pop',
  checkbox_id: 'popDensity',
  checked: false,
  conditional: false,
  section: 'neighborhood_context'
})


var councilDists = new addExtraLayer({
  title: 'City Council Districts',
  type: 'polygon',
  color: '#CF1C90',
  colorCSS: `#layer{line-color: #CF1C90; line-width: 6; polygon-opacity:0;}`,
  name: 'nycc',
  checkbox_id: 'councilDists',
  checked: false,
  conditional: false,
  section: 'neighborhood_context',
})

var communityBoards = new addExtraLayer({
  title: 'Community Boards',
  type: 'polygon',
  color: '#821770',
  colorCSS: `#layer{line-color: #821770; line-width: 5; polygon-opacity:0;}`,
  name: 'nycd',
  checkbox_id: 'communityBoards',
  checked: false,
  conditional: false,
  section: 'neighborhood_context',
})

//community indicators//

var openSpace = new addExtraLayer({
  title: 'EIS - Open Space',
  type: 'polygon',
  color: '#117733',
  // colorCSS: '#049917',
  name: 'open_space_parks_use',
  checkbox_id: 'park',
  checked: false,
  conditional: false,
  section: 'community_indicators',
  popupElements:['park_name']
})
//


var prekChildcare = new addExtraLayer({
  title: 'EIS - Childcare and Pre-K',
  type: 'point',
  color:'#DCB0F2',
  name: 'facilities',
  checkbox_id: 'prekChildcare',
  checked: false,
  conditional: true,
  section: 'community_indicators',
  condition:" where facgroup='Child Care and Pre-Kindergarten'",
  popupElements:['facname']
})

var schools = new addExtraLayer({
  title: 'EIS - Schools (K-12)',
  type: 'point',
  color:'#E73F74',
  name: 'facilities',
  checkbox_id: 'schools',
  checked: false,
  conditional: true,
  section: 'community_indicators',
  condition:" where facgroup='Schools (K-12)'",
  popupElements:['facname']
})
// //
var health = new addExtraLayer({
  title: 'EIS - Healthcare',
  type: 'point',
  color:'#E68310',
  name: 'facilities',
  checkbox_id: 'health',
  checked: false,
  conditional: true,
  section: 'community_indicators',
  condition:" where facgroup='Health Care'",
  popupElements:['facname']
})
// //
var safet = new addExtraLayer({
  title: 'EIS - Public Safety (NYPD and NYCHA)',
  type: 'point',
  color:'#6699CC',
  name: 'facilities',
  checkbox_id: 'publicsafety',
  checked: false,
  conditional: true,
  section: 'community_indicators',
  condition:" where facgroup='Public Safety'",
  popupElements:['facname']
})

var libraries = new addExtraLayer({
  title: 'EIS - Libraries',
  type: 'point',
  color:'#CC6677',
  name: 'facilities',
  checkbox_id: 'librs',
  checked: false,
  conditional: true,
  section: 'community_indicators',
  condition:" where facgroup='Libraries'",
  popupElements:['facname']
})

var water_wastewater = new addExtraLayer({
  title: 'EIS - Water and Wastewater',
  type: 'point',
  color:'#888888',
  colorCSS: `#layer{marker-line-color: #ffffff; marker-fill: #888888}`,
  name: 'facilities',
  checkbox_id: 'water_wastewater',
  checked: false,
  conditional: true,
  section: 'community_indicators',
  condition:" where facgroup='Water and Wastewater'",
  popupElements:['facname']
})

//

//////////////
// TOOLBAR ///
//////////////

$('.ui.sidebar.menu').sidebar({
  dimPage: false,
  transition: 'overlay',
  exclusive: false
});

 $('.ui.sidebar.menu')
.sidebar('attach events', '.open.button');

$('.ui.right.sidebar.popout').sidebar({
  dimPage: false,
  transition: 'overlay',
  closable: false,
  exclusive: false
});

$('.ui.bottom.sidebar').sidebar({
  dimPage: false,
  transition: 'overlay',
  exclusive: true,
  closeable: false
});

  // context: '#toolbar',
  // selector: {
  //   pusher  : '.pusher-toolbar',
  //   sidebar : '.ui.right.sidebar.popout'
  // }


// Select which features appear when you click
// taxLotLayer.setFeatureClickColumns(['park_name', 'parknum', 'landuse']);

//ACTIONS

// How to get the data out...
// console.log(creds.sqlURL + `SELECT * FROM m1_score` + creds.sqlEnd);
// var data = $.getJSON(creds.sqlURL + `SELECT * FROM m1_score` + creds.sqlEnd)
// console.log(data);

/////////////////////////////////////
///// TO DO: Does this work yet??? //
/////////////////////////////////////

// var csvExport = fileExport({
// name: "EXPORT",
//  filename: "Tax Lot Report",
//  credentials: creds,
//  query: dataQuery,
//  format: "CSV"
// })

// var batchexport = batchExport({
// 	name: "BATCH EXPORT",
// 	description: "Download the top results based on your current query",
// 	credentials: creds,
// 	query: taxLotsQuery +' LIMIT ' + $("#topLots").val(),
// 	filename: "batchexport",
// 	format: "CSV"
// })


// Update the SQL query for resi... I am so sorry about this code mess.
$('#calc_resi').click(function(){
  console.log('calculating resi...')

      calcUpdateMapResi();

      // GET TOP X
      X = $("#topLots.resi").val()
      // console.log("value ",X)
      centroidQuery = ', ST_AsGeoJSON(the_geom) as geojson'
      dataQuery = scoreQuery + centroidQuery +
                  filter_base + ' order by score desc, cartodb_id limit ' + X;
      // console.log(dataQuery);

      SQL_CLIENT.request({
        url:'https://' + USER_NAME + '.carto.com/api/v2/sql?',
          params: {
              q: dataQuery
          }
      }).then(function (response) {
          if (response && response.data) {
            // remove all previous rows
              $("#topTen td").remove()
              topTen= response.data['rows'];
              console.log('here they are, top X')
            // Populate the top ten lots list

            result_list = []

            topTen.forEach(function(result,index){

              var geojsonfeature = JSON.parse(result['geojson']);
              result_list.push(geojsonfeature);

              tr = $("<tr>")
              td_score = $("<td>").text(result['score'])
              td_addy = $("<td>").text(result['address'])
              $(tr).attr('id','top'+index);
              $(tr).attr('value',result['center_x']+", "+result['center_y']);
              $(tr).append(td_score)
              $(tr).append(td_addy)
              // $(tr).addClass('resi')

              // Zoom to the clicked row lot
              $(tr).click(function(){
                  map.setView({'lat':result['center_y'],'lng':result['center_x']},16,true);
                  if (selected_lot){
                    selected_lot.clearLayers()
                  }

                  $.ajax({
                  dataType: "json",
                  url: "https://cartourbandemo.carto.com/api/v2/sql?format=GeoJSON&q=" + "select * from " + selected_layer + " where cartodb_id = " + result['cartodb_id'] + "&api_key=PHsQtZNax59etW7QI9WtRg",
                  success: function(data) {
                      $(data.features).each(function(key, data) {
                          selected_lot.addData(data);
                      });
                  }
                  });
                });

              $("#topTen.resi").append($(tr))
            });
          selected_lot.addData(result_list);
          }
        })

        var csvExport = fileExport({
        name: "EXPORT CSV",
         filename: "tax_lot_report",
         credentials: creds,
         query: dataQuery,
         format: "CSV",
         section: "resi"
       });
  console.log('DataQuery: ' + dataQuery);
  return(dataQuery)
})
