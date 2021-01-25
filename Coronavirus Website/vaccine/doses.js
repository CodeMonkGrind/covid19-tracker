var myArray = [

{
"name":"Texas",
"doses":"1,181,483",
"perhundred":"4,075"
},
{
"name":"Florida",
"doses":"965,756",
"perhundred":"4,497"
},
{
"name":"California",
"doses":"865,387",
"perhundred":"2,190"
},
{
"name":"New York",
"doses":"835,875",
"perhundred":"4,297"
},
{
"name":"Illinois",
"doses":"508,732",
"perhundred":"4,015"
},
{
"name":"Georgia",
"doses":"484,775",
"perhundred":"4,566"
},
{
"name":"Ohio",
"doses":"456,131",
"perhundred":"3,902"
},
{
"name":"Michigan",
"doses":"437,027",
"perhundred":"4,376"
},
{
"name":"New Jersey",
"doses":"359,617",
"perhundred":"4,049"
},
{
"name":"North Carolina",
"doses":"344,456",
"perhundred":"3,284"
},
{
"name":"Pennsylvania",
"doses":"340,947",
"perhundred":"2,663"
},
{
"name":"Indiana",
"doses":"317,461",
"perhundred":"4,716"
},
{
"name":"Virginia",
"doses":"304,562",
"perhundred":"3,568"
},
{
"name":"Colorado",
"doses":"278,686",
"perhundred":"4,839"
},
{
"name":"Tennessee",
"doses":"263,888",
"perhundred":"3,864"
},
{
"name":"Massachusetts",
"doses":"257,175",
"perhundred":"3,731"
},
{
"name":"Arizona",
"doses":"255,275",
"perhundred":"3,507"
},
{
"name":"Wisconsin",
"doses":"244,561",
"perhundred":"4,200"
},
{
"name":"Maryland",
"doses":"241,294",
"perhundred":"3,991"
},
{
"name":"Washington",
"doses":"235,744",
"perhundred":"3,096"
},
{
"name":"Louisiana",
"doses":"232,131",
"perhundred":"4,993"
},
{
"name":"Kentucky",
"doses":"221,440",
"perhundred":"4,957"
},
{
"name":"Minnesota",
"doses":"200,130",
"perhundred":"3,549"
},
{
"name":"Oregon",
"doses":"171,235",
"perhundred":"4,060"
},
{
"name":"Oklahoma",
"doses":"169,411",
"perhundred":"4,281"
},
{
"name":"Connecticut",
"doses":"166,722",
"perhundred":"4,676"
},
{
"name":"Utah",
"doses":"156,882",
"perhundred":"4,893"
},
{
"name":"Missouri",
"doses":"153,664",
"perhundred":"2,504"
},
{
"name":"Alabama",
"doses":"148,685",
"perhundred":"3,032"
},
{
"name":"Arkansas",
"doses":"147,609",
"perhundred":"4,891"
},
{
"name":"West Virginia",
"doses":"132,192",
"perhundred":"7,376"
},
{
"name":"Iowa",
"doses":"117,406",
"perhundred":"3,721"
},
{
"name":"Mississippi",
"doses":"113,578",
"perhundred":"3,816"
},
{
"name":"South Carolina",
"doses":"108,590",
"perhundred":"2,109"
},
{
"name":"Kansas",
"doses":"101,510",
"perhundred":"3,484"
},
{
"name":"Nebraska",
"doses":"91,371",
"perhundred":"4,723"
},
{
"name":"Puerto Rico",
"doses":"87,512",
"perhundred":"2,740"
},
{
"name":"Maine",
"doses":"81,355",
"perhundred":"6,052"
},
{
"name":"New Mexico",
"doses":"80,172",
"perhundred":"3,823"
},
{
"name":"Nevada",
"doses":"67,679",
"perhundred":"2,197"
},
{
"name":"North Dakota",
"doses":"61,094",
"perhundred":"8,017"
},
{
"name":"Idaho",
"doses":"58,549",
"perhundred":"3,276"
},
{
"name":"Montana",
"doses":"57,221",
"perhundred":"5,354"
},
{
"name":"Alaska",
"doses":"56,869",
"perhundred":"7,774"
},
{
"name":"New Hampshire",
"doses":"56,797",
"perhundred":"4,177"
},
{
"name":"South Dakota",
"doses":"47,647",
"perhundred":"5,386"
},
{
"name":"Rhode Island",
"doses":"46,817",
"perhundred":"4,419"
},
{
"name":"Delaware",
"doses":"46,141",
"perhundred":"4,738"
},
{
"name":"Hawaii",
"doses":"40,386",
"perhundred":"2,852"
},
{
"name":"Vermont",
"doses":"34,481",
"perhundred":"5,526"
},
{
"name":"District of Columbia",
"doses":"31,667",
"perhundred":"4,487"
},
{
"name":"Wyoming",
"doses":"23,172",
"perhundred":"4,004"
},
{
"name":"Guam",
"doses":"3,785",
"perhundred":"2,283"
},
{
"name":"Northern Mariana Islands",
"doses":"3,760",
"perhundred":"6,610"
},
{
"name":"American Samoa",
"doses":"3,144",
"perhundred":"5,646"
},
{
"name":"U.S. Virgin Islands",
"doses":"1,474",
"perhundred":"1,408"
}
,
]



$('th').on('click', function () {
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if (order == 'desc') {
        $(this).data('order', "asc")
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'

    } else {
        $(this).data('order', "desc")
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        text += '&#9650'

    }
    $(this).html(text)
    buildTable(myArray)
})


buildTable(myArray)

function buildTable(data) {
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
							<td style="color:#6c757d;">${data[i].name}</td>
							<td style="color:#28a745;">${data[i].doses}</td>
							<td style="color:#9673b9;">${data[i].perhundred}</td>
					  </tr>`
        table.innerHTML += row


    }
}