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
              {{ item.title }}
            </div>
            <draggable class="components-draggable" :list="item.list"
              :group="{ name: 'componentsGroup', pull: 'clone', put: false }" :clone="cloneComponent"
              draggable=".components-item" :sort="false" @end="onEnd">
              <div v-for="(element, index) in item.list" :key="index" class="components-item"
                @click="addComponent(element)">
                <div class="components-body">
                  <svg-icon :icon-class="element.__config__.tagIcon" />
                  {{ element.__config__.label }}
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

    <right-panel :active-data="activeData" :form-conf="formConf" :show-field="!!drawingList.length"
      @tag-change="tagChange" @fetch-data="fetchData" />
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

      leftComponents: [
        {
          title: '输入型组件',
          list: inputComponents
        },
        {
          title: '选择型组件',
          list: selectComponents
        },
        {
          title: '布局型组件',
          list: layoutComponents
        }
      ]
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
