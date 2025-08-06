<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 style="text-align: center;">版本管理后台</h2>
      <el-form
        :model="form"
        :rules="rules"
        ref="loginForm"
        label-width="80px"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" style="width: 100%">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const router = useRouter();

const form = reactive({
  username: '',
  password: '',
});

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

const loginForm = ref();

function handleLogin() {
  loginForm.value.validate((valid) => {
    if (!valid) return;

    // 简单示范：用户名 admin，密码 123456
    if (form.username === 'admin' && form.password === '123456') {
      ElMessage.success('登录成功！');
      router.push('/version-manager');
    } else {
      ElMessage.error('用户名或密码错误');
    }
  });
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
}

.login-card {
  width: 380px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgb(0 0 0 / 0.1);
}
</style>