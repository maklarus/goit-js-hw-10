import{f as h,i as y}from"./vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),o=document.querySelector("button"),D=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),M=document.querySelector("[data-seconds]");function T(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}let c,u;o.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>new Date?(c=e,o.disabled=!1):(y.show({message:"Please choose a date in the future",position:"topRight",titleColor:"#fff",messageColor:"#fff",backgroundColor:"tomato"}),o.disabled=!0)}};h(a,p);function n(e){return e<10?"0"+e:e}function s(){const r=c[0]-new Date;if(r<=0){clearInterval(u);return}const t=T(r);D.innerHTML=n(t.days),S.innerHTML=n(t.hours),b.innerHTML=n(t.minutes),M.innerHTML=n(t.seconds)}function q(){o.disabled=!0,a.disabled=!0,s(),u=setInterval(s,1e3)}o.addEventListener("click",q);
//# sourceMappingURL=1-timer-be6bdca9.js.map