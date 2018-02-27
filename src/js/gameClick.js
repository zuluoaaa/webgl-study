function initEventGame() {
    var Observer = [];

    var addObserver  = function (fn,type) {
        Observer.push({fn:fn,type:type})
    }

    var sendObserver = function (x,y,brush) {
        for(let i in Observer){
            if(Observer[i].type === brush.type){
                Observer[i].fn(x,y,brush);
            }
        }
    }

    return{
        addObserver:addObserver,
        sendObserver:sendObserver
    }
}

