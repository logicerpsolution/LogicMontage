/**
 * @module ui/signin.reel
 */
var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component,
	reqwest = require('reqwest');
/**
 * @class Signin
 * @extends Component
 */
// exports.Signin = Component.specialize(/** @lends Signin# */ {
    // constructor: {
        // value: function Signin() {
            // this.super();
        // }
    // }
// });
exports.Signin=Montage.create(Component,{
templateDidLoad: {
        value: function(event) {
		
		var self=this.templateObjects;
		console.log(self.owner.ownerComponent._selectedItem);
            this.templateObjects.btnLogin.itemLinkElement.addEventListener("click",function(event){
			if(self.txtUserName.value!="" && self.txtPassword.value!=""){
				reqwest({
					url: 'http://devserver.logicerp.com:82/api/rest/api_new.php',
					//type: 'jsonp',
					data:{action:'signin',emailid:self.txtUserName.value,password:self.txtPassword.value},
					crossOrigin: true,
					method: 'GET',
					success: function (resp) {
					//self.txtMessage.value=resp.hasOwnProperty("msg")?resp.msg:"Hello "+resp.firstname;
					//var _msg="";					
					if(resp.status=='Failed')
					{
						self.txtMessage.value=_msg=resp.msg;
					}
					else
					{
						self.owner.ownerComponent._selectedItem="page";
						window.location="#page";
						location.reload();
					}
					},
					error:function(err){
						console.log(err);
					}
				});
				}
				else
				{
				alert("Please enter valid userName and password.")
				}
			});
        }
    }
});
