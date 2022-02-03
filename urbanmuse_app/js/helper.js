const boroNameLookup = {
  BK: 'Brooklyn',
  MN: 'Manhattan',
  SI: 'Staten Island',
  BX: 'Bronx',
  QN: 'Queens'};


const bldgclassLookup = {
  A0: 'One Family Dwellings - Cape Cod',
  A1: 'One Family Dwellings - Two Stories Detached (Small or Moderate Size, With or Without Attic)',
  A2: 'One Family Dwellings - One Story (Permanent Living Quarters)',
  A3: 'One Family Dwellings - Large Suburban Residence',
  A4: 'One Family Dwellings - City Residence',
  A5: 'One Family Dwellings - Attached or Semi-Detached',
  A6: 'One Family Dwellings - Summer Cottages',
  A7: 'One Family Dwellings - Mansion Type or Town House',
  A8: 'One Family Dwellings - Bungalow Colony/Land Coop Owned',
  A9: 'One Family Dwellings - Miscellaneous',

  B1: 'Two Family Dwellings - Brick',
  B2: 'Frame',
  B3: 'Converted From One Family',
  B9: 'Miscellaneous',

  C0: 'Walk-up Apartments - Three Families',
  C1: 'Walk-up Apartments - Over Six Families Without Stores',
  C2: 'Walk-up Apartments - Five to Six Families',
  C3: 'Walk-up Apartments - Four Families',
  C4: 'Walk-up Apartments - Old Law Tenements',
  C5: 'Walk-up Apartments - Converted Dwelling or Rooming House',
  C6: 'Walk-up Apartments - Cooperative',
  C7: 'Walk-up Apartments - Over Six Families With Stores',
  C8: 'Walk-up Apartments - Co-Op Conversion From Loft/Warehouse',
  C9: 'Walk-up Apartments - Garden Apartments',
  CM: 'Mobile Homes/Trailer Parks',

  D0: 'Elevator Apartments - Co-op Conversion from Loft/Warehouse',
  D1: 'Elevator Apartments - Semi-fireproof (Without Stores)',
  D2: 'Elevator Apartments - Artists in Residence',
  D3: 'Elevator Apartments - Fireproof (Without Stores)',
  D4: 'Elevator Apartments - Cooperatives (Other Than Condominiums)',
  D5: 'Elevator Apartments - Converted',
  D6: 'Elevator Apartments - Fireproof With Stores',
  D7: 'Elevator Apartments - Semi-Fireproof With Stores',
  D8: 'Elevator Apartments - Luxury Type',
  D9: 'Elevator Apartments - Miscellaneous',

  E1: 'Warehouses - Fireproof',
  E2: 'Warehouses - Contractor’s Warehouse',
  E3: 'Warehouses - Semi-Fireproof',
  E4: 'Warehouses - Frame, Metal',
  E7: 'Warehouses - Warehouse, Self Storage',
  E9: 'Warehouses - Miscellaneous',

  F1: 'Factory and Industrial Buildings - Heavy Manufacturing - Fireproof',
  F2: 'Factory and Industrial Buildings - Special Construction - Fireproof',
  F4: 'Factory and Industrial Buildings - Semi-Fireproof',
  F5: 'Factory and Industrial Buildings - Light Manufacturing',
  F8: 'Factory and Industrial Buildings - Tank Farms',
  F9: 'Factory and Industrial Buildings - Miscellaneous',

  G: 'GARAGES AND GASOLINE STATIONS',
  G0: 'Residential Tax Class 1 Garage',
  G1: 'All Parking Garages',
  G2: 'Auto Body/Collision or Auto Repair',
  G3: 'Gas Station with Retail Store',
  G4: 'Gas Station with Service/Auto Repair',
  G5: 'Gas Station only with/without Small Kiosk',
  G6: 'Licensed Parking Lot',
  G7: 'Unlicensed Parking Lot',
  G8: 'Car Sales/Rental with Showroom',
  G9: 'Miscellaneous Garage or Gas Station',
  GU: 'Car Sales/Rental without Showroom',
  GW: 'Car Wash or Lubritorium Facility',

  H1: 'Hotels - Luxury Type',
  H2: 'Hotels - Full Service Hotel',
  H3: 'Hotels - Limited Service – Many Affiliated with National Chain',
  H4: 'Hotels - Motels',
  H5: 'Hotels - Private Club, Luxury Type',
  H6: 'Hotels - Apartment Hotels',
  H7: 'Hotels - Apartment Hotels-Co-op Owned',
  H8: 'Hotels - Dormitories',
  H9: 'Hotels - Miscellaneous',
  HB: 'Hotels - Boutique 10-100 Rooms, with Luxury Facilities, Themed, Stylish, with Full Service Accommodations',
  HH: 'Hotels - Hostel-Bed Rental in Dorm Like Setting with Shared Rooms & Bathrooms',
  HR: 'Hotels - SRO- 1 or 2 People Housed in Individual Rooms in Multiple Dwelling Affordable Housing',
  HS: 'Hotels - Extended Stay/Suite Amenities Similar to Apt., Typically Charge Weekly Rates & Less Expensive than Full Service Hotel',

  I1: 'Hospitals and Health - Hospitals, Sanitariums, Mental Institutions',
  I2: 'Hospitals and Health - Infirmary',
  I3: 'Hospitals and Health - Dispensary',
  I4: 'Hospitals and Health - Staff Facilities',
  I5: 'Hospitals and Health - Health Center, Child Center, Clinic',
  I6: 'Hospitals and Health - Nursing Home',
  I7: 'Hospitals and Health - Adult Care Facility',
  I9: 'Hospitals and Health - Miscellaneous',

  J1: 'Theatres - Art Type (Seating Capacity under 400 Seats)',
  J2: 'Theatres - Art Type (Seating Capacity Over 400 Seats)',
  J3: 'Theatres - Motion Picture Theatre with Balcony',
  J4: 'Theatres - Legitimate Theatres (Theatre Sole Use of Building)',
  J5: 'Theatres - Theatre in Mixed Use Building',
  J6: 'Theatres - T.V. Studios',
  J7: 'Theatres - Off-Broadway Type',
  J8: 'Theatres - Multiplex Picture Theatre',
  J9: 'Theatres - Miscellaneous',

  K1: 'Store Buildings (Taxpayers Included) - One Story Retail Building',
  K2: 'Store Buildings (Taxpayers Included) - Multi-Story Retail Building',
  K3: 'Store Buildings (Taxpayers Included) - Multi-Story Department Store',
  K4: 'Store Buildings (Taxpayers Included) - Predominant Retail with Other Uses',
  K5: 'Store Buildings (Taxpayers Included) - Stand Alone Food Establishment',
  K6: 'Store Buildings (Taxpayers Included) - Shopping Centers With or Without Parking',
  K7: 'Store Buildings (Taxpayers Included) - Banking Facilities with or Without Parking',
  K8: 'Store Buildings (Taxpayers Included) - Big Box Retail Not Affixed & Standing On Own Lot with Parking',
  K9: 'Store Buildings (Taxpayers Included) - Miscellaneous',

  L1: 'Loft Buildinghs - Over Eight Stores (Mid-Manhattan Type)',
  L2: 'Loft Buildinghs - Fireproof and Storage Type (Without Stores)',
  L3: 'Loft Buildinghs - Semi-Fireproof',
  L8: 'Loft Buildinghs - With Retail Stores Other Than Type 1',
  L9: 'Loft Buildinghs - Miscellaneous',

  M1: 'Churches, Synagogues, etc. - Church, Synagogue, Chapel',
  M2: 'Churches, Synagogues, etc. - Mission House (Non-Residential)',
  M3: 'Churches, Synagogues, etc. - Parsonage, Rectory',
  M4: 'Churches, Synagogues, etc. - Convents',
  M9: 'Churches, Synagogues, etc. - Miscellaneous',

  N1: 'Asylums and Homes - Asylums',
  N2: 'Asylums and Homes - Homes for Indigent Children, Aged, Homeless',
  N3: 'Asylums and Homes - Orphanages',
  N4: 'Asylums and Homes - Detention House For Wayward Girls',
  N9: 'Asylums and Homes - Miscellaneous',

  O1: 'Office Buildings - Office Only – 1 Story',
  O2: 'Office Buildings - Office Only – 2-6 Stories',
  O3: 'Office Buildings - Office Only – 7-19 Stories',
  O4: 'Office Buildings - Office Only or Office with Comm – 20 Stories or More',
  O5: 'Office Buildings - Office with Comm – 1 to 6 Stories',
  O6: 'Office Buildings - Office with Comm – 7 to 19 Stories',
  O7: 'Office Buildings - Professional Buildings/Stand Alone Funeral Homes',
  O8: 'Office Buildings - Office with Apartments Only (No Comm)',
  O9: 'Office Buildings - Miscellaneous and Old Style Bank Bldgs',

  P1: 'Places of Public Assembly (indoor) and Cultural - Concert Halls',
  P2: 'Places of Public Assembly (indoor) and Cultural - Lodge Rooms',
  P3: 'Places of Public Assembly (indoor) and Cultural - YWCA, YMCA, YWHA, YMHA, PAL',
  P4: 'Places of Public Assembly (indoor) and Cultural - Beach Club',
  P5: 'Places of Public Assembly (indoor) and Cultural - Community Center',
  P6: 'Places of Public Assembly (indoor) and Cultural - Amusement Place, Bathhouse, Boat House',
  P7: 'Places of Public Assembly (indoor) and Cultural - Museum',
  P8: 'Places of Public Assembly (indoor) and Cultural - Library',
  P9: 'Places of Public Assembly (indoor) and Cultural - Miscellaneous',

  Q0: 'Outdoor Recreation Facilities - Open Space',
  Q1: 'Outdoor Recreation Facilities - Parks/Recreation Facilities',
  Q2: 'Outdoor Recreation Facilities - Playground',
  Q3: 'Outdoor Recreation Facilities - Outdoor Pool',
  Q4: 'Outdoor Recreation Facilities - Beach',
  Q5: 'Outdoor Recreation Facilities - Golf Course',
  Q6: 'Outdoor Recreation Facilities - Stadium, Race Track, Baseball Field',
  Q7: 'Outdoor Recreation Facilities - Tennis Court',
  Q8: 'Outdoor Recreation Facilities - Marina, Yacht Club',
  Q9: 'Outdoor Recreation Facilities - Miscellaneous',

  R0: 'Condominiums - Condo Billing Lot',
  R1: 'Condominiums - Residential Unit in 2-10 Unit Bldg',
  R2: 'Condominiums - Residential Unit in Walk-Up Bldg',
  R3: 'Condominiums - Residential Unit in 1-3 Story Bldg',
  R4: 'Condominiums - Residential Unit in Elevator Bldg',
  R5: 'Condominiums - Miscellaneous Commercial',
  R6: 'Condominiums - Residential Unit of 1-3 Unit Bldg-Orig Class 1',
  R7: 'Condominiums - Commercial Unit of 1-3 Units Bldg- Orig Class 1',
  R8: 'Condominiums - Commercial Unit of 2-10 Unit Bldg',
  R9: 'Condominiums - Co-op within a Condominium',
  RA: 'Condominiums - Cultural, Medical, Educational, etc.',
  RB: 'Condominiums - Office Space',
  RC: 'Condominiums - Commercial Building (Mixed Commercial Condo Building Classification Codes)',
  RD: 'Condominiums - Residential Building (Mixed Residential Condo Building Classification Codes)',
  RG: 'Condominiums - Indoor Parking',
  RH: 'Condominiums - Hotel/Boatel',
  RI: 'Condominiums - Mixed Warehouse/Factory/Industrial & Commercial',
  RK: 'Condominiums - Retail Space',
  RM: 'Condominiums - Mixed Residential & Commercial Building (Mixed Residential & Commercial)',
  RP: 'Condominiums - Outdoor Parking',
  RR: 'Condominiums - Condominium Rentals',
  RS: 'Condominiums - Non-Business Storage Space',
  RT: 'Condominiums - Terraces/Gardens/Cabanas',
  RW: 'Condominiums - Warehouse/Factory/Industrial',
  RX: 'Condominiums - Mixed Residential, Commercial & Industrial',
  RZ: 'Condominiums - Mixed Residential & Warehouse',

  S0: 'Residence (Multiple Use) - Primarily One Family with Two Stores or Offices',
  S1: 'Residence (Multiple Use) - Primarily One Family with One Store or Office',
  S2: 'Residence (Multiple Use) - Primarily Two Family with One Store or Office',
  S3: 'Residence (Multiple Use) - Primarily Three Family with One Store or Office',
  S4: 'Residence (Multiple Use) - Primarily Four Family with One Store or Office',
  S5: 'Residence (Multiple Use) - Primarily Five to Six Family with One Store or Office',
  S9: 'Residence (Multiple Use) - Single or Multiple Dwelling with Stores or Offices',

  T1: 'Transportation Facilities (Assessed in ORE) - Airport, Air Field, Terminal',
  T2: 'Transportation Facilities (Assessed in ORE) - Pier, Dock, Bulkhead',
  T9: 'Transportation Facilities (Assessed in ORE) - Miscellaneous',

  U0: 'Utility Bureau Properties - Utility Company Land and Building',
  U1: 'Utility Bureau Properties - Bridge, Tunnel, Highway',
  U2: 'Utility Bureau Properties - Gas or Electric Utility',
  U3: 'Utility Bureau Properties - Ceiling Railroad',
  U4: 'Utility Bureau Properties - Telephone Utility',
  U5: 'Utility Bureau Properties - Communications Facilities Other Than Telephone',
  U6: 'Utility Bureau Properties - Railroad - Private Ownership',
  U7: 'Utility Bureau Properties - Transportation - Public Ownership',
  U8: 'Utility Bureau Properties - Revocable Consent',
  U9: 'Utility Bureau Properties - Miscellaneous',

  V0: 'Vacant Land - Zoned Residential; Not Manhattan',
  V1: 'Vacant Land - Zoned Commercial or Manhattan Residential',
  V2: 'Vacant Land - Zoned Commercial Adjacent to Class 1 Dwelling; Not Manhattan',
  V3: 'Vacant Land - Zoned Primarily Residential; Not Manhattan',
  V4: 'Vacant Land - Police or Fire Department',
  V5: 'Vacant Land - School Site or Yard',
  V6: 'Vacant Land - Library, Hospital or Museum',
  V7: 'Vacant Land - Port Authority of NY and NJ',
  V8: 'Vacant Land - New York State & U.S. Government',
  V9: 'Vacant Land - Miscellaneous',

  W1: 'Educational Structures - Public Elementary, Junior or Senior High',
  W2: 'Educational Structures - Parochial School, Yeshiva',
  W3: 'Educational Structures - School or Academy',
  W4: 'Educational Structures - Training School',
  W5: 'Educational Structures - City University',
  W6: 'Educational Structures - Other College and University',
  W7: 'Educational Structures - Theological Seminary',
  W8: 'Educational Structures - Other Private School',
  W9: 'Educational Structures - Miscellaneous',

  Y1: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Fire Department',
  Y2: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Police Department',
  Y3: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Prison, Jail, House of Detention',
  Y4: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Military and Naval Installation',
  Y5: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Department of Real Estate',
  Y6: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Department of Sanitation',
  Y7: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Department of Ports and Terminals',
  Y8: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Department of Public Works',
  Y9: 'Selected Government Installations (Excluding Office Buildings, Training Schools, Academic, Garages, Warehouses, Piers, Air Fields, Vacant Land, Vacant Sites, and Land Under Water and Easements) - Department of Environmental Protection',

  Z0: 'Miscellaneous - Tennis Court, Pool, Shed, etc.',
  Z1: 'Miscellaneous - Court House',
  Z2: 'Miscellaneous - Public Parking Area',
  Z3: 'Miscellaneous - Post Office',
  Z4: 'Miscellaneous - Foreign Government',
  Z5: 'Miscellaneous - United Nations',
  Z7: 'Miscellaneous - Easement',
  Z8: 'Miscellaneous - Cemetery',
  Z9: 'Miscellaneous - Other',
};

