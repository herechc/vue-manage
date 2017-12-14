<template>
  <div class="container">
    <div class="edit-container">
      <quill-editor v-model="content" ref="myQuillEditor" class="editer" :options="editorOption" @ready="onEditorReady($event)">
      </quill-editor>
    </div>
    <div class="submit_btn">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
  export default {
    name: 'markdown',
    components: {
      quillEditor
    },
    data() {
      return {
        content: '<h3>文本编辑</h3>',
        editorOption: {}
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      submit() {
        console.log(this.content);
        this.$message.success('提交成功！');
      }
    }
  }
</script>
<style scoped lang="scss">
.editer {
  height: 350px;
}
.edit-container{
  padding:40px;
  margin-bottom:40px;
}
.submit_btn {
  text-align: center;
}
</style>
