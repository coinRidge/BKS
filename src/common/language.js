export default {
  el: {
    colorpicker: {
      confirm: Resource.getLabel('ok'),
      clear: Resource.getLabel('clear')
    },
    datepicker: {
      now: Resource.getLabel('now'),
      today: Resource.getLabel('today'),
      cancel: Resource.getLabel('cancel'),
      clear: Resource.getLabel('clear'),
      confirm: Resource.getLabel('ok'),
      selectDate: Resource.getLabel('selectDate'),
      selectTime: Resource.getLabel('selectTime'),
      startDate: Resource.getLabel('startDate'),
      startTime: Resource.getLabel('startTime'),
      endDate: Resource.getLabel('endDate'),
      endTime: Resource.getLabel('endTime'),
      prevYear: Resource.getLabel('prevYear'),
      nextYear: Resource.getLabel('nextYear'),
      prevMonth: Resource.getLabel('prevMonth'),
      nextMonth: Resource.getLabel('nextMonth'),
      year: Resource.getLabel('elYear'),
      month1: Resource.getLabel('month1'),
      month2: Resource.getLabel('month2'),
      month3: Resource.getLabel('month3'),
      month4: Resource.getLabel('month4'),
      month5: Resource.getLabel('month5'),
      month6: Resource.getLabel('month6'),
      month7: Resource.getLabel('month7'),
      month8: Resource.getLabel('month8'),
      month9: Resource.getLabel('month9'),
      month10: Resource.getLabel('month10'),
      month11: Resource.getLabel('month11'),
      month12: Resource.getLabel('month12'),
      // week: 'week',
      weeks: {
        sun: Resource.getLabel('sun'),
        mon: Resource.getLabel('mon'),
        tue: Resource.getLabel('tue'),
        wed: Resource.getLabel('wed'),
        thu: Resource.getLabel('thu'),
        fri: Resource.getLabel('fri'),
        sat: Resource.getLabel('sat')
      },
      months: {
        jan: Resource.getLabel('jan'),
        feb: Resource.getLabel('feb'),
        mar: Resource.getLabel('mar'),
        apr: Resource.getLabel('apr'),
        may: Resource.getLabel('may'),
        jun: Resource.getLabel('jun'),
        jul: Resource.getLabel('jul'),
        aug: Resource.getLabel('aug'),
        sep: Resource.getLabel('sep'),
        oct: Resource.getLabel('oct'),
        nov: Resource.getLabel('nov'),
        dec: Resource.getLabel('dec')
      }
    },
    select: {
      loading: Resource.getLabel('loading'),
      noMatch: Resource.getLabel('noMatch'),
      noData: Resource.getLabel('noData'),
      placeholder: Resource.getLabel('select')
    },
    cascader: {
      noMatch: Resource.getLabel('noMatch'),
      loading: Resource.getLabel('loading'),
      placeholder: Resource.getLabel('select')
    },
    pagination: {
      goto: Resource.getLabel('goto'),
      pagesize: Resource.getLabel('elpagesize'),
      total: Resource.getLabel('eltotal'),
      pageClassifier: Resource.getLabel('pageClassifier')
    },
    messagebox: {
      title: Resource.getLabel('eltitle'),
      confirm: Resource.getLabel('ok'),
      cancel: Resource.getLabel('cancel'),
      error: Resource.getLabel('illegalInput')
    },
    upload: {
      deleteTip: Resource.getLabel('deleteTip'),
      delete: Resource.getLabel('delete'),
      preview: Resource.getLabel('preview'),
      continue: Resource.getLabel('continue')
    },
    table: {
      emptyText: Resource.getLabel('noData'),
      confirmFilter: Resource.getLabel('confirmFilter'),
      resetFilter: Resource.getLabel('reset'),
      clearFilter: Resource.getLabel('all'),
      sumText: Resource.getLabel('total')
    },
    tree: {
      emptyText: Resource.getLabel('noData')
    },
    transfer: {
      noMatch: Resource.getLabel('noMatch'),
      noData: Resource.getLabel('noData'),
      titles: [Resource.getLabel('list1'), Resource.getLabel('list2')], // to be translated
      filterPlaceholder: Resource.getLabel('enterKeyword'), // to be translated
      noCheckedFormat: Resource.getLabel('noCheckedFormat'), // to be translated
      hasCheckedFormat: Resource.getLabel('hasCheckedFormat') // to be translated
    }
  }
}