function calcUpdateMapResi() {
    var resiStyle = `
      #layer {
        polygon-fill: ramp([score], (#d73027, #fc8d59, #fee08b, #ffffbf, #d9ef8b, #91cf60, #1a9850), quantiles);
      }
      #layer::outline {
        line-width: .15;
        line-color: #FFFFFF;
        line-opacity: 0.15;
    }`

    $('.ui.dimmer').addClass('active');

    // get rid of commas
    selected_layer = 'allplutonew_r_3000'

    filter_query = ' where (lotarea >= '+ filters['lotarea']['resi']['left'].replace(/,/g, '') + ' AND lotarea <= ' + filters['lotarea']['resi']['right'].replace(/,/g, '')+')';

    var noncontextual_hf_t = filters['noncontextual_hf_t']
    var noncontextual_qh = filters['noncontextual_qh']
    var contextual_mih_vih = filters['contextual_mih_vih']
    // console.log(checked_value);

    var multiple_checkboxes = []

    if (noncontextual_hf_t){
      multiple_checkboxes.push(`resi_noncontextual_hf_t = 1`)
    }
    if (noncontextual_qh){
      multiple_checkboxes.push(`resi_noncontextual_qh = 1`)
    }
    if (contextual_mih_vih){
      multiple_checkboxes.push(`resi_contextual_district = 1`)
    }

    if (multiple_checkboxes.length != 0){
      multi_check_statement = multiple_checkboxes.join(' OR ');
      filter_query = filter_query.concat(' AND (' + multi_check_statement +')')
    }

    scoreQuery = 'select *, st_x(st_centroid(the_geom)) as center_x, st_y(st_centroid(the_geom)) as center_y, ('+
                  weights['next_to_r_zone'] + '*r7_higher_resi_adjacent+' +
                  weights['near_r_zone'] + '*resi_qrtr_mile+' +
                  weights['near_transportation'] + '*(4*subway_entrances_qrtr_mile/10+3*bus_stops_qrtr_mile/10+2*cb_qrtr_mile/10+ferry_landings_qrtr_mile/10)+'+
                  weights['near_open_space'] + '*(3*open_space_parks_qrtr_mile/10 + 2*nypaws_qrtr_mile/10 + cemeteries_qrtr_mile/10) +'+
                  weights['wide_street'] + '*wide_street+'+
                  weights['bldg_land_ratio'] + '*bldg_land_ratio+'+
                  weights['no_parking_required'] + '*transit_zone) as score'

    filter_base = ' from ' + selected_layer + filter_query;

    console.log(scoreQuery + filter_base);

    taxLotsSQLSource.setQuery(scoreQuery + filter_base);
    taxLotsStyle.setContent(resiStyle);
    // $('.ui.active.dimmer').('hide');


    // taxLotLayer.setFeatureClickColumns(['zonedist1', 'ownertype',
    // 'ownername',
    // 'lotarea',
    // 'yearbuilt',
    // 'yearalter1',
    // 'bldgclass',
    // 'numbldgs',
    // 'numfloors',
    // 'bldgarea',
    // 'unitstotal',
    // 'unitsres',
    // 'condono',
    // 'borocode',
    // 'block',
    // 'lot',
    // 'borocode',
    // 'borough',
    // 'block',
    // 'lot',
    // 'residfar',
    // 'commfar',
    // 'facilfar',
    // 'address',
    // 'bldg_land_ratio',
    // ])
};

