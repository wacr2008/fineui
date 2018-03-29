/**
 * 富文本编辑器
 *
 * Created by GUY on 2017/9/15.
 * @class BI.RichEditor
 * @extends BI.Widget
 */
BI.RichEditor = BI.inherit(BI.Widget, {
    _defaultConfig: function () {
        return BI.extend(BI.RichEditor.superclass._defaultConfig.apply(this, arguments), {
            baseCls: "bi-rich-editor",
            toolbar: {}
        });
    },
    _init: function () {
        BI.RichEditor.superclass._init.apply(this, arguments);
        var self = this, o = this.options;
        this.editor = BI.createWidget({
            type: "bi.nic_editor",
            width: o.width,
            height: o.height,
            readOnly: o.readOnly,
            listeners: [{
                eventName: BI.NicEditor.EVENT_BLUR,
                action: function () {
                    self.fireEvent(BI.RichEditor.EVENT_CONFIRM);
                }
            }, {
                eventName: BI.NicEditor.EVENT_FOCUS,
                action: function () {
                    if(!self.combo.isViewVisible()) {
                        self.combo.showView();
                    }
                    self.fireEvent(BI.RichEditor.EVENT_FOCUS);
                }
            }]
        });

        this.combo = BI.createWidget({
            type: "bi.combo",
            element: this,
            toggle: false,
            trigger: o.readOnly ? "" : "click",
            direction: "top,right",
            isNeedAdjustWidth: false,
            isNeedAdjustHeight: false,
            adjustLength: 1,
            el: this.editor,
            popup: {
                el: BI.extend({
                    type: "bi.rich_editor_text_toolbar",
                    editor: this.editor
                }, o.toolbar),
                height: 30,
                stopPropagation: true,
                stopEvent: true
            }
        });

        this.combo.on(BI.Combo.EVENT_AFTER_HIDEVIEW, function () {
            self.fireEvent(BI.RichEditor.EVENT_AFTER_HIDEVIEW);
        });
    },

    focus: function () {
        this.editor.focus();
    },

    setValue: function (v) {
        this.editor.setValue(v);
    },

    getValue: function () {
        return this.editor.getValue();
    }
});
BI.RichEditor.EVENT_AFTER_HIDEVIEW = "EVENT_AFTER_HIDEVIEW";
BI.RichEditor.EVENT_CONFIRM = "EVENT_CONFIRM";
BI.RichEditor.EVENT_FOCUS = "EVENT_FOCUS";
BI.shortcut("bi.rich_editor", BI.RichEditor);