<template>
<el-container class="container">
  <el-header class="panel-head">
    {{title}}
  </el-header>
  <el-main>
    <el-card>
      <el-form :rules="rules" ref="form" :model="form" @validate="handleValidate" :show-message="false">
        <el-row type="flex" justify="start" :gutter="30">
          <el-col :span="8">
            <el-form-item :label="$r.getLabel('bkOffice')" prop="officeCode">
              <el-tooltip
                effect="light"
                :content="message['officeCode']"
                placement="bottom-end"
                :disabled="!message['officeCode']">
                <b-select
                  v-model="form.officeCode"
                  :options="$util.getUserOfficeArray()"
                  :disabled="isEdit()"></b-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item :label="$r.getLabel('haulier')" prop="carrierCode">
              <b-select
                v-model="form.carrierCode"
                :options="$util.getHaulierScodes()"
                :disabled="isEdit()"></b-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item :label="$r.getLabel('bkParty')" prop="customerName">
              <customer-input
              v-model="form.customerName"
              @select="changeCustomer"
              :disabled="isEdit()"></customer-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" :gutter="30">
          <el-col :span="8">
            <el-form-item :label="$r.getLabel('msgType')" prop="msgType">
              <el-tooltip
                effect="light"
                :content="message['msgType']"
                placement="bottom-end"
                :disabled="!message['msgType']">
                <b-select
                  v-model="form.msgType"
                  :options="$util.getScodesArray('BMCT')"
                  @change="changeMsgType"
                  :disabled="isEdit()"></b-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item :label="$r.getLabel('msgName')" prop="msgName">
              <el-tooltip
                effect="light"
                :content="message['msgName']"
                placement="bottom-end"
                :disabled="!message['msgName']">
                <el-input
                v-model="form.msgName"
                size="medium"
                placeholder=""
                :maxlength="30"></el-input>
              </el-tooltip>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="basicinfo-icon section-title">
          {{$r.getLabel('configInfo')}}
        </div>
        <el-row type="flex" justify="start" :gutter="30">
          <el-col :span="8">
            <el-form-item :label="$r.getLabel('tplCode')" prop="tplCode">
              <el-tooltip
                effect="light"
                :content="message['tplCode']"
                placement="bottom-end"
                :disabled="!message['tplCode']">
                <b-select
                  v-model="form.tplCode"
                  :disabled="isEdit()"
                  :options="tplCodes"></b-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item :label="$r.getLabel('msgChannel')" prop="msgChannel">
              <el-tooltip
                effect="light"
                :content="message['msgChannel']"
                placement="bottom-end"
                :disabled="!message['msgChannel']">
                <b-select
                  v-model="form.msgChannel"
                  :options="$util.getScodesArray('BMCC')"></b-select>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item :label="$r.getLabel('allowResend')" prop="allowResend">
              <b-select
                v-model="form.allowResend"
                :options="$constant.yn"></b-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item :label="$r.getLabel('allowCancel')" prop="allowCancel">
              <b-select
                v-model="form.allowCancel"
                :options="$constant.yn"></b-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" :gutter="30">
          <el-col :span="24">
            <el-form-item :label="$r.getLabel('remarks')" prop="remark">
              <el-input v-model="form.remark" size="medium" placeholder="" :maxlength="160"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <span class="basicinfo-icon section-title">
          {{$r.getLabel('node')}}
        </span>
        <el-row>
          <editable-table
            :configs="nodeTableConfig.configs"
            :rules="nodeTableConfig.rules"
            :initDatas="initialNodeConfig"
            ref="nodeTable">
          </editable-table>
        </el-row>
        <span class="basicinfo-icon section-title">
          {{$r.getLabel('mappingTableImpl')}}
        </span>
        <el-row>
          <editable-table
            :configs="mtConfigs"
            :rules="mtRules"
            :initDatas="initialMappingTable"
            :rowKey="mtRowKey"
            ref="mappingTable">
          </editable-table>
        </el-row>
      </el-form>
    </el-card>
  </el-main>
  <el-footer>
    <el-row type="flex" justify="end" :gutter="30">
      <el-col :span="24" style="text-align: right">
        <el-button size="small" @click="changeStatus" v-if="isEdit()">{{$r.getLabel('activeOrNot')}}</el-button>
        <el-button size="small" @click="toCopy" v-if="isEdit()">{{$r.getLabel('copy')}}</el-button>
        <el-button size="small" type="primary" @click="submit">{{$r.getLabel('submit')}}</el-button>
      </el-col>
    </el-row>
  </el-footer>
</el-container>
</template>