function calcUpdateMap() {
    $('.ui.dimmer').addClass('active');
    selected_layer = 'allplutonew_m_c'
    // get rid of commas
      filter_query = ' where (lotarea >= '+ filters['lotarea']['mc']['left'].replace(/,/g, '') + ' AND lotarea <= ' + filters['lotarea']['mc']['right'].replace(/,/g, '');

      var checked_value = document.querySelector('input[name="zone_type"]:checked').value;
      // console.log(checked_value);

      if (checked_value == 'both'){
        filter_query = filter_query.concat(` AND (zonedist1 like '%M%' OR zonedist1 like '%C%') and zonedist1 not like 'BPC')`)
      }
      if (checked_value == 'manufacturing'){
        filter_query = filter_query.concat(` AND zonedist1 like '%M%')`)
      }
      if (checked_value == 'commercial'){
        filter_query = filter_query.concat(` AND zonedist1 like '%C%' and zonedist1 not like 'BPC')`)
      }

      scoreQuery = 'select *, st_x(st_centroid(the_geom)) as center_x, st_y(st_centroid(the_geom)) as center_y, ('+
                    weights['next_to_r_zone'] + '*resi_adjacent+' +
                    weights['near_r_zone'] + '*resi_qrtr_mile+' +
                    weights['near_transportation'] + '*(4*subway_entrances_qrtr_mile/10+3*bus_stops_qrtr_mile/10+2*cb_qrtr_mile/10+ferry_landings_qrtr_mile/10)+'+
                    weights['near_open_space'] + '*(3*open_space_parks_qrtr_mile/10 + 2*nypaws_qrtr_mile/10 + cemeteries_qrtr_mile/10) +'+
                    weights['wide_street'] + '*wide_street+'+
                    weights['bldg_land_ratio'] + '*bldg_land_ratio+'+
                    weights['no_parking_required'] + '*no_parking_required) as score'
      filter_base = ' from ' + selected_layer + filter_query;
      console.log('updating m_c query...', scoreQuery + filter_base);

      taxLotsSQLSource.setQuery(scoreQuery + filter_base);
      taxLotsStyle.setContent(calculateScoreStyle);

};

