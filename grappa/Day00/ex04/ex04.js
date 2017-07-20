function members(id, name, grade) {
  this.id       = id;
  this.name     = name;
  this.grade    = grade;
  this.toString = function() {
    return "ID: "+this.id+", Name: "+this.name+", Grade: "+this.grade+ "<br/>";
  }
}

function team() {
  this.member   = new Array();
  this.add      = function (members) {
	    var index   = this.member.length;
	    this.member[index] = members;
	    return index;
	  }
  this.toString = function() {
    return this.member.join("");
  }
}

var myTeam = new team();

myTeam.add(new members(42, "Alice", "ICT C"));
myTeam.add(new members(43, "Abdelhamid", "ICT C"));
myTeam.add(new members(44, "Baya", "ICT C"));
myTeam.add(new members(45, "Firmus", "ICT B"));
myTeam.add(new members(46, "Jean", "ICT C"));
myTeam.add(new members(47, "Badria", "ICT A"));
myTeam.add(new members(48, "Lalla", "ICT C"));
myTeam.add(new members(49, "Souleymane", "ICT B"));
document.writeln(myTeam);