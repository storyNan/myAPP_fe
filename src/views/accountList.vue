<template>
    <div class="account-list">
        <el-row class="btn-group">
            <el-button type="primary" plain v-on:click="create()">新增</el-button>
            <el-button type="primary" plain v-on:click="exportData()">批量导出</el-button>
            <el-button type="primary" plain v-on:click="changePwd()">批量修改密码</el-button>
            <el-button type="primary" plain v-on:click="login()">登录</el-button>
        </el-row>
        <el-table
            ref="multipleTable"
            :data="tableData"
            border
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            prop="account"
            label="账号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="password"
            label="密码"
            width="180">
            </el-table-column>
            <el-table-column
            prop="product_time"
            label="生成时间">
            </el-table-column>
            <el-table-column
            prop="validity_date"
            label="有效期">
            </el-table-column>
            <el-table-column
            prop="state"
            label="状态">
            </el-table-column>
            <el-table-column
            label="操作">
                <a href="javascript:;">修改密码</a> | 
                <a href="javascript:;">退出登录</a> | 
                <a href="javascript:;">登录</a>
            </el-table-column>
        </el-table>

        <!-- 弹窗 -->
        <el-dialog title="新增账号" :visible.sync="dialogFormVisible">
            <el-form class="form-group">
                <el-form-item label="起始账号" :label-width="formLabelWidth">
                    <el-input v-model="form.account"  autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新增数量" :label-width="formLabelWidth">
                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10000" label="新增数量"></el-input-number>
                </el-form-item>
                <el-form-item label="默认密码" v-model="form.password" :label-width="formLabelWidth">
                    <el-input v-model="form.password"  autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="默认登录" :label-width="formLabelWidth">
                    <el-switch v-model="form.isLogin"></el-switch>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">新增</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'accountList',
    data: () => {
        return {
            tableData: [
                {account: '18548913315', password: '123xxx', product_time: '2020/1/3', validity_date: '2020/2/3', state: '未登录'},
                {account: '18548913315', password: '123xxx', product_time: '2020/1/3', validity_date: '2020/2/3', state: '未登录'},
                {account: '18548913315', password: '123xxx', product_time: '2020/1/3', validity_date: '2020/2/3', state: '未登录'}
            ],
            dialogFormVisible: false,
            formLabelWidth: '100px',
            form: {
                num: 1,
                account: '',
                isLogin: true,
                password: '',
            }
        }
    },
    methods: {
        create() {
            // 新增账号
            this.dialogFormVisible = true;
        },
        exportData() {
            // 批量导出数据
        },
        changePwd() {
            // 修改密码
        },
        login() {
            // 登录
        },
        handleSelectionChange() {
            // 处理表格复选
        },
        handleChange() {
            // 计数器

        }
    }
}
</script>

<style scoped>
    .form-group {
        width: 400px;
        margin: 0 auto;
    }
    .btn-group {
        text-align: left;
        margin: 20px;
    }
    .el-form-item .el-form-item__content {  
        text-align: left !important;
    }
    
</style>