import type { Ref } from 'vue'
import type { FormInst } from 'naive-ui'

const useValidateForm = (formRef: Ref<FormInst | undefined>) => {
  return async () => {
    if (!formRef.value) return false

    try {
      await formRef.value.validate()
      return true
    } catch {
      return false
    }
  }
}

export default useValidateForm
