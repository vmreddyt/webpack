import msg from './Message.js';
import $ from 'jquery';

$(function(){
	$("#showBtn").on("click", function(){
		var o = new msg();
		o.show();
	});
});