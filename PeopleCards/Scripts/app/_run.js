$(function () {
    //app.initialize();

    ko.applyBindings(new pc.viewModels.CardList(), $('.card-list')[0]);

    // Activate Knockout
    //ko.validation.init({ grouping: { observable: false } });
    //ko.applyBindings(app);
});
