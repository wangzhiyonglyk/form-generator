<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/html-indent -->
<template>
  <div class="container">
    <div class="left-board">
      <div class="logo-wrapper">
        <div class="logo">
          <img :src="logo" alt="logo"> Form Generator
          <a class="github" href="https://github.com/JakHuang/form-generator" target="_blank">
            <img src="https://github.githubassets.com/pinned-octocat.svg" alt>
          </a>
        </div>
      </div>
      <el-scrollbar class="left-scrollbar">
        <div class="components-list">
          <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
            <div class="components-title">
              <svg-icon icon-class="component" />
              {{ item.label }}
            </div>
            <draggable class="components-draggable" :list="item.children"
              :group="{ name: 'componentsGroup', pull: 'clone', put: false }" :clone="createNewComponent"
              draggable=".components-item" :sort="false">
              <div v-for="(element, index) in item.children" :key="index" class="components-item">
                <div class="components-body" @click="addComponent(element)">
                  <svg-icon :icon-class="element.icon || (element.name && element.name.replace('el-', ''))" />
                  {{ element.label }}
                </div>
              </div>
            </draggable>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <el-form class="center-board">
      <draggable class="drawing-board" :list="drawingList" :animation="340" group="componentsGroup">
        <draggable-item v-for="(item, index) in drawingList" :key="item.id" :drawing-list="drawingList" :config="item"
          :index="index" :active-id="activeId" />
      </draggable>
      <div v-show="!drawingList.length" class="empty-info">
        从左侧拖入或点选组件进行表单设计
      </div>
    </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import logo from '@/assets/logo.png'
import DraggableItem from './DraggableItem.vue'
import components from '../../components/config'
import { create } from '../../components/factory'
import objectFunc from '../../utils/objectFunc'

export default {
  components: {
    draggable,
    DraggableItem
  },
  data() {
    return {
      logo,
      leftComponents: components, // 左侧组件面板
      drawingList: [], // 画布中的组件列表
      activeId: null // 当前选中的组件id

    }
  },
  computed: {
  },
  watch: {

  },
  mounted() {
    const drawingList = window.localStorage.getItem('drawingList')
    if (drawingList) {
      this.drawingList = JSON.parse(drawingList)
    }
  },
  provide() {
    return {
      activeComponent: this.activeComponent,
      deleteComponent: this.deleteComponent,
      copyComponent: this.copyComponent
    }
  },
  methods: {
    activeComponent(event, id) {
      event.stopPropagation()
      this.activeId = id
    },
    /**
     * 单击添加一个组件
     * @param {*} origin
     */
    addComponent(origin) {
      const newComponent = this.createNewComponent(origin)
      this.drawingList.push(newComponent)
    },
    /**
     * 拖入一个新的组件
     * @param {*} origin
     */
    createNewComponent(origin) {
      const newComponent = create(origin.name, origin.tag, origin.label, origin.groupName)
      return newComponent
    },
    /**
     * 组件删除
     * @param {*} index
     * @param {*} list
     */
    deleteComponent(index) {
      this.drawingList.splice(index, 1)
    },
    /**
     * 向下复制组件
     */
    copyComponent(index) {
      const clone = objectFunc.clone(this.drawingList[index])
      this.drawingList.splice(index, 0, clone)
    }
  }
}
</script>

<style lang='scss'>
@import '@/styles/home';
</style>
