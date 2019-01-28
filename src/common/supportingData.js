export default {
  // containercargotype
  BCCT: [
    ['1', '一箱一货'],
    ['2', '多箱一货'],
    ['3', '一箱多货']
  ],
  // searchBKSIStatus
  BSSIS: [
    ['Confirmed', '已确认'],
    ['Draft', '未确认']
  ],
  // containerStatus
  BCNS: [
    ['FCL', 'mainBooking'],
    ['LCL', 'subBooking']
  ],
  // printSendStatus
  BPSS: [
    ['PM_NOT', '预配舱单未发送'],
    ['DR_NOT', '场站收据未打印'],
    ['CLP_NOT', 'CLP未打印 '],
    ['MF_NOT', '舱单未发送'],
    ['CFM_NOT', 'Confirmation Form未打印']
  ],
  // preManiStatus
  BPMS: [
    ['Y', '已发送'],
    ['N', '未发送'],
    ['B', '不需要发送']
  ],
  BMSS: [
    [true, '已发送'],
    [false, '未发送']
  ],
  BMPS: [
    [true, '已打印'],
    [false, '未打印']
  ],
  // action log BR, Sub, SI
  BKLOG: [
    ['UICreate', '在线创建'],
    ['ExcelCreate', 'Excel上传'],
    ['Submit', '提交'],
    ['SendToCarrier', '发送给船公司'],
    ['SendVgmToCarrier', '发送VGM给船公司'],
    ['Accept', '船公司同意'],
    ['PartiallyAccept', '船公司部分同意'],
    ['AuditFailed', '审核不通过'],
    ['Update', '修改'],
    ['Reject', '船公司拒绝'],
    ['ApplyShutOut', '申请退关'],
    ['ShutOut', '退关成功'],
    ['SentPre', '发送预配给船代'],
    ['PrintDR', '打印D/R'],
    ['PrintCfm', '打印Confirmation Form'],
    ['PrintClp', '打印CLP'],
    ['SentMf', '发送舱单给船代'],
    ['SentAgent', '发送给船代'],
    ['Cancel', '取消'],
    ['CreateSub', '加拼'],
    ['ReceiveBRAck', '收到BR ACK'],
    ['ReceiveSIAck', '收到SI ACK'],
    ['ReceiveVGMAck', '收到VGM ACK'],
    ['ReceiveBCAck', '收到BC'],
    ['DeleteSubBooking', '刪除子单']
  ],
  // port type
  BPT: [
    ['CI', '城市'],
    ['PO', '港口']
  ],
  GEOT: [
    ['CT', 'Continent'],
    ['CN', 'Country/Region'],
    ['CI', 'City'],
    ['DI', 'County'],
    ['VL', 'Village'],
    ['ST', 'Province/State'],
    ['CO', 'Town'],
    ['PO', 'Port']
  ]
}
