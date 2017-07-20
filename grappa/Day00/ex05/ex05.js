Number.prototype.formatMoney = function (c, d, t) {
  var n = this,
          c = isNaN(c = Math.abs(c)) ? 2 : c,
          d = d === undefined ? "." : d,
          t = t === undefined ? "," : t,
          s = n < 0 ? "-" : "",
          i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
          j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function ElemReader()
{
	this.InputInt = function (idInput) {
		var input = document.getElementById(idInput);
		if (input === null)
			return undefined;
		else
			return parseInt(input.value);
	};
	this.InputCheckbox = function (idInput) {
		var input = document.getElementById(idInput);
		if (input === null)
			return undefined;
		else
			return input.checked;
	};
	this.Select = function (idSelect) {
		var select = document.getElementById(idSelect);
		if (select === null)
			return undefined;
		else
		{
			var index = select.selectedIndex;
			return select.options[index].value;
		}
	};
}

function ElemWriter() {
  this.Tag = function (idTag, value) {
    var tag = document.getElementById(idTag);
    if (tag !== null) {
      tag.innerHTML = value;
    }
  };
  this.TagCurrency = function (idTag, value) {
    this.Tag(idTag, value.formatMoney(2, ',', '&nbsp;') + '$');
  };
}

function Calculator()
{
	var tauxImpot = 0.18;
	var tauxAssurance = 0.07;
	var tauxCanada = 0.05;
	var tauxSick = 1.10;
	var tauxBonus = 100;
	var tauxAlloc = 150;


	this.bigSalary;
	this.gender;
	this.bonusGrade;
	this.allocation;
	this.dependents;
	this.sickness;
	this.result;

	this.getAdditions = function() {
		var addition = 0;
		if (this.bonusGrade === true) {
			addition += tauxBonus;
		}
		if (this.allocation === true) {
			addition += tauxAlloc;
		}
		return addition;
	};
	this.CanadianPension = function () {
		return (this.bigSalary * tauxCanada);
	};
	this.EmployeeInsurance = function () {
		return (this.bigSalary * tauxAssurance);
	};
	this.imposition = function () {
		tauxImpotReel = tauxImpot;
		if (this .gender === 'F')
			tauxImpotReel -= 0.02;
		if (this.depedents === 3)
		{
			tauxImpotReel -= 0.01;
		}
		if (this.dependents > 3)
		{
			tauxImpotReel -= 0.02;
		}
		return this.bigSalary * tauxImpotReel;
	}
	this.finalSalary = function () {
		this.result = this.bigSalary -
		this.CanadianPension() - this.EmployeeInsurance() - this.imposition() + this.getAdditions();
		return (this.result);
	};
	this.sicknessLess = function () {
		if (this.sickness === true)
		{
			return (this.result * tauxSick);
		}
		return (this.result);
	};
}

function compileSalary()
{
	var reader = new ElemReader();
	var writer = new ElemWriter();
	var calc = 	 new Calculator();
	calc.bigSalary = reader.InputInt('salary');
	calc.gender = reader.Select('genre');
	calc.bonusGrade = reader.InputCheckbox('bonusDeux');
	calc.allocation = reader.InputCheckbox('alloc');
	calc.dependents = reader.InputInt('charge');
	calc.sickness = reader.InputCheckbox('sick');

	writer.TagCurrency('impotResult', calc.imposition());
	writer.TagCurrency('assuranceResult' , calc.EmployeeInsurance());
	writer.TagCurrency('canadaResult' , calc.CanadianPension());
	writer.TagCurrency('bonusResult', calc.getAdditions());
	writer.TagCurrency('resultat', calc.finalSalary());
	writer.TagCurrency('sickResult', calc.sicknessLess());
}

function base() {

	var resu = ['impotResult', 'assuranceResult', 'canadaResult', 'bonusResult', 'resultat', 'sickResult'];
	for (var i = 0; i < resu.length; i++) {
		var tag = document.getElementById(resu[i]);
		tag.innerHTML = 1;
	}
}

function resetAll() {
	var writer = new ElemWriter();
	var result = ['impotResult', 'assuranceResult', 'canadaResult', 'bonusResult', 'resultat', 'sickResult'];
	for (var i = 0; i < result.length; i++) {
		writer.Tag(result[i], '0');
	}
}