//IMPORT VEGA LITE
const boroLookup = {
  1: 'Manhattan',
  2: 'Bronx',
  3: 'Brooklyn',
  4: 'Queens',
  5: 'Staten Island',
};

function cdURL (cd) {
    const borocd = cd;
    const boro = borocd.substring(0, 1);
    const cd_num = parseInt(borocd.substring(1, 3), 10).toString();
    const cleanBorough = boroLookup[boro].toLowerCase().replace(/\s/g, '-');
    return [`${cleanBorough}/${cd_num}`,cleanBorough.toUpperCase()];
  };

function commaSeperateThousands (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
//STYLES

function sidebarColor(c) {
//just make one giant function that does all this together with the colors and map title
};

function iconColor(c) {

};

function iconImg(c) {

};



//ACCOUNT DEFS

function accountCreds(settings) {

  this.accountName = settings.username;
  this.apiKey = settings.apiKey;
	this.sqlURL = 'https://'+settings.username+'.carto.com/api/v2/sql?q=';
  this.exportURL = 'https://'+settings.username+'.carto.com/api/v2/sql?';
	this.jobURL = 'https://'+settings.username+'.carto.com/api/v2/sql/job/';
	this.sqlEnd = '&api_key='+settings.apiKey+'';
	this.batchEnd = '?api_key='+settings.apiKey+'';
  this.map = settings.map;

};

//TEXT QUERY

function textQuery(settings) {
  v = settings.variable
  c = settings.column
  n = settings.name
  d = settings.dropdown

  function g() {
    if (d === true) {
    var v = $("#"+n+"").val();

  } else {
    v = settings.variable
  }
    return v
  };

  var v = g();

  joined = ""

  if (v.length === 0) {
    joined = null
  }
  else {
    joined = ""+c+" IN (" + "'" + v.join("'" + ',' + "'") + "'" + ")"
  };
  return joined
}


//CHECKBOX ARRAY

function newCheckboxList(settings) {

  var list = []
  var joined = ""
  var sub = settings.name
  var query = settings.query._query
  var url = `${settings.credentials.sqlURL}WITH a AS (${query}) SELECT a.${settings.column} as name, lower(replace(a.${settings.column}, ' ', '')) as id, ${settings.aggregation}(*) from a group by a.${settings.column}, id order by ${settings.aggregation} desc${settings.credentials.sqlEnd}`


  $("<div></div>").addClass(""+settings.name+"").attr("id", "checklist").appendTo( ".widget-content" );

  $("."+settings.name+"").before(`
      <br></br>
      <p><b class="wisconsin">${settings.title}</b></p>
  `)



  // $(".ui.multiple.search.dropdown").mouseout( function () {
  $("#button").mouseup( function () {
  	var query = settings.query._query
  	// console.log(query)
  	var url = `${settings.credentials.sqlURL}WITH a as (${query}), b as (select count(*), ${settings.column} from a group by ${settings.column}) SELECT ${settings.dataset}.${settings.column} as name, lower(replace( ${settings.dataset}.${settings.column}, ' ', '')) as id, COALESCE(b.count, 0) from ${settings.dataset} LEFT JOIN b on ${settings.dataset}.${settings.column}  = b.${settings.column} group by ${settings.dataset}.${settings.column}, id, count order by coalesce desc${settings.credentials.sqlEnd}`

  	$.getJSON(`${settings.credentials.sqlURL}WITH a as (${query}), b as (select count(*), ${settings.column} from a group by ${settings.column}) SELECT ${settings.dataset}.${settings.column} as name, lower(replace( ${settings.dataset}.${settings.column}, ' ', '')) as id, COALESCE(b.count, 0) from ${settings.dataset} LEFT JOIN b on ${settings.dataset}.${settings.column}  = b.${settings.column} group by ${settings.dataset}.${settings.column}, id, count order by coalesce desc${settings.credentials.sqlEnd}`, function( data ) {

  		//$("."+settings.name+"").empty();

  	  var items = [];

  	  $.each(data.rows, function(key, val) {
  			if (val.coalesce === 0) {

  				items.push( "<div class=\"ui checkbox "+sub+" "+val.id+"\"> <input type=\"checkbox\" id=\""+sub+"\" value=\""+val.name+"\" tabindex=\"0\"> <label>"+val.name+" ("+val.coalesce+")</label> </div> <div class=\"smallspace\"></div>" );

  			} else {

  	    	items.push( "<div class=\"ui checkbox "+sub+" "+val.id+"\"> <input type=\"checkbox\" id=\""+sub+"\" checked=\"\" value=\""+val.name+"\" tabindex=\"0\"> <label>"+val.name+" ("+val.coalesce+")</label> </div> <div class=\"smallspace\"></div>" );

  			}

  	  });

  		$("."+settings.name+"").empty()

  	  $("."+settings.name+"").append(items.join(""))

  	  $.each(data.rows, function(key, val) {

  	  $('.ui.checkbox.'+sub+'.'+val.id+'').checkbox({
  	    //fireOnInit: true,
  	    onChecked: function () { list.push(''+val.name+'') },
  	    onUnchecked: function () {
  	      for(var i = 0; i < list.length; i++) {
  	      if(list[i] == ''+val.name+'') {
  	          list.splice(i, 1);
  	          break;
  	          }
  	        }
  	      }

  	    });
  	  });

  	//return joined

  	}); //END DATA FUNCTION

  });



  $.getJSON(`
    ${url}
    `, function( data ) {

    var items = [];

    $.each(data.rows, function(key, val) {

      items.push( "<div class=\"ui checkbox "+sub+" "+val.id+"\"> <input type=\"checkbox\" id=\""+sub+"\" checked=\"\" value=\""+val.name+"\" tabindex=\"0\"> <label>"+val.name+" ("+val.count+")</label> </div> <div class=\"smallspace\"></div>" );

    });

    $("."+settings.name+"").append(items.join(""))

    $.each(data.rows, function(key, val) {



    $('.ui.checkbox.'+sub+'.'+val.id+'').checkbox({
      fireOnInit: true,
      onChecked: function () { list.push(''+val.name+'') },
      onUnchecked: function () {
        for(var i = 0; i < list.length; i++) {
        if(list[i] == ''+val.name+'') {
            list.splice(i, 1);
            break;
            }
          }
        }

      });
    });

  //return joined
  // console.log(query)

  }); //END DATA FUNCTION

  return list

};

//DROPDOWNS

//first create the dropdown, then assemble the query with input for column name, then generate the html

function newDropdown(s) {

  var name = s.id;
  var values = s.max;
  var col = s.column;
  var table = s.table;
  var link = s.linked;
  var urlStart = s.credentials.sqlURL
  var query = s.query._query
  var urlEnd = s.credentials.sqlEnd

  //ADD IN AN OPTION FOR GROUPINGS & COUNTS
  //ASSEMBLE URL HERE THEN PASS IN
  //update it to be .html content
  //ADD IN BREAKS AND TITLES

  var url = ""

  $("#checklist").click( function () {
  	console.log('This is the dropdown working')

  	var url = ""+s.credentials.sqlURL+"with a as ("+s.query._query+") select a."+col+" as name, a."+col+"  as value from a group by a."+col+" order by a."+col+" asc"+s.credentials.sqlEnd+""
  	//console.log(s.query._query)
  	//console.log(url)
  	return url

  });

  $("<select></select>").attr("id", ""+name+"", "multiple", "").addClass("ui multiple search dropdown "+name+"").appendTo( ".widget-content" );

  $(".ui.multiple.dropdown."+name+"").before(`
      <p><b class="wisconsin">${s.title}</b></p>
      `)

  $('.ui.multiple.dropdown.'+name+'').dropdown({
    maxSelections: values,
    fields: { name: "name", value: "value" },
    apiSettings: {
        cache: false,
        beforeSend: function(settings) {
  				//console.log(query)
  				var url = ""+s.credentials.sqlURL+"with a as ("+s.query._query+") select a."+col+" as name, a."+col+"  as value from a group by a."+col+" order by a."+col+" asc"+s.credentials.sqlEnd+""
          //console.log(url)
  				settings.url = url
  				return settings
        },
        onResponse: function(cartoResponse) {
          return {
              "success": true,
              "results": cartoResponse.rows
          };
      },
      url: url
      },
    saveRemoteData: false,
    filterRemoteData: true,
    dataType: JSON
  });

};


//CHECKBOXES

function newCheckbox(settings) {

  var b = settings.name;
  var a = settings.layer;
  var map = settings.credentials.map;
  var c = settings.checked;
  var t

  function check() {

    if (c === false) {
      var t = `<input type="checkbox" name="${b}">`
    } else {
      var t = `<input type="checkbox" name="${b}" checked="">`
    }

    return t

  };

  var d = check();

  $("<div></div>").html(`
    ${d}
    <label>${settings.label}</label>
    `).addClass("ui checkbox "+settings.name+" checked").appendTo( ".widget-content" );

  $(".ui.checkbox."+b+"").before(`
    <br></br>
    <p><b class="wisconsin">${settings.title}</b></p>
    `)

  var client = new carto.Client({
    apiKey: settings.credentials.apiKey,
    username: settings.credentials.accountName
  });


  $('.ui.checkbox.'+b+'').checkbox({
    fireOnInit: true,
    onChecked: function () { client.addLayers([ a ]); client.moveLayer(a, 0); client.getLeafletLayer().addTo(map);},
    onUnchecked: function () { client.removeLayers([ a ]); }

  });

};


//SLIDER
function addSlider(s){
  var col = s.column
  var title = s.title
  var initval = s.initval
  var tab = s.tab
  $(`.${tab}.weights`).after((`<div><h5><b >${title}</b></h5><div class= 'nstSlider' id =${col} data-range_min="0" data-range_max="100" data-cur_min="${initval}">
     <div class="leftGrip"></div></div></div><br>
    `))

  $('.nstSlider#'+col).nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        // console.log(leftValue);
        weights[col] =leftValue/100
    }
    });

}


