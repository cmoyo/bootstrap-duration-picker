"use strict";!function(s){s.DurationPicker=function(t,n){function a(s){return d.settings.translations[s]}function e(s,t){var n=1===s?t.substring(0,t.length-1):t;h[t].text(a(n))}function i(){var s=y+60*m+60*g*60+24*f*60*60;l.val(s),l.change(),e(f,"days"),e(g,"hours"),e(m,"minutes"),e(y,"seconds"),c.days.val(f),c.hours.val(g),c.minutes.val(m),c.seconds.val(y),"function"==typeof d.settings.onChanged&&d.settings.onChanged(l.val())}function o(){f=parseInt(c.days.val(),10)||0,g=parseInt(c.hours.val(),10)||0,m=parseInt(c.minutes.val(),10)||0,y=parseInt(c.seconds.val(),10)||0,i()}function r(t,n,e){var i=s("<input>",{class:"form-control input-sm",type:"number",min:0,value:0,disabled:v}).change(o);e&&i.attr("max",e),c[t]=i;var r=s("<div>",{id:"bdp-"+t+"-label",text:a(t)});return h[t]=r,s("<div>",{class:"bdp-block "+(n?"hidden":""),html:[i,r]})}var u={translations:{day:"day",hour:"hour",minute:"minute",second:"second",days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"},showSeconds:!1,showDays:!0},d=this;d.settings={};var l=s(t);d.init=function(){d.settings=s.extend({},u,n);var t=s("<div>",{class:"bdp-input",html:[r("days",!d.settings.showDays),r("hours",!1,d.settings.showDays?23:99999),r("minutes",!1,59),r("seconds",!d.settings.showSeconds,59)]});l.after(t).hide(),""===l.val()&&l.val(0),d.setValue(l.val())};var c=[],h=[],v=l.hasClass("disabled")||"disabled"===l.attr("disabled"),f=0,g=0,m=0,y=0;d.setValue=function(s){l.val(s);var t=parseInt(s,10);y=t%60,t=Math.floor(t/60),m=t%60,t=Math.floor(t/60),d.settings.showDays?(g=t%24,f=Math.floor(t/24)):(g=t,f=0),i()},d.init()},s.fn.durationPicker=function(t){return this.each(function(){if(void 0===s(this).data("durationPicker")){var n=new s.DurationPicker(this,t);s(this).data("durationPicker",n)}})}}(jQuery);