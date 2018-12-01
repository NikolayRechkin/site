let express = require('express');
let mailer = require('express-mailer');
const app = express();
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
/*mailer.extend(app,{
	from: 'Winged240592@yandex.ru',
	host:'smtp.zoho.com',
	secureConnection: false,
	port: 465,
	transportMethod: 'SMTP',
	auth: {
		user: 'Winged240592@yandex.ru',
		pass: 'ibjdjljv120062009'
	}

	});*/
let transporter = nodeMailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,  //true for 465 port, false for other ports
        auth: {
            user: 'Winged240592@yandex.ru',
            pass: 'ibjdjljv120062009'
        }
    });
app.post('/sentemail', function (req, res) {
	if(req.body.name && req.body.email){
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
		if(pattern.test(req.body.email)){
			
			let mailOptions = {
	            from: '"Work" <Winged240592@yandex.ru>', // sender address
	            to: 'nikolaynikcher@gmail.com', // list of receivers
	            subject: 'Work', // Subject line
	            text: "name: "+req.body.name+ " email: "+ req.body.email + " message: "+req.body.mess, // plain text body
	            html: '<div>'+"name: "+req.body.name+ " email: "+ req.body.email + " message: "+req.body.mess+'</div>' // html body
	        };
			transporter.sendMail(mailOptions, (error, info) => {
	            if (error) {
	                console.log(error);
	                res.status(400).send({success: false})
	            } else {
	                res.status(200).send({success: true});
	            }
	        });
			/*app.mailer.send('email',{
				to: 'nikolaynikcher@gmail.com',
				subject: "test",
				message: "name: "+req.body.name+ " email: "+ req.body.email + " message: "+req.body.mess

			}, function(err){
				if(err){
					res.statusCode = 400;
					res.send(err);
					console.log(err);return
				}
				res.send('email sent');
			});*/
		}else{
			res.statusCode = 400;
			res.send('Error');
		}
	}else{
		res.statusCode = 400;
		res.send('Error '+req.body.name +' '+ req.body.email);
	}
	
	
});

app.listen(process.env.PORT || 3000);
