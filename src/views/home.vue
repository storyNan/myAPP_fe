<template>
  <div class="home">
    <el-container>
        <el-aside width="210px">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="accountList">账号列表</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main>
            <el-form ref="form" label-width="120px">
                <el-form-item label="链接库服务：">
                    <el-select v-model="serve" placeholder="请选择服务">
                    <el-option label="预发布服" value="pre"></el-option>
                    <el-option label="测试服" value="test"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="表名：">
                    <el-input v-model="table"></el-input>
                </el-form-item>
                <el-form-item label="字段：">
                    <el-input v-model="table_key"></el-input>
                </el-form-item>
                <el-form-item label="文件类型：">
                    <el-select v-model="file_type" placeholder="请选择生成文件类型：">
                    <el-option label="excel" value="excel"></el-option>
                    <el-option label="csv" value="csv"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="生成文件名：">
                    <el-input v-model="download_name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'home',
    data: () => {
        return {
            serve: 'pre',
            table: '',
            table_key: '',
            download_name: '',
            file_type: 'csv'
        }
    },
    methods: {
        onSubmit() {
            axios.post('http://localhost:3000/submitData', {
                serve: this.serve,
                table: this.table,
                table_key: this.table_key,
                download_name: 'class_num',
                file_type: 'csv'
            })
            .then(res=> {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<style scoped >
    .el-menu { 
        border-right: none;
    }
    .el-aside {
        height: 100vh;
        border-right: 1px solid #eee;
        background-color: #FDFDFD;
        color: #333;
        text-align: center;
    }
    
    .el-main {
        background-color: #fff;
        color: #333;
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .el-form-item__content {
        text-align: left;
    }
</style>
