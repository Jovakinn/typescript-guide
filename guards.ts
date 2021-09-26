function strip(x: string | number): number | string {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim()
}
console.log(strip("  1  1   "))
console.log(strip(777))

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error result'
}
function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

// ==========================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    //...
}

setAlertType('success')
setAlertType('warning')
setAlertType('danger')