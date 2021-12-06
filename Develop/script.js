$(function () {});
  
var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");


var planWorkday = [
  { time: "9 AM", event: "" },
  { time: "10 AM", event: "" },
  { time: "11 AM", event: "" },
  { time: "12 PM", event: "" },
  { time: "1 PM", event: "" },
  { time: "2 PM", event: "" },
  { time: "3 PM", event: "" },
  { time: "4 PM", event: "" },
  { time: "5 PM", event: "" },
];


$("#currentDay").text(today);


planWorkday.forEach(function(timeBlock, index) {
	var timeLabel = timeBlock.time;
	var blockColor = colorRow(timeLabel);
	var row ='<div class="time-block" id="' +
		index +'"><div class="row  input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end ">' +
		timeLabel +
		'</div><textarea class="form-control bg-secondary text-white ' +
		blockColor +
		'">' 

	$(".container").append(row);
});


function colorRow(time) {
	var planNow = moment(now, "H A");
	var planEntry = moment(time, "H A");
    console.log (planNow);
    console.log (planEntry)

}

	planWorkday[blockID].event = userEntry;

	localStorage.setItem("workDay", JSON.stringify(planWorkday));
