const Job = function() {
    this.pays = true;
};


Job.prototype.print = function() {
    console.log(this.pays);
};

const TechJob = function(title, pays) {
    Job.call(this);
    this.tilte = title;
    this.pays = pays;
};


TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.contructor = TechJob;

const software = new TechJob("software", true);
const trinee = new TechJob("Traine", false);


console.log(software.print());
console.log(trinee.print());
