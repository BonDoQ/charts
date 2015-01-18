/**
 * Created by BonDoQ on 1/18/15.
 */
define(['backbone', 'view/vChart', 'model/chart'], function (Backbone, Chart, chartModel) {
    return Backbone.Layout.extend({
        template: 'main',
        views: {
            '#bar': new Chart({model: new chartModel({id: 'bar'})}),
            '#col': new Chart({model: new chartModel({id: 'col'})}),
            '#line': new Chart({model: new chartModel({id: 'line'})}),
            '#pie': new Chart({model: new chartModel({id: 'pie'})}),
            '#scatter': new Chart({model: new chartModel({id: 'scatter'})})

        }
    });
});
