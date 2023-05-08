<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="resources/login.css">

<title>Login</title>
</head>
<body>
<!-- to prevent access before login and to prevent going back after logout-->

	 <div id="login">
        <h3 class="text-center text-white pt-5"></h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                       <form action="login" method="post" >
                            <h3 class="text-center text-success mt-2">Login</h3>
                            <div class="mb-3 row mt-5">
								<label for="username" class="text-success col-4">Username:</label>
								<input type="text" name="uname" id="uname"
									class="form-control col-6">
							</div>
                            <div class="mb-3 row">
								<label for="password" class="text-success col-4">Password:</label>
								<input type="password" name="pass" id="pass"
									class="form-control col-6">

                           
                            
                            <div class="form-group col-12 mt-4 text-center">
                               <input type="submit" class="btn btn-success" value="Login">
                            </div>
                                 
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	

</body>
</html>