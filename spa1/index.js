
var pages ={
	'home' : `Hi There.....<br/>
	I Am Amarnadh Modiboina <br/>
	I Am A Front-End Developer<br/>
    The Main Drive Behind My Decision 
	To Work At<br/> Your Company Is My Desire
	 To Learn New Things.<br/> I Am Looking For 
	 A Job That Will Challenge Me,Help <br/>Me  
	 Develop New Skills And Expand My Horizons<br/>
	  I Would Like To Use My Skills And Abilities
	 In An <br/> Environment Where I Can Make A Difference.<br/><br/><img src='https://thumbs.dreamstime.com/b/hombre-joven-con-el-curriculum-vitae-49890404.jpg' style='width:350px; height:500px; ' />`,
	'aboutus' : `My Name Is Amarnadh Modiboina <br/>
	I Am A Front-End Developer <br/>
	    I Have Completed. My Bachelor Degree In Civil
	<br/> Engineering From Narayana Engineering College <br/>
	Gudur. I Have Trained On Frontend Technologies <br/>
	From The Institute Of 10000 Coders And Currently <br/>
	Iam Looking For Fresher Trainee Role Where<br/>
	 Can I Utilize My Skills.<br/><br/>


	 <br/><br/><img src='https://thumbs.dreamstime.com/b/hombre-joven-con-el-curriculum-vitae-49890404.jpg' style='height:500px;' />`,
	'education' : `SSC <br/>(2016-2017) <br/>
	ZP HIGH SCHOOL-VEPINAPI , AP<br/>
	High School (SSC)-Percentage: 73%<br/><br/>
	INTER-MPC<br/>
	2017-2019<br/>
	KRISHNA CHAITHANYA JUNIOR COLLEGE-Nellore,AP<br/>
	Board Of Intermediate: MPC-Percentage: 90% <br/><br/>
	B.TECH-CIVIL<br/>
	2019-2023<br/>
	NARAYANA ENGINEERING COLLEGE-GUDUR, AP<br/>
	Bachelor's Degree: CIVIL-Percentage: 66%<br/>
	`,
	'contact' : `My Email:<br/>
	Amarnadhmodiboina@Gmail.Com <br/><br/>
				My Number: +91 912-167-0760 <br/><br/>
				My Address:
				<br/>Thumaya, Rapur,Nellore District,524414 <br/>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7735.767538483022!2d79.52961378425013!3d14.201583345951981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cd0f623950223%3A0x979c1ce571626515!2sRapur%2C%20Andhra%20Pradesh%20524408!5e0!3m2!1sen!2sin!4v1702779064202!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style='width:500px; height:500px; ' '></iframe>
				`};

	function getPageContent(page){
		var contentToReturn;
		switch(page){
			case 'home':
				contentToReturn = pages.home;
				break;
			case 'aboutus':
				contentToReturn = pages.aboutus;
				break;
			case 'education':
				contentToReturn = pages.education;
				break;
			case 'contact':
				contentToReturn = pages.contact;
				break;
			default:
				contentToReturn = pages.home;
				break;				
		}
		document.getElementById('content').innerHTML = contentToReturn; 
	}