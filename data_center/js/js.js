$(window).load(function () {
  $(".loading").fadeOut();
});

/****/
$(document).ready(function () {
  var whei = $(window).width();
  $("html").css({ fontSize: whei / 20 });
  $(window).resize(function () {
    var whei = $(window).width();
    $("html").css({ fontSize: whei / 20 });
  });
});

$(window).load(function () {
  $(".loading").fadeOut();
});
$(function () {
  fetchExcelAndRead();

  echarts_2();
  echarts_3();
  echarts_4();
  echarts_6();
  pe01();
  pe02();
  pe03();
  getFish();

  function echarts_1(excelJsonDate) {
    var myChart = echarts.init(document.getElementById("echarts1"));

    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: {
        top: "20%",
        right: "50",
        bottom: "10",
        left: "2%",
        containLabel: true,
      },
      legend: {
        data: [
          "监测时间",
          "pH(无量纲)_平均值",
          "总氮（mg/L）_平均值",
          "总磷（mg/L）_平均值",
          "氨氮（mg/L）_平均值",
          "水温（℃）_平均值",
          "浊度（NTU）_平均值",
          "溶氧量(mg/L)_平均值",
          "高锰酸盐指数（mg/L）_平均值",
        ],
        right: "center",
        width: "100%",
        textStyle: {
          color: "#fff",
        },
        itemWidth: 12,
        itemHeight: 10,
      },

      xAxis: [
        {
          type: "category",
          data: excelJsonDate.map((item) => item.监测时间), // 这里需要根据你的实际监测时间数据更新
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
          axisLabel: {
            textStyle: { color: "rgba(255,255,255,.7)", fontSize: "14" },
            interval: 0, // 强制显示所有标签
          },
        },
      ],

      yAxis: [
        {
          type: "value",
          name: "单位mS/cm）", // 根据实际情况更新 y 轴名称
          axisTick: { show: false },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            fontSize: 14,
            color: "rgba(255,255,255,.6)",
          },
          axisLine: {
            lineStyle: { color: "rgba(255,255,255,.1)" },
          },
        },
      ],
      series: [
        {
          name: "浊度（NTU）_平均值",
          type: "bar",
          data: excelJsonDate.map((item) => item["浊度（NTU）_平均值"]),
          barWidth: "10%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#fccb05",
                },
                {
                  offset: 1,
                  color: "#ffffff",
                },
              ]),
            },
          },
          barGap: "0.2",
        },
        {
          name: "水温（℃）_平均值",
          type: "bar",
          data: excelJsonDate.map((item) => item["水温（℃）_平均值"]),
          barWidth: "10%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#fccb05",
                },
                {
                  offset: 1,
                  color: "#ffffff",
                },
              ]),
            },
          },
          barGap: "0.2",
        },

        {
          name: "溶氧量(mg/L)_平均值",
          type: "bar",
          data: excelJsonDate.map((item) => item["溶氧量(mg/L)_平均值"]),
          barWidth: "10%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#C48ff7",
                },
                {
                  offset: 1,
                  color: "#6851f1",
                },
              ]),
            },
          },
          barGap: "0.2",
        },
        {
          name: "pH(无量纲)_平均值",
          type: "bar",
          data: excelJsonDate.map((item) => item["pH(无量纲)_平均值"]), // 根据实际数据更新
          barWidth: "10%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#8bd46e",
                },
                {
                  offset: 1,
                  color: "#09bcb7",
                },
              ]),
            },
          },
          barGap: "0.2",
        },
        {
          name: "高锰酸盐指数（mg/L）_平均值",
          type: "bar",
          data: excelJsonDate.map((item) => item["高锰酸盐指数（mg/L）_平均值"]),
          barWidth: "10%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#548ff7",
                },
                {
                  offset: 1,
                  color: "#99F1f1",
                },
              ]),
            },
          },
          barGap: "0.2",
        },
        {
          name: "总氮（mg/L）_平均值",
          type: "bar",
          data: excelJsonDate.map((item) => item["总氮（mg/L）_平均值"]), // 根据实际数据更新
          barWidth: "10%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#f76767",
                },
                {
                  offset: 1,
                  color: "#f7ad69",
                },
              ]),
            },
          },
          barGap: "0.2",
        },
        {
          name: "氨氮（mg/L）_平均值",
          type: "bar",
          data: excelJsonDate.map((item) => item["氨氮（mg/L）_平均值"]),
          barWidth: "10%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#fccb05",
                },
                {
                  offset: 1,
                  color: "#f5804d",
                },
              ]),
            },
          },
          barGap: "0.2",
        },
        {
          name: "总磷（mg/L）_平均值",
          type: "bar",
          data: excelJsonDate.map((item) => item["总磷（mg/L）_平均值"]),
          barWidth: "10%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#248ff7",
                },
                {
                  offset: 1,
                  color: "#6851f1",
                },
              ]),
            },
          },
          barGap: "0.2",
        },

        // 添加其他监测指标的 series，类型为 bar 或者 line，根据实际需求选择
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts2"));

    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        // formatter:'{c}' ,
      },
      grid: {
        left: "0",
        top: "30",
        right: "10",
        bottom: "-20",
        containLabel: true,
      },
      legend: {
        data: ["声纳", "摄像头", "传感器", "气象站"],
        right: "center",
        top: 0,
        textStyle: {
          color: "#fff",
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },

      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            rotate: -90,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 14,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },

          data: ["23年11月", "23年12月", "24年1月", "24年2月", "24年3月", "24年4月", "24年5月"],
        },
        {
          axisPointer: { show: false },
          axisLine: { show: false },
          position: "bottom",
          offset: 20,
        },
      ],

      yAxis: [
        {
          type: "value",
          axisTick: { show: false },
          // splitNumber: 6,
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
          axisLabel: {
            formatter: "{value} %",
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 14,
            },
          },

          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "声纳",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "rgba(228, 228, 126, 1)",
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(228, 228, 126, .2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(228, 228, 126, 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(228, 228, 126, 1)",
              borderColor: "rgba(228, 228, 126, .1)",
              borderWidth: 12,
            },
          },
          data: [12.5, 14.4, 16.1, 14.9, 20.1, 17.2, 17.0],
        },
        {
          name: "摄像头",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "rgba(255, 128, 128, 1)",
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(255, 128, 128,.2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 128, 128, 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(255, 128, 128, 1)",
              borderColor: "rgba(255, 128, 128, .1)",
              borderWidth: 12,
            },
          },
          data: [-6.4, 0.1, 6.6, 11.2, 42.1, 26.0, 20.2],
        },
        {
          name: "传感器",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "rgba(25, 188, 128, 1)",
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(25, 188, 128,.2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 128, 128, 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(25, 188, 128, 1)",
              borderColor: "rgba(55, 188, 128, .1)",
              borderWidth: 12,
            },
          },
          data: [6.6, 11.2, 42.1, 26.0, 20.2, 18.31, 21.59],
        },
        {
          name: "气象站",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "rgba(255, 188, 12, 1)",
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(255, 188, 12,.2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 128, 128, 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(255, 188, 12, 1)",
              borderColor: "rgba(255, 188, 12, .1)",
              borderWidth: 12,
            },
          },
          data: [26.0, 20.2, 18.31, 21.59, 24.42, 34.03, 32.9],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts3"));

    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: ["声纳", "摄像头", "传感器", "气象站"],
        right: "center",
        top: 0,
        textStyle: {
          color: "#fff",
        },
        itemWidth: 12,
        itemHeight: 10,
        itemGap: 10,
      },
      grid: {
        left: "0",
        right: "20",
        bottom: "0",
        top: "15%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["2021", "2022", "2023", "2024"],
        axisLine: {
          lineStyle: {
            color: "white",
          },
        },
        axisLabel: {
          //rotate:-90,
          formatter: function (value) {
            return value.split("").join("\n");
          },
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.3)",
          },
        },
      },

      yAxis: {
        type: "value",
        splitNumber: 4,
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          },
        },
        axisLine: { show: false },
      },

      series: [
        {
          name: "声纳",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#8bd46e",
            },
          },
          data: [331, 497, 440, 81],
        },
        {
          name: "摄像头",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#f5804d",
              barBorderRadius: 0,
            },
          },
          data: [48, 97, 56, 59],
        },
        {
          name: "传感器",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#248ff7",
              barBorderRadius: 0,
            },
          },
          data: [13, 21, 112, 5],
        },
        {
          name: "气象站",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#9582a5",
              barBorderRadius: 0,
            },
          },
          data: [5, 5, 72, 3, 8],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts4"));
    var myColor = ["#eb2100", "#eb3600", "#d0570e", "#d0a00e", "#34da62", "#00e9db", "#00c0e9", "#0096f3"];
    option = {
      grid: {
        left: "2%",
        top: "1%",
        right: "5%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: [
        {
          show: false,
        },
      ],
      yAxis: [
        {
          axisTick: "none",
          axisLine: "none",
          offset: "7",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },
          data: ["CPU运行状态", "内存运行状态", "GPU运行状态", "磁盘使用情况"],
        },
        {
          axisTick: "none",
          axisLine: "none",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },
          data: [],
        },
        {
          name: "单位：件",
          nameGap: "50",
          nameTextStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "16",
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0)",
            },
          },
          data: [],
        },
      ],
      series: [
        {
          name: "条",
          type: "bar",
          yAxisIndex: 0,
          data: [95, 60, 70, 72],
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: function (param) {
                return param.value + "%";
              },
              textStyle: {
                color: "rgba(255,255,255,.8)",
                fontSize: "12",
              },
            },
          },
          barWidth: 15,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#03c893",
                },
                {
                  offset: 1,
                  color: "#0091ff",
                },
              ]),
              barBorderRadius: 15,
            },
          },
          z: 2,
        },
        {
          name: "白框",
          type: "bar",
          yAxisIndex: 1,
          barGap: "-100%",
          data: [99.5, 99.5, 99.5, 99.5],
          barWidth: 15,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,.2)",
              barBorderRadius: 15,
            },
          },
          z: 1,
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts6"));

    option = {
      title: {
        text: "5566",
        subtext: "总体",
        x: "center",
        y: "40%",
        textStyle: {
          color: "#fff",
          fontSize: 22,
          lineHeight: 10,
        },
        subtextStyle: {
          color: "#90979c",
          fontSize: 16,
          lineHeight: 10,
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c} ({d}%)",
      },

      visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
          //colorLightness: [0, 1]
        },
      },
      series: [
        {
          name: "数据来源",
          type: "pie",
          radius: ["50%", "70%"],
          center: ["50%", "50%"],
          color: ["rgb(131,249,103)", "#FBFE27", "#FE5050", "#1DB7E5"], //'#FBFE27','rgb(11,228,96)','#FE5050'
          data: [
            {
              value: 1924,
              name: "声纳",
            },
            {
              value: 1055,
              name: "摄像头",
            },
            {
              value: 1055,
              name: "传感器",
            },
            {
              value: 1532,
              name: "气象站",
            },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",

          label: {
            normal: {
              formatter: ["{c|{c}万}", "{b|{b}}"].join("\n"),
              rich: {
                c: {
                  color: "rgb(241,246,104)",
                  fontSize: 15,
                  fontWeight: "bold",
                  lineHeight: 5,
                },
                b: {
                  color: "rgb(98,137,169)",
                  fontSize: 14,
                  height: 44,
                },
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: "rgb(98,137,169)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function pe01() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe01"));
    var txt = 81;
    option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "18",
        },
      },
      color: "rgba(255,255,255,.3)",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#eaff00",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function pe02() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe02"));
    var txt = 17;
    option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "18",
        },
      },
      color: "rgba(255,255,255,.3)",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#ea4d4d",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function pe03() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe03"));
    var txt = 2;
    option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "18",
        },
      },
      color: "rgba(255,255,255,.3)",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#395ee6",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  // 读取Fish.vsc文件
  function getFish() {
    const fileInput2 = document.getElementById("fileInput2");
    const chooseFileButton2 = document.getElementById("chooseFileButton2");

    chooseFileButton2.addEventListener("click", function () {
      fileInput2.click(); // 模拟点击文件输入框
    });
    fileInput2.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const contents = e.target.result;
        displayCSV(contents);
      };

      reader.readAsText(file);
      chooseFileButton2.style.display = "none";
    });

    function displayCSV(csvData) {
      const table = document.getElementById("boxnavTable");
      const rows = csvData.split("\n");

      // 清空表格
      table.innerHTML = "";

      // 添加表头
      const headers = rows[0].split(",");
      var headerRow = table.insertRow();
      headers.forEach((item, index) => {
        if (index == 0) {
          var th = document.createElement("th");
          th.textContent = "序号";
          headerRow.appendChild(th);
        }
        if (index != 3 && index != 4) {
          var th = document.createElement("th");
          if (index == 2) th.textContent = "lenAverage(cm)";
          else th.textContent = item;
          headerRow.appendChild(th);
        }
      });

      // 添加数据行
      for (var i = 1; i < rows.length; i++) {
        var rowData = rows[i].split(",");
        var row = table.insertRow();

        var cell = row.insertCell();
        cell.textContent = i;

        rowData.forEach((item, index) => {
          if (index == 2) {
            // 求平均
            let lenSum = Number(rowData[2]) + Number(rowData[3]) + Number(rowData[4]);
            let average = lenSum / 3;
            var cell3 = row.insertCell();
            cell3.textContent = average.toFixed(2);
          } else if (index != 3 && index != 4) {
            var cell2 = row.insertCell();
            cell2.textContent = rowData[index];
          }
        });
      }
    }
  }

  // excel分组
  function excelGroup(jsonData) {
    let groupedData = {};

    jsonData.forEach((item) => {
      let month = item["监测时间"];

      if (!month) {
        return;
      }

      if (!groupedData[month]) {
        groupedData[month] = {
          监测时间: month,
          "pH(无量纲)_平均值": 0,
          "总氮（mg/L）_平均值": 0,
          "总磷（mg/L）_平均值": 0,
          "氨氮（mg/L）_平均值": 0,
          "水温（℃）_平均值": 0,
          "浊度（NTU）_平均值": 0,
          "溶氧量(mg/L)_平均值": 0,
          "电导率（μS/cm）_平均值": 0,
          "高锰酸盐指数（mg/L）_平均值": 0,
          count: 0,
        };
      }

      groupedData[month]["pH(无量纲)_平均值"] += parseFloat(item["pH(无量纲)"]) || 0;
      groupedData[month]["总氮（mg/L）_平均值"] += parseFloat(item["总氮（mg/L）"]) || 0;
      groupedData[month]["总磷（mg/L）_平均值"] += parseFloat(item["总磷（mg/L）"]) || 0;
      groupedData[month]["氨氮（mg/L）_平均值"] += parseFloat(item["氨氮（mg/L）"]) || 0;
      groupedData[month]["水温（℃）_平均值"] += parseFloat(item["水温（℃）"]) || 0;
      groupedData[month]["浊度（NTU）_平均值"] += parseFloat(item["浊度（NTU）"]) || 0;
      groupedData[month]["溶氧量(mg/L)_平均值"] += parseFloat(item["溶氧量(mg/L)"]) || 0;
      groupedData[month]["电导率（μS/cm）_平均值"] += parseFloat(item["电导率（μS/cm）"]) || 0;
      groupedData[month]["高锰酸盐指数（mg/L）_平均值"] += parseFloat(item["高锰酸盐指数（mg/L）"]) || 0;
      groupedData[month].count++;
    });

    Object.keys(groupedData).forEach((month) => {
      groupedData[month]["pH(无量纲)_平均值"] = (groupedData[month]["pH(无量纲)_平均值"] / groupedData[month].count).toFixed(4);
      groupedData[month]["总氮（mg/L）_平均值"] = (groupedData[month]["总氮（mg/L）_平均值"] / groupedData[month].count).toFixed(4);
      groupedData[month]["总磷（mg/L）_平均值"] = (groupedData[month]["总磷（mg/L）_平均值"] / groupedData[month].count).toFixed(4);
      groupedData[month]["氨氮（mg/L）_平均值"] = (groupedData[month]["氨氮（mg/L）_平均值"] / groupedData[month].count).toFixed(4);
      groupedData[month]["水温（℃）_平均值"] = (groupedData[month]["水温（℃）_平均值"] / groupedData[month].count).toFixed(4);
      groupedData[month]["浊度（NTU）_平均值"] = (groupedData[month]["浊度（NTU）_平均值"] / groupedData[month].count).toFixed(4);
      groupedData[month]["溶氧量(mg/L)_平均值"] = (groupedData[month]["溶氧量(mg/L)_平均值"] / groupedData[month].count).toFixed(4);
      groupedData[month]["电导率（μS/cm）_平均值"] = (groupedData[month]["电导率（μS/cm）_平均值"] / groupedData[month].count).toFixed(4);
      groupedData[month]["高锰酸盐指数（mg/L）_平均值"] = (groupedData[month]["高锰酸盐指数（mg/L）_平均值"] / groupedData[month].count).toFixed(4);
    });

    let result = Object.values(groupedData);
    console.log(result);
    echarts_1(result);
  }

  // 读取excel
  async function fetchExcelAndRead() {
    try {
      const fileInput = document.getElementById("fileInput");
      const chooseFileButton = document.getElementById("chooseFileButton");

      chooseFileButton.addEventListener("click", function () {
        fileInput.click(); // 模拟点击文件输入框
      });
      fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });

            // Assuming the first sheet is what we want
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert sheet data to JSON format
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            // Format date column
            jsonData.forEach((row) => {
              if (row["监测时间"]) {
                const excelDate = row["监测时间"];
                const jsDate = XLSX.SSF.parse_date_code(excelDate);

                // Format date as needed, e.g., to month format
                const formattedDate = `${jsDate.m}月`;
                row["监测时间"] = formattedDate;
              }
            });

            console.log(JSON.stringify(jsonData, null, 2));
            // Pass formatted data to excelGroup function
            excelGroup(jsonData);
            chooseFileButton.style.display = "none";
          };

          reader.readAsArrayBuffer(file);
        }
      });
    } catch (error) {
      console.error("Error fetching or reading Excel file:", error);
    }
  }
});
