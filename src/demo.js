if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    lineChartCraig();
     lineChartAmie();
     lineChartGary();
     lineChartJason();
     lineChartJulie();
     lineChartLouise();
     lineChartSharon();
     barChartLoss();
    
}



function barChartLoss() {

    var data = {
     labels : ["Jan 11","Jan 18","Jan 25","Feb 1","Feb 8", "Feb 15","Feb 22", "Mar 1"],
    datasets: [
        {
            label: "Actual team loss",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [ 16, 0, 0, 0, 0, 0, 0, 0]
        },
       
       
    ]
};


    var ctx = document.getElementById("barChartLoss").getContext("2d");
    new Chart(ctx).Bar(data);

    legend(document.getElementById("barChartLoss"), data);

{responsive: true}

}



function lineChartAmie() {
    var data = {
        labels : ["Jan 4","Jan 11","Jan 18","Jan 25","Feb 1","Feb 8", "Feb 15","Feb 22", "Mar 1"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [73, 72.1, 73, 73, 73, 73, 73, 73, 73],
            label : 'Actual Weight'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [73, 72, 71.5, 71, 70, 69, 68.5, 67.0, 66.7,],
            label : 'Goal Weight'
        }
        ]
    };








    var ctx = document.getElementById("lineChartAmie").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegendAmie"), data);

{responsive: true}

}


function lineChartCraig() {
    var data = {
         labels : ["Jan 4","Jan 11","Jan 18","Jan 25","Feb 1","Feb 8", "Feb 15","Feb 22", "Mar 1"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [85.7, 83.4, 85.7, 85.7, 85.7, 85.7, 85.7, 85.7, 85.7,],
            label : 'Actual Weight'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [85.7, 84.0, 82.5, 82, 81, 79, 77.0, 76.5, 76.0, ],
            label : 'Goal Weight'
        }
        ]
    };








    var ctx = document.getElementById("lineChartCraig").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegendCraig"), data);



}



function lineChartGary() {
    var data = {
       labels : ["Jan 4","Jan 11","Jan 18","Jan 25","Feb 1","Feb 8", "Feb 15","Feb 22", "Mar 1"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [95.7, 93.4, 95.7, 95.7, 95.7, 95.7, 95.7, 95.7,95.7],
            label : 'Actual Weight'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [95.7, 94.0, 92.5, 91, 90.5, 90, 90, 89.0, 88.9,],
            label : 'Goal Weight'
        }
        ]
    };








    var ctx = document.getElementById("lineChartGary").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegendGary"), data);



}





function lineChartJason() {
    var data = {
         labels : ["Jan 4","Jan 11","Jan 18","Jan 25","Feb 1","Feb 8", "Feb 15","Feb 22", "Mar 1"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [104.8, 101.1, 104.7, 104.7, 104.7, 104.7, 104.7, 104.7, 104.7,],
            label : 'Actual Weight'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [104.8, 102.0, 100.5, 98, 98, 96, 94, 93, 92.0],
            label : 'Goal Weight'
        }
        ]
    };








    var ctx = document.getElementById("lineChartJason").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegendJason"), data);



}





function lineChartJulie() {
    var data = {
        labels : ["Jan 4","Jan 11","Jan 18","Jan 25","Feb 1","Feb 8", "Feb 15","Feb 22", "Mar 1"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [71.6, 70.3, 71.6, 71.6, 71.6, 71.6, 71.6, 71.6, 71.6,],
            label : 'Actual Weight'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [71.6, 70.6, 70.0, 69, 68.5, 68, 67.5, 67.0, 66.6,],
            label : 'Goal Weight'
        }
        ]
    };








    var ctx = document.getElementById("lineChartJulie").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegendJulie"), data);



}


function lineChartLouise() {
    var data = {
        labels : ["Jan 4","Jan 11","Jan 18","Jan 25","Feb 1","Feb 8", "Feb 15","Feb 22", "Mar 1"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [94.8, 91.6, 94.8, 94.8, 94.8, 94.8, 94.8, 94.8, 94.8],
            label : 'Actual Weight'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [94.8, 93.3, 92, 90.5, 89, 87.5, 85, 83, 82.1,],
            label : 'Goal Weight'
        }
        ]
    };








    var ctx = document.getElementById("lineChartLouise").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegendLouise"), data);

{responsive: true}

}



function lineChartSharon() {
    var data = {
         labels : ["Jan 4","Jan 11","Jan 18","Jan 25","Feb 1","Feb 8", "Feb 15","Feb 22", "Mar 1"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [63.5, 61.2, 63.5, 63.5, 63.5, 63.5, 63.5, 63.5, 63.5,],
            label : 'Actual Weight'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [63.5, 62, 61, 60, 59, 58, 57, 56, 56.2,],
            label : 'Goal Weight'
        }
        ]
    };








    var ctx = document.getElementById("lineChartSharon").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegendSharon"), data);



}











