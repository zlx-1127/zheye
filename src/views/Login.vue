<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录到者也</h5>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          type="text"
          v-model="emailVal"
          :rules="emailRules"
          placeholder="请输入邮箱地址"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          v-model="passwordVal"
          :rules="passwordRules"
          placeholder="请输入密码"
        ></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const emailVal = ref('')

    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const passwordVal = ref('')

    const router = useRouter()
    const store = useStore()

    const onFormSubmit = (result: boolean) => {
      if (result) {
        const payLoad = {
          email: emailVal.value,
          password: passwordVal.value
        }
        store.dispatch('loginAndFetch', payLoad).then(data => {
          console.log(data)
          router.push('/')
        })
        // store.commit('login')
      }
    }

    return {
      ValidateInput,
      emailRules,
      emailVal,
      passwordRules,
      passwordVal,
      onFormSubmit
    }
  }
})
</script>
