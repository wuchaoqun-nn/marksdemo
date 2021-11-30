var map
var measureObj
var eventTarget = new mars3d.BaseClass()

function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      center: { lat: 30.715648, lng: 116.300527, alt: 10727, heading: 3, pitch: -25 }
    }
  })

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)

  measureObj = new mars3d.thing.Measure({
    // 设置文本样式
    label: {
      color: "#ffffff",
      font_family: "楷体",
      font_size: 20
    }
  })
  map.addThing(measureObj)

  map.on(mars3d.EventType.click, function (e) {
    hideTipMarker()
  })

  // 触发自定义事件
  measureObj.on(mars3d.EventType.start, function (e) {
    console.log("开始分析", e)
    // 开始分析前回调(异步)
    showLoading()
  })
  measureObj.on(mars3d.EventType.end, function (e) {
    console.log("分析结束", e)
    // 分析完成后回调(异步)
    hideLoading()

    if (e.graphic?.type === mars3d.graphic.SectionMeasure.type) {
      eventTarget.fire("end", { e })
    }
  })
  measureObj.on(mars3d.EventType.click, function (e) {
    console.log("单击了对象", e)
    eventTarget.fire("click", { e })
  })
}

function removeAll() {
  measureObj.clear()
  hideTipMarker()
}

function measureSection() {
  measureObj.section({
    // maxPointNum:2,
    splitNum: 300 // 插值次数
  })
}

// echart图表中的图标
var tipGraphic
function showTipMarker(point, z, inthtml) {
  var _position_draw = Cesium.Cartesian3.fromDegrees(point.lng, point.lat, z)

  if (!tipGraphic) {
    tipGraphic = new mars3d.graphic.BillboardEntity({
      name: "当前点",
      position: _position_draw,
      style: {
        image: "img/marker/mark3.png",
        scale: 1,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        scaleByDistance: new Cesium.NearFarScalar(10000, 1.0, 500000, 0.2)
      }
    }).addTo(map.graphicLayer)
    tipGraphic._setPositionsToCallback()
  }
  tipGraphic._position_draw = _position_draw
  tipGraphic.bindPopup(inthtml).openPopup()
}

function hideTipMarker() {
  if (!tipGraphic) {
    return
  }
  tipGraphic.remove(true)
  tipGraphic = null
}

function getMinZ(arr) {
  var minz = "dataMin"
  if (arr == null || arr.length === 0) {
    return minz
  }

  minz = arr[0].alt
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].alt < minz) {
      minz = arr[i].alt
    }
  }
  return minz
}

// 定位至模型
var modelTest
function centerAtModel() {
  if (!modelTest) {
    modelTest = new mars3d.layer.TilesetLayer({
      url: "//data.mars3d.cn/3dtiles/qx-simiao/tileset.json",
      position: { alt: 80.6 },
      maximumScreenSpaceError: 1,
      maximumMemoryUsage: 1024,
      flyTo: true
    })
    map.addLayer(modelTest)
  }
}
