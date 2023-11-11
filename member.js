function skillsMember() {
    // Path: member.js
    this.skills = [];
    this.addSkill = function (skill) {
        this.skills.push(skill);
    };
    this.removeSkill = function (skill) {
        this.skills.splice(this.skills.indexOf(skill), 1);
    };
    this.getSkills = function () {
        return this.skills;
    };
    this.hasSkill = function (skill) {
        return this.skills.indexOf(skill) !== -1;
    };
    this.clearSkills = function () {
        this.skills = [];
    };
}