// chart1data Start
const chart1_data = [90, 40, 20, 10, 50]
const chart1_colors = ["#C52A26", "#F45E07", "#EF9B15", "#FF6900", "#EF9B15"]
max1 = 100
// max1 = Math.max.apply(null, chart1_data);
// chart1data END



// chart2data Start
const chart2_data = [0, 3, 0, 4, 9, 4, 4, 37, 79, 152, 1644]

const chart2_nps_scrore = 10
// chart2data END

// chart3data Start
const chart3_1_data = [5, 15]
const chart3_1_colors = [
    '#C52A26',
    '#F4F4F4',
]
const chart3_2_data = [5, 15]
const chart3_2_colors = [
    '#F45E07',
    '#F4F4F4',
]
const chart3_3_data = [5, 15]
const chart3_3_colors = [
    '#EF9B15',
    '#F4F4F4',
]
const chart3_4_data = [5, 15]
const chart3_4_colors = [
    '#FF6900',
    '#F4F4F4',
]
const chart3_5_data = [5, 15]
const chart3_5_colors = [
    '#FC8201',
    '#F4F4F4',
]

const chart3_6_data = [5, 15]
const chart3_6_colors = [
    '#F6BA03',
    '#F4F4F4',
]
// chart3data END


// Chart4data Start
const chart4_1_data = [5, 15]
const chart4_1_colors = [
    '#C52A26',
    '#F4F4F4',
]
const chart4_2_data = [5, 15]
const chart4_2_colors = [
    '#F45E07',
    '#F4F4F4',
]
const chart4_3_data = [5, 15]
const chart4_3_colors = [
    '#EF9B15',
    '#F4F4F4',
]
const chart4_4_data = [5, 15]
const chart4_4_colors = [
    '#FF6900',
    '#F4F4F4',
]
const chart4_5_data = [5, 15]
const chart4_5_colors = [
    '#FC8201',
    '#F4F4F4',
]
const chart4_6_data = [5, 15]
const chart4_6_colors = [
    '#F6BA03',
    '#F4F4F4',
]
// Chart4data END

// Chart5 data Start
const chart5_1_data = [5, 15]
const chart5_1_colors = [
    '#C52A26',
    '#F4F4F4',
]
const chart5_2_data = [5, 15]
const chart5_2_colors = [
    '#F45E07',
    '#F4F4F4',
]
const chart5_3_data = [5, 15]
const chart5_3_colors = [
    '#EF9B15',
    '#F4F4F4',
]
const chart5_4_data = [5, 15]
const chart5_4_colors = [
    '#FF6900',
    '#F4F4F4',
]
const chart5_5_data = [5, 15]
const chart5_5_colors = [
    '#FC8201',
    '#F4F4F4',
]
const chart5_6_data = [5, 15]
const chart5_6_colors = [
    '#F6BA03',
    '#F4F4F4',
]
//  Chart5data END 

//  Chart6data Start 
const chart6_data = [100, 50]
const chart6_colors = ["#F6BA03", "#C52A26"]
//  Chart6data END //////////////////////////////////////////////////////////////////////////////////////////


// Plugins //////////////////////////////////////////////////////////////////////////////////////////////////
const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart, args, options) {
        const {
            ctx,
            chartArea: {
                top,
                right,
                bottom,
                left,
                width,
                height
            }
        } = chart
        ctx.save();
        ctx.fillStyle = options.fontColor
        ctx.font = options.fontSize + "px " + options.fontFamily
        ctx.textAlign = "center"
        ctx.fillText(options.value, width / 2, (height / 2) + (options.fontSize * 0.34))
    }
}
// Plugins END //////////////////////////////////////////////////////////////////////////////////////////////
console.log(document.getElementById("chart-3-block").scrollWidth)

document.getElementById("")




// Chart1 START /////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("chart1_1").style.width = max1 * chart1_data[0] / 100 + "%"
document.getElementById("chart1_2").style.width = max1 * chart1_data[1] / 100 + "%"
document.getElementById("chart1_3").style.width = max1 * chart1_data[2] / 100 + "%"
document.getElementById("chart1_4").style.width = max1 * chart1_data[3] / 100 + "%"
document.getElementById("chart1_5").style.width = max1 * chart1_data[4] / 100 + "%"

