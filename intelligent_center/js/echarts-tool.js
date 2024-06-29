 $(window).load(function(){  
             $(".loading").fadeOut();
})  
			

$(document).ready(function(){
	var whei=$(window).width();
	$("html").css({fontSize:whei/20});
	$(window).resize(function(){
	var whei=$(window).width();
	 $("html").css({fontSize:whei/20});
	});
	yqbj();
	dbj();
});


function yqbj() {
	var yqbj = echarts.init(document.getElementById('yqbj'));
	option = {
    //backgroundColor: '#000',
    color: ["#37b70c", "#fae521", "#d0a00e"],
    
    tooltip: {
        show: false,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    xAxis3D: {
        type: 'category',
        data: ['设备数量', '本月报警', '上月报警'],
       axisLine: {
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            rotate: 45,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            }
        },
    },
    yAxis3D: {
		
        type: 'category',
        data: [''],
         axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
    },
    zAxis3D: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#0f0',
                width: 1
            }
        },
    },
    grid3D: {
        boxWidth: 250,
        boxDepth: 2,
        axisPointer: {
            show: false
        },
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        },
        viewControl: {
            alpha: 20,
            beta: 0,
            autoRotate: true,
            zoomSensitivity: 0,
            autoRotateAfterStill: 10,
            distance: 200
        }
    },
    series: [{
        type: 'bar3D',
        name: '1',
        barSize: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                        "#37b70c",  "#dd3f36", "#d0a00e"
                    ];
                    return colorList[params.dataIndex]
                },
            }
        },
        data: [
            [0, 0, 100],
            [1, 0, 20],
            [2, 0, 60],
        ],
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
            label: {
                show: true
            }
        }

    }]
};

	 yqbj.setOption(option);
	  window.addEventListener("resize",function(){
            yqbj.resize();
        });
}


function test(){
var myChart = echarts.init(document.getElementById('echarts4'));
        var plantCap = [{
            name: '工业',
            value: '222'
        }, {
            name: '农业',
            value: '115'
        }, {
            name: '互联网',
            value: '113'
        }, {
            name: '医疗',
            value: '95'
        }, {
            name: '文学',
            value: '92'
        }, {
            name: '服装',
            value: '87'
        }];
        var datalist = [{
            offset: [56, 48],
            symbolSize: 110,
   
            color: 'rgba(73,188,247,.14)',

        }, {

            offset: [30, 70],
            symbolSize: 70,
            color: 'rgba(73,188,247,.14)'
        }, {
            offset: [0, 43],
            symbolSize: 60,
            color: 'rgba(73,188,247,.14)'

        }, {
            offset: [93, 30],
            symbolSize: 70,
            color: 'rgba(73,188,247,.14)'
        }, {
            offset: [26, 19],
            symbolSize: 65,
            color: 'rgba(73,188,247,.14)'
        }, {
            offset: [75, 75],
            symbolSize: 60,
            color: 'rgba(73,188,247,.14)'

        }];

        var datas = [];
        for (var i = 0; i < plantCap.length; i++) {
            var item = plantCap[i];
            var itemToStyle = datalist[i];
            datas.push({
                name: item.value + '\n' + item.name,
                value: itemToStyle.offset,
                symbolSize: itemToStyle.symbolSize,
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 14
                        }
                    }
                },

                itemStyle: {
                    normal: {
                        color: itemToStyle.color,
                        opacity: itemToStyle.opacity
                    }
                },
            })
        }
        option = {
            grid: {
                show: false,
                top: 10,
                bottom: 10
            },

            xAxis: [{
                gridIndex: 0,
                type: 'value',
                show: false,
                min: 0,
                max: 100,
                nameLocation: 'middle',
                nameGap: 5
            }],

            yAxis: [{
                gridIndex: 0,
                min: 0,
                show: false,
                max: 100,
                nameLocation: 'middle',
                nameGap: 30
            }],
            series: [{
                type: 'scatter',
                symbol: 'circle',
                symbolSize: 120,
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}',
                        color: '#FFF',
                        textStyle: {
                            fontSize: '30'
                        }
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#F30'
                    }
                },
                data: datas
            }]

        };
        myChart.setOption(option);
        $(document).ready(function () {
            myChart.resize();

        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
}


function dbj(){
	var dbj = echarts.init(document.getElementById('dbj'));

	option = {
	  series: [
	    {
	      type: 'gauge',
	      startAngle: 180,
	      endAngle: 0,
	      center: ['46%', '57%'],
	      radius: '80%',
	      min: 0,
	      max: 1,
	      splitNumber: 8,
	      axisLine: {
	        lineStyle: {
	          width: 6,
	          color: [
	            [0.25, '#FF6E76'],
	            [0.5, '#FDDD60'],
	            [0.75, '#58D9F9'],
	            [1, '#7CFFB2']
	          ]
	        }
	      },
	      pointer: {
	        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
	        length: '80%',
	        width: 10,
	        offsetCenter: [0, '-10%'],
	        itemStyle: {
	          color: 'auto'
	        }
	      },
	      axisTick: {
	        length: 12,
	        lineStyle: {
	          color: 'auto',
	          width: 2
	        }
	      },
	      splitLine: {
	        length: 20,
	        lineStyle: {
	          color: 'auto',
	          width: 5
	        }
	      },
	      axisLabel: {
	        color: '#ffffff',
	        fontSize: 15,
	        distance: -50,
	        rotate: 'tangential',
	        formatter: function (value) {
	          if (value === 0.875) {
	            return '舒适';
	          } else if (value === 0.625) {
	            return '正常';
	          } else if (value === 0.375) {
	            return '隐患';
	          } else if (value === 0.125) {
	            return '危险';
	          }
	          return '';
	        }
	      },
	      title: {
	        offsetCenter: [0, '-10%'],
	        fontSize: 20
	      },
	      detail: {
	        fontSize: 30,
	        offsetCenter: [0, '-35%'],
	        valueAnimation: true,
	        formatter: function (value) {
	          return Math.round(value * 100) + '';
	        },
	        color: 'inherit'
	      },
	      data: [
	        {
	          value: 0.1
	        }
	      ]
	    }
	  ]
	};
	dbj.setOption(option);
	window.addEventListener("resize",function(){
	    dbj.resize();
	});
}
