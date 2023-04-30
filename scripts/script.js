$(document).ready(function () {
	let setHeader = () => {
			if($(window).scrollTop() > 50) {
					$("#header").css ({
							backgroundColor: "rgba(0, 0, 0, 0.50)",
					});
			} else {
					$("#header") .css({
							backgroundColor: "rgba(0, 0, 0, 0.00)",
					});
			}
	};
	$(window).scroll(setHeader);
});