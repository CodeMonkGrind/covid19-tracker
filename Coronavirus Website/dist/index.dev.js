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
                    url = "https://cov19.cc/report.json?v=" + Math.random();
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


                      $("table tbody").append("\n        <tr>\n          <td style=\"color:#6c757d;border-radius:3px;\"><i class=\"flag-icon flag-icon-".concat(country.country_code, "\"></i>  ").concat(country.state || country.country, "</td>\n          <td style=\"color:#6c757d;border-radius:3px;\">").concat(country.confirmed.commaSplit(), "</td>\n          <td style=\"color:var(--text-confirmed);border-radius:3px\">+").concat(country.daily_confirmed.commaSplit(), "</td>\n          <td style=\"color:#6c757d;border-radius:3px\">").concat(country.deaths.commaSplit(), "</td>\n          <td style=\"color:#01b3a6;padding:12px 8px;border-radius:3px\">+").concat(country.daily_deaths.commaSplit(), "</td>\n          <td style=\"color:#6c757d;border-radius:3px\">").concat(country.critical.commaSplit(), "</td>\n          <td style=\"color:var(--yellowmod);border-radius:3px\">").concat(country.recovered.commaSplit(), "</td>\n          <td style=\"color:#6c757d;border-radius:3px\">").concat(country.population.commaSplit(), "</td>\n          <td style=\"color:#9673b9;border-radius:3px\">").concat(country.tests.commaSplit(), "</td>\n\n      "));
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
                        searchPlaceholder: "Search Data"
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

function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

var body = document.querySelector('body');
var full = document.querySelector('.container');
var circles = document.querySelectorAll('.mode');
var btns = document.querySelectorAll('.button');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var btn = _step.value;
    btn.addEventListener('click', function () {
      btn.classList.toggle('pushed');
      var state = btn.innerText;
      console.log(state);
      state = state == "ON" ? "OFF" : "ON";
      btn.innerText = state;
    });
  };

  for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23

  var m = date.getMinutes(); // 0 - 59

  var s = date.getSeconds(); // 0 - 59

  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}

showTime();