/**
 * @module ui/signin.reel
 */
var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

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
		console.log(this);
		var self=this.templateObjects;
            this.templateObjects.button.itemLinkElement.addEventListener("click",function(event){
			if(self.txtUserName.value!="" && self.txtPassword.value!=""){
				reqwest({
					url: 'http://devserver.logicerp.com:82/dimitri/index.php',
					type: 'jsonp',
					data:{action:'signup',username:self.txtUserName.value,password:self.txtPassword.value},
					crossOrigin: true,
					method: 'GET',
					success: function (resp) {
						console.log(resp);
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
