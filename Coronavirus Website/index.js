// create an async function to handle promised based execution order
(async () => {
    // define some globals
    var datatable;
    var update = async () => {
        // download the data
        console.log("Report: Download Started");
        var url = "https://cov19.cc/report.json?v=" + Math.random();
        var res = await fetch(url);
        var report = await res.json();

        // clear the table for updating
        $("table tbody").empty();

        // hide the table for hidden initialize
        $("table").hide();

        // set the last updated time
        $("#last_updated").text(moment.utc(report.last_updated).fromNow());

        // get the world countries list
        var world = report.regions.world;
        var world_list = world.list;

        // loop over every country
        for (var i in world_list) {
            var country = world_list[i];

            // replace -1 with unknown
            for (var o in country) {
                if (country[o] == -1) country[o] = "N/A";
            }

            // set the totals
            for (var o in world.totals) {
                $(`#total_${o}`).text(world.totals[o].commaSplit());
            }

            // add the country to the table
            $("table tbody").append(`
        <tr>
          <td style="color:#6c757d;border-radius:3px;"><i class="flag-icon flag-icon-${country.country_code}"></i>  ${country.state || country.country}</td>
          <td style="color:#6c757d;border-radius:3px;">${country.confirmed.commaSplit()}</td>
          <td style="color:var(--text-confirmed);border-radius:3px">+${country.daily_confirmed.commaSplit()}</td>
          <td style="color:#6c757d;border-radius:3px">${country.deaths.commaSplit()}</td>
          <td style="color:#01b3a6;padding:12px 8px;border-radius:3px">+${country.daily_deaths.commaSplit()}</td>
          <td style="color:#6c757d;border-radius:3px">${country.critical.commaSplit()}</td>
          <td style="color:var(--yellowmod);border-radius:3px">${country.recovered.commaSplit()}</td>
          <td style="color:#6c757d;border-radius:3px">${country.population.commaSplit()}</td>
          <td style="color:#9673b9;border-radius:3px">${country.tests.commaSplit()}</td>

      `);
        }

        // show the table so datatables doesn't die
        $("table").show();

        // init the data table
        if (!datatable)
            datatable = $("table").DataTable({
                paging: false,
                searching: true,
                info: false,
                autoWidth: true,
                lengthChange: false,
                // scrollY: "10000px",
                scrollCollapse: true,
                order: [
                    [1, "desc"],
                ],
                rowReorder: {
                    selector: "td:nth-child(2)",
                },
                responsive: true,
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search Data",
                },
                columnDefs: [{
                    type: "formatted-num",
                    targets: [1, 2, 3],
                }, ],
            });





        // sort the table by confirmed cases
        datatable.order([2, 'desc']).draw();

        // hide the loading icon
        $("#loader").hide();



    };

    // store last updated date
    var old_last_updated;

    // check for the last update
    var update_check = async () => {
        console.log("Checking for updates");
        var res = await fetch("https://cov19.cc/last_updated.txt");
        var last_updated = await res.text();

        // if the last updated date is newer than the stored last updated date then update the variable and update the table with the new data
        if (old_last_updated == last_updated) return;
        old_last_updated = last_updated;

        update();
    };

    // initialize
    update_check();

    // check for updates every 60 seconds
    setInterval(update_check, 60000);
})();

//cov19 prototypes
String.prototype.commaSplit = function () {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

Number.prototype.commaSplit = String.prototype.commaSplit;




function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
}


const body = document.querySelector('body');
const full = document.querySelector('.container');
const circles = document.querySelectorAll('.mode');
const btns = document.querySelectorAll('.button');
for (const btn of btns) {
    btn.addEventListener('click', () => {
        btn.classList.toggle('pushed');
        var state = btn.innerText;
        console.log(state)
        state = (state == "ON") ? "OFF" : "ON";
        btn.innerText = state;
    });
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

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();