// Radio Checkbox

function addRadioCheckbox(s){
  // console.log('SETTING UP CHECKBOX ', s)
  var col = s.column
  var title = s.title
  if (s.checked) {
    input = `<input type="radio" name="zone_type" id="${col}" value="${col}" checked="checked">`
  }
  else {
    input = `<input type="radio" name="zone_type" id="${col}" value="${col}">`

  }
  var t = `<div class="field">
            <div class="ui radio checkbox">
              ${input}
              <label>${title}</label>
            </div>
          </div>`

  $('.mc .grouped.fields').append((t));

  // function thisfunction () {
  //   if(document.getElementById('manufacturing').checked==True){
  //       console.log('clicked!')
  //   }}
  // $('#'+col).checkbox({
  //   "onClick": function() {console.log('changed')}})
  // };

  // $("#"+col).on('change',function(){
  //   console.log(col, this.checked);
  //   filters[col] = this.checked

  }

  function addRegularCheckbox(s){
    // console.log('SETTING UP CHECKBOX ', s)
    var col = s.column
    var title = s.title
    var t = `<input type="checkbox" name="resi_options" id="${col}"> ${title}<br><br>`

    $('.resi.checkbox').after((t));

    // function thisfunction () {
    //   if(document.getElementById('manufacturing').checked==True){
    //       console.log('clicked!')
    //   }}
    // $('#'+col).checkbox({
    //   "onClick": function() {console.log('changed')}})
    // };

    $("#"+col).on('change',function(){
      console.log(col, this.checked);
      filters[col] = this.checked

    })
  }


