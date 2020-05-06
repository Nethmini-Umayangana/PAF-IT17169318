$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {

	// Clear status msges-------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation----------------
	var status = validateItemForm();

	// If not valid-------------------
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// If valid----------------------
	// $("#formDoctor").submit();
	// });

	var type = ($("#hidDoctorIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "DoctorAPI",
		type : type,
		data : $("#formDoctor").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onDoctorSaveComplete(response.responseText, status);
		}

	});
});

function onDoctorSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divDoctorsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidDoctorIDSave").val("");
	$("#formDoctor")[0].reset();
}

// UPDATE
$(document)
		.on("click", ".btnUpdate", function(event) {
					$("#hidDoctorIDSave").val(
							$(this).closest("tr").find('#hidDoctorIDUpdate')
									.val());
					$("#doctorName").val(
							$(this).closest("tr").find('td:eq(0)').text());
					$("#address").val(
							$(this).closest("tr").find('td:eq(1)').text());
					$("#phoneNum").val(
							$(this).closest("tr").find('td:eq(2)').text());
					$("#email").val(
							$(this).closest("tr").find('td:eq(3)').text());
					$("#gender").val(
							$(this).closest("tr").find('td:eq(4)').text());
					$("#age")
							.val($(this).closest("tr").find('td:eq(5)').text());
					$("#status").val(
							$(this).closest("tr").find('td:eq(6)').text());
					$("#specialization").val(
							$(this).closest("tr").find('td:eq(7)').text());
					$("#hospitalWork").val(
							$(this).closest("tr").find('td:eq(8)').text());
					$("#details").val(
							$(this).closest("tr").find('td:eq(9)').text());
					$("#username").val(
							$(this).closest("tr").find('td:eq(10)').text());
					$("#password").val(
							$(this).closest("tr").find('td:eq(11)').text());
				})

// REMOVE==========================================
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "DoctorAPI",
		type : "DELETE",
		data : "doctorID=" + $(this).data("doctorid"),
		dataType : "text",
		complete : function(response, status) {
			onDoctorDeleteComplete(response.responseText, status);
		}

	});
});

function onDoctorDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();

			$("#divDoctorsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

// CLIENT-MODEL=================================================================

function validateItemForm() {

	// NAME
	if ($("#doctorName").val().trim() == "") {
		return "Insert doctor name.";
	}
	// ADDRESS
	if ($("#address").val().trim() == "") {
		return "Insert address.";
	}
	// PHONE NUMBER
	if ($("#phoneNum").val().trim() == "") {
		return "Insert phone number.";
	}
	// PHONE NUMBER NUMERICAL VALUE
	var phoneNum = $("#phoneNum").val().trim();
	if (!$.isNumeric(phoneNum)) {
		return "Insert a numerical value for phone number.";
	}
	
	//phone number validation 
	var contactNochar =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var contact = $("#phoneNum").val().trim();
	if (contactNochar.test(contact) == false) {
		return "Should enter valid Contact No";
	}
	console.log(contactNochar.test(contact));

	// E-MAIL
	if ($("#email").val().trim() == "") {
		return "Insert E-mail.";
	}
	
	//valid email characters
	var emailchar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var email = $("#email").val().trim();
	if (emailchar.test(email) == false) {
		return "Should enter valid Email Address";
	}
	console.log(emailchar.test(email));

	// GENDER

	if ($("#gender").val() == "0") {
		return "Select a gender";
	}

	// AGE
	if ($("#age").val().trim() == "") {
		return "Insert age.";
	}

	// AGE NUUMERICAL VALUE
	var age = $("#age").val().trim();
	if (!$.isNumeric(age)) {
		return "Insert a numerical value for age.";
	}

	// STATUS

	if ($("#status").val() == "0") {
		return "Select a status";
	}

	// SPECIALIZATION
	if ($("#specialization").val().trim() == "") {
		return "Insert specialization.";
	}
	// HOSPITAL WORK
	if ($("#hospitalWork").val().trim() == "") {
		return "Insert hospital work.";
	}
	// Details
	if ($("#details").val().trim() == "") {
		return "Insert details.";
	}
	// USERNAME
	if ($("#username").val().trim() == "") {
		return "Insert username.";
	}
	
	//User validation
//	var usernamechar =/^[a-zA-Z0-9]+$/;
//	var username = $("#username").val().trim();
//	if (usernamechar.test(username) == false) {
//		return "Should enter valid Username";
//	}
//	console.log(usernamechar.test(username));
	
	
	// PASSWORD
	if ($("#password").val().trim() == "") {
		return "Insert password.";
	}
	
	//Password validation
//	var passwordchar =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//	var password = $("#password").val().trim();
//	if (passwordchar.test(password) == false) {
//		return "Should enter valid password";
//	}
//	console.log(passwordchar.test(password));
	
	return true;
}
