$(document).ready(function () {


	$("input[max], input[min]").on("keyup", function (e) {
		console.log("typed!")
		console.log(ele, min, max, type, value, container)

		var ele = $(this),
			min = ele.attr("min"),
			max = ele.attr("max"),
			type = ele.attr("type"),
			value = ele.val(),
			container = ele.closest("div");


		if (type === "number") {
			if (min) {
				min = parseFloat(min);
			} else {
				min = false;
			}

			if (max) {
				max = parseFloat(max);
			} else {
				max = false;
			}

			if (min && value < min) {
				alert("That value is too low!");
				ele.val("");
			}

			if (max && value > max) {
				alert("That value is too high!");
				ele.val("");
			}
		}
	});

	$("#compute").on("click", function (e) {
		e.preventDefault();

		numCommute = parseFloat($("#commute").val());

		console.log(numCommute);


	});

});