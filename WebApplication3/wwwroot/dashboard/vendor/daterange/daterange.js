/**
 * Minified by jsDelivr using UglifyJS v3.4.5.
 * Original file: /npm/daterangepicker@3.0.3/daterangepicker.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(t, a) {
    if ("function" == typeof define && define.amd) define(["moment", "jquery"], function(t, e) {
        return e.fn || (e.fn = {}), a(t, e)
    });
    else if ("object" == typeof module && module.exports) {
        var e = "undefined" != typeof window ? window.jQuery : void 0;
        e || (e = require("jquery")).fn || (e.fn = {});
        var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
        module.exports = a(i, e)
    } else t.daterangepicker = a(t.moment, t.jQuery)
}(this, function(H, R) {
    var i = function(t, e, a) {
        if (this.parentEl = "body", this.element = R(t), this.startDate = H().startOf("day"), this.endDate = H().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = H().subtract(100, "year").format("YYYY"), this.maxYear = H().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-light", this.locale = {
                direction: "ltr",
                format: H.localeData().longDateFormat("L"),
                separator: " - ",
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: H.weekdaysMin(),
                monthNames: H.monthsShort(),
                firstDay: H.localeData().firstDayOfWeek()
            }, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof e && null !== e || (e = {}), "string" == typeof(e = R.extend(this.element.data(), e)).template || e.template instanceof R || (e.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = e.parentEl && R(e.parentEl).length ? R(e.parentEl) : R(this.parentEl), this.container = R(e.template).appendTo(this.parentEl), "object" == typeof e.locale && ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction), "string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel)) {
            (d = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel;
            var i = d.value;
            this.locale.customRangeLabel = i
        }
        if (this.container.addClass(this.locale.direction), "string" == typeof e.startDate && (this.startDate = H(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = H(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = H(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = H(e.maxDate, this.locale.format)), "object" == typeof e.startDate && (this.startDate = H(e.startDate)), "object" == typeof e.endDate && (this.endDate = H(e.endDate)), "object" == typeof e.minDate && (this.minDate = H(e.minDate)), "object" == typeof e.maxDate && (this.maxDate = H(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses), "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass), "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses), "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass), "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan), "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "number" == typeof e.minYear && (this.minYear = e.minYear), "number" == typeof e.maxYear && (this.maxYear = e.maxYear), "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay)
            for (var s = this.locale.firstDay; 0 < s;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--;
        var n, r, o;
        if (void 0 === e.startDate && void 0 === e.endDate && R(this.element).is(":text")) {
            var h = R(this.element).val(),
                l = h.split(this.locale.separator);
            n = r = null, 2 == l.length ? (n = H(l[0], this.locale.format), r = H(l[1], this.locale.format)) : this.singleDatePicker && "" !== h && (n = H(h, this.locale.format), r = H(h, this.locale.format)), null !== n && null !== r && (this.setStartDate(n), this.setEndDate(r))
        }
        if ("object" == typeof e.ranges) {
            for (o in e.ranges) {
                n = "string" == typeof e.ranges[o][0] ? H(e.ranges[o][0], this.locale.format) : H(e.ranges[o][0]), r = "string" == typeof e.ranges[o][1] ? H(e.ranges[o][1], this.locale.format) : H(e.ranges[o][1]), this.minDate && n.isBefore(this.minDate) && (n = this.minDate.clone());
                var c = this.maxDate;
                if (this.maxSpan && c && n.clone().add(this.maxSpan).isAfter(c) && (c = n.clone().add(this.maxSpan)), c && r.isAfter(c) && (r = c.clone()), !(this.minDate && r.isBefore(this.minDate, this.timepicker ? "minute" : "day") || c && n.isAfter(c, this.timepicker ? "minute" : "day"))) {
                    var d;
                    (d = document.createElement("textarea")).innerHTML = o;
                    i = d.value;
                    this.ranges[i] = [n, r]
                }
            }
            var m = "<ul>";
            for (o in this.ranges) m += '<li data-range-key="' + o + '">' + o + "</li>";
            this.showCustomRangeLabel && (m += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), m += "</ul>", this.container.find(".ranges").prepend(m)
        }
        "function" == typeof a && (this.callback = a), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof e.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", R.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", R.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", R.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", R.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", R.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", R.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", R.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", R.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", R.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", R.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": R.proxy(this.show, this),
            "focus.daterangepicker": R.proxy(this.show, this),
            "keyup.daterangepicker": R.proxy(this.elementChanged, this),
            "keydown.daterangepicker": R.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", R.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", R.proxy(this.toggle, this))), this.updateElement()
    };
    return i.prototype = {
        constructor: i,
        setStartDate: function(t) {
            "string" == typeof t && (this.startDate = H(t, this.locale.format)), "object" == typeof t && (this.startDate = H(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        setEndDate: function(t) {
            "string" == typeof t && (this.endDate = H(t, this.locale.format)), "object" == typeof t && (this.endDate = H(t)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        isInvalidDate: function() {
            return !1
        },
        isCustomDate: function() {
            return !1
        },
        updateView: function() {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        },
        updateCalendars: function() {
            if (this.timePicker) {
                var t, e, a, i;
                if (this.endDate) {
                    if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0)
                } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
                this.leftCalendar.month.hour(t).minute(e).second(a), this.rightCalendar.month.hour(t).minute(e).second(a)
            }
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        },
        renderCalendar: function(t) {
            var e, a = (e = "left" == t ? this.leftCalendar : this.rightCalendar).month.month(),
                i = e.month.year(),
                s = e.month.hour(),
                n = e.month.minute(),
                r = e.month.second(),
                o = H([i, a]).daysInMonth(),
                h = H([i, a, 1]),
                l = H([i, a, o]),
                c = H(h).subtract(1, "month").month(),
                d = H(h).subtract(1, "month").year(),
                m = H([d, c]).daysInMonth(),
                f = h.day();
            (e = []).firstDay = h, e.lastDay = l;
            for (var p = 0; p < 6; p++) e[p] = [];
            var u = m - f + this.locale.firstDay + 1;
            m < u && (u -= 7), f == this.locale.firstDay && (u = m - 6);
            for (var D = H([d, c, u, 12, n, r]), g = (p = 0, 0), y = 0; p < 42; p++, g++, D = H(D).add(24, "hour")) 0 < p && g % 7 == 0 && (g = 0, y++), e[y][g] = D.clone().hour(s).minute(n).second(r), D.hour(12), this.minDate && e[y][g].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[y][g].isBefore(this.minDate) && "left" == t && (e[y][g] = this.minDate.clone()), this.maxDate && e[y][g].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[y][g].isAfter(this.maxDate) && "right" == t && (e[y][g] = this.maxDate.clone());
            "left" == t ? this.leftCalendar.calendar = e : this.rightCalendar.calendar = e;
            var k = "left" == t ? this.minDate : this.startDate,
                b = this.maxDate,
                C = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            C += "<thead>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += "<th></th>"), k && !k.isBefore(e.firstDay) || this.linkedCalendars && "left" != t ? C += "<th></th>" : C += '<th class="prev available"><span></span></th>';
            var v = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var Y = e[1][1].month(), w = e[1][1].year(), P = b && b.year() || this.maxYear, x = k && k.year() || this.minYear, M = w == x, S = w == P, I = '<select class="monthselect">', B = 0; B < 12; B++)(!M || B >= k.month()) && (!S || B <= b.month()) ? I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + ">" + this.locale.monthNames[B] + "</option>" : I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[B] + "</option>";
                I += "</select>";
                for (var A = '<select class="yearselect">', L = x; L <= P; L++) A += '<option value="' + L + '"' + (L === w ? ' selected="selected"' : "") + ">" + L + "</option>";
                v = I + (A += "</select>")
            }
            if (C += '<th colspan="5" class="month">' + v + "</th>", b && !b.isAfter(e.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? C += "<th></th>" : C += '<th class="next available"><span></span></th>', C += "</tr>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += '<th class="week">' + this.locale.weekLabel + "</th>"), R.each(this.locale.daysOfWeek, function(t, e) {
                    C += "<th>" + e + "</th>"
                }), C += "</tr>", C += "</thead>", C += "<tbody>", null == this.endDate && this.maxSpan) {
                var E = this.startDate.clone().add(this.maxSpan).endOf("day");
                b && !E.isBefore(b) || (b = E)
            }
            for (y = 0; y < 6; y++) {
                C += "<tr>", this.showWeekNumbers ? C += '<td class="week">' + e[y][0].week() + "</td>" : this.showISOWeekNumbers && (C += '<td class="week">' + e[y][0].isoWeek() + "</td>");
                for (g = 0; g < 7; g++) {
                    var W = [];
                    e[y][g].isSame(new Date, "day") && W.push("today"), 5 < e[y][g].isoWeekday() && W.push("weekend"), e[y][g].month() != e[1][1].month() && W.push("off"), this.minDate && e[y][g].isBefore(this.minDate, "day") && W.push("off", "disabled"), b && e[y][g].isAfter(b, "day") && W.push("off", "disabled"), this.isInvalidDate(e[y][g]) && W.push("off", "disabled"), e[y][g].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && W.push("active", "start-date"), null != this.endDate && e[y][g].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && W.push("active", "end-date"), null != this.endDate && e[y][g] > this.startDate && e[y][g] < this.endDate && W.push("in-range");
                    var O = this.isCustomDate(e[y][g]);
                    !1 !== O && ("string" == typeof O ? W.push(O) : Array.prototype.push.apply(W, O));
                    var N = "",
                        j = !1;
                    for (p = 0; p < W.length; p++) N += W[p] + " ", "disabled" == W[p] && (j = !0);
                    j || (N += "available"), C += '<td class="' + N.replace(/^\s+|\s+$/g, "") + '" data-title="r' + y + "c" + g + '">' + e[y][g].date() + "</td>"
                }
                C += "</tr>"
            }
            C += "</tbody>", C += "</table>", this.container.find(".drp-calendar." + t + " .calendar-table").html(C)
        },
        renderTimePicker: function(t) {
            if ("right" != t || this.endDate) {
                var e, a, i, s = this.maxDate;
                if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) a = this.startDate.clone(), i = this.minDate;
                else if ("right" == t) {
                    a = this.endDate.clone(), i = this.startDate;
                    var n = this.container.find(".drp-calendar.right .calendar-time");
                    if ("" != n.html() && (a.hour(a.hour() || n.find(".hourselect option:selected").val()), a.minute(a.minute() || n.find(".minuteselect option:selected").val()), a.second(a.second() || n.find(".secondselect option:selected").val()), !this.timePicker24Hour)) {
                        var r = n.find(".ampmselect option:selected").val();
                        "PM" === r && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === r && 12 === a.hour() && a.hour(0)
                    }
                    a.isBefore(this.startDate) && (a = this.startDate.clone()), s && a.isAfter(s) && (a = s.clone())
                }
                e = '<select class="hourselect">';
                for (var o = this.timePicker24Hour ? 0 : 1, h = this.timePicker24Hour ? 23 : 12, l = o; l <= h; l++) {
                    var c = l;
                    this.timePicker24Hour || (c = 12 <= a.hour() ? 12 == l ? 12 : l + 12 : 12 == l ? 0 : l);
                    var d = a.clone().hour(c),
                        m = !1;
                    i && d.minute(59).isBefore(i) && (m = !0), s && d.minute(0).isAfter(s) && (m = !0), c != a.hour() || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + l + "</option>" : '<option value="' + l + '">' + l + "</option>" : e += '<option value="' + l + '" selected="selected">' + l + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (l = 0; l < 60; l += this.timePickerIncrement) {
                    var f = l < 10 ? "0" + l : l;
                    d = a.clone().minute(l), m = !1;
                    i && d.second(59).isBefore(i) && (m = !0), s && d.second(0).isAfter(s) && (m = !0), a.minute() != l || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>" : e += '<option value="' + l + '" selected="selected">' + f + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (l = 0; l < 60; l++) {
                        f = l < 10 ? "0" + l : l, d = a.clone().second(l), m = !1;
                        i && d.isBefore(i) && (m = !0), s && d.isAfter(s) && (m = !0), a.second() != l || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>" : e += '<option value="' + l + '" selected="selected">' + f + "</option>"
                    }
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var p = "",
                        u = "";
                    i && a.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'), s && a.clone().hour(0).minute(0).second(0).isAfter(s) && (u = ' disabled="disabled" class="disabled"'), 12 <= a.hour() ? e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + u + ">PM</option>" : e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + u + ">PM</option>", e += "</select>"
                }
                this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
            }
        },
        updateFormInputs: function() {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
        },
        move: function() {
            var t, e = {
                    top: 0,
                    left: 0
                },
                a = R(window).width();
            this.parentEl.is("body") || (e = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, a = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens ? (this.container.css({
                top: t,
                right: a - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - e.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: t,
                left: this.element.offset().left - e.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > R(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        },
        show: function(t) {
            this.isShowing || (this._outsideClickProxy = R.proxy(function(t) {
                this.outsideClick(t)
            }, this), R(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), R(window).on("resize.daterangepicker", R.proxy(function(t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        },
        hide: function(t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), R(document).off(".daterangepicker"), R(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        },
        toggle: function(t) {
            this.isShowing ? this.hide() : this.show()
        },
        outsideClick: function(t) {
            var e = R(t.target);
            "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        },
        showCalendars: function() {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        },
        clickRange: function(t) {
            var e = t.target.getAttribute("data-range-key");
            if ((this.chosenLabel = e) == this.locale.customRangeLabel) this.showCalendars();
            else {
                var a = this.ranges[e];
                this.startDate = a[0], this.endDate = a[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        },
        clickPrev: function(t) {
            R(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        },
        clickNext: function(t) {
            R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        },
        hoverDate: function(t) {
            if (R(t.target).hasClass("available")) {
                var e = R(t.target).attr("data-title"),
                    a = e.substr(1, 1),
                    i = e.substr(3, 1),
                    r = R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i],
                    o = this.leftCalendar,
                    h = this.rightCalendar,
                    l = this.startDate;
                this.endDate || this.container.find(".drp-calendar tbody td").each(function(t, e) {
                    if (!R(e).hasClass("week")) {
                        var a = R(e).attr("data-title"),
                            i = a.substr(1, 1),
                            s = a.substr(3, 1),
                            n = R(e).parents(".drp-calendar").hasClass("left") ? o.calendar[i][s] : h.calendar[i][s];
                        n.isAfter(l) && n.isBefore(r) || n.isSame(r, "day") ? R(e).addClass("in-range") : R(e).removeClass("in-range")
                    }
                })
            }
        },
        clickDate: function(t) {
            if (R(t.target).hasClass("available")) {
                var e = R(t.target).attr("data-title"),
                    a = e.substr(1, 1),
                    i = e.substr(3, 1),
                    s = R(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i];
                if (this.endDate || s.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var n = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".left .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                        var r = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            o = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        s = s.clone().hour(n).minute(r).second(o)
                    }
                    this.endDate = null, this.setStartDate(s.clone())
                } else if (!this.endDate && s.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                else {
                    if (this.timePicker) {
                        var h;
                        n = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".right .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                        r = parseInt(this.container.find(".right .minuteselect").val(), 10), o = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        s = s.clone().hour(n).minute(r).second(o)
                    }
                    this.setEndDate(s.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
            }
        },
        calculateChosenLabel: function() {
            var t = !0,
                e = 0;
            for (var a in this.ranges) {
                if (this.timePicker) {
                    var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                    if (this.startDate.format(i) == this.ranges[a][0].format(i) && this.endDate.format(i) == this.ranges[a][1].format(i)) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[a][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[a][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        },
        clickApply: function(t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function(t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        },
        monthOrYearChanged: function(t) {
            var e = R(t.target).closest(".drp-calendar").hasClass("left"),
                a = e ? "left" : "right",
                i = this.container.find(".drp-calendar." + a),
                s = parseInt(i.find(".monthselect").val(), 10),
                n = i.find(".yearselect").val();
            e || (n < this.startDate.year() || n == this.startDate.year() && s < this.startDate.month()) && (s = this.startDate.month(), n = this.startDate.year()), this.minDate && (n < this.minDate.year() || n == this.minDate.year() && s < this.minDate.month()) && (s = this.minDate.month(), n = this.minDate.year()), this.maxDate && (n > this.maxDate.year() || n == this.maxDate.year() && s > this.maxDate.month()) && (s = this.maxDate.month(), n = this.maxDate.year()), e ? (this.leftCalendar.month.month(s).year(n), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(s).year(n), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        },
        timeChanged: function(t) {
            var e = R(t.target).closest(".drp-calendar"),
                a = e.hasClass("left"),
                i = parseInt(e.find(".hourselect").val(), 10),
                s = parseInt(e.find(".minuteselect").val(), 10),
                n = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var r = e.find(".ampmselect").val();
                "PM" === r && i < 12 && (i += 12), "AM" === r && 12 === i && (i = 0)
            }
            if (a) {
                var o = this.startDate.clone();
                o.hour(i), o.minute(s), o.second(n), this.setStartDate(o), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone())
            } else if (this.endDate) {
                var h = this.endDate.clone();
                h.hour(i), h.minute(s), h.second(n), this.setEndDate(h)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        },
        elementChanged: function() {
            if (this.element.is("input") && this.element.val().length) {
                var t = this.element.val().split(this.locale.separator),
                    e = null,
                    a = null;
                2 === t.length && (e = H(t[0], this.locale.format), a = H(t[1], this.locale.format)), (this.singleDatePicker || null === e || null === a) && (a = e = H(this.element.val(), this.locale.format)), e.isValid() && a.isValid() && (this.setStartDate(e), this.setEndDate(a), this.updateView())
            }
        },
        keydown: function(t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        },
        updateElement: function() {
            if (this.element.is("input") && this.autoUpdateInput) {
                var t = this.startDate.format(this.locale.format);
                this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change")
            }
        },
        remove: function() {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, R.fn.daterangepicker = function(t, e) {
        var a = R.extend(!0, {}, R.fn.daterangepicker.defaultOptions, t);
        return this.each(function() {
            var t = R(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, a, e))
        }), this
    }, i
});
//# sourceMappingURL=/sm/8cfffddf058dc09b67d92f8d849675e6b459dfb8ede5136cf5c98d10acf78cc3.map