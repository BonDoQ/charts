define(['backbone', 'view/vChart', 'model/chart'], function (Backbone, Chart, chartModel) {
    return Backbone.Layout.extend({
        template: 'single',
        initialize: function (options) {
            this.type = options.type;
            this.insertView('#chart', new Chart({model: new chartModel({id: this.type})})).renderViews();
        }
    });
});
