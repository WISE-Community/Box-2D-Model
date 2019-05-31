function EventManager(enableAlerts){
    this.events = [];
    this.enableAlerts = enableAlerts;
    this.loadingManager;
};

EventManager.prototype.fire = function(type, args, obj) {
    obj.interpretEvent(type, args, obj);
}