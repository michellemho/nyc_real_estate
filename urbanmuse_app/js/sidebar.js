function makeSidebar(d){
  return `
    <h1>
      Tax Lot
    </h1>
    <p>
    <h2 style="font-size:13;">${boroNameLookup[d.data.borough]} Block ${d.data.block} Lot ${d.data.lot}</h2>
    </p>
    <br>
    <table class="ui definition table">
    <col id="name" />
    <col id="value" />
    <col id="far_value" />
    <tbody>
        <tr>
            <td>Address</td>
            <td colspan="2"><a style="text-decoration:underline; font-weight:bold" href="https://zola.planning.nyc.gov/lot/${d.data.borocode}/${d.data.block}/${d.data.lot}" target="_blank"> ${d.data.address} </a></td>
        </tr>
        <tr>
            <td>Primary Zoning District</td>
            <td colspan="2">${d.data.zonedist1}</td>
        </tr>
        <tr>
            <td>Owner</td>
            <td colspan="2">${d.data.ownername}</td>
        </tr>
        <tr>
            <td>Lot Area</td>
            <td colspan="2">${commaSeperateThousands(d.data.lotarea)} sq ft</td>
        </tr>
        <tr>
        <td rowspan="4">Maximum Allowable FARs</td>
          <tr>
          <td>Residential FAR</td>
          <td>${d.data.residfar}</td>
          </tr>
          <tr>
          <td>Commerical FAR</td>
          <td>${d.data.commfar}</td>
          </tr>
          <tr>
          <td>Community Facilities FAR</td>
          <td>${d.data.facilfar}</td>
          </tr>
        </tr>
        <tr>
          <td>Year Built</td>
          <td colspan="2">${d.data.yearbuilt}</td>
        </tr>
        <tr>
          <td>Year Altered</td>
          <td colspan="2">${d.data.yearalter1}</td>
        </tr>
        <tr>
          <td>Building Class</td>
          <td colspan="2">${d.data.bldgclass} -- ${bldgclassLookup[d.data.bldgclass]}</td>
        </tr>
        <tr>
          <td>Land to Building Ratio</td>
          <td colspan="2">${d.data.bldg_land_ratio}</td>
        </tr>
        <tr>
          <td>Building Info</td>
          <td colspan="2"><a style="text-decoration:underline; font-weight:bold" href="http://a810-bisweb.nyc.gov/bisweb/PropertyBrowseByBBLServlet?allborough=${d.data.borocode}&allblock=${d.data.block}&alllot=${d.data.lot}&go5=+GO+&requestid=0" target="_blank">
              BISWEB </a></td>
        </tr>
        <tr>
          <td>Property Records</td>
          <td colspan="2"><a style="text-decoration:underline; font-weight:bold" href="http://a836-acris.nyc.gov/bblsearch/bblsearch.asp?borough=${d.data.borocode}&block=${d.data.block}&lot=${d.data.lot}" target="_blank">
            View ACRIS
          </a></td>
        </tr>
    </tbody>
    </table>

    <br>

    <h2> Neighborhood Information </h2>
    <table class="ui definition table">
      <thead>
        <tr>
          <th style="background-color: #EE4546; border: 0px; box-shadow: none"></th>
          <th>Value</th>
          <th>Percentile</th>
        </tr>
      </thead>
      <tbody>
          <tr>
              <td>Median Household Income (2016) of Census Block Group</td>
              <td>$${commaSeperateThousands(Math.round(d.data.median_hh_income*100)/100)}</td>
              <td class='rank'>${100 - Math.round(d.data.median_hh_income_rank*100)}</td>
          </tr>
          <tr>
              <td>Population Density Growth (2014-2015) of Census Block Group</td>
              <td>${Math.round(d.data.pop_density_change)*100/100}%</td>
              <td class='rank'>${100 - Math.round(d.data.pop_density_change_rank*100)}</td>
          </tr>
          <td class="center aligned" colspan="3">2017 Crimes within Quarter Mile</td>
              <tr>
                <td>Misdemeanors</td>
                <td>${d.data.misdemeanors_400m}</td>
                <td class='rank'>${Math.round(d.data.misdemeanors_400m_rank*100)}</td>

              </tr>
              <tr>
                <td>Felonies</td>
                <td>${d.data.felonies_400m}</td>
                <td class='rank'>${Math.round(d.data.felonies_400m_rank*100)}</td>
              </tr>
          <tr>
            <td>Ridership Growth of Nearest Subway</td>
            <td>${Math.round(d.data.nearest_subway_yoy2015_2016*100)}%</td>
            <td class='rank'>${100 - Math.round(d.data.nearest_subway_yoy2015_2016_rank*100)}</td>
          </tr>
          <td class="center aligned" colspan="3">Distances to Nearest Facilities (miles)</td>
              <tr>
                <td>Child Care and Pre-K</td>
                <td>${Math.round(d.data.child_care_prek_distance*100)/100}</td>
                <td class='rank'>${Math.round(d.data.child_care_prek_distance_rank*100)}</td>
              </tr>
              <tr>
                <td>Library</td>
                <td>${Math.round(d.data.libraries_distance*100)/100}</td>
                <td class='rank'>${Math.round(d.data.libraries_distance_rank*100)}</td>
              </tr>
              <tr>
                <td>School (K-12)</td>
                <td>${Math.round(d.data.schools_distance*100)/100}</td>
                <td class='rank'>${Math.round(d.data.schools_distance_rank*100)}</td>

              </tr>
              <tr>
                <td>Health Care</td>
                <td>${Math.round(d.data.healthcare_distance*100)/100}</td>
                <td class='rank'>${Math.round(d.data.healthcare_distance_rank*100)}</td>
              </tr>
              <tr>
                <td>Public Safety (NYPD and NYCHA)</td>
                <td>${Math.round(d.data.police_station_distance*100)/100}</td>
                <td class='rank'>${Math.round(d.data.police_station_distance_rank*100)}</td>
              </tr>
              <tr>
                <td>Emergency Services (FDNY)</td>
                <td>${Math.round(d.data.fire_station_distance*100)/100}</td>
                <td class='rank'>${Math.round(d.data.fire_station_distance_rank*100)}</td>
              </tr>
            <tr>
            <td colspan="3"><a style="text-decoration:underline; font-weight:bold" href="https://maps.nyc.gov/moer/speed/login.jsp" target="_blank"> Link to OER Environmental E-Database </a></td>
            </tr>
            <tr>
            <td colspan="3">
              <a style="text-decoration:underline; font-weight:bold" href="https://www.niche.com/k12/search/best-school-districts/t/new-york-city-ny/" target="_blank"> Link to Niche School Rankings </a></td>
            </tr>
        </tbody>
        </table>

    <br>

    <h2> Council District </h2>
    <table class="ui definition table">
      <tbody>
      <tr>
        <td>Council District</td>
        <td><a style="text-decoration:underline; font-weight:bold" href="https://council.nyc.gov/district-${d.data.council}/" target="_blank">
        Council District ${d.data.council} </a></td>
      </tr>
      <tr>
        <td>Council District Neighborhoods</td>
        <td>${d.data.council_neighborhood}</td>
      </tr>
      <tr>
        <td>Council Representative</td>
        <td>${d.data.council_rep_name}</td>
      </tr>
      <tr>
        <td>Next election</td>
        <td>${d.data.next_election}</td>
      </tr>
      <tr>
        <td>District Vote on MIH</td>
        <td>${d.data.mih_vote}</td>
      </tr>
      <tr>
      <td class="center aligned" colspan="2">
      <a style="text-decoration:underline; font-weight:bold" href="http://legistar.council.nyc.gov/Calendar.aspx" target="_blank">
      Link to Council Calendar </a>
      </td>
      </tr>
    </tbody>
    </table>

    <br>

    <h2> Community Board </h2>
    <table class="ui definition table">
      <tbody>
      <tr>
        <td>Community Board</td>
        <td colspan="2"><a style="text-decoration:underline; font-weight:bold" href="https://communityprofiles.planning.nyc.gov/${cdURL(`${d.data.cd}`)[0]}" target="_blank"> ${cdURL(`${d.data.cd}`)[1]} ${d.data.cd.toString().slice(1,3)} </a> </td>
      </tr>

      <tr>
        <td class="center aligned" colspan="3">Top Three Issues</td>
      </tr>
      <tr>
        <td> 1 </td>
        <td colspan="2">${d.data.son_issue_1}</td>
      </tr>
      <tr>
        <td> 2 </td>
        <td colspan="2">${d.data.son_issue_2}</td>
      </tr>
      <tr>
        <td> 3 </td>
        <td colspan="2">${d.data.son_issue_3}</td>
      </tr>
    <tr>
    </tbody>
    </table>

    <table class="ui definition table">
    <thead>
      <th style="background-color: #EE4546; border: 0px; box-shadow: none"></th>
      <th>Percent Change</th>
      <th>Percentile</th>
    </thead>
    <tbody>
    <tr>
      <td class="center aligned" colspan="3">Change in DOB Permits (2015 - 2016)</td>
    </tr>
    <tr>
      <td>Alterations</td>
      <td>${Math.round((d.data.al-1)*100*100)/100}%</td>
      <td class='rank'>${Math.round((1-d.data.al_rank)*100)}</td>
    </tr>
    <tr>
      <td>New Buildings</td>
      <td>${Math.round((d.data.nb-1)*100*100)/100}%</td>
      <td class='rank'>${Math.round((1-d.data.nb_rank)*100)}</td>
    </tr>
    <tr>
      <td>Demolitions</td>
      <td>${Math.round((d.data.dm-1)*100*100)/100}%</td>
      <td class='rank'>${Math.round((1-d.data.dm_rank)*100)}</td>
    </tr>
    <tr>
      <td>Foundations</td>
      <td>${Math.round((d.data.fo-1)*100*100)/100}%</td>
      <td class='rank'>${Math.round((1 - d.data.fo_rank)*100)}</td>
    </tr>
    <tr>
    <td class="center aligned" colspan="3">
    <a style="text-decoration:underline; font-weight:bold" href="https://www1.nyc.gov/assets/buildings/html/dob-development-report.html" target="_blank">
    Link to Construction Dashboard </a>
    </td>
    </tr>
    </tbody>
    </table>

    <img src='https://maps.googleapis.com/maps/api/streetview?location=${d.data.center_y},${d.data.center_x}&size=300x300&key=AIzaSyDjecnVOJ6JEmYpcsyfmhUtGxRmneOVuaE'>
    `
  };
