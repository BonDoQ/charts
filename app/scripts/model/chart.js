/**
 * Created by BonDoQ on 1/18/15.
 */

define(['backbone'], function (Backbone) {

    return Backbone.Model.extend({
            url : function(){
                return '/scripts/data/' + this.id + '.json';
            }
        }
    );
});
