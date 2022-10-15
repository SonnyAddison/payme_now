const db = require('../config/connection');
const { Profile, Company, Employee } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const companySeeds = require('./companySeeds.json');
const employeeSeeds = require('./employeeSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Company.deleteMany({});
    await Company.create(companySeeds);

    await Employee.deleteMany({});
    await Employee.create(employeeSeeds);

    const owner = await Profile.findOne({name: 'Brian Kernighan'})
    const company = await Company.findOne({name: 'Brian Kernighans Sole care'})
    const employee = await Employee.findOne({name: 'Brian Jr. Kernighans'})
    owner.company.push(company._id);
    company.employees.push(employee._id);

    const updatedOwner = await owner.save()
    const updatedCompany = await company.save()
    console.log(updatedOwner)
    console.log(updatedCompany)
    console.log(employee);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
