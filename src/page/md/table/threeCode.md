<br/>

```html
<!-- html -->
<m-table :options="options">
  <template #head-id="item">
    <b>自定义 {{item.scope.title}}</b>
  </template>
  <!-- 自定义id列，插槽名为id，并接受item作为行数据 -->
  <template #id="item">
    <div style="color:#008dff">{{item.scope.row.id}}</div>
  </template>
    <!-- 自定义操作列，插槽名为action，并接受item作为行数据 (操作类的列固定插槽名为action)-->
  <template #action="item">
    <m-button type="text" leftIcon="m-icon-edit" size="small" :disabled="item.scope.rowIndex%2==0">编辑</m-button>
    <m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"  size="small">删除</m-button>
  </template>
</m-table>
```