document.getElementById("chart1_1").style.backgroundColor = chart1_colors[0]
document.getElementById("chart1_2").style.backgroundColor = chart1_colors[1]
document.getElementById("chart1_3").style.backgroundColor = chart1_colors[2]
document.getElementById("chart1_4").style.backgroundColor = chart1_colors[3]
document.getElementById("chart1_5").style.backgroundColor = chart1_colors[4]

// Chart1 END /////////////////////////////////////////////////////////////////////////////////////////////
// Chart2 START /////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('1').innerHTML = chart2_data[0]
document.getElementById('2').innerHTML = chart2_data[1]
document.getElementById('3').innerHTML = chart2_data[2]
document.getElementById('4').innerHTML = chart2_data[3]
document.getElementById('5').innerHTML = chart2_data[4]
document.getElementById('6').innerHTML = chart2_data[5]
document.getElementById('7').innerHTML = chart2_data[6]
document.getElementById('8').innerHTML = chart2_data[7]
document.getElementById('9').innerHTML = chart2_data[8]
document.getElementById('10').innerHTML = chart2_data[9]
document.getElementById('11').innerHTML = chart2_data[10]


document.getElementById('dect-bottom').innerHTML = "10%"
document.getElementById('passiv-bottom').innerHTML = "10%"
document.getElementById('prom-bottom').innerHTML = "10%"
document.getElementById('nps-score').innerHTML = chart2_nps_scrore + "%"


// Chart2 END /////////////////////////////////////////////////////////////////////////////////////////////
// Chart3 Start /////////////////////////////////////////////////////////////////////////////////////////////
const ctx3_1 = document.getElementById('chart-3-1');
const ctx3_2 = document.getElementById('chart-3-2');
const ctx3_3 = document.getElementById('chart-3-3');
const ctx3_4 = document.getElementById('chart-3-4');
const ctx3_5 = document.getElementById('chart-3-5');
const ctx3_6 = document.getElementById('chart-3-6');

new Chart(ctx3_1, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart3_1_data,
            backgroundColor: chart3_1_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart3_1_data[0] / chart3_1_data[1] * 100) + "%"
            },
        }
    }
});

new Chart(ctx3_2, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart3_2_data,
            backgroundColor: chart3_2_colors
        }]
    },
    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart3_2_data[0] / chart3_2_data[1] * 100) + "%"
            },
        }
    }
});

new Chart(ctx3_3, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart3_3_data,
            backgroundColor: chart3_3_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart3_3_data[0] / chart3_3_data[1] * 100) + "%"
            },
        }
    }
});


new Chart(ctx3_4, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart3_4_data,
            backgroundColor: chart3_4_colors
        }]
    },
    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart3_4_data[0] / chart3_4_data[1] * 100) + "%"
            },
        }
    }
});

new Chart(ctx3_5, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart3_5_data,
            backgroundColor: chart3_5_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart3_5_data[0] / chart3_5_data[1] * 100) + "%"
            },
        }
    }
});

new Chart(ctx3_6, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart3_6_data,
            backgroundColor: chart3_6_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart3_6_data[0] / chart3_6_data[1] * 100) + "%"
            },
        }
    }
});

document.getElementById('chart_3_bottom_1').innerHTML = chart3_1_data[0] + " шт."
document.getElementById('grade-value_3_1').style.width = chart3_1_data[0] / chart3_1_data[1] * 100 + "%"
document.getElementById('grade-value_3_1').style.backgroundColor = chart3_1_colors[0]

document.getElementById('chart_3_bottom_2').innerHTML = chart3_2_data[0] + " шт."
document.getElementById('grade-value_3_2').style.width = chart3_2_data[0] / chart3_2_data[1] * 100 + "%"
document.getElementById('grade-value_3_2').style.backgroundColor = chart3_2_colors[0]

document.getElementById('chart_3_bottom_3').innerHTML = chart3_3_data[0] + " шт."
document.getElementById('grade-value_3_3').style.width = chart3_3_data[0] / chart3_3_data[1] * 100 + "%"
document.getElementById('grade-value_3_3').style.backgroundColor = chart3_3_colors[0]

