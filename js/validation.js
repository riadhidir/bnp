const isValidNum = function (num) {
	let re = /^[A-Za-z0-9]*$/;
	return re.test(String(num));
};

function form() {
	var num = document.querySelector("#client");
	var password = document.querySelector("#Password1");

	if (num.value == "") {
		alert("Saisissez votre ID");
		num.focus();
		return false;
	} else if (num.value.length < 11) {
		alert("Entez 11 premiers chiffres de votre compte bancaire");
		num.focus();
		return false;
	} else if (!isValidNum(num.value)) {
		alert(
			"Saisissez un ID valide qui contient que des lettres et des chiffres!"
		);
	} else if (password.value == "") {
		alert("Saisissez votre mot de passe");
		password.focus();
		return false;
	} else if (password.value.length < 8) {
		alert("Saisissez un mot de passe de 8 characteres au moins!");
	} else {
		return true;
	}
}
