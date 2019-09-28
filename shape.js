function Shape(context="_shape_") {
    var handler = {
        get: function(obj,prop) {
            let data_name = context + prop
            let oldVal = obj[prop]
            let value = window.localStorage.getItem(data_name)

            obj[prop] = value

            return value 
        },
        set: function(obj,prop,value) {
            let data_name = context + prop
            let oldVal = obj[prop]

            window.localStorage.setItem(data_name, value)
        }
    }

    let shape = {
        _default: function(prop, value) {
            if (!this[prop]) this[prop] = value
        }
    }

    let thing = new Proxy(shape, handler)

    return shape
}
