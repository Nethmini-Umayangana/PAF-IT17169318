<%@page import="model.Doctor"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="View/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/doctor.js"></script>
<title>Insert title here</title>
</head>
<body>

	<div class="container">
		<div class="row">
			<div class="col-14">

				<h1>Doctor Registration</h1>

				<form id="formDoctor" name="formDoctor" method="post" action="doctors.jsp" style="width:200px;">

						<!-- NAME -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Name: </span>
						 </div>
						 <input type="text" id="doctorName" name="doctorName">
						 </div>
						 
						 <!-- ADDRESS -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Address: </span>
						 </div>
						 <input type="text" id="address" name="address">
						 </div>
						 
						 <!-- PHONE NUMBER -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Phone Number: </span>
						 </div>
						 <input type="text" id="phoneNum" name="phoneNum">
						 </div>
						 
						 <!-- E-MAIL -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">E-mail: </span>
						 </div>
						 <input type="text" id="email" name="email">
						 </div>
						 
						 
						 <!-- GENDER -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Gender: </span>
						 </div>
						 &nbsp;&nbsp;Male
						<input type="radio" id="rdoGenderMale" name="rdoGender" value="Male">
						 &nbsp;&nbsp;Female
						<input type="radio" id="rdoGenderFemale" name="rdoGender" value="Female">
						 </div>
						 
						 <!-- AGE -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Age: </span>
						 </div>
						 <input type="text" id="age" name="age">
						 </div>
						 
						 <!-- STATUS -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Status: </span>
						 </div>
						 <input type="text" id="status" name="status">
						 </div>
						 
						 <!-- SPECIALIZATION -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Specialization: </span>
						 </div>
						 <input type="text" id="specialization" name="specialization">
						 </div>
						 
						 <!-- HOSPITAL WORK -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Hospital Work: </span>
						 </div>
						 <input type="text" id="hospitalWork" name="hospitalWork">
						 </div>
						 
						 <!-- DETAILS -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Details: </span>
						 </div>
						 <input type="text" id="details" name="details">
						 </div>
						 
						 <!-- USERNAME -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Username: </span>
						 </div>
						 <input type="text" id="username" name="username">
						 </div>
						 
						 <!-- PASSWORD -->
						 <div class="input-group input-group-sm mb-3">
						 <div class="input-group-prepend">
						 <span class="input-group-text" id="lblName">Password: </span>
						 </div>
						 <input type="text" id="password" name="password">
						 </div>
					
					<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
					<input type="hidden" id="hidDoctorIDSave" name="hidDoctorIDSave" value="">

				</form>

				<div id="alertSuccess" class="alert alert-success"></div>

				<div id="alertError" class="alert alert-danger"></div>

				<br>
				<div id="divDoctorsGrid">
					<%
						Doctor doctorObj = new Doctor();
						out.print(doctorObj.readDoctors());
					%>
				</div>
				
</div>
</div>
</div>
			
</body>
</html>