function calcButton(s){
  var tab_class = s.tab_id;
  $(`.${tab_class}.calculate`).append(`<p></p><button class="ui button" id='calc_${tab_class}'><span>Calculate</span></button>`);
   // <button class="ui button active">Following</button>
}

function addRangeFilter(s){
  var col = s.column
  var query = s.query._query + ` where ${col} <> 0`
  var name = s.name
  var title = s.title
  var range = ""
  // console.log(`${s.credentials.sqlURL}WITH a as (${query}) SELECT max(${col}) as max, min(${col}) as min from a${s.credentials.sqlEnd}`)
  $.getJSON(`${s.credentials.sqlURL}WITH a as (${query}) SELECT max(${col}) as max, min(${col}) as min from a${s.credentials.sqlEnd}`, function( data ) {
      // console.log(data.rows[0].max);
      var min = data.rows[0].min
      var max = data.rows[0].max
      initMin = min
      initMax = max*1

      $('.filters').after((`<div><h5><b >${s.title}</b></h5>
        <div  id=${col} class= 'nstSlider double' data-range_min=${min} data-range_max=${max} data-cur_min=${initMin} data-cur_max=${initMax}>
        <div class="bar"></div>
        <div class="leftGrip"></div>
        <div class="rightGrip"></div></div>
        <div class="leftLabel"><p> <span id=${col}></span></p></div>
        <div class="rightLabel"><p><span id=${col}></span></p></div>
        </div></div><br>`)

      );

      $('#'+col+'.nstSlider.double').nstSlider({
          "crossable_handles": false,
          "left_grip_selector": ".leftGrip",
          "right_grip_selector": ".rightGrip",
          "value_bar_selector": ".bar",
          "value_changed_callback": function(cause, leftValue, rightValue) {
              $(this).parent().find('.leftLabel').html("Min: "+leftValue);
              $(this).parent().find('.rightLabel').html("Max: "+rightValue);

              // Update the filters dictionary
              filters[col] = {'left':leftValue,'right':rightValue}
          }
      });
  })
}

// Range Input... not very good, very silly code; but hey it works~!

function minUpdate(val, tab) {
    console.log('New min' + val);
    console.log('tab: ' + tab);

    filters['lotarea'][tab]['left'] = val
    // console.log(filters['lotarea'])
};

function maxUpdate(val, tab) {
    console.log('New max' + val);
    console.log('tab: ' + tab);
    filters['lotarea'][tab]['right'] = val

};

function rangeInput(s) {

	var query = s.query._query
	var col = s.column
	var name = s.name
	var title = s.title
  var tab = s.tab
  var max_init = s.max_init
  var min_init = s.min_init
	var range = ""


  $(`.${tab}.filters`).after(`<div><h5><b >${s.title}</b></h5>
  	<div class="ui labeled input min" id="${name}-input-min">
    <div class="ui label">
      MIN
    </div>
    <input class="number" type="text" id="${tab}-input-min-input" placeholder="${commaSeperateThousands(min_init)}" value="${commaSeperateThousands(min_init)}" onchange="minUpdate(this.value, '${tab}')">
  	</div>
    <div class="smallspace"></div>
  	<div class="ui labeled input max" id="${name}-input-max">
    <div class="ui label">
      MAX
    </div>
  	<input class="number" type="text" id="${tab}-input-max-input" placeholder="${commaSeperateThousands(max_init)}" value="${commaSeperateThousands(max_init)}" onchange="maxUpdate(this.value, '${tab}')">
  	</div><br>
    <br>
  `).addClass("range")
    .attr("id", ""+name+"");
  };

function rangeQuery(s) {
	var name = s.name
	var col = s.column

	var inMin = $('#'+name+'-input-min-input').val()
	var inMax = $('#'+name+'-input-max-input').val()

	var range = ""+col+" BETWEEN "+inMin+" AND "+inMax+""
	return range

}

//INPUT

function newInput(settings) {
  $("<div></div>").html(`
    <input type="text" id="${settings.name}-input" placeholder="${settings.placeholder}" value="${settings.start}">
    `).addClass("ui input").appendTo( ".widget-content" )
    .attr("id", ""+settings.name+"");

  $("#"+settings.name+"").before(`
    <br></br>
    <p><b class="wisconsin">${settings.title}</b></p>
    `)

var min = settings.min
var max = settings.max
var name = settings.name

 $('#'+name+'').keyup(function () {
  value = $('#'+name+'-input').val()
  if (value < min || value > max) {
    $('#'+name+'').addClass('error');
  } else {
    $('#'+name+'').removeClass('error');
  }
});
};

//AUTO STYLE


function autoStyle(settings) {

    var a = settings.layer
    var b = settings.cartocss
    var c = settings.defaultCartocss


$("<div></div>").html(`
  <p class="autostyle"><i class="marker icon"></i>   APPLY STYLE TO MAP</p>
  `).appendTo( ".widget-content" )
  .attr("id", ""+settings.name+"");

$("#"+settings.name+"").before(`
  <br></br>
  <p><b class="wisconsin">${settings.title}</b></p>
  `)

$("p.autostyle").click( function() {
  //$( this ).not().attr('class', 'autostyle');
  $( this ).toggleClass( "active" )
  $( "p.autostyle.active" ).not(this).attr('class', "autostyle")
});


var css = new carto.style.CartoCSS(`${settings.cartocss}`);

$("p.autostyle").click( function() {

  if ( this.className === "autostyle active" ) {

    a.setStyle(css);
  }
  else if ( this.className === "autostyle" ) {
    a.setStyle(c)
  }
});

}


