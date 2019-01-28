import Bar from 'baseComp/Bar'
import CustomerInput from 'baseComp/CustomerInput'
import EditableTable from 'baseComp/EditableTable'
import BSelect from 'baseComp/Select'
import LocationInput from 'baseComp/LocationInput'
import DynamicInput from 'baseComp/DynamicInput'
import Pagination from 'baseComp/Pagination'
import MappingConfigInput from 'baseComp/MappingConfigInput'
import SessionTimeOut from 'baseComp/SessionTimeOut'
import TypeSizeInput from 'baseComp/TypeSizeInput'

const components = [
  Bar,
  CustomerInput,
  EditableTable,
  BSelect,
  LocationInput,
  DynamicInput,
  Pagination,
  MappingConfigInput,
  SessionTimeOut,
  TypeSizeInput
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