document.getElementById('chart_3_bottom_4').innerHTML = chart3_4_data[0] + " шт."
document.getElementById('grade-value_3_4').style.width = chart3_4_data[0] / chart3_4_data[1] * 100 + "%"
document.getElementById('grade-value_3_4').style.backgroundColor = chart3_4_colors[0]

document.getElementById('chart_3_bottom_5').innerHTML = chart3_5_data[0] + " шт."
document.getElementById('grade-value_3_5').style.width = chart3_5_data[0] / chart3_5_data[1] * 100 + "%"
document.getElementById('grade-value_3_5').style.backgroundColor = chart3_5_colors[0]

document.getElementById('chart_3_bottom_6').innerHTML = chart3_6_data[0] + " шт."
document.getElementById('grade-value_3_6').style.width = chart3_6_data[0] / chart3_6_data[1] * 100 + "%"
document.getElementById('grade-value_3_6').style.backgroundColor = chart3_6_colors[0]

// Chart3 END /////////////////////////////////////////////////////////////////////////////////////////////

// Chart4 Start ///////////////////////////////////////////////////////////////////////////////////////////
const ctx4_1 = document.getElementById('chart-4-1');
const ctx4_2 = document.getElementById('chart-4-2');
const ctx4_3 = document.getElementById('chart-4-3');
const ctx4_4 = document.getElementById('chart-4-4');
const ctx4_5 = document.getElementById('chart-4-5');
const ctx4_6 = document.getElementById('chart-4-6');
new Chart(ctx4_1, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart4_1_data,
            backgroundColor: chart4_1_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart4_1_data[0] / chart4_1_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx4_2, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart4_2_data,
            backgroundColor: chart4_2_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart4_2_data[0] / chart4_2_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx4_3, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart4_3_data,
            backgroundColor: chart4_3_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart4_3_data[0] / chart4_3_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx4_4, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart4_4_data,
            backgroundColor: chart4_4_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart4_4_data[0] / chart4_4_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx4_5, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart4_5_data,
            backgroundColor: chart4_5_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart4_5_data[0] / chart4_5_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx4_6, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart4_6_data,
            backgroundColor: chart4_6_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart4_6_data[0] / chart4_6_data[1] * 100) + "%"
            },
        }
    }
});



// Chart-5 bottom /////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('chart_4_bottom_1').innerHTML = chart4_1_data[0] + " шт."
document.getElementById('grade-value_4_1').style.width = chart4_1_data[0] / chart4_1_data[1] * 100 + "%"
document.getElementById('grade-value_4_1').style.backgroundColor = chart4_1_colors[0]

document.getElementById('chart_4_bottom_2').innerHTML = chart4_2_data[0] + " шт."
document.getElementById('grade-value_4_2').style.width = chart4_2_data[0] / chart3_2_data[1] * 100 + "%"
document.getElementById('grade-value_4_2').style.backgroundColor = chart4_2_colors[0]

document.getElementById('chart_4_bottom_3').innerHTML = chart4_3_data[0] + " шт."
document.getElementById('grade-value_4_3').style.width = chart4_3_data[0] / chart4_3_data[1] * 100 + "%"
document.getElementById('grade-value_4_3').style.backgroundColor = chart4_3_colors[0]

document.getElementById('chart_4_bottom_4').innerHTML = chart4_4_data[0] + " шт."
document.getElementById('grade-value_4_4').style.width = chart4_4_data[0] / chart4_4_data[1] * 100 + "%"
document.getElementById('grade-value_4_4').style.backgroundColor = chart4_4_colors[0]

document.getElementById('chart_4_bottom_5').innerHTML = chart4_5_data[0] + " шт."
document.getElementById('grade-value_4_5').style.width = chart4_5_data[0] / chart4_5_data[1] * 100 + "%"
document.getElementById('grade-value_4_5').style.backgroundColor = chart4_5_colors[0]

document.getElementById('chart_4_bottom_6').innerHTML = chart4_6_data[0] + " шт."
document.getElementById('grade-value_4_6').style.width = chart4_6_data[0] / chart4_6_data[1] * 100 + "%"
document.getElementById('grade-value_4_6').style.backgroundColor = chart4_6_colors[0]




