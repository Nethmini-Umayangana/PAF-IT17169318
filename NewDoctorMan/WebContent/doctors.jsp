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

				<form id="formDoctor" name="formDoctor" method="post" action="doctors.jsp">

					Full Name: <input id="doctorName" name="doctorName" type="text" class="form-control form-control-sm"> 
						
					Address: <input id="address" name="address" type="text" class="form-control form-control-sm"> 
					
					Phone number: <input id="phoneNum" name="phoneNum" type="text" class="form-control form-control-sm"> 
						
					E-mail: <input id="email" name="email" type="text" class="form-control form-control-sm"> 
						
				    Gender: <input id="gender" name="gender" type="text" class="form-control form-control-sm">
					
					Age: <input id="age" name="age" type="text" class="form-control form-control-sm"> 
						
					Status: <input id="status" name="status" type="text" class="form-control form-control-sm">
					
					Specializaion: <input id="specialization" name="specialization" type="text" class="form-control form-control-sm"> 
						
					Work hospital: <input id="hospitalWork" name="hospitalWork" type="text" class="form-control form-control-sm"> 
						
					Details: <input id="details" name="details" type="text" class="form-control form-control-sm"> 
						
					Username: <input id="username" name="username" type="text" class="form-control form-control-sm"> 
						
					Password: <input id="password" name="password" type="text" class="form-control form-control-sm"> 
					
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