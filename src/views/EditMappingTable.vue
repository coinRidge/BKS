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
            <el-form-item :label="$r.getLabel('mappingTableName')" prop="name">
              <el-tooltip
                effect="light"
                :content="message['name']"
                placement="bottom-end"
                :disabled="!message['name']">
                <el-input :maxLength="30" size="medium" v-model="form.name" :disabled="isEdit()"></el-input>
              </el-tooltip>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item :label="$r.getLabel('field')" prop="fieldType">
              <b-select
                v-model="form.fieldType"
                :options="fieldTypes"
                :disabled="isEdit()"
                ref="fieldType"
              ></b-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" :gutter="30">
          <el-col :span="24">
            <el-form-item :label="$r.getLabel('remark')" prop="remark" :maxLength="1000" size="medium">
              <el-input v-model="form.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <editable-table
            :configs="mtConfigs"
            :rules="mtRules"
            :initDatas="initialMapping"
            ref="mappingTable">
          </editable-table>
        </el-row>
        <div class="basicinfo-icon section-title">
          {{$r.getLabel('messageConfigApplication')}}
        </div>
        <el-row>
          <message-config-table :data="form.messageConfigDTOS"></message-config-table>
        </el-row>
      </el-form>
    </el-card>
  </el-main>
  <el-footer>
    <el-row type="flex" justify="end" :gutter="30">
      <el-col :span="24" style="text-align: right">
        <el-button size="small" @click="del" v-if="isEdit()">{{$r.getLabel('del')}}</el-button>
        <el-button size="small" type="primary" @click="submit">{{$r.getLabel('submit')}}</el-button>
      </el-col>
    </el-row>
  </el-footer>
</el-container>
</template>

<script>
import Action from '@/mixins/action'
import MappingTableConfig from '@/tableConfig/mappingTableConfig'
import MessageConfigTable from '@/components/mappingTable/MessageConfigTable.vue'
import FieldType from '@/components/mappingTable/fieldType.js'
export default {
  mixins: [Action, MappingTableConfig, FieldType],
  name: 'EditMappingTable',
  components: {
    MessageConfigTable
  },
  data () {
    return {
      form: {
        oid: 0,
        name: '',
        fieldType: '',
        remark: '',
        messageConfigs: []
      },
      message: {},
      initialMapping: [],
      currentFieldType: ''
    }
  },
  computed: {
    title () {
      if (this.isEdit()) {
        return this.$r.getLabel('editMappingTable')
      } else {
        return this.$r.getLabel('newMappingTable')
      }
    },
    rules () {
      return {
        name: [
          JSON.parse(this.$constant.requiredRule)
        ],
        fieldType: [
          JSON.parse(this.$constant.requiredRule)
        ]
      }
    }
  },
  methods: {
    handleValidate (prop, flag, error) {
      this.$set(this.message, prop, error)
    },
    reset () {
      this.currentFieldType = ''
      this.form = {
        oid: 0,
        name: '',
        fieldType: '',
        remark: '',
        messageConfigs: []
      }
    },
    setForm () {
      let dto = {}
      if (this.isNew()) {
        this.reset()
        this.initialMapping = []
      } else if (this.isEdit()) {
        dto = _.cloneDeep(this.resp)
        this.form = Object.assign({}, this.form, dto)
        this.$nextTick(() => {
          this.initialMapping = dto.mappingConfigDetailDTOS
        })
      }
    },
    del () {
      this.$confirm(`${this.$r.getMessage('00173')}`, `${this.$r.getLabel('confirmTip')}`, {
        confirmButtonText: `${this.$r.getLabel('confirmed')}`,
        cancelButtonText: `${this.$r.getLabel('cancel')}`,
        type: 'warning'
      }).then(
        () => {
          this.$dwr('BookingAgentService', 'deleteMappingConfig')([this.form.oid]).then(
            resp => {
              this.$message.success(this.$r.getMessage('deleted'))
              window.location.href = this.$constant.URL_SEARCHMAPPINGTABLE
            },
            error => this.$message.error(error)
          )
        },
        error => console.log(error)
      )
    },
    submit () {
      var vm = this
      Promise.all([vm.$refs.form.validate(), vm.$refs.mappingTable.$refs.form.validate()]).then(arr => {
        let dto = {}
        let flag = false
        Object.assign(dto, this.form)
        dto.mappingConfigDetailDTOS = this.$_.cloneDeep(this.$refs.mappingTable.form.data)
        dto.messageConfigDTOS = this.resp.messageConfigDTOS
        _.forEach(dto.mappingConfigDetailDTOS, item => {
          if (!item.externalCode && !item.externalName) {
            this.$message.error(this.$r.getMessage('externalCodeAndExternalName'))
            flag = true
          }
        })
        if (flag) {
          return
        }
        flag = this.$util.checkDuplicateKey(dto.mappingConfigDetailDTOS, 'code', 'duplicateCode', this)
        if (flag) {
          return
        }
        this.$dwr('BookingAgentService', 'existMappingTable')(this.form.name, this.form.fieldType, this.form.oid).then(
          existent => {
            if (!existent) {
              this.$dwr('BookingAgentService', 'updateMappingConfig')(dto).then(
                resp => {
                  this.resp = resp
                  this.$message.success(this.$r.getMessage('01007'))
                  this.afterSave(resp.oid)
                },
                err => this.$message.error(err)
              )
            } else {
              this.$message.error(this.$r.getMessage('duplicateMappingConfig'))
            }
          },
          err => this.$message.error(err)
        )
      },
      err => console.log(err)
      )
    },
    handleChangeFieldType () {
      this.currentFieldType = this.form.fieldType
      this.initialMapping = []
    }
  },
  watch: {
    '$route' (to, from) {
      this.oid = Number(this.$route.params.oid || 0)
      this.setForm()
      this.bksPageTitle('newMappingTable', 'editMappingTable')
    },
    'form.fieldType' (newVal, oldVal) {
      if (this.currentFieldType === newVal) return
      if (this.$refs.mappingTable.form.data.length > 0) {
        this.$confirm(`${this.$r.getMessage('confirm2ChangeFieldType')}`, `${this.$r.getLabel('confirmTip')}`, {
          confirmButtonText: `${this.$r.getLabel('confirmed')}`,
          cancelButtonText: `${this.$r.getLabel('cancel')}`,
          type: 'warning',
          closeOnClickModal: false
        }).then(
          () => {
            this.handleChangeFieldType()
            this.$refs.fieldType.blur()
          },
          () => {
            this.form.fieldType = oldVal
            this.$refs.fieldType.blur()
          }
        )
      } else {
        this.handleChangeFieldType()
      }
    }
  },
  created () {
    this.oid = Number(this.$route.params.oid)
    if (this.oid) {
      this.$dwr('BookingAgentService', 'getMappingConfig')(this.oid).then(
        resp => {
          if (resp.oid === 0) {
            this.toNew()
          }
          this.resp = resp
          this.setForm()
        },
        err => this.$message.error(err)
      )
    }
  }
}
</script>
