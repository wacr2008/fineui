/**
 * 选色控件
 *
 * Created by GUY on 2015/11/17.
 * @class BI.ColorChooser
 * @extends BI.Widget
 */
BI.ColorChooser = BI.inherit(BI.Widget, {

    _defaultConfig: function () {
        return BI.extend(BI.ColorChooser.superclass._defaultConfig.apply(this, arguments), {
            baseCls: "bi-color-chooser",
            value: "",
            height: 24
        });
    },

    _init: function () {
        BI.ColorChooser.superclass._init.apply(this, arguments);
        var self = this, o = this.options;

        this.combo = BI.createWidget({
            type: "bi.combo",
            element: this,
            container: o.container,
            adjustLength: 1,
            isNeedAdjustWidth: false,
            isNeedAdjustHeight: false,
            el: BI.extend({
                type: o.width <= 24 ? "bi.color_chooser_trigger" : "bi.long_color_chooser_trigger",
                ref: function (_ref) {
                    self.trigger = _ref;
                },
                width: o.width - 2,
                height: o.height - 2
            }, o.el),
            popup: {
                el: BI.extend({
                    type: "bi.color_chooser_popup",
                    ref: function (_ref) {
                        self.colorPicker = _ref;
                    },
                    listeners: [{
                        eventName: BI.ColorChooserPopup.EVENT_VALUE_CHANGE,
                        action: function () {
                            fn();
                            if (!self._isRGBColor(self.colorPicker.getValue())) {
                                self.combo.hideView();
                            }
                        }
                    }, {
                        eventName: BI.ColorChooserPopup.EVENT_CHANGE,
                        action: function () {
                            fn();
                            self.combo.hideView();
                        }
                    }]
                }, o.popup),
                width: 230
            },
            value: o.value
        });

        var fn = function () {
            var color = self.colorPicker.getValue();
            self.trigger.setValue(color);
        };

        this.combo.on(BI.Combo.EVENT_AFTER_HIDEVIEW, function () {
            self.fireEvent(BI.ColorChooser.EVENT_CHANGE, arguments);
        });
    },

    _isRGBColor: function (color) {
        return BI.isNotEmptyString(color) && color !== "transparent";
    },

    isViewVisible: function () {
        return this.combo.isViewVisible();
    },

    hideView: function () {
        this.combo.hideView();
    },

    showView: function () {
        this.combo.showView();
    },

    setValue: function (color) {
        this.combo.setValue(color);
    },

    getValue: function () {
        return this.combo.getValue();
    }
});
BI.ColorChooser.EVENT_CHANGE = "EVENT_CHANGE";
BI.shortcut("bi.color_chooser", BI.ColorChooser);