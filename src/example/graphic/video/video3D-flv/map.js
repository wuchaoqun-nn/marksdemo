import * as mars3d from "mars3d"
import { $message } from "@mars/components/mars-ui/index"

export let map // mars3d.Map三维地图对象
export let graphicLayer // 矢量图层对象

let selectedView
let videoElement

// 事件对象，用于抛出事件给面板
export const eventTarget = new mars3d.BaseClass()

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
export const mapOptions = {
  scene: {
    center: { lat: 31.843062, lng: 117.205439, alt: 150, heading: 178, pitch: -75 },
    globe: {
      depthTestAgainstTerrain: true // 不加无法投射到地形上
    }
  }
}

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录首次创建的map

  // 添加参考三维模型
  const tiles3dLayer = new mars3d.layer.TilesetLayer({
    name: "合肥国家大学科技园",
    url: "//data.mars3d.cn/3dtiles/qx-hfdxy/tileset.json",
    position: { alt: -24 },
    maximumScreenSpaceError: 1,
    maximumMemoryUsage: 1024
  })
  map.addLayer(tiles3dLayer)

  // 创建Graphic图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  createVideoDom()

  // 加一些演示数据
  addDemoGraphic1()
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  map = null
}

// 加载已配置好的视频（此参数为界面上“打印参数”按钮获取的）
function addDemoGraphic1() {
  const video3D = new mars3d.graphic.Video3D({
    position: [117.205457, 31.842984, 63.9],
    style: {
      container: videoElement,
      maskImage: "img/textures/videoMask.png", // 羽化视频四周，融合更美观
      angle: 46.3,
      angle2: 15.5,
      heading: 178.5,
      pitch: -49.5,
      showFrustum: true
    },
    attr: { remark: "示例1" }
  })
  graphicLayer.addGraphic(video3D)

  selectedView = video3D // 记录下
  eventTarget.fire("loadVideo", {
    value: {
      cameraAngle: selectedView.angle,
      cameraAngle2: selectedView.angle2,
      heading: selectedView.heading,
      pitchValue: selectedView.pitch,
      distanceValue: selectedView.distance,
      opcity: selectedView.opacity,
      ckdFrustum: selectedView.showFrustum
    }
  })
}

const flvUrl = "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv"


function createVideoDom() {
  videoElement = mars3d.DomUtil.create("video", "", document.body)
  videoElement.setAttribute("muted", "muted")
  videoElement.setAttribute("autoplay", "autoplay")
  videoElement.setAttribute("loop", "loop")
  videoElement.setAttribute("crossorigin", "")
  videoElement.setAttribute("controls", "")
  videoElement.style.display = "none"

  // 加FLV演示数据
  if (window.flvjs.isSupported()) {
    const flvPlayer = window.flvjs.createPlayer({
      type: "flv",
      url: flvUrl
    })
    flvPlayer.attachMediaElement(videoElement)
    flvPlayer.load()
    flvPlayer.play()
  } else {
    $message("不支持flv格式视频")
  }
}

export function onChangeAngle(value) {
  if (selectedView) {
    selectedView.angle = value
  }
}

export function onChangeAngle2(value) {
  if (selectedView) {
    selectedView.angle2 = value
  }
}

export function onChangeDistance(value) {
  if (selectedView) {
    selectedView.distance = value
  }
}

export function onChangeHeading(value) {
  if (selectedView) {
    selectedView.heading = value
  }
}

export function onClickSelView() {
  if (!selectedView) {
    return
  }

  map.graphicLayer.startDraw({
    type: "point",
    success: (graphic) => {
      const point = graphic.point
      graphic.remove() // 删除绘制的点

      selectedView.targetPosition = point
    }
  })
}

export function onChangePitch(value) {
  if (selectedView) {
    selectedView.pitch = value
  }
}

// 透明度
export function onChangeOpacity(value) {
  if (selectedView) {
    selectedView.opacity = value
  }
}

// 添加投射视频
export function addVideo(data) {
  // 开始绘制
  graphicLayer.startDraw({
    type: "video3D",
    style: {
      container: videoElement,
      angle: data.cameraAngle,
      angle2: data.cameraAngle2,
      heading: data.heading,
      pitch: data.pitchValue,
      distance: data.distanceValue,
      showFrustum: data.ckdFrustum
    },
    success: function (graphic) {
      console.log("绘制完成", graphic)

      selectedView = graphic // 记录下
    }
  })
}

// 按当前视角投射视频
export function addThisCamera(data) {
  // 取屏幕中心点
  const targetPosition = map.getCenter({ format: false })
  if (!targetPosition) {
    return
  }

  const cameraPosition = Cesium.clone(map.camera.position)

  // 构造投射体
  const video3D = new mars3d.graphic.Video3D({
    position: cameraPosition,
    targetPosition: targetPosition,
    style: {
      container: videoElement,
      angle: data.cameraAngle,
      angle2: data.cameraAngle2,
      heading: data.heading,
      pitch: data.pitchValue,
      distance: data.distanceValue,
      opacity: data.opcity,
      showFrustum: data.showFrustum
    }
  })
  graphicLayer.addGraphic(video3D)

  selectedView = video3D // 记录下
}

// 清除
export function clear() {
  graphicLayer.clear()
  selectedView = null
}

// 播放暂停
export function playOrpause() {
  if (!selectedView) {
    return
  }
  selectedView.play = !selectedView.play
}

// 定位至视频位置
export function locate() {
  if (selectedView) {
    selectedView.setView()
  }
}

// 打印参数
export function printParameters() {
  if (!selectedView) {
    return
  }

  const params = JSON.stringify(selectedView.toJSON())
  console.log("Video3D构造参数为", params)
}

// 线框是否显示
export function showFrustum(ckd) {
  if (!selectedView) {
    return
  }
  selectedView.showFrustum = ckd
}

// 视频位置
export function selCamera() {
  if (!selectedView) {
    return
  }
  map.graphicLayer.startDraw({
    type: "point",
    success: (graphic) => {
      const point = graphic.point
      graphic.remove() // 删除绘制的点

      selectedView.position = point
    }
  })
}