<script>
import Action from '@/mixins/action'
import NodeTableConfig from '@/tableConfig/nodeTableConfig'
import MappingTableImplConfig from '@/tableConfig/mappingTableImplConfig'
import FieldType from '@/components/mappingTable/fieldType.js'
export default {
  mixins: [Action, MappingTableImplConfig, FieldType],
  name: 'EditMessageConfig',
  data () {
    return {
      form: {
        oid: 0,
        officeCode: '',
        carrierCode: '',
        customerSysCode: '',
        customerName: '',
        msgType: '',
        msgName: '',
        tplCode: '',
        msgChannel: '',
        allowResend: false,
        allowCancel: false,
        remark: '',
        active: true
      },
      message: {},
      nodeTableConfig: NodeTableConfig,
      initialNodeConfig: [],
      initialMappingTable: [],
      tplCodes: []
    }
  },
  computed: {
    title () {
      if (this.isEdit()) {
        let status = this.form.active ? this.$r.getLabel('active') : this.$r.getLabel('inactive')
        return `${this.$r.getLabel('editMsgConfig')}(${this.form.msgName}) - ${status}`
      } else {
        return this.$r.getLabel('newMsgConfig')
      }
    },
    rules () {
      return {
        officeCode: [
          JSON.parse(this.$constant.requiredRule)
        ],
        msgType: [
          JSON.parse(this.$constant.requiredRule)
        ],
        msgName: [
          JSON.parse(this.$constant.requiredRule)
        ],
        tplCode: [
          JSON.parse(this.$constant.requiredRule)
        ],
        msgChannel: [
          JSON.parse(this.$constant.requiredRule)
        ]
      }
    }
  },
  methods: {
    getUniquKey () {
      return {
        officeCode: this.form.officeCode,
        carrierCode: this.form.carrierCode,
        customerSysCode: this.form.customerSysCode,
        msgType: [this.form.msgType],
        msgName: this.form.msgName,
        oid: this.form.oid
      }
    },
    handleValidate (prop, flag, error) {
      this.$set(this.message, prop, error)
    },
    reset () {
      this.form = {
        oid: 0,
        officeCode: '',
        carrierCode: '',
        customerSysCode: '',
        customerName: '',
        msgType: '',
        msgName: '',
        tplCode: '',
        msgChannel: '',
        allowResend: false,
        allowCancel: false,
        remark: '',
        active: true
      }
      this.tplCodes = []
    },
    setForm () {
      let dto = {}
      if (this.isNew()) {
        this.reset()
      } else {
        dto = _.cloneDeep(this.resp)
        if (this.isCopy()) {
          dto.oid = 0
          if (!this.$_.isEmpty(dto.messageNodeConfig)) {
            dto.messageNodeConfig.forEach(item => {
              item.oid = 0
            })
          }
        }
        this.form = Object.assign({}, this.form, dto)
      }
      this.initialNodeConfig = dto.messageNodeConfig
      this.initialMappingTable = dto.mappingConfigHeaderDTOS
    },
    queryTemplate (val) {
      if (val) {
        const url = `${this.$constant.templateUrl}/${val}`
        this.$dwr('DWRProfileService', 'getShareFolderListJson')(url, this.$util.getApplicationContext()).then(
          resp => {
            const fileList = JSON.parse(resp.fileListJson || '{}')
            if (fileList.children) {
              this.tplCodes = fileList.children.map(item => {
                const value = this.$_.last(item.path.split('/'))
                return {
                  code: `${val}/${value}`,
                  label: value
                }
              })
            } else {
              this.tplCodes = []
            }
          },
          err => this.$message.error(err)
        )
      } else {
        this.tplCodes = []
      }
    },
    submit () {
      var vm = this
      Promise.all([vm.$refs.form.validate(), vm.$refs.nodeTable.$refs.form.validate(), vm.$refs.mappingTable.$refs.form.validate()]).then(arr => {
        let dto = {}
        Object.assign(dto, this.form)
        dto.messageNodeConfig = this.$_.cloneDeep(this.$refs.nodeTable.form.data)
        dto.mappingConfigHeaderDTOS = this.$_.cloneDeep(this.$refs.mappingTable.form.data)
        _.forOwn(dto.messageNodeConfig, (value, key) => {
          value.nodeName = _.toUpper(value.nodeName)
        })
        let flag = this.$util.checkDuplicateKey(dto.messageNodeConfig, 'nodeName', 'duplicateNodeName', this)
        if (flag) {
          return
        }
        flag = this.$util.checkDuplicateKey(dto.mappingConfigHeaderDTOS, 'fieldType', 'duplicateFieldType', this)
        if (flag) {
          return
        }
        this.$dwr('BookingAgentService', 'existMessageConfig')(this.getUniquKey()).then(
          existent => {
            if (!existent) {
              this.$dwr('BookingAgentService', 'updateMessageConfig')(dto).then(
                resp => {
                  this.resp = resp
                  this.$message.success(this.$r.getMessage('01007'))
                  this.afterSave(resp.oid)
                },
                err => this.$message.error(err)
              )
            } else {
              this.$message.error(this.$r.getMessage('duplicateMessageSetting'))
            }
          },
          err => this.$message.error(err)
        )
      },
      err => console.log(err)
      )
    },
    changeStatus () {
      this.$dwr('BookingAgentService', 'changeMessageConfigStatus')(this.form.oid).then(
        resp => {
          this.form.active = !this.form.active
          this.$message({
            type: 'success',
            message: `${this.$r.getMessage('statusUpdated')}`
          })
        },
        error => {
          this.$message.error(error)
        }
      )
    },
    changeCustomer (item) {
      this.form.customerSysCode = item.customerSysCode
    },
    changeMsgType (val) {
      this.form.tplCode = ''
      this.queryTemplate(val)
    }
  },
  watch: {
    '$route' (to, from) {
      this.oid = Number(this.$route.params.oid || 0)
      this.setForm()
      this.bksPageTitle('newMsgConfig', 'editMsgConfig')
    }
  },
  created () {
    this.oid = Number(this.$route.params.oid)
    if (this.oid) {
      this.$dwr('BookingAgentService', 'getMessageConfig')(this.oid).then(
        resp => {
          if (resp.oid === 0) {
            this.toNew()
          }
          this.resp = resp
          this.queryTemplate(resp.msgType)
          this.setForm()
        },
        err => this.$message.error(err)
      )
    }
  }
}
</script>
