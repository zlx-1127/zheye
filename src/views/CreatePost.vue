<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题:</label>
        <validate-input
          type="text"
          v-model="titleVal"
          :rules="titleRules"
          placeholder="请输入文章标题"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情:</label>
        <validate-input
          rows="10"
          type="text"
          tag="textarea"
          v-model="contentVal"
          :rules="contentRules"
          placeholder="请输入文章详情"
        ></validate-input>
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">发表文章</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps, PostProps } from '../store'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
export default defineComponent({
  name: 'CreatePost',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const titleRules: RulesProp = [
      { type: 'required', message: '文章标题不能为空' }
    ]
    const titleVal = ref('')

    const contentRules: RulesProp = [
      { type: 'required', message: '文章详情不能为空' }
    ]
    const contentVal = ref('')

    const router = useRouter()
    const store = useStore<GlobalDataProps>()

    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { column } = store.state.user
        console.log(column)
      }
    }
    return {
      titleRules,
      titleVal,
      contentRules,
      contentVal,
      onFormSubmit
    }
  }
})
</script>
