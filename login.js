function formValidation() { var frm;
var uid; var passid;
var cpassid; var uname; var uadd; var uadd1;
var ucountry; var uzip;
var uemail; var ugender;
frm = document.getElementById("registration"); uid = document.getElementById("userid"); passid = document.getElementById("passid"); cpassid = document.getElementById("cpassid");
uname = document.getElementById("username"); uadd = document.getElementById("paddress1"); uadd1 = document.getElementById("paddress2"); ucountry = document.getElementById("country"); uzip = document.getElementById("zip");
uemail = document.getElementById("email"); ugender = document.getElementsByName("gender"); if (userid_validation(uid, 5, 12)) {
if (passid_validation(passid, cpassid, 7, 12)) { if (allLetter(uname)) {
 
if (countryselect(ucountry)) { if (allnumeric(uzip)) {
if (ValidateEmail(uemail)) { if (validgender(ugender)) {
window.location.href = "login.html";
}
}
}
}
}
}
}
}


function userid_validation(uid, mx, my) { var l = /^[a-z]+$/;
var uid_len = uid.value.length; if (uid_len == 0) {
alert("User Id should not be empty"); uid.focus();
return false;
}
else if (uid_len >= my || uid_len < mx) {
alert("The length be between " + mx + " to " + my); uid.focus();
return false;
}
 
else if (!uid.value.match(l)) { alert("All should be alphabet"); uid.focus();
return false;
}
return true;
}
function passid_validation(passid, cpassid, mx, my) { var passid_len = passid.value.length;
var cpassid_len = cpassid.value.length; if (passid_len == 0) {
alert("Password should not be empty "); passid.focus();
return false;
}
else if (passid_len >= my || passid_len < mx) {
alert("password length should be between " + mx + " to " + my); passid.focus();
return false;
}


if (cpassid_len == 0) {
alert("conform Password should not be empty"); passid.focus();
return false;
}
if (cpassid_len >= my || cpassid_len < mx) {
 
alert("conform Password length should be between " + mx + " to " + my); passid.focus();
return false;
}
if (cpassid.value != passid.value) {
alert("password and conform Password should be same"); passid.focus();
return false;
}
console.log(passid.value); console.log(cpassid.value); return true;

}
function allLetter(uname) { var letters = /^[A-Za-z]+$/; if (uname.value == null) {
alert('Username should not be empty');
}
else if (uname.value.match(letters)) { console.log(uname.value);
return true;
}
else {
alert('Username must have alphabet characters only'); uname.value = "";
uname.focus();
 
return false;
}
}
function countryselect(ucountry) { if (ucountry.value == "Default") {
alert('Select your country from the list'); ucountry.focus();
return false;
}
else {
console.log(ucountry.value); return true;
}
}
function allnumeric(uzip) { var numbers = /^[0-9]+$/;
if (uzip.value.match(numbers)) { console.log(uzip.value); return true;
}
else {
alert('ZIP code must have numeric characters only'); uzip.focus();
return false;
}
}
function ValidateEmail(uemail) {
 
var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0- 9]{2,4})+$/;
if (uemail.value.match(mailformat)) { console.log(uemail.value);
return true;
}
else {
alert("You have entered an invalid email address!"); uemail.focus();
return false;
}
}
function validgender(ugender) { var isChecked = false;
for (var i = 0; i < ugender.length; i++) { if (ugender[i].checked) {
console.log(ugender.value);
isChecked = true; // found one element checked break;
}
}
if (isChecked == false) { alert("Select male/female");
}
return isChecked;
}
function copy(form) {
form.taddress1.value = form.paddress1.value;
 
form.taddress2.value = form.paddress2.value;
}
function res() { frm.reset();
}
function loginval() {
var luser = document.getElementById("us"); var lpass = document.getElementById("pass"); if (loginuser(luser, lpass)) {


cookievalue = escape(document.getElementById("us").value) + ";"; document.cookie = "name=" + cookievalue;
var now = new Date(); now.setMonth(now.getMonth() + 1);
document.cookie = "expires=" + now.toUTCString() + ";" console.log("successfully login");
lo();
}


}
function lo() {
window.location.href = "J_COMPONENT.html";
}
function loginuser(a, b) {
var username = ["yogesh", "naveen", "jairahul"];
var password = ["21bca0182", "21bca0184", "21bca0150"]; for (var c = 0; c < username.length; c++) {
 
if (a.value == username[c]) {
if (b.value == password[c]) { return true;
}
}
}
alert("The incorrect username and password"); return false;
}


function paymentvalidation() {
var payform = document.getElementById("payment"); var upinum = document.getElementById("num");
var password = document.getElementById("passw"); if (upino_valid(upinum))
{
if (password_valid(password, 6, 8))
{
confirm("payment done successfully!"); payform.submit();
}
}
document.getElementById("payment").reset();
}
function upino_valid(upinum)
{
var number = /^\d{4}$/;
 
if (upinum.value.match(number))
{
return true;
}
else
{
alert("UPI number should be of limit 4"); return false;
}
}
function password_valid(password, min, max)
{
var passid_len = password.value.length;
if (passid_len == 0 || passid_len<min || passid_len>max) { alert("Password should not be empty and length should be between " +
min+ " to " +max); return false;
}
return true;
}

