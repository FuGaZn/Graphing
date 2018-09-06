<template>
  <div>
    <div id="background"></div>
    <div id="menu">
      <el-dropdown size="mini" trigger="click" @command="handleFile">
        <span id="fileMenu" class="text"><i class="el-icon-document"></i> File</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="0">New</el-dropdown-item>
          <el-dropdown-item command="1">Open</el-dropdown-item>
          <el-dropdown-item command="2">Save</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button id="clearButton" type="text" @click="clearCanvas"><i class="el-icon-ali-xiangpi"></i> Clear</el-button>
      <el-button id="recognizeButton" type="text" @click="recognizeShape"><i class="el-icon-ali-recognize"></i> Recognize</el-button>
    </div>
    <div class="div">
      <canvas id="canvas" @click="drawShape" width="800px" height="440px"></canvas>
      <el-color-picker id="colorPicker" v-model="linesColor" size="mini"></el-color-picker>
      <div id="nameDiv">{{shapeShow.name}}</div>
    </div>
    <input @change="fileChange" type="file" id="openFile" multiple style="display: none"/>
  </div>
</template>

<script>
  import { saveAs } from 'file-saver/FileSaver'
  export default {
    name: 'canvas',
    data () {
      return {
        strokesCount: 0,
        shapeShow: '',
        shapes: [
          {
            name: 'circle(圆形)',
            type: 'cir'
          },
          {
            name: 'triangle(三角形)',
            type: 'tri'
          },
          {
            name: 'square(正方形)',
            type: 'squ'
          },
          {
            name: 'rectangle(长方形)',
            type: 'rec'
          }
        ],
        linesColor: '#1d86ff'

      }
    },
    mounted () {
      this.drawShape()
    },
    methods: {
      handleFile (command) {
        if (command === 0) {
          this.newFile()
        } else if (command === 1) {
          this.openFile()
        } else if (command === 2) {
          this.saveFile()
        }
      },

      newFile () {
        this.clearCanvas()
      },

      openFile () {
        document.getElementById('openFile').click()
      },

      fileChange (el) {
        if (!el.target.files[0].size) return
        let reader = new FileReader()
        reader.readAsText(el.target.files[0])
        var _this = this
        reader.onload = function () {
          var context = this.result
          if (context.length === 0) {
            return
          }
          var type = context.substr(0, 3)
          var isCorrect = 0
          for (var i = 0; i < _this.shapes.length; i++) {
            if (type === _this.shapes[i].type) {
              _this.shapeShow = _this.shapes[i]
              _this.strokesCount = i + 1
              var src = context.substr(3, context.length)
              var canvas = document.getElementById('canvas')
              var cxt = canvas.getContext('2d')
              var img = new Image()
              img.src = src
              img.onload = function () {
                cxt.drawImage(img, 0, 0)
              }
              isCorrect = 1
              break
            }
          }
          if (isCorrect === 0) {
            this.remindError('所读文件非正确文件。')
          }
        }
        el.target.value = ''
      },

      saveFile () {
        var canvas = document.getElementById('canvas')
        var blob = new Blob([this.shapeShow.type, canvas.toDataURL()], {type: 'text/plain;charset=utf-8'})
        saveAs(blob, this.shapeShow.name + '.txt')
      },

      remindError (message) {
        this.$message.error(message)
      },

      clearCanvas () {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, 800, 440)
        canvas.onmousemove = null
        canvas.onmouseup = null
        this.strokesCount = 0
        this.shapeShow = {}
      },

      recognizeShape () {
        if (this.strokesCount === 0) {
          this.remindError('空白！您尚未画图。')
        } else if (this.strokesCount > 4) {
          this.remindError('笔画过多。')
        } else {
          this.shapeShow = this.shapes[this.strokesCount - 1]
        }
      },

      drawShape () {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        var _this = this
        ctx.beginPath()
        canvas.onmousedown = function (ev) {
          var x = ev.offsetX
          var y = ev.offsetY
          ctx.moveTo(x, y)
          canvas.onmousemove = function (ev) {
            var nextX = ev.offsetX
            var nextY = ev.offsetY
            ctx.lineWidth = 0.5
            ctx.strokeStyle = _this.linesColor
            ctx.lineTo(nextX, nextY)
            ctx.stroke()
          }
          canvas.onmouseup = function (ev) {
            canvas.onmousemove = null
            canvas.onmouseup = null
            _this.strokesCount += 1
          }
        }
      }
    }
  }
</script>

<style scoped>
  .text{
    color: #313335;
    font-weight: normal;
    font-size: 13px;
  }
  #colorPicker{
    position: absolute;
    left: 15px;
    top:10px;
  }
  #clearButton{
    font-size: 14px;
    color: #2c2e30;
    position: absolute;
    top: -8px;
    left: 74px;
  }
  #clearButton:active{
    padding-left: 1px;
    margin-top: 1px;
  }
  #recognizeButton{
    font-size: 14px;
    color: #2c2e30;
    position: absolute;
    top: -8px;
    left: 137px;
  }
  #recognizeButton:active{
    padding-left: 1px;
    margin-top: 1px;
  }
  #fileMenu{
    margin-left: 10px;
    cursor: pointer;
  }
  #background{
    background-color: #CBD5E4;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
  #menu{
    background-color: white;
    position:absolute;
    top: 40px;
    height: 23px;
    left: 50%;
    margin-left: -400px;
    width: 800px;
    border-radius: 3px;
  }
  #canvas{
    background-color: white;
    cursor: crosshair;
    border-radius: 3px;
  }
  #nameDiv{
    position: absolute;
    right: 10px;
    top: 10px;
    height: 50px;
    width: 170px;
    color:#4CAF50;
    font-size: 20px;
    text-align: center;
  }
  .div{
    position:absolute;
    top: 65px;
    left: 50%;
    margin-left: -400px;
  }
</style>
