<template>
  <el-card>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h2>应用版本管理</h2>
      <el-button type="primary" @click="openDialog()">编辑版本</el-button>
    </div>

    <el-descriptions title="当前版本信息" :column="1" border style="margin-top: 20px;">
      <el-descriptions-item label="版本号">{{ version.versionName }}</el-descriptions-item>
      <el-descriptions-item label="版本Code">{{ version.versionCode }}</el-descriptions-item>
      <el-descriptions-item label="是否强制更新">
        <el-tag :type="version.isMust ? 'danger' : 'success'">{{ version.isMust ? '是' : '否' }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="下载地址">{{ version.downLoadUrl }}</el-descriptions-item>
      <el-descriptions-item label="更新说明">{{ version.updateDes }}</el-descriptions-item>
    </el-descriptions>

    <VersionForm
      v-model:visible="dialogVisible"
      :formData="version"
      @submit="handleSubmit"
    />
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import VersionForm from '../components/VersionForm.vue'
import { getConfig } from '../utils/config'

const version = ref({})
const dialogVisible = ref(false)

const fetchVersion = async () => {
  const config = await getConfig()
  const res = await axios.get(config.apiBaseUrl+'/api/version')
  version.value = res.data
}

const openDialog = () => {
  dialogVisible.value = true
}

const handleSubmit = async () => {
  await fetchVersion()
  dialogVisible.value = false
}

onMounted(fetchVersion)
</script>