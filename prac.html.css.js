<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <title>Document</title>
</head>
<body>
    <style>
        .con
        {
            position: relative;
            display:flex;
            justify-content: center;
            align-items: center;
            width:80vw;
            height:70vh;
        }
    </style>

    <div class="btn btn-primary">Submit</div>
    <div class="btn btn-secondary">Submit</div>
    <div class="btn btn-danger">Submit</div>
    <div class="btn btn-outline-dark">Submit</div>
    <div class="d-block col-4" style="background:green;">
        <div class="btn btn-primary">Submit</div>
    </div>
    <div class="col-5">
        <div class="btn btn-primary">Submit</div>
    </div>
    <div class="con">
    <div class="r1"id='r1'></div>
    <div class="r2"id='r2'></div>
    <div class="r3"id='r3'></div>
    <div class="r4"id='r4'></div>
    <div class="r5"id='r5'></div>
    <div class="r6"id='r6'></div>
</div>
    <div class="" onclick="opens()" id="v">
        <button class="btn btn-warning" id="btns">
           Submit
        </button>
        </div>

    <script>
      
        function opens()
        {
            $("#btns").hide();  
            
      
             document.getElementById('r1').className="spinner-grow text-waring";
             document.getElementById('r2').className="spinner-grow text-primary";
             document.getElementById('r3').className="spinner-grow text-danger";
             document.getElementById('r4').className="spinner-grow text-success";
             document.getElementById('r5').className="spinner-grow text-warning";
             document.getElementById('r6').className="spinner-grow text-dark";

           setTimeout(opens,9);
           location="water.htm";
        
           
        }
       
    </script>
   
</body>

</html>