// ADD LAYER
function addExtraLayer(s){
  var layerType = s.type;
  var legendColor = s.color;
  var layerColor = s.color;
  var condition = s.condition;
  var layerQuery = 'SELECT * FROM '+ s.name;
  var popupElements = s.popupElements;
  var select_layer_section = s.section;

  if(s.legend_style){
    var legend_style = s.legend_style
  } else
  {
    var legend_style = `fill:${legendColor}`
  }

  if (s.conditional){
    layerQuery += condition;
    // console.log(layerQuery);
  }
  // console.log(layerQuery);
  var layerSQLSource = new carto.source.SQL(layerQuery);
  if (s.colorCSS) {
    // console.log("custom css found")
    // console.log(s.colorCSS)
    var layerStyle = new carto.style.CartoCSS(s.colorCSS)
  } else if (layerType=='polygon'){
    var layerStyle = new carto.style.CartoCSS(`
        #layer{
          polygon-fill: ${layerColor};
          polygon-opacity: 0.5;
        }
      `);
    // console.log(layerStyle);
  } else if(layerType=='point'){
     var layerStyle = new carto.style.CartoCSS(`
       #layer {
        marker-width: 4;
        marker-fill: ${layerColor};
        marker-line-width: 0.25;
        marker-line-color: ${layerColor};
        marker-fill-opacity: 1;
        marker-placement: point;
        marker-type: ellipse;
        marker-allow-overlap: true;
      }
      #layer[zoom>=15] {
        marker-width: 6;
      }
      `);

  }

  // Add layer checkbox to layer selector part
  $(`<div class="ui checkbox ${s.checkbox_id}">
    <input type="checkbox" name=${s.checkbox_id}>
  <label>
    <svg width="20" height="15">
    <rect x="5"y = '2' width="13" height="13" style="${legend_style}" />
    </svg>
    ${s.title}
  </label>

  </div>
  <br>
  `).appendTo(`.layerSelector #${select_layer_section}`)

  $checked = $('.layerSelector').find('.ui.checkbox#'+s.checkbox_id+' label');

  const new_layer = new carto.layer.Layer(layerSQLSource, layerStyle)
  client.addLayers([new_layer]);
  client.getLeafletLayer().addTo(map);
  new_layer.hide();
  if (s.name == 'adjacent_m_c'){
    new_layer.bringToFront()
  }

// Add popup

if (popupElements){
  // console.log(popupElements)

  new_layer.setFeatureOverColumns(popupElements)
  var popup_cust = L.popup({ closeButton: false });
  new_layer.on('featureOver', featureEvent => {
    // console.log(featureEvent.data);
    popup_cust.setLatLng(featureEvent.latLng);
    popup_cust.setContent(`${String(featureEvent.data[popupElements[0]])}`);
    popup_cust.openOn(map);
  });

  new_layer.on('featureOut', featureEvent => {
    popup_cust.removeFrom(map);
  });
}

// Add checkbox functionality

  $('.ui.checkbox.'+s.checkbox_id).checkbox({
      // name: s.name,
      // label: s.title,
      fireOnInit: true,
      onChecked: function () {
        new_layer.show()


      },
      onUnchecked: function () {
        new_layer.hide()

        }
      })
}
//SOME FUNCTION TO HANDLE THE ASSEMBLY OF QUERY VARS - inputs can take the values you want to grab and assemble them if text or numeric and if null s
//NEED A FUNCTION TO GET THE VALUES OF EACH VARIABLE

// ADD CHECKBOX LAYER FILTER


function queryFactory(settings) {
  var a = settings.items;
  var join = $.grep(a, Boolean).join(" AND ")
  var query = "SELECT * FROM "+settings.table+" WHERE "+join+""
  return query
}


//TIME SLIDER

//PIE CHART

//POP-UPS

//SLIDEOUT


function sidebarInfo(settings) {

$('.ui.right.sidebar.popout').html(`

<i class="inverted remove icon" style="right: 10px; top: 10px; position: absolute; padding: 3px;"></i>

${settings.content}

`);

$('.ui.right.sidebar.popout').sidebar('show');

$('.inverted.remove.icon').click(function() {
  $('.ui.right.sidebar.popout').sidebar('hide');
});

$(function() {
    $('td.rank').each(function(index) {
        var scale = [['vPoor', 20], ['poor', 40], ['avg', 60], ['good', 80], ['vGood', 100]];
        var score = $(this).text();
        for (var i = 0; i < scale.length; i++) {
            if (score <= scale[i][1]) {
                $(this).addClass(scale[i][0]);
            }
        }
    });
});
}



//HOVERS

//EXPORT

function fileExport(s) {
  url_encode_query = encodeURIComponent(s.query)

  string =""+s.credentials.exportURL+"filename="+s.filename+"&format="+s.format+"&q="+url_encode_query+""+s.credentials.sqlEnd+""
  var section = s.section;
  console.log(section)
  $(`.exportSection.${section}`).html(`
  <span class=\"smallspace\"></span>
  <button id = "button-download" class="ui primary button ${section}">
  <a style="color:white;" href="#">EXPORT</a>
  </button>
  `);

  $(`#button-download.${section}`).click( function (){
  console.log(string);
  window.location=string;
  $(this).target = "_blank";
  })

}

//BATCH EXPORT

