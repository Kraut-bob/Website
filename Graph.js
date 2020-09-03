<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
 var myPieChart;
 var dataSE = {
     data: [10, 20, 20, 30, 20],
     label: 'Software Engineer',
     labels: ['C++', 'CSharp', 'ABAP-OO', 'JavaScript', 'Python'],
     backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
 };
 var dataSapDev = {
     data: [15, 40, 25, 30],
     label: 'SAP Developer',
     labels: ['t1', 't2', 'ABAP-OO', 't3'],
     backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
 };
 var dataSE = {
     data: [10, 20, 20, 30],
     label: 'SAP EWM Consultant',
     labels: ['C++', 'CSharp', 'ABAP-OO', 'JavaScript', 'Python'],
     backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
 };

 window.onload = function () {
     onSiteLoad();
 }

 function onSiteLoad() {
     var ctx = document.getElementById('canvas').getContext('2d');
     var data = {
         datasets: [dataSE],
     };
     var options = {
         tooltips: {
             callbacks: {
                 label: function (item, data) {
                     // console.log(item)
                     var label = data.datasets[item.datasetIndex].labels[item.index];
                     var value = data.datasets[item.datasetIndex].data[item.index];
                     return label + ': ' + value;
                 }
             }
         }
     };

     myPieChart = new Chart(ctx, {
         type: 'pie',
         data: data,
         options: options
     });

     myPieChart.render();
 }

 function changeData(changeToSet) {
     switch (changeToSet) {
         case "se":
             alert('Software');
             break;
         case "sd":
             myPieChart.data.datasets.forEach((dataset) => { dataset.data.splice(0, dataset.data.length); });
             myPieChart.data.datasets.forEach((dataset) => { dataset == dataSapDev; });
             myPieChart.update();
             break;
         case "ec":
             alert('ewm consult');
             break;
     }

 }

 <canvas id="canvas" width="400" height="100" aria-label="Davids skills" role="chart"
 class="w3-display-container w3-center">
 <p>there should be a chart somewhere around here...</p>
</canvas>