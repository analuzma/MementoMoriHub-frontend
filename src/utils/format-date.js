import dayjs from "dayjs"
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

function formatDate(date) {
    return dayjs(date).format('MM/DD/YYYY')
  }
export default formatDate