	$(document).ready(function()
			{
		if($("#alertSuccess").text().trim()=="")
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
	//$("#formDoctor").submit();
	//});
	
	var type = ($("#hidDoctorIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
	{
		url : "DoctorAPI",
		type : type,
		data : $("#formDoctor").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onDoctorSaveComplete(response.responseText, status);
		}
	
		});
	});
	
	function onDoctorSaveComplete(response, status)
	{
		if (status == "success")
			{
				var resultSet = JSON.parse(response);
				
				if (resultSet.status.trim() == "success")
					{
						$("#alertSuccess").text("Successfully saved.");
						$("#alertSuccess").show();
						
						$("#divDoctorsGrid").html(resultSet.data);
					} else if (resultSet.status.trim() == "error") 
						{
							$("#alertError").text(resultSet.data);
							$("#alertError").show();
						}
			} else if (status == "error")
				{
					$("#alertError").text("Error while saving.");
					$("#alertError").show();
				} else
					{
						$("#alertError").text("Unknown error while saving..");
						$("#alertError").show();
					}
		
		$("#hidDoctorIDSave").val("");
		$("#formDoctor")[0].reset();
	}
	
	//UPDATE
	$(document).on("click", ".btnUpdate", function(event)
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
	$(document).on("click", ".btnRemove", function(event)
	{
		$.ajax(
				{
					url : "DoctorAPI",
					type : "DELETE",
					data : "doctorID=" + $(this).data("doctorid"),
					dataType : "text",
					complete : function(response, status)
					{
						onDoctorDeleteComplete(response.responseText, status);
					}
				
					});
		});
	
	function onDoctorDeleteComplete(response, status)
	{
		if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				
				$("#divDoctorsGrid").html(resultSet.data);
			} else if (resultSet.status.trim() == "error") 
				{
					$("#alertError").text(resultSet.data);
					$("#alertError").show();
				}
	} else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else
		{
			$("#alertError").text("Unknown error while deleting..");
			$("#alertError").show();
		}
	}
	
	
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
	//  PHONE NUMBER NUMERICAL VALUE
	var phoneNum = $("#phoneNum").val().trim();
	if (!$.isNumeric(phoneNum))
		{
			return "Insert a numerical value for phone number.";
		}
	//phone number  validation
	
	
	// E-MAIL
	if ($("#email").val().trim() == "")
	 {
	 return "Insert E-mail.";
	 }
	
	//email validation
	
	
	// GENDER
	if ($('input[name="rdoGender"]:checked').length === 0)
	 {
	 return "Select gender.";
	 }
	
	
	
	
	// GENDER
//	if ($("#gender").val().trim() == "")
//	 {
//	 return "Insert gender.";
//	 }
	
	// AGE
	if ($("#age").val().trim() == "")
	 {
	 return "Insert age.";
	 }
	
//  AGE NUUMERICAL VALUE
	var age = $("#age").val().trim();
	if (!$.isNumeric(age))
		{
			return "Insert a numerical value for age.";
		}
	
	// STATUS
	//if ($("#status").val().trim() == "")
	// {
	// return "Insert status.";
	// }
	
	// STATUS
	
	if ($('input[name="status"]:checked').length === 0)
	 {
	 return "Select Status.";
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
	
	
