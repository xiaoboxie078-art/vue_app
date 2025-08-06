<template>
  <el-dialog v-model="visible" title="版本信息" width="500px">
    <el-form :model="form" label-width="100px">

     <el-form-item label="版本号">
  <el-input v-model="form.versionName" />
</el-form-item>

<el-form-item label="版本code">
  <el-input
    v-model.number="form.versionCode"
    type="number"
    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
  />
</el-form-item>

<el-form-item label="下载地址">
  <el-input v-model="form.downLoadUrl" />
</el-form-item>

<el-form-item label="强制更新">
  <el-switch v-model="form.isMust" />
</el-form-item>
<el-form-item label="更新说明">
  <el-input type="textarea" v-model="form.updateDes" />
</el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="submit">提交</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { watch, ref } from 'vue'
import axios from 'axios'
import { getConfig } from '../utils/config'

const props = defineProps({
  formData: Object,
  visible: Boolean
})
const emit = defineEmits(['update:visible', 'submit'])

const visible = ref(false)
const form = ref({
  versionName: '',
  versionCode: 0,
  downLoadUrl: false,
  isMust: '',
  updateDes: ''
})

watch(() => props.visible, async (val) => {
  visible.value = val
  if (val) {
  const config =  await getConfig()
    const res = await axios.get(config.apiBaseUrl+'/api/version')
    form.value = res.data
  }
})

watch(visible, (val) => {
  emit('update:visible', val)
})

const submit = async () => {
  const config =  await getConfig()
  await axios.post(config.apiBaseUrl+'/api/version', form.value)
  emit('submit')
}
</script>