function batchExport(s) {

$(".exportSection").html(`
	<div class=\"smallspace\"></div>
	<h1>${s.name}</h1>
	<p>${s.description}</p>
	<p>Enter a name for your new dataset below:</p>
	<p><i>Name must be one word with no spaces</i></p>
	<div class="ui input" >
	  <input type="text" placeholder="Dataset Name" id="datasetname">
	</div>
	<br><br />
	<p><i>Check the box below and enter an amount to return a limited dataset of .</i></p>
	<div class="ui checkbox limit">
	  <input type="checkbox" name="limit">
	  <label>Return Limited Dataset</label>
	</div>
	<br><br />
	<p>Number of records to return (Max 10,000)</p>
	<div class="ui input" id="limit-input">
	  <input type="text" placeholder="Limit" value="100" id="limit" min="0" max="10000">
	</div>
	<br><br />
	<p id="button-download" class="button button--orange">
	<button class="ui blue button batch">
	EXPORT
	</button>

	</p>
	<div id="jobs">
	</div>
  `).appendTo( ".ui.sidebar.menu" );

  var timers = {};

  function check(job_id, $el) {

  $.ajax({
    url: ""+s.credentials.jobURL+""+ job_id +""+s.credentials.batchEnd+"",
  }).done(function (resp) {

    $el.text(JSON.stringify(resp, undefined, 2));
    $el.parent().addClass(resp.status);
    var job = resp.job_id
    if (resp.status === 'pending' || resp.status === 'running') {
      $('.ui.blue.button.batch').addClass('loading');
      $( "#jobs" )
      .html(`<div class="ui message"> <p>The data export is running. The status will update once the export is complete but do not close or refresh the page.</p><p>Job ID: ${job}</p> </div>`)
      //headers.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      // $('.ui.button.cancel').click(function() {
      //   $.ajax({
      //     method: 'DELETE',
      //     url: "https://mforrest.carto.com/api/v2/sql/job/"+job+"?api_key=665b6d21a3b9c20906057414b7da378b519df141"
      //   })
      // });
     }
	    else if (resp.status === 'done') {
	      clearInterval(timers[job_id]);
	      var tablename = $('#datasetname').val();
	      var tableURL = "https://team.carto.com/u/"+s.credentials.accountName+"/dataset/"+tablename+""
	      var exportURL = ""+s.credentials.exportURL+"filename="+s.filename+"&format="+s.format+"&q="+s.query._query+""+s.credentials.sqlEnd+""
	      $('.ui.blue.button.batch').removeClass('loading');
	      $( "#jobs" ).html(`<div class="ui green message"> <p>The data export is complete. You can see your dataset <a href=${tableURL} target="_blank">here</a> or download your data <a href=${exportURL} target="_blank">here</a></p> </div>`)
	    }
	    else {
	      var job = resp.job_id
	      var errorURL = ""+s.credentials.jobURL+""+job+"?"+s.credentials.batchEnd+""
	      $( "#jobs" ).html(`<div class="ui red message"> <p>The data export failed! Please try again. If this error is persisting click <a href=${errorURL} target="_blank">this link</a> to see the error.</p><p>Job ID: ${job}</p> </div>`);
	      clearInterval(timers[job_id]);
	      $('.ui.blue.button.batch').removeClass('loading');
	    }
	  }).fail(function (err) {
	    $('.ui.blue.button.batch').removeClass('loading');
	    clearInterval(timers[job_id]);
	  });
	}
	$('.ui.blue.button.batch').click(function (evt) {
	  var tablename = $('#datasetname').val();
	  evt.preventDefault();
	  var exportSQL = s.query._query
		// console.log("create table "+tablename+" as "+exportSQL+"", "select cdb_cartodbfytable('mforrest', '"+tablename+"')")
		console.log(exportSQL)
	  $.ajax({
	    method: 'POST',
	    url: "https://"+s.credentials.accountName+".carto.com/api/v2/sql/job?api_key="+s.credentials.apiKey+"" ,
	    //contentType: 'json',
	    data: {
	      query: ["create table "+tablename+" as "+exportSQL+"", "select cdb_cartodbfytable('mforrest', '"+tablename+"')"]
	    }
	  }).done(function (resp) {
	    var $result = $('<pre class="result">');
	    $('#jobs').prepend($('<div />')
	        .data('job_id', resp.job_id)
	        //.text(resp.job_id)
	        //.addClass('job')
	        .append($result)); //.on('click', check));
	    timers[resp.job_id] = setInterval(function () {
	      check(resp.job_id, $result);
	    }, 1000);
	  }).fail(function (err) {
	    // $('#error').text(err);
	  });
	  return false;
	});

}



// ADD LAYER
function addExtraLayer2(s){
  var layerType = s.type;
  var legendColor = s.color;
  var layerColor = s.color;
  var condition = s.condition;
  var layerQuery = s.query;
  var popupElements = s.popupElements;
  var featureClick = s.featureClick;
  var select_layer_section = s.section;

  if(s.legend_style){
    var legend_style = s.legend_style
  } else
  {
    var legend_style = `fill:${legendColor}`
  }

  if (s.conditional){
    layerQuery += condition;
    // console.log(layerQuery);
  }
  // console.log(layerQuery);
  var layerSQLSource = new carto.source.SQL(layerQuery);
  if (s.colorCSS) {
    // console.log("custom css found")
    // console.log(s.colorCSS)
    var layerStyle = new carto.style.CartoCSS(s.colorCSS)
  } else if (layerType=='polygon'){
    var layerStyle = new carto.style.CartoCSS(`
        #layer{
          polygon-fill: ${layerColor};
          polygon-opacity: 0.5;
        }
      `);
    // console.log(layerStyle);
  } else if(layerType=='point'){
     var layerStyle = new carto.style.CartoCSS(`
       #layer {
        marker-width: 4;
        marker-fill: ${layerColor};
        marker-line-width: 0.25;
        marker-line-color: ${layerColor};
        marker-fill-opacity: 1;
        marker-placement: point;
        marker-type: ellipse;
        marker-allow-overlap: true;
      }
      #layer[zoom>=15] {
        marker-width: 6;
      }
      `);

  }

  // Add layer checkbox to layer selector part
  $(`<div class="ui checkbox ${s.checkbox_id}">
    <input type="checkbox" name=${s.checkbox_id}>
  <label>
    <svg width="20" height="15">
    <rect x="5"y = '2' width="13" height="13" style="${legend_style}" />
    </svg>
    ${s.title}
  </label>

  </div>
  <br>
  `).appendTo(`.layerSelector #${s.section}`)

  $checked = $('.layerSelector').find('.ui.checkbox#'+s.checkbox_id+' label');

  const new_layer = new carto.layer.Layer(layerSQLSource, layerStyle)
  client.addLayers([new_layer])
  client.getLeafletLayer().addTo(map);
  new_layer.hide();
  taxLotLayer.bringToFront();

// Add clicked event specific for Zoning Amendments; link to LUCATS
if (featureClick){
  new_layer.setFeatureClickColumns(popupElements);
  var click_cust = L.popup({ closeButton: true, autoClose: false });
  new_layer.on('featureClicked', featureEvent => {
    // console.log(featureEvent.data);
    click_cust.setLatLng(featureEvent.latLng);
    click_cust.setContent(`${s.popupheader[0]}: ${String(featureEvent.data[popupElements[0]])}<br> ${s.popupheader[1]}: <a href="http://a030-lucats.nyc.gov/lucats/DirectAccess.aspx?ULURPNO=${String(featureEvent.data[popupElements[1]])}" target="_blank">${String(featureEvent.data[popupElements[1]])}</a>`);
    click_cust.openOn(map);
  });
}


// Add popup
if (popupElements){
  // console.log(popupElements)

  new_layer.setFeatureOverColumns(popupElements)
  var popup_cust = L.popup({ closeButton: false });
  new_layer.on('featureOver', featureEvent => {
    // console.log(featureEvent.data);
    popup_cust.setLatLng(featureEvent.latLng);
    var content_string = '';
    for (var i = 0; i < s.popupheader.length; i++) {
      content_string += `${s.popupheader[i]}: ${String(featureEvent.data[popupElements[i]])}<br>`;
    }
    popup_cust.setContent(content_string);
    if(featureClick && !click_cust.isOpen()){
      popup_cust.openOn(map);
    }
    else if (!featureClick){
      popup_cust.openOn(map);
    }
  });

  new_layer.on('featureOut', featureEvent => {
    popup_cust.removeFrom(map);
  });
}

// Add checkbox functionality

  $('.ui.checkbox.'+s.checkbox_id).checkbox({
      // name: s.name,
      // label: s.title,
      fireOnInit: true,
      onChecked: function () {
        new_layer.show()


      },
      onUnchecked: function () {
        new_layer.hide()

        }
      })
}
//IMPORTS