// Chart-4 End ////////////////////////////////////////////////////////////////////////////////////////////

// Chart5 Start ///////////////////////////////////////////////////////////////////////////////////////////
const ctx5_1 = document.getElementById('chart-5-1');
const ctx5_2 = document.getElementById('chart-5-2');
const ctx5_3 = document.getElementById('chart-5-3');
const ctx5_4 = document.getElementById('chart-5-4');
const ctx5_5 = document.getElementById('chart-5-5');
const ctx5_6 = document.getElementById('chart-5-6');
new Chart(ctx5_1, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart5_1_data,
            backgroundColor: chart5_1_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart5_1_data[0] / chart5_1_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx5_2, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart5_2_data,
            backgroundColor: chart5_2_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart5_2_data[0] / chart5_2_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx5_3, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart5_3_data,
            backgroundColor: chart5_3_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart5_3_data[0] / chart5_3_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx5_4, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart5_4_data,
            backgroundColor: chart5_4_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart5_4_data[0] / chart5_4_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx5_5, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart5_5_data,
            backgroundColor: chart5_5_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart5_5_data[0] / chart5_5_data[1] * 100) + "%"
            },
        }
    }
});
new Chart(ctx5_6, {
    type: 'doughnut',
    plugins: [centerTextPlugin],
    data: {
        labels: ["", ""],
        datasets: [{
            data: chart5_6_data,
            backgroundColor: chart5_6_colors
        }]
    },

    options: {
        cutout: "65%",
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            centerText: {
                fontSize: 19,
                fontFamily: "Myriad Pro",
                fontColor: "#264653",
                value: Math.round(chart5_6_data[0] / chart5_6_data[1] * 100) + "%"
            },
        }
    }
});





document.getElementById('chart_5_bottom_1').innerHTML = chart5_1_data[0] + " шт."
document.getElementById('grade-value_5_1').style.width = chart5_1_data[0] / chart5_1_data[1] * 100 + "%"
document.getElementById('grade-value_5_1').style.backgroundColor = chart5_1_colors[0]

document.getElementById('chart_5_bottom_2').innerHTML = chart5_2_data[0] + " шт."
document.getElementById('grade-value_5_2').style.width = chart5_2_data[0] / chart5_2_data[1] * 100 + "%"
document.getElementById('grade-value_5_2').style.backgroundColor = chart5_2_colors[0]

document.getElementById('chart_5_bottom_3').innerHTML = chart5_3_data[0] + " шт."
document.getElementById('grade-value_5_3').style.width = chart5_3_data[0] / chart5_3_data[1] * 100 + "%"
document.getElementById('grade-value_5_3').style.backgroundColor = chart5_3_colors[0]

document.getElementById('chart_5_bottom_4').innerHTML = chart5_4_data[0] + " шт."
document.getElementById('grade-value_5_4').style.width = chart5_4_data[0] / chart5_4_data[1] * 100 + "%"
document.getElementById('grade-value_5_4').style.backgroundColor = chart5_4_colors[0]

document.getElementById('chart_5_bottom_5').innerHTML = chart5_5_data[0] + " шт."
document.getElementById('grade-value_5_5').style.width = chart5_5_data[0] / chart5_5_data[1] * 100 + "%"
document.getElementById('grade-value_5_5').style.backgroundColor = chart5_5_colors[0]

document.getElementById('chart_5_bottom_6').innerHTML = chart5_6_data[0] + " шт."
document.getElementById('grade-value_5_6').style.width = chart5_6_data[0] / chart5_6_data[1] * 100 + "%"
document.getElementById('grade-value_5_6').style.backgroundColor = chart5_6_colors[0]
// Chart-5 End ////////////////////////////////////////////////////////////////////////////////////////////

// Chart6 START /////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("chart6_1").style.width = max1 * chart6_data[0] / 100 + "%"
document.getElementById("chart6_2").style.width = max1 * chart6_data[1] / 100 + "%"
document.getElementById("chart6_1").style.backgroundColor = chart6_colors[0]
document.getElementById("chart6_2").style.backgroundColor = chart6_colors[1]
// Chart6 END /////////////////////////////////////////////////////////////////////////////////////////////