/**
 *
 * 复选下拉框
 * @class BI.MultiSelectTrigger
 * @extends BI.Trigger
 */

BI.MultiSelectTrigger = BI.inherit(BI.Trigger, {

    constants: {
        height: 14,
        rgap: 4,
        lgap: 4
    },

    _defaultConfig: function () {
        return BI.extend(BI.MultiSelectTrigger.superclass._defaultConfig.apply(this, arguments), {
            baseCls: "bi-multi-select-trigger bi-border bi-border-radius",
            itemsCreator: BI.emptyFn,
            valueFormatter: BI.emptyFn,
            searcher: {},
            switcher: {},

            adapter: null,
            masker: {},
            allowEdit: true
        });
    },

    _init: function () {
        BI.MultiSelectTrigger.superclass._init.apply(this, arguments);

        var self = this, o = this.options;
        if (o.height) {
            this.setHeight(o.height - 2);
        }

        this.searcher = BI.createWidget(o.searcher, {
            type: "bi.multi_select_searcher",
            height: o.height,
            text: o.text,
            itemsCreator: o.itemsCreator,
            valueFormatter: o.valueFormatter,
            watermark: o.watermark,
            popup: {},
            adapter: o.adapter,
            masker: o.masker,
            value: o.value
        });
        this.searcher.on(BI.MultiSelectSearcher.EVENT_START, function () {
            self.fireEvent(BI.MultiSelectTrigger.EVENT_START);
        });
        this.searcher.on(BI.MultiSelectSearcher.EVENT_PAUSE, function () {
            self.fireEvent(BI.MultiSelectTrigger.EVENT_PAUSE);
        });
        this.searcher.on(BI.MultiSelectSearcher.EVENT_SEARCHING, function () {
            self.fireEvent(BI.MultiSelectTrigger.EVENT_SEARCHING, arguments);
        });
        this.searcher.on(BI.MultiSelectSearcher.EVENT_STOP, function () {
            self.fireEvent(BI.MultiSelectTrigger.EVENT_STOP);
        });
        this.searcher.on(BI.MultiSelectSearcher.EVENT_CHANGE, function () {
            self.fireEvent(BI.MultiSelectTrigger.EVENT_CHANGE, arguments);
        });
        this.searcher.on(BI.MultiSelectSearcher.EVENT_BLUR, function () {
            self.fireEvent(BI.MultiSelectTrigger.EVENT_BLUR);
        });
        this.searcher.on(BI.MultiSelectSearcher.EVENT_FOCUS, function () {
            self.fireEvent(BI.MultiSelectTrigger.EVENT_FOCUS);
        });

        this.wrapNumberCounter = BI.createWidget({
            type: "bi.layout"
        });

        this.wrapper = BI.createWidget({
            type: "bi.htape",
            element: this,
            items: [
                {
                    el: this.searcher,
                    width: "fill"
                }, {
                    el: this.wrapNumberCounter,
                    width: 0
                }, {
                    el: BI.createWidget(),
                    width: 24
                }]
        });

        !o.allowEdit && BI.createWidget({
            type: "bi.absolute",
            element: this,
            items: [{
                el: {
                    type: "bi.layout"
                },
                left: 0,
                right: 24,
                top: 0,
                bottom: 0
            }]
        });
    },

    /**
     * 重新调整numberCounter的空白占位符
     */
    refreshPlaceHolderWidth: function(width) {
        this.wrapper.attr("items")[1].width = width;
        this.wrapper.resize();
    },

    getSearcher: function () {
        return this.searcher;
    },

    stopEditing: function () {
        this.searcher.stopSearch();
    },

    setAdapter: function (adapter) {
        this.searcher.setAdapter(adapter);
    },

    setValue: function (ob) {
        this.searcher.setValue(ob);
    },

    getKey: function () {
        return this.searcher.getKey();
    },

    getValue: function () {
        return this.searcher.getValue();
    }
});

BI.MultiSelectTrigger.EVENT_TRIGGER_CLICK = "EVENT_TRIGGER_CLICK";
BI.MultiSelectTrigger.EVENT_COUNTER_CLICK = "EVENT_COUNTER_CLICK";
BI.MultiSelectTrigger.EVENT_CHANGE = "EVENT_CHANGE";
BI.MultiSelectTrigger.EVENT_START = "EVENT_START";
BI.MultiSelectTrigger.EVENT_STOP = "EVENT_STOP";
BI.MultiSelectTrigger.EVENT_PAUSE = "EVENT_PAUSE";
BI.MultiSelectTrigger.EVENT_SEARCHING = "EVENT_SEARCHING";
BI.MultiSelectTrigger.EVENT_BEFORE_COUNTER_POPUPVIEW = "EVENT_BEFORE_COUNTER_POPUPVIEW";
BI.MultiSelectTrigger.EVENT_BLUR = "EVENT_BLUR";
BI.MultiSelectTrigger.EVENT_FOCUS = "EVENT_FOCUS";

BI.shortcut("bi.multi_select_trigger", BI.MultiSelectTrigger);