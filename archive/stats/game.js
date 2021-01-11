var ctx;
var myChart;
var con_y = [];
var con_x = [];
var wager,total,risk,wins,plays,expected;

function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max)); }

function calculateEx(){
    var wins = 0;
    for(var i = 0; i < 360; i++){
        if(con_y[i] >= risk) wins++
    }
    return wins/360;
}

function calculateEV(){
    var EV = 0;
    for(var i = 0; i < 360; i++){
        if(con_y[i] < risk) EV -= wager;
        else EV += wager;
    }
    return EV/360;
}

function calculateVar(EV){
    var dist = 0;
    for(var i = 0; i < 360; i++){
        var sqerror = (wager-EV) * (wager-EV);
        dist += sqerror * 1/360;
    }
    console.log(dist);
    return Math.sqrt(dist);
}

function updateHtml(){
    $("#wager_print").html("Wager: "+wager);
    $("#risk_print").html("Risk: "+risk);
    $("#total").html("Total Fruit Cups: " + total);

    var EV =calculateEV();
    var dist =calculateVar(EV);
    
    $("#EV").html(EV);
    $("#distr").html(dist);

    var wl = wins/plays;
    if(isNaN(wl)) wl = "-";
    $("#WLoss").html(wl);
    $("#EWLoss").html(calculateEx());
}
function init(){
    wager = 1; risk = 1; total = 100; wins = 0; plays = 0;

    for(var i = 0; i < 360; i++){
        con_y.push(5*Math.sin(i/180 * Math.PI));
        con_x.push(i);
    }
    var plot_y = con_y.slice(0);
    var plot_x = con_x.slice(0);

    ctx = document.getElementById("myChart");
    new_chart(plot_x,plot_y);
    updateHtml();
}

//creates a new chart
function new_chart(plot_x,plot_y){
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: plot_x,
            datasets: [ { data: plot_y, borderColor: "#ffc4dd"} ]
        },
        options: {
            animation: {
                duration: 10000
            },
    
            elements: {
                point:{
                    radius: 0
                }
            },

            legend: {display: false},

            scales:{
                xAxes: [{
                    display: false //this will remove all the x-axis grid lines
                }]
            }
        }
    });
}

function new_play(){
    if(wager > total) return;
    plays++;

    myChart.destroy();
    
    //reset chart
    //weird deep copy problem sleeping
    var plot_y = con_y.slice(0);
    var plot_x = con_x.slice(0);
    var rand = getRandomInt(360);
    console.log(rand);
    for(var i = 0; i < rand; i++){
        plot_y.push(con_y[i]);
        plot_x.push(360+i);
    }
    
    new_chart(plot_x,plot_y);

    if(con_y[rand] < risk){
        console.log("lower");
        total -= wager;
    }
    else{
        console.log("win");
        total += wager * risk;
        wins++;
    }

    updateHtml();
}

//case 10 7.25
function mani_wager(x){
    if(wager+x <= 0) wager = 0;
    else if(wager+x > total) wager = total;
    else wager+= x;
    updateHtml();
}

function mani_risk(x){
    if(risk+x < 0.5) return;
    if(risk+x > 5) return;
    risk+= x;
    //recalc
    updateHtml();
}

