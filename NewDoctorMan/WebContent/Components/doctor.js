	$(document).ready(function()
	{
		if($("#alertSuccess").text().trim() == "")
		{
			$("#alertSuccess").hide();
		}
		$("#alertError").hide();
	});
	
	// SAVE ============================================
	$(document).on("click", "#btnSave", function(event)
	{
		
		// Clear status msges-------------
		 $("#alertSuccess").text("");
		 $("#alertSuccess").hide();
		 $("#alertError").text("");
		 $("#alertError").hide();
		 
		 
	// Form validation----------------
	var status = validateItemForm();
	
	// If not valid-------------------
	if (status != true)
	 {
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
	 }
	
	
	// If valid----------------------
	$("#formItem").submit();
	});
	
	//UPDATE
	$(document).on("click", "btnUpdate", function(event)
			{
				$("#hidDoctorIDSave").val($(this).closest("tr").find('#hidDoctorIDUpdate').val());
				$("#doctorName").val($(this).closest("tr").find('td:eq(0)').text());
				$("#address").val($(this).closest("tr").find('td:eq(1)').text());
				$("#phoneNum").val($(this).closest("tr").find('td:eq(2)').text());
				$("#email").val($(this).closest("tr").find('td:eq(3)').text());
				$("#gender").val($(this).closest("tr").find('td:eq(4)').text());
				$("#age").val($(this).closest("tr").find('td:eq(5)').text());
				$("#status").val($(this).closest("tr").find('td:eq(6)').text());
				$("#specialization").val($(this).closest("tr").find('td:eq(7)').text());
				$("#hospitalWork").val($(this).closest("tr").find('td:eq(8)').text());
				$("#details").val($(this).closest("tr").find('td:eq(9)').text());
				$("#username").val($(this).closest("tr").find('td:eq(10)').text());
				$("#password").val($(this).closest("tr").find('td:eq(11)').text());
			})
	
	// REMOVE==========================================
//	$(document).on("click", ".remove", function(event)
//	{
//	 $(this).closest(".student").remove();
//	
//	 $("#alertSuccess").text("Removed successfully.");
//	 $("#alertSuccess").show();
//	});
	
	//CLIENT-MODEL=================================================================
	
	function validateItemForm()
	{
		
	// NAME
	if ($("#doctorName").val().trim() == "")
	 {
	 return "Insert doctor name.";
	 }
	// ADDRESS
	if ($("#address").val().trim() == "")
	 {
	 return "Insert address.";
	 }
	// PHONE NUMBER
	if ($("#phoneNum").val().trim() == "")
	 {
	 return "Insert phone number.";
	 }
	//  PHONE NUMBER NUUMERICAL VALUE
	var phoneNum = $("#phoneNum").val().trim();
	if (!$.isNumeric(phoneNum))
		{
			return "Inserrt a numerical value for phone number.";
		}
	
	// E-MAIL
	if ($("#email").val().trim() == "")
	 {
	 return "Insert E-mail.";
	 }
	// GENDER
	if ($('input[name="rdoGender"]:checked').length === 0)
	 {
	 return "Select gender.";
	 }
	// AGE
	if ($("#age").val().trim() == "")
	 {
	 return "Insert age.";
	 }
	// STATUS
	if ($("#status").val().trim() == "")
	 {
	 return "Insert status.";
	 }
	// SPECIALIZATION
	if ($("#specialization").val().trim() == "")
	 {
	 return "Insert specialization.";
	 }
	// HOSPITAL WORK
	if ($("#hospitalWork").val().trim() == "")
	 {
	 return "Insert hospital work.";
	 }
	// Details
	if ($("#details").val().trim() == "")
	 {
	 return "Insert details.";
	 }
	// USERNAME
	if ($("#username").val().trim() == "")
	 {
	 return "Insert username.";
	 }
	// PASSWORD
	if ($("#password").val().trim() == "")
	 {
	 return "Insert password.";
	 }
	return true;
	}
	
	
//	function getStudentCard(name, gender, year)
//	{
//	var title = (gender == "Male") ? "Mr." : "Ms.";
//	var yearNumber = "";
//	switch (year) {
//	case "1":
//	 yearNumber = "1st";
//	 break;
//	case "2":
//	 yearNumber = "2nd";
//	 break;
//	case "3":
//	 yearNumber = "3rd";
//	 break;
//	case "4":
//	 yearNumber = "4th";
//	 break;
//	 }
	//var student = "";
	// student += "<div class=\"student card bg-light m-2\"
	// style=\"max-width: 10rem; float: left;\">";
	// student += "<div class=\"card-body\">";
	// student += title + " " + name + ",";
	// student += "<br>";
	// student += yearNumber + " year";
	// student += "</div>";
	// student += "<input type=\"button\" value=\"Remove\"
	// class=\"btn btn-danger remove\">";
	// student += "</div>";
	//return student;
	//}