/**
 * Created by Baron on 2015/10/19.
 */
BI.TimeInterval = BI.inherit(BI.Single, {
    constants: {
        height: 25,
        width: 25,
        lgap: 15,
        offset: -15,
        timeErrorCls: "time-error",
        DATE_MIN_VALUE: "1900-01-01",
        DATE_MAX_VALUE: "2099-12-31"
    },
    _defaultConfig: function () {
        var conf = BI.TimeInterval.superclass._defaultConfig.apply(this, arguments);
        return BI.extend(conf, {
            extraCls: "bi-time-interval"
        });
    },
    _init: function () {
        var self = this, o = this.options;
        BI.TimeInterval.superclass._init.apply(this, arguments);

        o.value = o.value || {};
        this.left = this._createCombo(o.value.start);
        this.right = this._createCombo(o.value.end);
        this.label = BI.createWidget({
            type: "bi.label",
            height: this.constants.height,
            width: this.constants.width,
            text: "-"
        });
        BI.createWidget({
            element: self,
            type: "bi.center",
            hgap: 15,
            height: this.constants.height,
            items: [{
                type: "bi.absolute",
                items: [{
                    el: self.left,
                    left: this.constants.offset,
                    right: 0,
                    top: 0,
                    bottom: 0
                }]
            }, {
                type: "bi.absolute",
                items: [{
                    el: self.right,
                    left: 0,
                    right: this.constants.offset,
                    top: 0,
                    bottom: 0
                }]
            }]
        });
        BI.createWidget({
            type: "bi.horizontal_auto",
            element: this,
            items: [
                self.label
            ]
        });
    },

    _createCombo: function (v) {
        var self = this;
        var combo = BI.createWidget({
            type: "bi.dynamic_date_time_combo",
            value: v
        });
        combo.on(BI.DynamicDateTimeCombo.EVENT_ERROR, function () {
            self._clearTitle();
            BI.Bubbles.hide("error");
            self.element.removeClass(self.constants.timeErrorCls);
            self.fireEvent(BI.TimeInterval.EVENT_ERROR);
        });

        combo.on(BI.DynamicDateTimeCombo.EVENT_VALID, function () {
            BI.Bubbles.hide("error");
            var smallDate = self.left.getKey(), bigDate = self.right.getKey();
            if (self.left.isValid() && self.right.isValid() && self._check(smallDate, bigDate) && self._compare(smallDate, bigDate)) {
                self._setTitle(BI.i18nText("BI-Time_Interval_Error_Text"));
                self.element.addClass(self.constants.timeErrorCls);
                BI.Bubbles.show("error", BI.i18nText("BI-Time_Interval_Error_Text"), self, {
                    offsetStyle: "center"
                });
                self.fireEvent(BI.TimeInterval.EVENT_ERROR);
            } else {
                self._clearTitle();
                self.element.removeClass(self.constants.timeErrorCls);
            }
        });

        combo.on(BI.DynamicDateTimeCombo.EVENT_FOCUS, function () {
            BI.Bubbles.hide("error");
            var smallDate = self.left.getKey(), bigDate = self.right.getKey();
            if (self.left.isValid() && self.right.isValid() && self._check(smallDate, bigDate) && self._compare(smallDate, bigDate)) {
                self._setTitle(BI.i18nText("BI-Time_Interval_Error_Text"));
                self.element.addClass(self.constants.timeErrorCls);
                BI.Bubbles.show("error", BI.i18nText("BI-Time_Interval_Error_Text"), self, {
                    offsetStyle: "center"
                });
                self.fireEvent(BI.TimeInterval.EVENT_ERROR);
            } else {
                self._clearTitle();
                self.element.removeClass(self.constants.timeErrorCls);
            }
        });

        combo.on(BI.DynamicDateTimeCombo.EVENT_BEFORE_POPUPVIEW, function () {
            self.left.hidePopupView();
            self.right.hidePopupView();
        });

        combo.on(BI.DynamicDateTimeCombo.EVENT_CONFIRM, function () {
            BI.Bubbles.hide("error");
            var smallDate = self.left.getKey(), bigDate = self.right.getKey();
            if (self.left.isValid() && self.right.isValid() && self._check(smallDate, bigDate) && self._compare(smallDate, bigDate)) {
                self._setTitle(BI.i18nText("BI-Time_Interval_Error_Text"));
                self.element.addClass(self.constants.timeErrorCls);
                self.fireEvent(BI.TimeInterval.EVENT_ERROR);
            }else{
                self._clearTitle();
                self.element.removeClass(self.constants.timeErrorCls);
                self.fireEvent(BI.TimeInterval.EVENT_CHANGE);
            }
        });
        return combo;
    },
    _dateCheck: function (date) {
        return BI.parseDateTime(date, "%Y-%x-%d %H:%M:%S").print("%Y-%x-%d %H:%M:%S") === date ||
            BI.parseDateTime(date, "%Y-%X-%d %H:%M:%S").print("%Y-%X-%d %H:%M:%S") === date ||
            BI.parseDateTime(date, "%Y-%x-%e %H:%M:%S").print("%Y-%x-%e %H:%M:%S") === date ||
            BI.parseDateTime(date, "%Y-%X-%e %H:%M:%S").print("%Y-%X-%e %H:%M:%S") === date;
    },
    _checkVoid: function (obj) {
        return !BI.checkDateVoid(obj.year, obj.month, obj.day, this.constants.DATE_MIN_VALUE, this.constants.DATE_MAX_VALUE)[0];
    },
    _check: function (smallDate, bigDate) {
        var smallObj = smallDate.match(/\d+/g), bigObj = bigDate.match(/\d+/g);
        return this._dateCheck(smallDate) && BI.checkDateLegal(smallDate) && this._checkVoid({
            year: smallObj[0],
            month: smallObj[1],
            day: smallObj[2]
        }) && this._dateCheck(bigDate) && BI.checkDateLegal(bigDate) && this._checkVoid({
            year: bigObj[0],
            month: bigObj[1],
            day: bigObj[2]
        });
    },
    _compare: function (smallDate, bigDate) {
        smallDate = BI.parseDateTime(smallDate, "%Y-%X-%d %H:%M:%S").print("%Y-%X-%d %H:%M:%S");
        bigDate = BI.parseDateTime(bigDate, "%Y-%X-%d %H:%M:%S").print("%Y-%X-%d %H:%M:%S");
        return BI.isNotNull(smallDate) && BI.isNotNull(bigDate) && smallDate > bigDate;
    },
    _setTitle: function (v) {
        this.left.setTitle(v);
        this.right.setTitle(v);
        this.label.setTitle(v);
    },
    _clearTitle: function () {
        this.left.setTitle("");
        this.right.setTitle("");
        this.label.setTitle("");
    },
    setValue: function (date) {
        date = date || {};
        this.left.setValue(date.start);
        this.right.setValue(date.end);
    },
    getValue: function () {
        return {start: this.left.getValue(), end: this.right.getValue()};
    }
});
BI.TimeInterval.EVENT_VALID = "EVENT_VALID";
BI.TimeInterval.EVENT_ERROR = "EVENT_ERROR";
BI.TimeInterval.EVENT_CHANGE = "EVENT_CHANGE";
BI.shortcut("bi.time_interval", BI.TimeInterval);