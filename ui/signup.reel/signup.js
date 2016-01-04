/**
 * @module ui/signup.reel
 */
 var Montage = require("montage/core/core").Montage,
     Component = require("montage/ui/component").Component,
	 reqwest = require('reqwest');
	  //$ = require('jquery');

/**
 * @class Signup
 * @extends Component
 */
// exports.Signup = Component.specialize(/** @lends Signup# */ {
    // constructor: {
        // value: function Signup() {
            // this.super();
        // }
    // }
// });
/*exports.Signup = Component.specialize({
    handleButton2Action: {
        value: function() {
            alert("sfgs");
          //  console.log("action!");
        }
    }
});*/
// DOM Level 3 EventListener interface

/*var listenerObj = {};
listenerObj.handleEvent = function(event) {
     alert("Got 'mousedown' event.");
}
var loginBtn = document.querySelector("#button2");
loginBtn.addEventListener("mousedown", listenerObj);*/

exports.Signup=Montage.create(Component,
{
templateDidLoad: {
        value: function(event) {
		console.log(this);
		var self=this.templateObjects;
            this.templateObjects.button.itemLinkElement.addEventListener("click",function(event){
			if(self.txtPassword.value==self.txtConfirmPassword.value){
				reqwest({
					url: 'http://devserver.logicerp.com:82/api/rest/api_new.php',
					//type: 'jsonp',
					data:{action:'signup',firstname:self.txtFirstName.value,lastname:self.txtLastName.value,emailid:self.txtEmailId.value,dob:self.txtDOB.value,companyname:self.txtCompanyName.value,phoneno:self.txtPhoneNumber.value,password:self.txtPassword.value,confirmpassword:self.txtConfirmPassword.value},
					crossOrigin: true,
					method: 'GET',
					success: function (resp) {
					self.txtMessage.value=resp.msg;
					console.log(resp);
					},
					error:function(err)
					{
						console.log(err);
					}
					
				});
				}
				else
				{
				alert("Password does not match with confirm password")
				}
			});
        }
    },
	test:function(){
	
	},
    handleButtonAction: {
        value: function() {
            console.log("action!");
        }
    }
	}
);

//console.log(Component);


