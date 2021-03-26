<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input v-model="emailInputValueRef" :rules="emailRules"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
    <!-- <column-list :list="list"></column-list> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'

export default defineComponent(
  {
    name: 'App',
    components: {
      // ColumnList,
      GlobalHeader,
      ValidateInput
    },
    setup () {
      const testData: ColumnProps[] = [
        {
          id: 1,
          title: 'test1的专栏',
          description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
          avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
        },
        {
          id: 2,
          title: 'test2的专栏',
          description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
          avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
        }
      ]

      const user: UserProps = {
        isLogin: false
      }

      const emailRules: RulesProp = [
        { type: 'required', message: '电子邮箱地址不能为空' },
        { type: 'email', message: '请输入正确的电子邮箱格式' }
      ]

      const emailInputValueRef = ref('aaaa@163.com')
      return {
        // list: testData,
        currentUser: user,
        ValidateInput,
        emailRules,
        emailInputValueRef
      }
    }
  }
)
</script>

<style>

</style>
