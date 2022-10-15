generateHTML = (answers) => {    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
        <title>PayStub</title>
    </head>
    <body>
        <div class='jumbotron jumbotron-fluid p-3 mb-2 bg-primary text-white">.bg-primary '>
             <div class='d-flex justify-content-between'>
                <div class="d">        
                    <h3>${answers.company.name}MicroSoft LLC</h3>
                    <p>${answers.company.address}6919 N 88th Drive Glendal, AZ 85305</p>
                </div>
                <div>
                    <h2>EARNINGS STATEMENT</h2> 
                </div>
                <div>
                    <p><strong>Pay Period:</strong> 01/01/2021 - 01/15/2021</p>
                    <p><strong>Pay Date:</strong> 01/20/2021</p>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div class='d-flex justify-content-center'>
                    <h4>Employee Information</h4>
                </div>
                    <p>Employee Name: Sonny Addison</p>
                    <p>Employee ID: 01</p>
                    <p>Employee Address: Homeless </p>
                    <p>Employee Phone: 801-347-1220</p>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div class='jumbotron jumbotron-fluid p-3 mb-2 bg-primary text-white">.bg-primary, d-flex justify-content-center'>
                    <h4>Payroll Information</h4>
                </div>
                <div class='container, justify-content-between'>
                    <div class='row'>
                        <div class='col'>
                            <p>Hours Worked: 40</p>
                            <p>Pay Rate: $15.00</p>
                            <p>Gross Pay: $600.00</p>
                            <p>Net Pay: $540.00</p>
                        </div>
                        <div class='col'>
                            <p>Federal Tax: $60.00</p>
                            <p>State Tax: $30.00</p>
                            <p>Medicare: $10.00</p>
                            <p>Social Security: $10.00</p>
                        </div>
                </div> 
            </div>  
        </div>
        <div class='jumbotron jumbotron-fluid p-3 mb-2 bg-primary text-white">.bg-primary, d-flex justify-content-center'>
            <h4>Year to Date</h4> 
        </div>
        <div class='container, justify-content-between'>
            <div class='row'>
                <div class="card" style="width: 16rem;">
                    <div class="card-body">
                        <h5 class="card-title">YTD GROSS</h5>
                        <p class="card-text">$46,000.00</p>    
                     </div>
                </div>    
                <div class="card" style="width: 16rem;">
                    <div class="card-body">
                        <h5 class="card-title">YTD DEDUCTIONS</h5>
                        <p class="card-text">$15,000.00</p>    
                    </div>
                </div> 
                <div class="card" style="width: 16rem;">
                    <div class="card-body">
                        <h5 class="card-title">YTD NET PAY</h5>
                        <p class="card-text">$30,000.00</p>    
                    </div>
                </div> 
                <div class="card" style="width: 16rem;">
                    <div class="card-body">
                        <h5 class="card-title">CURRENT GROSS</h5>
                        <p class="card-text">$600.00</p>    
                    </div>
                </div>
                <div class="card" style="width: 16rem;">
                    <div class="card-body">
                        <h5 class="card-title">DEDUCTIONS</h5>
                        <p class="card-text">$60.00</p>    
                    </div>
                </div>
                <div class="card" style="width: 16rem;">
                    <div class="card-body">
                        <h5 class="card-title">NET PAY</h5>
                        <p class="card-text">$540.00</p>    
                    </div>
                </div>
    
            
        
    
    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>
    </body>
    </html>`
}

module.exports = generateHTML;