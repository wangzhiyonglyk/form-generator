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
              :group="{ name: 'componentsGroup', pull: 'clone', put: false }" draggable=".components-item" :sort="false">
              <div v-for="(element, index) in item.children" :key="index" class="components-item">
                <div class="components-body">
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
        <draggable-item v-for="(item, index) in drawingList" :key="item.renderKey" :drawing-list="drawingList"
          :current-item="item" :index="index" :active-id="activeId" :form-conf="formConf" />
      </draggable>
      <div v-show="!drawingList.length" class="empty-info">
        从左侧拖入或点选组件进行表单设计
      </div>
    </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import render from '@/components/render/render'
import FormDrawer from './FormDrawer'
import JsonDrawer from './JsonDrawer'
import RightPanel from './RightPanel'
import {
  inputComponents, selectComponents, layoutComponents, formConf
} from '@/components/generator/config'

import logo from '@/assets/logo.png'
import CodeTypeDialog from './CodeTypeDialog'
import DraggableItem from './DraggableItem'

import components from '../../components/config'

export default {
  components: {
    draggable,
    render,
    FormDrawer,
    JsonDrawer,
    RightPanel,
    CodeTypeDialog,
    DraggableItem
  },
  data() {
    return {
      logo,

      formConf,
      inputComponents,
      selectComponents,
      layoutComponents,
      labelWidth: 100,
      drawingList: [],

      activeId: null,

      leftComponents: components
    }
  },
  computed: {
  },
  watch: {

  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang='scss'>
@import '@/styles/home';
</style>
