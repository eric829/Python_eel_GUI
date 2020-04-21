// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
};

      
      window.addEventListener('change', setup);
      
      eel.expose(sel)
      //select file name pass to python get csv data  
      async function sel(){
            const selectedFile = document.getElementById('input').files[0].name; 
            var data= await eel.get_data(selectedFile)()
            document.getElementById('textfield').value=selectedFile;
            return data
        }

      async function setup() {
        const ctx = document.getElementById('XChart').getContext('2d');
        const cty = document.getElementById('YChart').getContext('2d');
        const ctz = document.getElementById('ZChart').getContext('2d');
        
        const globalTemps = await sel();
        const myxChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: globalTemps[0],
            datasets: [{ 
                //label: false,
                data: globalTemps[1],
                fill: false,
                backgroundColor: "rgba(78, 115, 223, 0.5)",
                borderColor: "rgba(78, 115, 223, 1)",
                
              }]
        },
          options: {
            //maintainAspectRatio: false,
            legend:{
              display:false
            },
            layout: {
              padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
              }
            },
          }
        });
        const myyChart = new Chart(cty, {
          type: 'line',
          data: {
            labels: globalTemps[0],
            datasets: [{ 
                //label: false,
                data: globalTemps[2],
                fill: false,
                backgroundColor: 'rgba(0, 179, 119, 0.5)',
                borderColor: 'rgba(0, 179, 119, 1)',
                
              }]
        },
          options: {
            //maintainAspectRatio: false,
            legend:{
              display:false
            },
            layout: {
              padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
              }
            },
          }
        });
        const myzChart = new Chart(ctz, {
          type: 'line',
          data: {
            labels: globalTemps[0],
            datasets: [{ 
                //label: false,
                data: globalTemps[3],
                fill: false,
                backgroundColor: 'rgba(153,0, 153, 0.5)',
                borderColor: 'rgba(153,0, 153, 1)',
                
              }]
        },
          options: {
            //maintainAspectRatio: false,
            legend:{
              display:false
            },
            layout: {
              padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
              }
            },
          }
        });
      }
      


    //   label: 'Y-Axis',
    //   data: globalTemps[2],
    //   fill: false,
    //   backgroundColor: 'rgba(0, 179, 119, 0.5)',
    //   borderColor: 'rgba(0, 179, 119, 1)',
      
    // },
    // {
    //   label: 'Z-Axis',
    //   data: globalTemps[3],
    //   fill: false,
    //   backgroundColor:'rgba(153,0, 153, 0.5)',
    //   borderColor: 'rgba(153,0, 153, 1)',
      
    // }


      // async function getData() {
      //   //const response = await fetch('/Users/fannylin/GUI/Vib_Data_20200407103130349.csv');
      //   const response = await fetch(selectedFile);
      //   const data = await response.text();
        
      //   const time = [];
      //   const x = [];
      //   const y = [];
      //   const z = [];
      //   const rows = data.split('\n').slice(1);
      //   rows.forEach(row => {
      //     const cols = row.split(',');
      //     time.push(cols[0].substring(11));
      //     x.push(parseFloat(cols[1])*0.0000039);
      //     y.push(parseFloat(cols[2])*0.0000039);
      //     z.push(parseFloat(cols[3])*0.0000039);
      //   });
      //   return { time, x,y,z};
      // }

      // var fileInput = document.getElementById("csv"),
      // readFile = function () {
      //     var reader = new FileReader();
      //     reader.onload = function () {
      //         document.getElementById('out').innerHTML = reader.result;
      //     };
      //     // start reading the file. When it is done, calls the onload event defined above.
      //     // reader.readAsBinaryString(fileInput.files[0]);
      //     reader.readAsText(fileInput.files[0], 'utf8');
      // };

      











// Area Chart Example

// var ctx = document.getElementById("myAreaChart");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: dates,
//     datasets: [{
//       label: "Earnings",
//       lineTension: 0.3,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: jzset,
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '$' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: false
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
//});
    