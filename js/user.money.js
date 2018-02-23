var getOption = function() {
	var option = {
		title: {
			text: '消费记录',
			padding: 15,
			textStyle: {
				fontSize: 14,
				color: '#777',
			}
		},
		//  tooltip : {
		//      trigger: 'axis'
		//  },
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			x: 60,
			x2: 30,
			y: 45,
			y2: 25
		},
		legend: {
			padding: 15,
			data: ['消费记录']
			
		},

		calculable: false,
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			data: ['10/19', '10/19', '10/19', '10/19', '10/19', '10/19', '10/19']
		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				show: true,
				interval: 'auto'
			}
		}],
		series: [{
			name: '消费记录',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					areaStyle: {
						type: 'default'
					}
				}
			},
			data: [1000, -800, 100, 2000, -1200, -500, 200],
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}]
	};
	return option;
};
var barChart = echarts.init(document.getElementById('KChart'));
barChart.setOption(getOption());