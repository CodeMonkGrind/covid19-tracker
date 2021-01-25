"use strict";

var myArray = [{
  "name": "Texas",
  "doses": "618,298",
  "perhundred": "2132.36"
}, {
  "name": "California",
  "doses": "584,366",
  "perhundred": "1478.95"
}, {
  "name": "New York",
  "doses": "434,802",
  "perhundred": "2235.08"
}, {
  "name": "Florida",
  "doses": "419,416",
  "perhundred": "1952.79"
}, {
  "name": "Illinois",
  "doses": "234,051",
  "perhundred": "1847.02"
}, {
  "name": "Pennsylvania",
  "doses": "226,478",
  "perhundred": "1769.08"
}, {
  "name": "Ohio",
  "doses": "223,424",
  "perhundred": "1911.39"
}, {
  "name": "Tennessee",
  "doses": "196,642",
  "perhundred": "2879.44"
}, {
  "name": "North Carolina",
  "doses": "178,136",
  "perhundred": "1698.46"
}, {
  "name": "Michigan",
  "doses": "174,749",
  "perhundred": "1749.79"
}, {
  "name": "New Jersey",
  "doses": "156,021",
  "perhundred": "1756.56"
}, {
  "name": "Massachusetts",
  "doses": "151,430",
  "perhundred": "2197.02"
}, {
  "name": "Virginia",
  "doses": "150,104",
  "perhundred": "1758.58"
}, {
  "name": "Colorado",
  "doses": "145,164",
  "perhundred": "2520.76"
}, {
  "name": "Indiana",
  "doses": "137,933",
  "perhundred": "2048.85"
}, {
  "name": "Georgia",
  "doses": "135,605",
  "perhundred": "1277.19"
}, {
  "name": "Washington",
  "doses": "135,097",
  "perhundred": "1774.12"
}, {
  "name": "Arizona",
  "doses": "126,090",
  "perhundred": "1732.31"
}, {
  "name": "Missouri",
  "doses": "124,721",
  "perhundred": "2032.14"
}, {
  "name": "Wisconsin",
  "doses": "123,402",
  "perhundred": "2119.42"
}, {
  "name": "Connecticut",
  "doses": "116,277",
  "perhundred": "3261.36"
}, {
  "name": "Maryland",
  "doses": "114,731",
  "perhundred": "1897.74"
}, {
  "name": "Minnesota",
  "doses": "110,427",
  "perhundred": "1958.05"
}, {
  "name": "Kentucky",
  "doses": "107,799",
  "perhundred": "2412.87"
}, {
  "name": "Oklahoma",
  "doses": "103,020",
  "perhundred": "2603.51"
}, {
  "name": "Utah",
  "doses": "89,431",
  "perhundred": "2789.53"
}, {
  "name": "West Virginia",
  "doses": "87,215",
  "perhundred": "4866.51"
}, {
  "name": "Iowa",
  "doses": "80,621",
  "perhundred": "2555.28"
}, {
  "name": "Louisiana",
  "doses": "78,608",
  "perhundred": "1690.93"
}, {
  "name": "Nebraska",
  "doses": "68,297",
  "perhundred": "3530.64"
}, {
  "name": "Oregon",
  "doses": "66,933",
  "perhundred": "1586.94"
}, {
  "name": "South Carolina",
  "doses": "64,729",
  "perhundred": "1257.19"
}, {
  "name": "Kansas",
  "doses": "58,841",
  "perhundred": "2019.73"
}, {
  "name": "Alabama",
  "doses": "57,105",
  "perhundred": "1164.65"
}, {
  "name": "New Mexico",
  "doses": "56,366",
  "perhundred": "2688.15"
}, {
  "name": "Puerto Rico",
  "doses": "51,428",
  "perhundred": "1610.3"
}, {
  "name": "Nevada",
  "doses": "44,656",
  "perhundred": "1449.8"
}, {
  "name": "Maine",
  "doses": "43,362",
  "perhundred": "3225.83"
}, {
  "name": "New Hampshire",
  "doses": "41,868",
  "perhundred": "3079.18"
}, {
  "name": "Mississippi",
  "doses": "41,541",
  "perhundred": "1395.8"
}, {
  "name": "Arkansas",
  "doses": "40,899",
  "perhundred": "1355.26"
}, {
  "name": "South Dakota",
  "doses": "36,890",
  "perhundred": "4169.97"
}, {
  "name": "Montana",
  "doses": "31,444",
  "perhundred": "2942.05"
}, {
  "name": "Rhode Island",
  "doses": "30,264",
  "perhundred": "2856.82"
}, {
  "name": "North Dakota",
  "doses": "29,954",
  "perhundred": "3930.65"
}, {
  "name": "Idaho",
  "doses": "28,194",
  "perhundred": "1577.67"
}, {
  "name": "Hawaii",
  "doses": "27,375",
  "perhundred": "1933.44"
}, {
  "name": "Alaska",
  "doses": "24,562",
  "perhundred": "3357.55"
}, {
  "name": "Vermont",
  "doses": "22,331",
  "perhundred": "3578.75"
}, {
  "name": "Delaware",
  "doses": "21,814",
  "perhundred": "2240.17"
}, {
  "name": "District of Columbia",
  "doses": "21,681",
  "perhundred": "3072.06"
}, {
  "name": "Wyoming",
  "doses": "12,996",
  "perhundred": "2245.49"
}, {
  "name": "Guam",
  "doses": "3,791",
  "perhundred": "2286.93"
}, {
  "name": "Northern Mariana Islands",
  "doses": "3,101",
  "perhundred": "5451.64"
}, {
  "name": "American Samoa",
  "doses": "1,331",
  "perhundred": "2390.06"
}, {
  "name": "U.S. Virgin Islands",
  "doses": "410",
  "perhundred": "391.67"
}];
$('th').on('click', function () {
  var column = $(this).data('column');
  var order = $(this).data('order');
  var text = $(this).html();
  text = text.substring(0, text.length - 1);

  if (order == 'desc') {
    $(this).data('order', "asc");
    myArray = myArray.sort(function (a, b) {
      return a[column] > b[column] ? 1 : -1;
    });
    text += '&#9660';
  } else {
    $(this).data('order', "desc");
    myArray = myArray.sort(function (a, b) {
      return a[column] < b[column] ? 1 : -1;
    });
    text += '&#9650';
  }

  $(this).html(text);
  buildTable(myArray);
});
buildTable(myArray);

function buildTable(data) {
  var table = document.getElementById('myTable');
  table.innerHTML = '';

  for (var i = 0; i < data.length; i++) {
    var row = "<tr>\n\t\t\t\t\t\t\t<td style=\"color:#6c757d;\">".concat(data[i].name, "</td>\n\t\t\t\t\t\t\t<td style=\"color:#28a745;\">").concat(data[i].doses, "</td>\n\t\t\t\t\t\t\t<td style=\"color:#9673b9;\">").concat(data[i].perhundred, "</td>\n\t\t\t\t\t  </tr>");
    table.innerHTML += row;
  }
}