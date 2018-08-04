var Job = function(){
    this.pays = true;
}


Job.prototype.print = function(){
    console.log(this.pays);
}

var TechJob = function(title, pays){
    Job.call(this);
    this.tilte = title;
    this.pays = pays;
}


TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.contructor = TechJob;

var software =  new TechJob("software", true);
var trinee = new TechJob("Traine", false);


console.log(software.print());
console.log(trinee.print());