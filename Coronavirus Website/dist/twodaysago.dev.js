"use strict";

// create an async function to handle promised based execution order
(function _callee() {
  var datatable, update, old_last_updated, update_check;
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // define some globals
          update = function update() {
            var url, res, report, world, world_list, i, country, o;
            return regeneratorRuntime.async(function update$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // download the data
                    console.log("Report: Download Started");
                    url = "https://ncov2021.com/twodaysago.json?v=" + Math.random();
                    _context.next = 4;
                    return regeneratorRuntime.awrap(fetch(url));

                  case 4:
                    res = _context.sent;
                    _context.next = 7;
                    return regeneratorRuntime.awrap(res.json());

                  case 7:
                    report = _context.sent;
                    // clear the table for updating
                    $("table tbody").empty(); // hide the table for hidden initialize

                    $("table").hide(); // set the last updated time

                    $("#last_updated").text(moment.utc(report.last_updated).fromNow()); // get the world countries list

                    world = report.regions.world;
                    world_list = world.list; // loop over every country

                    for (i in world_list) {
                      country = world_list[i]; // replace -1 with unknown

                      for (o in country) {
                        if (country[o] == -1) country[o] = "N/A";
                      } // set the totals


                      for (o in world.totals) {
                        $("#total_".concat(o)).text(world.totals[o].commaSplit());
                      } // add the country to the table


                      $("table tbody").append("\n        <tr>\n             <td><i class=\"flag-icon flag-icon-".concat(country.country_code, "\"></i>  ").concat(country.state || country.country, "</td>\n          <td style=\"color:var(--table-confblue)\">").concat(country.confirmed.commaSplit(), "</td>\n          <td style=\"color:#02ff13;background-color:var(--table-confdark);\">+ ").concat(country.daily_confirmed.commaSplit(), "</td>\n          <td style=\"color:#ea3344\">").concat(country.deaths.commaSplit(), "</td>\n          <td style=\"color:#ff0004;background-color:var(--table-confdark);padding:12px 8px\">+ ").concat(country.daily_deaths.commaSplit(), "</td>\n          <td style=\"color:#fd6500\">").concat(country.critical.commaSplit(), "</td>\n          <td style=\"color:var(--table-recoyellow)\">").concat(country.recovered.commaSplit(), "</td>\n          <td style=\"color:var(--text-tests)\">").concat(country.tests.commaSplit(), "</td>\n          <td style=\"color:#ff33e9\">").concat(country.population.commaSplit(), "</td>\n          <td style=\"color:#ee0979\">").concat(country.country_code.commaSplit(), "</td>\n\n        </tr>\n        \n      "));
                    } // show the table so datatables doesn't die


                    $("table").show(); // init the data table

                    if (!datatable) datatable = $("table").DataTable({
                      paging: false,
                      searching: true,
                      info: false,
                      autoWidth: true,
                      lengthChange: false,
                      // scrollY: "10000px",
                      scrollCollapse: true,
                      order: [[1, "desc"]],
                      rowReorder: {
                        selector: "td:nth-child(2)"
                      },
                      responsive: true,
                      language: {
                        search: "_INPUT_",
                        searchPlaceholder: "search data"
                      },
                      columnDefs: [{
                        type: "formatted-num",
                        targets: [1, 2, 3]
                      }]
                    }); // sort the table by confirmed cases

                    datatable.order([2, 'desc']).draw(); // hide the loading icon

                    $("#loader").hide();

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }; // store last updated date


          // check for the last update
          update_check = function update_check() {
            var res, last_updated;
            return regeneratorRuntime.async(function update_check$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("Checking for updates");
                    _context2.next = 3;
                    return regeneratorRuntime.awrap(fetch("https://cov19.cc/last_updated.txt"));

                  case 3:
                    res = _context2.sent;
                    _context2.next = 6;
                    return regeneratorRuntime.awrap(res.text());

                  case 6:
                    last_updated = _context2.sent;

                    if (!(old_last_updated == last_updated)) {
                      _context2.next = 9;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 9:
                    old_last_updated = last_updated;
                    update();

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          }; // initialize


          update_check(); // check for updates every 60 seconds

          setInterval(update_check, 60000);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
})(); //cov19 prototypes


String.prototype.commaSplit = function () {
  return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

Number.prototype.commaSplit = String.prototype.commaSplit;