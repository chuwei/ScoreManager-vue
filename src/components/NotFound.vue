<template>
  <div>
  <div class="head404"></div>
  <div class="txtbg404">
    <el-row :gutter="20">
      <el-col :span="24"><div class="grid-content">对不起，您请求的页面不存在、或已被删除、或暂时不可用</div></el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="6"><div class="grid-content"><a onclick="history.back()">返回上一页面</a></div></el-col>
      <el-col :span="6"><div class="grid-content"><a href="http://localhost:8080">返回网站首页</a></div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
  </div>
</template>
<style type="text/css">
  .head404{ width:580px; height:234px; margin:50px auto 0 auto; background:url(../assets/404.png) no-repeat; }
  .txtbg404 .txtbox p {margin:0px 0; line-height:18px;}
  .txtbg404 .txtbox p a { color:#000000; text-decoration:none;}
  .txtbg404 .txtbox p a:hover { color:#409eff; text-decoration:underline;}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
     margin-bottom: 0;
   }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-col {
    border-radius: 4px;
  }

</style>
